//variables
let producto;
let joggerRoma = 6000;
let joggerParis = 7800;
let joggerLisboa = 8200;
let nombre = prompt ("Bienvenido a No Air! Como es tu nombre?");
saludar ();
comprarProducto ();


//funciones
function saludar() {
    alert("Hola " + nombre + "! Te invito a elegir tu proxima Prenda.")
}

function comprarProducto() {
    producto = prompt("Escribi el numero del articulo que queres \n 1 - Jogger Roma \n 2 - Jogger Paris \n 3 - Jogger Lisboa");
    if (producto === "1") (alert("Elegiste Jogger Roma"))
    else if(producto === "2") (alert("Elegiste Jogger Paris"))
    else if(producto === "3") (alert("Elegiste Jogger Lisboa"))
    menu = prompt("Como deseas contuninuar? \n 2 - Precio total de la compra \n 3 - Terminar")
}

function finalizarCompra() {
    if (producto === "1") (alert ("Precio final + IVA = " + (joggerRoma * 1.21) + " pesos."))
    if (producto === "2") (alert ("Precio final + IVA = " + (joggerParis * 1.21) + " pesos."))
    if (producto === "3") (alert ("Precio final + IVA = " + (joggerLisboa * 1.21) + " pesos."))
}

//ciclos
while (menu !== "3") {
    if (menu === "1") {comprarProducto ()}
    if (menu === "2") {finalizarCompra (); menu = "3";}
}

//despedida
alert ("Gracias por tu compra!") 


//-------------------------------------------------------------------------------------------------------


class Jogger {
    constructor(id,nombre, color, precio, stock){
        this.id = id
        this.nombre = nombre
        this.color = color
        this.precio = precio
        this.stock = stock
    }
}

const jogger1 = new Jogger (1, "Roma", "verde", 6000, 50)
const jogger2 = new Jogger (2, "Paris", "beige", 7800, 150)
const jogger3 = new Jogger (3, "Lisboa", "negro", 8200, 80)

const jogger =[jogger1, jogger2, jogger3]

jogger.forEach((jogger,indice) =>{
    console.log(indice)
    console.log(jogger)

}) 

