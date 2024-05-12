
class Ordenador {

    // Atributos

    _precio
    _procesador
    _tarjetaGrafica
    _placaBase
    _listaRams
    _listaPerifericos

    // Constructor

    constructor(precio = 0, procesador = null, tarjetaGrafica = null, placaBase = null, listaRams = null, listaPerifericos = null) {
        this._precio = precio
        this._procesador = procesador
        this._tarjetaGrafica = tarjetaGrafica
        this._placaBase = placaBase
        this._listaRams = listaRams
        this._listaPerifericos = listaPerifericos
    }
    
    // Getters & Setters

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

    get procesador() {
        return this._procesador
    }

    set procesador(procesador) {
        this._procesador = procesador
    }

    get tarjetaGrafica() {
        return this._tarjetaGrafica
    }

    set tarjetaGrafica(tarjetaGrafica) {
        this._tarjetaGrafica = tarjetaGrafica
    }

    get placaBase() {
        return this._placaBase
    }

    set placaBase(placaBase) {
        this._placaBase = placaBase
    }

    get listaRams() {
        return this._listaRams
    }

    set listaRams(listaRam) {
        this._listaRams = listaRam
    }

    get listaPerifericos() {
        return this._listaPerifericos
    }

    set listaPerifericos(listaPerifericos) {
        this._listaPerifericos = listaPerifericos
    }

    // Métodos
    
    calcularPrecioTotal() {
        let precioPerifericos = 0
        let precioRams = 0

        this._listaPerifericos.forEach((v) => {
            precioPerifericos += v.precio
        })

        this._listaRams.forEach((v) => {
            precioRams += v.precio
        })

        this._precio =
            precioPerifericos
            + precioRams
            + this._procesador.precio
            + this._tarjetaGrafica.precio
            + this._placaBase.precio
    }
}