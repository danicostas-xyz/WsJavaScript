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





// 4. Cambia el color de la pantalla





// 5. Usuario y Contraseña





// 6. Verificador de Números Primos





// 7. Generador de secuencia Fibonacci

});
