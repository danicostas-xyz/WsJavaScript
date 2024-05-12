let teclado = new Periferico()
teclado.tipo = "Teclado"
teclado.marca = "Razer"
teclado.precio = 150;

let raton = new Periferico("Ratón", "Logitech", 100)

let perifericos = [teclado, raton]

let ram1 = new RAM()
ram1.marca = "Corsair"
ram1.capacidad = 16
ram1.precio = 50

let ram2 = new RAM("Corsair", 16, 50)

let rams = [ram1, ram2]

let ramGrafica = new RAM("Seagate", 32, 0)

let grafica = new TarjetaGrafica("ASUS", "RTX4080", 5607, 600, ramGrafica)

let procesador = new Procesador("Intel", "i7-12700KF", 12, 400)

let placaBase = new PlacaBase("MSI", 200, "ATX")

let ordenador = new Ordenador()
ordenador.procesador = procesador
ordenador.tarjetaGrafica = grafica
ordenador.placaBase = placaBase
ordenador.listaRams = rams
ordenador.listaPerifericos = perifericos


