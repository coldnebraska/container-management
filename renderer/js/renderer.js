let containerItems = []
let selectedItems = []
let excludedItems = []
let selectedContainer = document.getElementById('selected-container')
const poundInput = document.getElementById('pound-input')
const ounceInput = document.getElementById('ounce-input')


// override dimensions button
const overrideButton = document.getElementById('override-dimensions')
const fieldset = document.getElementById('dimension-inputs')

overrideButton.addEventListener('click', () => {
    fieldset.disabled = false
    overrideButton.disabled = true
})

// dimension inputs
const lengthInput = document.getElementById('length-input')
const widthInput = document.getElementById('width-input')
const heightInput = document.getElementById('height-input')
const dimensions = {
    length: 18,
    width: 18,
    height: 18
}

lengthInput.addEventListener('input', () => {
    dimensions.length = parseInt(lengthInput.value) || 18
})

widthInput.addEventListener('input', () => {
    dimensions.width = parseInt(widthInput.value) || 18
})

heightInput.addEventListener('input', () => {
    dimensions.height = parseInt(heightInput.value) || 18
})

// closeout the container
const closeOutButton = document.getElementById('closeout-button')

closeOutButton.addEventListener('click', () => {
    if (containerItems.find(item => item.id === 'error-item')) {
        alert("Please remove any items with errors before closing out the container.")
    } else {
        console.log("Selected Container:", selectedContainer.className)
        console.log("Dimensions:", dimensions)
        console.log("Total Weight:", poundInput.value + " lbs " + ounceInput.value + " oz")
        console.log("Total Items:", selectedItems.length)
        console.log("Selected Items:", selectedItems)
    }
})

// dummy data for testing
// const dummyData = []
const dummyData = [
    {
        container: "blue",
        rrma: "DHoJW4nRRMA",
        date: "10/19/2025"
    }, 
    {
        container: "blue",
        rrma: "DzZ0CFsRRMA",
        date: "8/14/2026"
    }, 
    {
        container: "blue",
        rrma: "Dohtf8ORRMA",
        date: "5/21/2026"
    }, 
    {
        container: "green",
        rrma: "Dd9GJBdRRMA",
        date: "9/12/2025"
    }, 
    {
        container: "green",
        rrma: "DZ9NSWDRRMA",
        date: "8/7/2026"
    }, 
    {
        container: "red",
        rrma: "DmkQ0zdRRMA",
        date: "12/24/2025"
    }, 
    {
        container: "red",
        rrma: "D2Yx8zgRRMA",
        date: "8/21/2026"
    }, 
    {
        container: "blue",
        rrma: "D8hwk2VRRMA",
        date: "4/21/2026"
    }, 
    {
        container: "red",
        rrma: "DZxHrTyRRMA",
        date: "11/23/2025"
    }, 
    {
        container: "blue",
        rrma: "D45iLBBRRMA",
        date: "9/15/2025"
    }, 
    {
        container: "blue",
        rrma: "D2oachFRRMA",
        date: "10/16/2025"
    }, 
    {
        container: "blue",
        rrma: "D3SokHfRRMA",
        date: "12/28/2025"
    }, 
    {
        container: "green",
        rrma: "Dan785zRRMA",
        date: "1/8/2026"
    }, 
    {
        container: "blue",
        rrma: "D5nNWCXRRMA",
        date: "3/15/2026"
    }, 
    {
        container: "blue",
        rrma: "Di88D1yRRMA",
        date: "9/9/2025"
    }, 
    {
        container: "green",
        rrma: "DswGl5uRRMA",
        date: "11/2/2025"
    }, 
    {
        container: "green",
        rrma: "DQTtdrmRRMA",
        date: "2/10/2026"
    }, 
    {
        container: "red",
        rrma: "DA0h6KARRMA",
        date: "5/22/2026"
    }, 
    {
        container: "green",
        rrma: "DDhbARLRRMA",
        date: "7/8/2026"
    }, 
    {
        container: "blue",
        rrma: "DjUJsfnRRMA",
        date: "5/29/2026"
    }, 
    {
        container: "blue",
        rrma: "DjycSwFRRMA",
        date: "10/8/2025"
    }, 
    {
        container: "blue",
        rrma: "D5yVdHYRRMA",
        date: "1/5/2026"
    }, 
    {
        container: "green",
        rrma: "DHOIQJPRRMA",
        date: "9/20/2025"
    }, 
    {
        container: "blue",
        rrma: "DHdf9q8RRMA",
        date: "6/18/2026"
    }, 
    {
        container: "blue",
        rrma: "Dg153KcRRMA",
        date: "10/18/2025"
    }, 
    {
        container: "green",
        rrma: "D0oepciRRMA",
        date: "9/22/2025"
    }, 
    {
        container: "green",
        rrma: "DnUQHoRRRMA",
        date: "10/8/2025"
    }, 
    {
        container: "red",
        rrma: "DSbePLuRRMA",
        date: "2/4/2026"
    }, 
    {
        container: "red",
        rrma: "DvyVwSqRRMA",
        date: "5/26/2026"
    }, 
    {
        container: "red",
        rrma: "D58AIcIRRMA",
        date: "6/7/2026"
    }, 
    {
        container: "green",
        rrma: "D8gaVreRRMA",
        date: "10/11/2025"
    }, 
    {
        container: "blue",
        rrma: "DaFaWytRRMA",
        date: "3/25/2026"
    }, 
    {
        container: "red",
        rrma: "Du2uWVMRRMA",
        date: "9/29/2025"
    }, 
    {
        container: "blue",
        rrma: "Do2Bo0ARRMA",
        date: "7/3/2026"
    }, 
    {
        container: "blue",
        rrma: "Dr6TcRMRRMA",
        date: "2/12/2026"
    }, 
    {
        container: "green",
        rrma: "DtNwqfyRRMA",
        date: "3/27/2026"
    }, 
    {
        container: "red",
        rrma: "DEn5IHFRRMA",
        date: "8/28/2026"
    }, 
    {
        container: "blue",
        rrma: "DT5tvVVRRMA",
        date: "12/6/2025"
    }, 
    {
        container: "green",
        rrma: "DwErcuwRRMA",
        date: "8/11/2026"
    }, 
    {
        container: "blue",
        rrma: "DWod1OjRRMA",
        date: "8/23/2026"
    }, 
    {
        container: "green",
        rrma: "DyGYgErRRMA",
        date: "10/8/2025"
    }, 
    {
        container: "blue",
        rrma: "DE57zxLRRMA",
        date: "2/19/2026"
    }, 
    {
        container: "green",
        rrma: "DRU5exfRRMA",
        date: "10/8/2025"
    }, 
    {
        container: "green",
        rrma: "DT6pJqlRRMA",
        date: "5/19/2026"
    }, 
    {
        container: "blue",
        rrma: "DUihM7hRRMA",
        date: "2/17/2026"
    }, 
    {
        container: "green",
        rrma: "DcBI7ljRRMA",
        date: "3/30/2026"
    }, 
    {
        container: "red",
        rrma: "DIuWmojRRMA",
        date: "8/30/2026"
    }, 
    {
        container: "red",
        rrma: "DRr66QBRRMA",
        date: "9/11/2025"
    }, 
    {
        container: "green",
        rrma: "Date75sRRMA",
        date: "12/24/2025"
    }, 
    {
        container: "red",
        rrma: "D8CJtwvRRMA",
        date: "3/26/2026"
    }
]

