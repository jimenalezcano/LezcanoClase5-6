//Pido datos
var datos = prompt("Como te llamas?")

//Uso los datos del usuario en un alert
var bienvenida = alert("Bienvenido/a a FARMA WEB " + datos + "!")

//Otro prompt para preguntarle ubicacion y luego condicional
var ubicacion = prompt("De que zona sos?")


if (ubicacion == ("Palermo") || (ubicacion== "Recoleta") || (ubicacion == "Almagro") || (ubicacion == "Caballito")){
    alert("Realizamos envios en tu zona! Podes hacer tu pedido online")
}else{
   alert("Lo siento! No realizamos envios hasta tu zona,de todas maneras, podes ver los productos y acercarte a la sucursal")
}

// Creo objetos donde 

const cliente = {
    nombre: datos,
    apellido: prompt("Cual es su apellido?"),
    documento: prompt("Cual es su numero de documento?"),
    email: prompt("Ingrese su email"),
    direccion: prompt("Ingrese su direccion"),
    entrega: ubicacion, 
    pago: prompt("Elija metodo de pago: MercadoPago/ debito / efecto"),
    pedido: [ ]
}

console.log(cliente)


//Creo lista de productos de categoria Maquillaje, marca Maybelline

const producto1 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "20 pioneer",
    precio: 1000,
}

const producto2 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "65 lover",
    precio: 1000,
}

const producto3 = {
    categoria: "Maquillaje",
    nombre: "Labial Matte Ink",
    marca: "Maybelline",
    color: "70 Pink",
    precio: 1000,
}

//Junto productos en un array

const labialesMaybelline = [ producto1 , producto2 , producto3]

console.log(labialesMaybelline)