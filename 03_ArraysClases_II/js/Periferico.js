
class Periferico{
    
    // Atributos

    _tipo
    _marca
    _precio

    // Constructor

    constructor(tipo = "", marca = "", precio = 0) {
        this._tipo = tipo
        this._marca = marca
        this._precio = precio
    }

    // Getters & Setters

    get tipo() {
        return this._tipo
    }

    set tipo(tipo) {
        this._tipo = tipo
    }

    get marca() {
        return this._marca
    }

    set marca(marca) {
        this._marca = marca
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