
class Procesador {

    // Atributos

    _marca
    _modelo
    _numeroNucleos
    _precio

    // Constructor

    constructor(marca = "", modelo = "", numeroNucleos = 0, precio = 0) {
        this._marca = marca
        this._modelo = modelo
        this._numeroNucleos = numeroNucleos
        this._precio = precio
    }

    // Getters & Setters

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
    }

    get modelo() {
        return this._modelo
    }

    set modelo(modelo) {
        this._modelo = modelo
    }

    get numeroNucleos() {
        return this._numeroNucleos
    }

    set numeroNucleos(numeroNucleos) {
        this._numeroNucleos = numeroNucleos
    }

    get precio() {
        return this._precio
    }

    set precio(precio) {
        if (precio < 0) {
            this._precio = 0
        } else {
            this._precio = precio
        }
    }

}