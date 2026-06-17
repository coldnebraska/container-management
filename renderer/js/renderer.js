let items = []
let selectedItems = []

// override dimensions
const button = document.getElementById('override-dimensions')
const fieldset = document.getElementById('dimension-inputs')

button.addEventListener('click', () => {
    fieldset.disabled = false
    button.disabled = true
})

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

// container selection
const containerList = document.getElementsByClassName('destination-container')
const containers = []
let selectedContainer = document.getElementById('selected-container')

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

        selectedContainer = container
        container.id = 'selected-container'
    })
})