// container selection
function selectContainer() {
    const containerList = document.getElementsByClassName('destination-container')
    const containers = []

    for (i = 0; i < containerList.length; i++) {
        containers.push(containerList[i])
    }

    containers.forEach(container => {
        container.addEventListener('click', () => {
            if (selectedContainer.id === 'selected-container') {
                selectedContainer.id = ''
            }
            
            if (selectedContainer != container) {
                for (i = 0; i < containerItems.length; i++) {
                    containerItems[i].firstElementChild.checked = false
                    containerItems[i].id = ''
                }
                
                selectedItems = []
                countSelectedItems()
            }

            selectedContainer = container.parentElement
            container.parentElement.id = 'selected-container'

            clearItems()
            clearWeight()
            populateItems(dummyData)
        })
    })

    populateItems(dummyData)
}

// dynamic item population
function populateItems(items) {
    const itemList = document.getElementById('item-list')

    items?.forEach(item => {
        if (item.container == selectedContainer.className) {
            const itemContainer = document.createElement('div')
            itemContainer.className = 'item'
            itemContainer.innerHTML = `
                <p></p>
                <p id="rrma">${item.rrma}</p>
                <p>${item.date}</p>
            `
            itemList.appendChild(itemContainer)
            containerItems.push(itemContainer)
        }
    })
}

// clear items
function clearItems() {
    const itemList = document.getElementById('item-list')
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
}

// Gets count for each container
function getContainerCount() {
    const blueCount = document.getElementById('blue-count')
    const greenCount = document.getElementById('green-count')
    const redCount = document.getElementById('red-count')
    const happyCount = document.getElementById('happy-count')

    dummyData?.forEach(item => {
        if (item.container === 'blue') {
            blueCount.innerHTML = parseInt(blueCount.innerHTML) + 1 || 1
        } else if (item.container === 'green') {
            greenCount.innerHTML = parseInt(greenCount.innerHTML) + 1 || 1
        } else if (item.container === 'red') {
            redCount.innerHTML = parseInt(redCount.innerHTML) + 1 || 1
        } else if (item.container === 'happy') {
            happyCount.innerHTML = parseInt(happyCount.innerHTML) + 1 || 1
        }
    })
}

