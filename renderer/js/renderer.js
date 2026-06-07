const button = document.getElementById('override-dimensions')
    const fieldset = document.getElementById('dimension-inputs')

    button.addEventListener('click', () => {
        fieldset.disabled = false
})
