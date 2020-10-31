var name = document.getElementById('name')
var form = document.getElementById('form')

form.addEventListener('submit', runEvent)

function runEvent(e){
    window.onload = load
    e.preventDefault()
    if (name.length < 6){
        messages.push('The name requires more than 6 characters')
    }
}
