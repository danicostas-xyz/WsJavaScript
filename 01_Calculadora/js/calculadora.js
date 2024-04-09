
window.onload = () => {
    const sumar = (a, b) => {
        return a + b
    }

    const restar = (a, b) => {
        return a - b
    }

    const multiplicar = (a, b) => {
        return a * b
    }

    const dividir = (a, b) => {
        return a / b
    }


    let input3 = document.getElementById("input3")
    let btSuma = document.getElementById("suma")
    let btResta = document.getElementById("resta")
    let btMultip = document.getElementById("multiplicacion")
    let btDivis = document.getElementById("division")

    btSuma.addEventListener("click", () => {
        let input1 = parseInt(document.getElementById("input1").value)
        let input2 = parseInt(document.getElementById("input2").value)
        input3.value = sumar(input1, input2)
    })

    btResta.addEventListener("click", () => {
        let input1 = parseInt(document.getElementById("input1").value)
        let input2 = parseInt(document.getElementById("input2").value)
        input3.value = restar(input1, input2)
    })

    btMultip.addEventListener("click", () => {
        let input1 = parseInt(document.getElementById("input1").value)
        let input2 = parseInt(document.getElementById("input2").value)
        input3.value = multiplicar(input1, input2)
    })

    btDivis.addEventListener("click", () => {
        let input1 = parseInt(document.getElementById("input1").value)
        let input2 = parseInt(document.getElementById("input2").value)
        input3.value = dividir(input1, input2)
    })

}








