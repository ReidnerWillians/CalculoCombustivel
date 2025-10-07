function calcular(event) { //event(esta vinculado a um formulario HTML, como um botão submit)
    event.preventDefault() //inpede o comportamento padrão do evento e evita que a pagina seja recarregada quando o formulario é enviado.
    let gasolinaInput = document.getElementById('gasolina').value
    let alcoolInput = document.getElementById('alcool').value
    let contentResult = document.getElementById('content-result')
    let textResult = document.getElementById('text-result')
    let gasolinaSpan = document.getElementById('gasolina-result')
    let alcoolSpan = document.getElementById ('alcool-result')

    let calculo = (alcoolInput / gasolinaInput)


    if (calculo < 0.7) {
        textResult.innerHTML = 'Compensa abastecer com Alcool'
    } else {
        textResult.innerHTML = 'Compensa abastecer com Gasolina'
    }

    gasolinaSpan.innerHTML = 'Gasolina R$: ' + gasolinaInput
    alcoolSpan.innerHTML = 'Alcool R$: ' + alcoolInput

    contentResult.classList.remove('hide')
}



