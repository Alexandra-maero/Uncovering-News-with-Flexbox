window.onload = function(e){
    e.preventDefault()
    var name = document.getElementById('name')
    var form = document.getElementById('form')
    var space = /\s/;
    var email = document.getElementById('email')
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var password = document.getElementById('password')
    const patron = /^(?=.*[0-9])(?=.*[a-z]).{8,}$/
    var age = document.getElementById('age')
    var phone = document.getElementById('phone')
    const patron1 = /^\d{7,}$/
    var adress = document.getElementById('adress')
    const patron2 = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{5,}$/
    var city = document.getElementById('city')
    var postal = document.getElementById('postal')
    var dni = document.getElementById('dni')
    const patron3 = /^(?=.*[0-9]).{7,8}$/
    var bttn = document.getElementById('bttn')
    var validArray = []
    var invalidArray = []
    name.onfocus=function(e){
        document.getElementById('name-error').textContent = '';
    }
    email.onfocus=function(e){
        document.getElementById('email-error').textContent = '';
    }
    password.onfocus=function(e){
        document.getElementById('pass-error').textContent = '';
    }
    age.onfocus=function(e){
        document.getElementById('age-error').textContent = '';
    }
    phone.onfocus=function(e){
        document.getElementById('phone-error').textContent = '';
    }
    adress.onfocus=function(e){
        document.getElementById('adress-error').textContent = '';
    }
    city.onfocus=function(e){
        document.getElementById('city-error').textContent = '';
    }
    postal.onfocus=function(e){
        document.getElementById('postal-error').textContent = '';
    }
    dni.onfocus=function(e){
        document.getElementById('dni-error').textContent = '';
    }
    name.addEventListener('blur', function(e){
        if (e.target.value.length < 7){
            document.getElementById('name-error').textContent = 'The name requires more than 6 characters';
        }
        if (space.test(e.target.value)){
            validate = true
        }else{
            document.getElementById('name-error').textContent = 'the field requires at least one space';
        }
        if ((e.target.value.length >= 7) && (space.test(e.target.value))){
            validArray.unshift('name: '+e.target.value);
        } else {
            invalidArray.unshift('The name requires more than 6 characters and al least one space')
        }
    }) 
    var itemName = document.getElementById(name.value[type='text'])
    name.addEventListener('keydown', runEvent);
    function runEvent(e){
        console.log('NAME: '+e.type);
        console.log(e.target.value);
        document.getElementById('subtitle-form').innerHTML = '<h4>'+'Hola: '+e.target.value+'</h4>'
    }
    email.addEventListener('blur', function(e){
        if(expReg.test(e.target.value)){
            validArray.push('email: '+e.target.value);
        }else{
            document.getElementById('email-error').textContent = 'The format is not valid';
            invalidArray.push('The email format is not valid')
        }
    })
    password.addEventListener('blur', function(e){
        if (patron.test(e.target.value)){
            validArray.push('password: '+e.target.value);
        } else {
            document.getElementById('pass-error').textContent = 'Password must contain at least 8 characters, with letters and numbers';
            invalidArray.push('Password must contain at least 8 characters, with letters and numbers')
        }
    })
    console.log(validArray);
    console.log(invalidArray);
    age.addEventListener('blur', function(e){
        if ((!Number.isInteger(e.target.value)) && ((e.target.value) >= 18)){
            validArray.push('Age: '+e.target.value);
        }else{
            document.getElementById('age-error').textContent = 'You must enter a number without decimals';
        }
        if((e.target.value) < 18){
            document.getElementById('age-error').textContent = 'You need to be over 18 years old';
            invalidArray.push('You need to be over 18 years old')
        }
    }) 
    phone.addEventListener('blur', function(e){
        if (patron1.test(e.target.value)){
            validArray.push('Phone number: '+e.target.value);
        } else {
            document.getElementById('phone-error').textContent = 'The phone number must contain at least 7 numbers, without spaces, hyphens, or parentheses.';
            invalidArray.push('The phone number must contain at least 7 numbers, without spaces, hyphens, or parentheses')
        }
    })
    adress.addEventListener('blur', function(e){
        if ((patron2.test(e.target.value)) && (space.test(e.target.value))){
            validArray.push('Adress: '+e.target.value);
        } else {
            document.getElementById('adress-error').textContent = 'The address must contain the street name and numbering, separated by a space';
            invalidArray.push('The address must contain the street name and numbering, separated by a space')
        }
    })
    city.addEventListener('blur', function(e){
        if (e.target.value.length <= 3){
            document.getElementById('city-error').textContent = 'The city requires more than 3 characters';
            invalidArray.push('The city requires more than 3 characters')
        }else {
            validArray.push('City: '+e.target.value);
        }
    })
    postal.addEventListener('blur', function(e){
        if (e.target.value.length <= 3){
            document.getElementById('postal-error').textContent = 'The postal-code requires more than 3 characters';
            invalidArray.push('The postal-code requires more than 3 characters')
        }else{
            validArray.push('Postal code: '+e.target.value);
        }
    })
    dni.addEventListener('blur', function(e){
        if (patron3.test(e.target.value)){
            validArray.push('DNI: '+e.target.value);
        } else {
            document.getElementById('dni-error').textContent = 'The DNI must contain 7 or 8 numbers';
            invalidArray.push('The DNI must contain 7 or 8 numbers')
        }
    })
    bttn.addEventListener('click', function(e){
        if (invalidArray.length > 0){
            alert('you must complete all the fields correctly'+invalidArray)
        }else {
            alert('Your data is: '+validArray)
        }
    })
}
    

/*
window.onload = function(e){
    e.preventDefault()
    var age = document.getElementById('age')
    var form = document.getElementById('form')
    age.addEventListener('blur', function(e){
        if (Number.isInteger(age)){
            ok
        }else{
            document.getElementById('age-error').textContent = 'You must enter a number without decimals';
        }
        if((e.target.value) < 18){
            document.getElementById('age-error').textContent = 'You need to be over 18 years old';
        }
    }) 
*/