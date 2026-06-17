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
            item.id = "selected"
        } else {
            selectedItems = selectedItems.filter(filterItem => filterItem !== item)
            item.id = ''
        }

        count.innerHTML = selectedItems.length
    })
})

