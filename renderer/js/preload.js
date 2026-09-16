const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    submitRRMA: (rrmaInputData) => ipcRenderer.send('rrma-input', rrmaInputData),
    onRRMASubmission: (callback) => ipcRenderer.on('rrma-input', (_event, value) => callback(value))
})
