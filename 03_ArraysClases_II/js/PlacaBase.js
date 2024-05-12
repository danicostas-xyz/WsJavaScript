
class PlacaBase{
    
    // Atributos
    
    _marca
    _precio
    _tipo

    // Constructor

    constructor(marca = "", precio = 0, tipo = "") {
        this._marca = marca
        this._precio = precio
        this._tipo  = tipo
    }

    // Getters & Setters

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
    
    get tipo() {
        return this._tipo
    }

    set tipo(tipo) {
        this._tipo = tipo
    }
}
