document.addEventListener("DOMContentLoaded", () => {
    // 1. Contador de Números Pares

    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let bt = document.getElementById("buttonPares");

    const cuentaPares = () => {
        let inicio = parseInt(input1.value);
        let final = parseInt(input2.value);
        let acumuladorPares = 0;

        for (let i = inicio; i <= final; i++) {
            if (i % 2 == 0) {
                acumuladorPares++;
            }
        }

        return acumuladorPares;
    };

    bt.addEventListener("click", () => {
        input3.value = cuentaPares();
        console.log(cuentaPares());
    });

    // 2. Conversor Temperatura

    let input4 = document.getElementById("input4");
    let input5 = document.getElementById("input5");
    let conversor = document.getElementById("conversor");

    const fahrenheitACelsius = () => {
        let conversion = (input4.value - 32) * 5 / 9;
        return conversion;
    }

    const celsiusAFahrenheit = () => {
        let conversion = (input4.value * 9 / 5) + 32;
        return conversion;
    }

    conversor.addEventListener("change", () => {
        if (conversor.value == "fahrenheitACelsius") {
            input5.value = fahrenheitACelsius()
            console.log(fahrenheitACelsius())
        } else if (conversor.value == "celsiusAFahrenheit") {
            input5.value = celsiusAFahrenheit()
            console.log(celsiusAFahrenheit())
        }
    })

    // 3. Adivina el número

    let numeroRandom = Math.floor(Math.random()*100)
    console.log(numeroRandom)
    let inputAleatorio = document.getElementById("inputAleatorio")
    let resultadoAleatorio = document.getElementById("resultadoAleatorio")

    inputAleatorio.addEventListener("change", () => {
        
    if (inputAleatorio.value == numeroRandom) {
        resultadoAleatorio.value = "Correcto"
    } else {
        if (inputAleatorio.value > numeroRandom){
            resultadoAleatorio.value = "Menos!"
        }
        if (inputAleatorio.value < numeroRandom) {
            resultadoAleatorio.value = "Más!"
        }
    }
    })



    // 4. Cambia el color de la pantalla

    document.getElementById("b1").addEventListener('click', () => {
        let selectorColor2 = document.getElementById("color").value
        console.log(selectorColor2)
        document.getElementsByTagName("body")[0].style.backgroundColor = selectorColor2;
    })

    // 5. Usuario y Contraseña

    document.getElementById("b2").addEventListener('click', () => {
        let user = document.getElementById("u1").value
        let pass = document.getElementById("p1").value

        if (user == "goku" && pass == "Vegeta777") {
            alert("Bienvenido")
        } else {
            alert("Usuario y/o contraseña incorrectos")
        }
    })


    // 6. Verificador de Números Primos

    document.getElementById("inputPrimos").addEventListener("change", () => {
        let numeroPrimo = document.getElementById("inputPrimos")
        let contador = 0

        for (let i = 1; i <= numeroPrimo.value; i++) {
            if (numeroPrimo.value % i == 0) {
                contador++;
            }
        }

        console.log(numeroPrimo.value, contador)

        if (contador > 2) {
            document.getElementById("respuestaPrimos").value = `Número ${numeroPrimo.value} no es primo`
        } else {
            document.getElementById("respuestaPrimos").value = `Número ${numeroPrimo.value} es primo`
        }

    })

    // 7. Generador de secuencia Fibonacci

    document.getElementById("inputFibonacci").addEventListener("change", () => {

        let resultado = 0

        let numeroIteraciones = document.getElementById("inputFibonacci").value
        let valor1 = 0
        let valor2 = 1

        for (let i = 0; i < numeroIteraciones; i++) {
            resultado = valor1 + valor2
            valor1 = valor2
            valor2 = resultado
        }

        document.getElementById("resultadoFibonacci").value = resultado
    })


});
