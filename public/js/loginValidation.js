window.onload = function () {

    let formRegister = document.querySelector('.form-register')
    let inputs = document.querySelectorAll('.inputs ')
    let error = document.querySelectorAll('.errorFront')

    // FALTARIA VALIDAR CON BASE DE DATOS PARA VER SI COINCIDEN CREDENCIALES (NO DEJA HACER REQUIRE, NOSE COMO HACERLO)

    formRegister.addEventListener('submit', (e) => {
        inputs.forEach((input) => {
            switch(input.name){
                case 'email':
                    if(input.value == ''){
                        e.preventDefault()
                        document.getElementById('grupo-email').classList.remove('success-validation')
                        document.getElementById('grupo-email').classList.add('error-validation')
                        error[0].innerText = 'Campo vacio'
                    }else{
                        document.getElementById('grupo-email').classList.add('success-validation')
                        document.getElementById('grupo-email').classList.remove('error-validation')
                        error[0].innerText = ''
                    }
                break;
                case 'password':
                    if(input.value == ''){
                        e.preventDefault()
                        document.getElementById('grupo-password').classList.remove('success-validation')
                        document.getElementById('grupo-password').classList.add('error-validation')
                        error[1].innerText = 'Campo vacio'
                    }else{
                        document.getElementById('grupo-password').classList.add('success-validation')
                        document.getElementById('grupo-password').classList.remove('error-validation')
                        error[1].innerText = ''
                    }
                break;
            }
        })
    })
}
