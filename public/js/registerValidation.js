window.onload = function () {

    //REGISTER
    let formRegister = document.querySelector('.form-register')
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let error = document.querySelectorAll('.errorFront')

    // VALIDACION ON TIME (Al momento)

    name.addEventListener('change', e => {

        if (name.value == '') {
            error[0].innerText = 'El campo nombre no puede estar vacio'
        } else if (name.value.length < 2) {
            error[0].innerText = 'El campo nombre debe tener al menos 2 caracteres'
        } else {
            error[0].innerText = ''
        }
    })

    surname.addEventListener('change', e => {

        if (surname.value == '') {
            error[1].innerText = 'El campo apellido no puede estar vacio'
        } else if (surname.value.length < 2) {
            error[1].innerText = 'El campo apellido debe tener al menos 2 caracteres'
        } else {
            error[1].innerText = ''
        }
    })

    email.addEventListener('change', e => {

        let validation = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

        if (email.value == '') {
            error[2].innerText = 'El campo email no puede estar vacio'
        } else if (validation.test(email.value) == false) {
            error[2].innerText = 'El email no es valido'
        } else {
            error[2].innerText = ''
        }
    })

    password.addEventListener('change', e => {

        let validation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

        if (password.value == '') {
            error[3].innerText = 'El campo password no puede estar vacio'
        }else if (password.value.length < 8 ){
            error[3].innerText = 'La contraseña debe tener como minimo 8 caracteres'
        } else if (validation.test(password.value) == false) {
            error[3].innerText = 'La contraseña debe contener al menos una letra minúscula, una letra mayúscula, un dígito numérico y un carácter especial'
        } else {
            error[3].innerText = ''
        }
    })

    // CODIGO PARA EVITAR EL SUBMIT SI HAY ERRORES

    formRegister.addEventListener('submit', e => {

        let contadorError = 0

        error.forEach(function (e) {
            if (e.innerText.length > 0) {
                contadorError += 1
            }
        })

        if(contadorError > 0){
            e.preventDefault()
        }
        console.log(contadorError)
    })

}
