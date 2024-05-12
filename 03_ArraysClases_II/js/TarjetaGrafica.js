
class TarjetaGrafica{

    // Atributos

    _marca
    _modelo
    _nucleosCUDA
    _precio
    _ram

    // Constructor

    constructor(marca = "", modelo = "", nucleosCUDA = 0, precio = 0, ram = null) {
        this._marca = marca
        this._modelo = modelo
        this._nucleosCUDA = nucleosCUDA
        this._precio = precio
        this._ram = ram
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
    
    get nucleosCUDA() {
        return this._nucleosCUDA
    }

    set nucleosCUDA(nucleosCUDA) {
        this._nucleosCUDA = nucleosCUDA
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

    get ram() {
        return this._ram
    }
    
    set ram(ram) {
        this._ram = ram
    }
}