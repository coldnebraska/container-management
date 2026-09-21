const form = document.getElementById('dropoff-form')
const input = document.getElementById('dropoff-input')
let rrmaInputData = {
    rrma: '',
    date_created: ''
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const containerOptions = ['blue', 'green', 'red']

    rrmaInputData = {
        container: containerOptions[Math.floor(Math.random() * containerOptions.length)],
        rrma: input.value,
        date_created: new Date().toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        })
    }

    input.value = ''

    if (rrmaInputData.rrma.length === 11 && rrmaInputData.rrma.includes('RRMA')) {
        window.electronAPI.submitRRMA(rrmaInputData)
    }
})
