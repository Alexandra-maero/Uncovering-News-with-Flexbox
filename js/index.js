const form = document.getElementById('form')
const name = document.getElementById('name')
const password = document.getElementById('password')
const age = document.getElementById('age')
const adress = document.getElementById('adress')
const postal = document.getElementById('postal')
const email = document.getElementById('email')
const repeat = document.getElementById('repeat')
const phone = document.getElementById('phone')
const city = document.getElementById('city')
const dni = document.getElementById('dni')

window.onload = function(e){
    e.preventDefault()
    var name = document.getElementById('name')
    var form = document.getElementById('form')
    name.addEventListener('blur', function(e){
        if (e.target.value.length < 6){
            document.getElementById('name-error').textContent = 'The name requires more than 6 characters'
        }
    })
}
