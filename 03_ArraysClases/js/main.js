document.addEventListener("DOMContentLoaded", () => {
    let inputPromedio = document.getElementById("inputPromedio")
    let outputPromedio = document.getElementById("outputPromedio")
    let btAddNPromedio = document.getElementById("btAddNPromedio")
    let btCalcPromedio = document.getElementById("btCalcPromedio")
    let inputMayorElemento = document.getElementById("inputMayorElemento")
    let outputMayorElemento = document.getElementById("outputMayorElemento")
    let btAddNMayorElemento = document.getElementById("btAddNMayorElemento")
    let btCalcMayorElemento = document.getElementById("btCalcMayorElemento")
    let inputParesImpares = document.getElementById("inputParesImpares")
    let outputImpares = document.getElementById("outputImpares")
    let outputPares = document.getElementById("outputPares")
    let btAddNParesImpares = document.getElementById("btAddNParesImpares")
    let btCalcParesImpares = document.getElementById("btCalcParesImpares")

    // 1. Promedio

    let arrayPromedios = []

    let addNumeroPromedio = (numero) => {
        arrayPromedios.push(parseInt(numero))
    }

    btAddNPromedio.addEventListener("click", () => {
        if (isNaN(inputPromedio.value) || inputPromedio.value == "") {
            alert("Introduce un número válido")
        } else {
            addNumeroPromedio(inputPromedio.value)
            alert(`Número ${inputPromedio.value} añadido`)
        }

    })

    btCalcPromedio.addEventListener("click", () => {
        if (arrayPromedios.length < 1) {
            alert("Primero añade algunos números, muñón!")
        } else {
            outputPromedio.value = calculoPromedio(arrayPromedios)
        }
    })

    let calculoPromedio = (array) => {
        let sumaTotal = 0;

        array.forEach((v) => {
            sumaTotal += v;
        })

        let promedio = sumaTotal / array.length
        return promedio
    }

    // 2. Mayor Elemento

    let arrayMayorElementos = []

    let addMayorElemento = (numero) => {
        arrayMayorElementos.push(parseInt(numero))
    }

    btAddNMayorElemento.addEventListener("click", () => {
        if (isNaN(inputMayorElemento.value) || inputMayorElemento.value == "") {
            alert("Introduce un número válido")
        } else {
            addMayorElemento(inputMayorElemento.value)
            alert(`Número ${inputMayorElemento.value} añadido`)
        }
    })

    btCalcMayorElemento.addEventListener("click", () => {
        if (arrayMayorElementos.length < 1) {
            alert("Primero añade algunos números, muñón!")
        } else {
            outputMayorElemento.value = calculoNumeroMayor(arrayMayorElementos)
        }
    })

    let calculoNumeroMayor = (array) => {
        let resultado = 0;

        array.forEach((v) => {
            if (v > resultado) {
                resultado = v;
            }
        })

        return resultado
    }

    // 3. Contar pares e impares

    let arrayParesImpares = []

    let addParesImpares = (numero) => {
        arrayParesImpares.push(parseInt(numero))
    }

    btAddNParesImpares.addEventListener("click", () => {
        if (isNaN(inputParesImpares.value) || inputParesImpares.value == "") {
            alert("Introduce un número válido")
        } else {
            addParesImpares(inputParesImpares.value)
            alert(`Número ${inputParesImpares.value} añadido`)
        }
    })

    btCalcParesImpares.addEventListener("click", () => {
        if (arrayParesImpares.length < 1) {
            alert("Primero añade algunos números, muñón!")
        } else {
            outputImpares.value = calculoImpares(arrayParesImpares)
            outputPares.value = arrayParesImpares.length - calculoImpares(arrayParesImpares)
        }
    })

    let calculoImpares = (array) => {
        let resultado = 0;

        array.forEach((v) => {
            if (v % 2 != 0) {
                resultado++
            }
        })

        return resultado
    }


}) // Fin evento "DOMContentLoaded" (Espera a que todo el DOM esté cargado para evitar errores en la captura de elementos)






























