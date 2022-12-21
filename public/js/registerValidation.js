
window.onload = function () {

    //REGISTER
    let formRegister = document.querySelector('.form-register')
    let inputs = document.querySelectorAll('.inputs ')
    let error = document.querySelectorAll('.errorFront')

    console.log(error);

    // VALIDACION ON TIME (Al momento)

    expresiones = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    }

    const validacion = (e) => {
        // FALTA VALIDAR IMAGEN, nose como importar multer no deja hacer require
        // e.target hace refencia al campo que se esta completando
        switch (e.target.name) {
            case 'name':
                    if (e.target.value == '') {
                        document.getElementById('grupo-name').classList.remove('success-validation')
                        document.getElementById('grupo-name').classList.add('error-validation')
                        document.querySelector('#grupo-name i').classList.remove('fa-check-circle')
                        document.querySelector('#grupo-name i').classList.add('fa-times-circle')
                        error[0].innerText = 'El campo no puede estar vacio'
                        console.log(error[0].innerText);
                    } else if (e.target.value.length < 2) {
                        document.getElementById('grupo-name').classList.remove('success-validation')
                        document.getElementById('grupo-name').classList.add('error-validation')
                        document.querySelector('#grupo-name i').classList.remove('fa-check-circle')
                        document.querySelector('#grupo-name i').classList.add('fa-times-circle')
                        error[0].innerText = 'El campo nombre debe tener al menos 2 caracteres'
                    } else {
                        error[0].innerText = ''
                        document.getElementById('grupo-name').classList.add('success-validation')
                        document.getElementById('grupo-name').classList.remove('error-validation')
                        document.querySelector('#grupo-name i').classList.add('fa-check-circle')
                        document.querySelector('#grupo-name i').classList.remove('fa-times-circle')
                    }
            break;

            case 'surname':
                if (e.target.value == '') {
                    document.getElementById('grupo-surname').classList.remove('success-validation')
                    document.getElementById('grupo-surname').classList.add('error-validation')
                    document.querySelector('#grupo-surname i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-surname i').classList.add('fa-times-circle')
                    error[1].innerText = 'El campo no puede estar vacio'
                } else if (e.target.value.length < 2) {
                    document.getElementById('grupo-surname').classList.remove('success-validation')
                    document.getElementById('grupo-surname').classList.add('error-validation')
                    document.querySelector('#grupo-surname i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-surname i').classList.add('fa-times-circle')
                    error[1].innerText = 'El campo apellido debe tener al menos 2 caracteres'
                } else {
                    document.getElementById('grupo-surname').classList.add('success-validation')
                    document.getElementById('grupo-surname').classList.remove('error-validation')
                    document.querySelector('#grupo-surname i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-surname i').classList.remove('fa-times-circle')
                    error[1].innerText = ''
                }
            break;

            case 'email':
                console.log('ENTRE');
                if (e.target.value == '') {
                    document.getElementById('grupo-email').classList.remove('success-validation')
                    document.getElementById('grupo-email').classList.add('error-validation')
                    document.querySelector('#grupo-email i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-email i').classList.add('fa-times-circle')
                    error[2].innerText = 'El campo no puede estar vacio'
                } else if (expresiones.email.test(e.target.value) == false) {
                    document.getElementById('grupo-email').classList.remove('success-validation')
                    document.getElementById('grupo-email').classList.add('error-validation')
                    document.querySelector('#grupo-email i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-email i').classList.add('fa-times-circle')
                    error[2].innerText = 'El email ingresado no es valido'
                } else {
                    document.getElementById('grupo-email').classList.add('success-validation')
                    document.getElementById('grupo-email').classList.remove('error-validation')
                    document.querySelector('#grupo-email i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-email i').classList.remove('fa-times-circle')
                    error[2].innerText = ''
                }
            break;

            case 'password':
                if (e.target.value == '') {
                    document.getElementById('grupo-password').classList.remove('success-validation')
                    document.getElementById('grupo-password').classList.add('error-validation')
                    document.querySelector('#grupo-password i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-password i').classList.add('fa-times-circle')
                    error[3].innerText = 'El campo no puede estar vacio'
                } else if (expresiones.password.test(e.target.value) == false) {
                    document.getElementById('grupo-password').classList.remove('success-validation')
                    document.getElementById('grupo-password').classList.add('error-validation')
                    document.querySelector('#grupo-password i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-password i').classList.add('fa-times-circle')
                    error[3].innerText = 'La contraseña deben ser minimo 8 caracteres y debe contener una mayuscula, una minuscula, un numero y un caracter especial'
                } else {
                    document.getElementById('grupo-password').classList.add('success-validation')
                    document.getElementById('grupo-password').classList.remove('error-validation')
                    document.querySelector('#grupo-password i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-password i').classList.remove('fa-times-circle')
                    error[3].innerText = ''
                }
            break;

            case 'confirm':
                let passw = document.getElementById('password')
                if (e.target.value != passw.value) {
                    document.getElementById('grupo-confirm').classList.remove('success-validation')
                    document.getElementById('grupo-confirm').classList.add('error-validation')
                    document.querySelector('#grupo-confirm i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-confirm i').classList.add('fa-times-circle')
                    error[4].innerText = 'Las contraseñas no coinciden'
                }else{
                    document.getElementById('grupo-confirm').classList.add('success-validation')
                    document.getElementById('grupo-confirm').classList.remove('error-validation')
                    document.querySelector('#grupo-confirm i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-confirm i').classList.remove('fa-times-circle')
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
