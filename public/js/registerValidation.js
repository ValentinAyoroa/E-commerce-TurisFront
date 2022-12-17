window.onload = function () {

    //REGISTER
    let formRegister = document.querySelector('.form-register')
    let inputs = document.querySelectorAll('.inputs ')
    let error = document.querySelectorAll('.errorFront')

    console.log(error);

    // VALIDACION ON TIME (Al momento)

    expresiones = {
        email: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    }

    const validacion = (e) => {
        // e.target hace refencia al campo que se esta completando
        switch (e.target.name) {
            case 'name':
                if (e.target.value == '') {
                    document.getElementById('name').classList.add('error-input')
                    document.getElementById('name').classList.remove('estado-input')
                    error[0].innerText = 'El campo no puede estar vacio'
                } else if (e.target.value.length < 2) {
                    document.getElementById('name').classList.add('error-input')
                    document.getElementById('name').classList.remove('estado-input')
                    error[0].innerText = 'El campo nombre debe tener al menos 2 caracteres'
                } else {
                    error[0].innerText = ''
                    document.getElementById('name').classList.remove('error-input')
                    document.getElementById('name').classList.add('succes-input')
                }
            break;

            case 'surname':
                if (e.target.value == '') {
                    document.getElementById('surname').classList.add('error-input')
                    document.getElementById('surname').classList.remove('estado-input')
                    error[1].innerText = 'El campo no puede estar vacio'
                } else if (e.target.value.length < 2) {
                    document.getElementById('surname').classList.add('error-input')
                    document.getElementById('surname').classList.remove('estado-input')
                    error[1].innerText = 'El campo apellido debe tener al menos 2 caracteres'
                } else {
                    document.getElementById('surname').classList.remove('error-input')
                    document.getElementById('surname').classList.add('succes-input')
                    error[1].innerText = ''
                }
            break;

            case 'email':
                if (e.target.value == '') {
                    document.getElementById('email').classList.add('error-input')
                    document.getElementById('email').classList.remove('estado-input')
                    error[2].innerText = 'El campo no puede estar vacio'
                } else if (expresiones.email.test(e.target.value) == false) {
                    document.getElementById('email').classList.add('error-input')
                    document.getElementById('email').classList.remove('estado-input')
                    error[2].innerText = 'El email ingresado no es valido'
                } else {
                    document.getElementById('email').classList.remove('error-input')
                    document.getElementById('email').classList.add('succes-input')
                    error[2].innerText = ''
                }
            break;

            case 'password':
                if (e.target.value == '') {
                    document.getElementById('password').classList.add('error-input')
                    document.getElementById('password').classList.remove('estado-input')
                    error[3].innerText = 'El campo no puede estar vacio'
                } else if (expresiones.password.test(e.target.value) == false) {
                    document.getElementById('password').classList.add('error-input')
                    document.getElementById('password').classList.remove('estado-input')
                    error[3].innerText = 'La contraseña deben ser minimo 8 caracteres y debe contener una mayuscula, una minuscula, un numero y un caracter especial '
                } else {
                    document.getElementById('password').classList.remove('error-input')
                    document.getElementById('password').classList.add('succes-input')
                    error[3].innerText = ''
                }
            break;

            case 'confirm':
                let passw = document.getElementById('password')
                if (e.target.value != passw.value) {
                    document.getElementById('confirm').classList.add('error-input')
                    document.getElementById('confirm').classList.remove('estado-input')
                    error[4].innerText = 'Las contraseñas no coinciden'
                }else{
                    document.getElementById('confirm').classList.remove('error-input')
                    document.getElementById('confirm').classList.add('succes-input')
                    error[4].innerText = ''
                }
            break;

        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    })

    // CODIGO PARA EVITAR EL SUBMIT SI HAY ERRORES

    formRegister.addEventListener('submit', e => {

        let contadorError = 0

        inputs.forEach((input) => {
            if(input.value == ''){
                error[5].innerText = 'Los datos ingresados estan incompletos o son incorrectos'
            } else{
                error[5].innerText = ''
            }
        })

        error.forEach(function (err) {
            if (err.innerText != '') {
                contadorError += 1
            }
        })

        if (contadorError > 0) {
            e.preventDefault()
        }
        console.log(contadorError)
    })

}