// count selected items
function countSelectedItems() {
    const count = document.getElementById('item-count')
    count.innerHTML = selectedItems.length
}

// Select item
function selectItem(item) {
    item.id = "selected-item"
    const iconElement = document.createElement('div')
    iconElement.style.display = 'flex'
    iconElement.style.alignItems = 'center'
    iconElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(221, 221, 221)" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
    `
    item.firstElementChild.replaceWith(iconElement)
    // item.firstElementChild.checked = true

    // Randomly generate lbs between 1 and 9
    pounds = Math.floor(Math.random() * 9) + 1
    // Randomly generate oz between 0 and 15.9
    ounces = (Math.random() * 15.9).toFixed(1)
    addWeight(pounds, ounces)
    selectedItems.push({ item, pounds, ounces })
    countSelectedItems()
}

// Deselect item
// add functionality for removed items being "excluded" for notification purposes
function deselectItem(item) {
    selectedItems = selectedItems.filter(filterItem => {
        // Update weight for removed item
        if (filterItem.item === item) {
            subtractWeight(filterItem.pounds, filterItem.ounces)
        }
        
        excludedItems.push(filterItem.item)
        return filterItem.item !== item
    })
    
    item.id = ''
    const iconElement = document.createElement('div')
    iconElement.style.display = 'flex'
    iconElement.style.alignItems = 'center'
    iconElement.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
        </svg>
    `
    item.firstElementChild.replaceWith(iconElement)
    countSelectedItems()
}

// Item selection error
function selectError(rrmaValue) {
    if (!containerItems.find(item => item.childNodes[3].innerHTML === rrmaValue)) {
        const itemContainer = document.createElement('div')
        itemContainer.className = 'item'
        // update input to display error symbol (!)
        itemContainer.innerHTML = `
            <div style="display: flex; alignItems: center;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4m.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
                </svg>
            </div>
            <p id="rrma">${rrmaValue}</p>
            <p></p>
        `
        itemContainer.id = 'error-item'
        const itemList = document.getElementById('item-list')
        itemList.prepend(itemContainer)
        containerItems.unshift(itemContainer)
    }
}

// Manual selection of items based on typed RRMA (scanning)
function selectItemByRRMA() {
    const searchForm = document.getElementById('search-form')
    const rrmaInput = document.getElementById('rrma-input')
    let rrmaValue = ''
    
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        rrmaValue = rrmaInput.value.trim()
        const searchSelected = selectedItems.find(selectedItem => selectedItem.item.childNodes[3].innerHTML === rrmaValue)
        const searchContainer = containerItems.find(item => item.childNodes[3].innerHTML === rrmaValue)
        
        if (searchSelected) {
            deselectItem(searchSelected.item)
        } else if (!searchSelected && searchContainer) {
            selectItem(searchContainer)
        } else {
            selectError(rrmaValue)
        }
        
        rrmaInput.value = ''
    })
}

function addWeight(pounds, ounces) {
    if (poundInput.value == 0 && ounceInput.value == 0) {
        poundInput.value = pounds
        ounceInput.value = ounces
    } else {
            poundInput.value = parseInt(poundInput.value) + pounds
            if (parseFloat(ounceInput.value) + parseFloat(ounces) >= 16) {
                poundInput.value = parseInt(poundInput.value) + 1
                ounceInput.value = (parseFloat(ounceInput.value) + parseFloat(ounces) - 16).toFixed(1)
            } else {
                ounceInput.value = (parseFloat(ounceInput.value) + parseFloat(ounces)).toFixed(1)
            }
    }

    return [pounds, ounces]
}

function subtractWeight(pounds, ounces) {
    const poundInput = document.getElementById('pound-input')
    const ounceInput = document.getElementById('ounce-input')

    poundInput.value = poundInput.value - pounds

    if (ounceInput.value - parseFloat(ounces).toFixed(1) < 0) {
        ounceInput.value = 16 + Math.round((parseFloat(ounceInput.value) - parseFloat(ounces).toFixed(1)) * 10) / 10
        poundInput.value = poundInput.value - 1
    } else {
        ounceInput.value = (parseFloat(ounceInput.value) - parseFloat(ounces)).toFixed(1)
    }
}

function clearWeight() {
    const poundInput = document.getElementById('pound-input')
    const ounceInput = document.getElementById('ounce-input')

    poundInput.value = 0
    ounceInput.value = 0
}

selectContainer()
getContainerCount()
selectItemByRRMA()
