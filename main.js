const path = require('path')
const { app, BrowserWindow, Menu, ipcMain } = require('electron')
let mainWindow

const isDev = process.env.NODE_ENV !== 'production'
const isMac = process.platform === 'darwin'

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'Container Manager',
        width: isDev ? 1250 : 1000,
        height: 650,
        webPreferences: {
            preload: path.join(__dirname, '/renderer/js/preload.js'),
            contextIsolation: true,
        }
    })

    // Open devtools if in dev env
    if (isDev) {
        mainWindow.webContents.openDevTools()
    }

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'))
}

function createDropOffWindow() {
    const aboutWindow = new BrowserWindow({
        title: 'Drop Off',
        width: 650,
        height: 650,
        webPreferences: {
            preload: path.join(__dirname, '/renderer/js/preload.js'),
            contextIsolation: true,
        }
    })

    // if (isDev) {
    //     aboutWindow.webContents.openDevTools()
    // }

    aboutWindow.loadFile(path.join(__dirname, './renderer/dropoff.html'))
}

// Inter-Process Communication
function submitRRMA(event, rrmaInput) {
    mainWindow.webContents.send('rrma-input', rrmaInput)
}

app.whenReady().then(() => {
    ipcMain.on('rrma-input', submitRRMA)
    createMainWindow()

    // implement menu
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows.length === 0) {
            createMainWindow()
        }
    })
})

// Menu template
const menu = [
    ...(isMac ? [
        {
            label: app.name,
            submenu: [
                {
                    label: 'Drop Off',
                    click: createDropOffWindow,
                    accelerator: 'f7'
                }
            ]
        }
    ] : []),
    ...(!isMac ? [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Drop Off',
                    click: createDropOffWindow,
                    accelerator: 'f7'
                },
                {
                    label: 'Close Window',
                    click: () => app.quit()
                }
            ]
        }
    ] : [])
]

app.on('window-all-closed', () => {
    app.quit()
})
