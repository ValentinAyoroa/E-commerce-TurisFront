
window.onload = function () {

    let formRegister = document.querySelector('.form-register')
    let inputs = document.querySelectorAll('.inputs ')
    let error = document.querySelectorAll('.errorFront')

    const validacion = (e) => {
        // FALTA VALIDAR IMAGEN, nose como importar multer no deja hacer require
        switch(e.target.name){
            case 'titulo':
                if (e.target.value == '') {
                    console.log('vacioo');
                    document.getElementById('grupo-titulo').classList.remove('success-validation')
                    document.getElementById('grupo-titulo').classList.add('error-validation')
                    document.querySelector('#grupo-titulo i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-titulo i').classList.add('fa-times-circle')
                    error[1].innerText = 'El campo no puede estar vacio'
                } else if (e.target.value.length < 5) {
                    document.getElementById('grupo-titulo').classList.remove('success-validation')
                    document.getElementById('grupo-titulo').classList.add('error-validation')
                    document.querySelector('#grupo-titulo i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-titulo i').classList.add('fa-times-circle')
                    error[1].innerText = 'El titulo debe tener al menos 5 caracteres'
                } else {
                    error[1].innerText = ''
                    document.getElementById('grupo-titulo').classList.add('success-validation')
                    document.getElementById('grupo-titulo').classList.remove('error-validation')
                    document.querySelector('#grupo-titulo i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-titulo i').classList.remove('fa-times-circle')
                }
            break;
            case 'precio':
                if (e.target.value == '') {
                    document.getElementById('grupo-precio').classList.remove('success-validation')
                    document.getElementById('grupo-precio').classList.add('error-validation')
                    document.querySelector('#grupo-precio i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-precio i').classList.add('fa-times-circle')
                    error[2].innerText = 'El campo no puede estar vacio'
                    console.log(error[0].innerText);
                } else if (e.target.value <= 0) {
                    document.getElementById('grupo-precio').classList.remove('success-validation')
                    document.getElementById('grupo-precio').classList.add('error-validation')
                    document.querySelector('#grupo-precio i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-precio i').classList.add('fa-times-circle')
                    error[2].innerText = 'El precio no puede ser cero o menor'
                } else {
                    error[2].innerText = ''
                    document.getElementById('grupo-precio').classList.add('success-validation')
                    document.getElementById('grupo-precio').classList.remove('error-validation')
                    document.querySelector('#grupo-precio i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-precio i').classList.remove('fa-times-circle')
                }
            break;
            case 'descripcion':
                if (e.target.value == '') {
                    document.getElementById('grupo-descripcion').classList.remove('success-validation')
                    document.getElementById('grupo-descripcion').classList.add('error-validation')
                    document.querySelector('#grupo-descripcion i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-descripcion i').classList.add('fa-times-circle')
                    error[3].innerText = 'El campo no puede estar vacio'
                } else if (e.target.value.length < 20) {
                    document.getElementById('grupo-descripcion').classList.remove('success-validation')
                    document.getElementById('grupo-descripcion').classList.add('error-validation')
                    document.querySelector('#grupo-descripcion i').classList.remove('fa-check-circle')
                    document.querySelector('#grupo-descripcion i').classList.add('fa-times-circle')
                    error[3].innerText = 'La descripcion debe tener al menos 20 caracteres'
                } else {
                    error[3].innerText = ''
                    document.getElementById('grupo-descripcion').classList.add('success-validation')
                    document.getElementById('grupo-descripcion').classList.remove('error-validation')
                    document.querySelector('#grupo-descripcion i').classList.add('fa-check-circle')
                    document.querySelector('#grupo-descripcion i').classList.remove('fa-times-circle')
                }
            break;
        }
    }

    inputs.forEach((input)=>{
        input.addEventListener('keyup', validacion);
        input.addEventListener('blur', validacion);
    })

    // CODIGO PARA EVITAR EL SUBMIT SI HAY ERRORES

    formRegister.addEventListener('submit', e => {
        e.preventDefault()
        let contadorError = 0

        inputs.forEach((input) => {
            
            if(input.value = ''){
                e.preventDefault()
            } else{
                error[4].innerText = ''
            }
        })

        error.forEach(function (err) {
            if (err.innerText != '') {
                contadorError += 1
            }
        })

        if (contadorError > 0) {
            error[4].innerText = 'Los datos ingresados estan incompletos o son incorrectos'
            e.preventDefault()
        }

        console.log(contadorError)
    })
}