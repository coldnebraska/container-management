let items = []
let selectedItems = []
let selectedContainer = document.getElementById('selected-container')

// override dimensions
const button = document.getElementById('override-dimensions')
const fieldset = document.getElementById('dimension-inputs')

button.addEventListener('click', () => {
    fieldset.disabled = false
    button.disabled = true
})

// dummy data for testing
const dummyItems = [
    {
        container: 'blue',
        rrma: 'D3xhH49RRMA',
        date: 'Thurs 6/4'
    },
    {
        container: 'green',
        rrma: 'DyF7lBwRRMA',
        date: 'Fri 6/5'
    },
    {
        container: 'red',
        rrma: 'D9WlB4wRRMA',
        date: 'Fri 6/12'
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
                for (i = 0; i < itemList.length; i++) {
                    itemList[i].firstElementChild.checked = false
                    itemList[i].id = ''
                }
                
                selectedItems = []
                count.innerHTML = selectedItems.length
            }

            selectedContainer = container.parentElement
            container.parentElement.id = 'selected-container'

            clearItems()
            populateItems(dummyItems)
        })
    })

    populateItems(dummyItems)
}

// dynamic item population
function populateItems(items) {
    const itemList = document.getElementById('item-list')

    items.forEach(item => {
        if (item.container == selectedContainer.className) {
            const itemContainer = document.createElement('div')
            itemContainer.className = 'item'
            itemContainer.innerHTML = `
                <input type="checkbox">
                <p id="rrma">${item.rrma}</p>
                <p>${item.date}</p>
            `
            itemList.appendChild(itemContainer)
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

selectContainer()

// item selection
const itemList = document.getElementsByClassName('item')
const count = document.getElementById('item-count')

for (i = 0; i < itemList.length; i++) {
    items.push(itemList[i])
}

items.forEach(item => {
    item.addEventListener('change', () => {
        if (!selectedItems.includes(item)) {
            selectedItems.push(item)
            item.id = "selected-item"
        } else {
            selectedItems = selectedItems.filter(filterItem => filterItem !== item)
            item.id = ''
        }

        count.innerHTML = selectedItems.length
    })
})

