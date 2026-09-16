const form = document.getElementById('dropoff-form')
const input = document.getElementById('dropoff-input')
let rrmaInputData = {
    rrma: '',
    date_created: ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    rrmaInputData = {
        rrma: input.value,
        date_created: Date.now()
    }

    input.value = ''

    window.electronAPI.submitRRMA(rrmaInputData)
})
