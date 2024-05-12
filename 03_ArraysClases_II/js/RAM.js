'use strict'
class RAM{
    
    // Atributos

    _marca
    _capacidad
    _precio

    // Constructor

    constructor(marca = "", capacidad = 0, precio = 0) {
        this._marca = marca
        this._capacidad = capacidad
        this._precio = precio
    }

    // Getters & Setters

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
    }

    get capacidad() {
        return this._capacidad
    }

    set capacidad(capacidad) {
        this._capacidad = capacidad
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