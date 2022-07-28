/*-------------------------DarkMode------------------------------------*/

let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function(){
    let val = body.classList.toggle("dark")
    localStorage.setItem("modo", val)
})

let valor=localStorage.getItem("modo")

if(valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}


/*--------------------------------Carrito-------------------------------*/

const tarjetas = document.getElementById("tarjetaProducto");
productosDisponibles.forEach((productosDisponibles,indice)=>{
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-4")
    card.innerHTML=`<img src="${productosDisponibles.imagen}" class="card-img-top" alt="imagenproducto">
        <div class="card-body">
        <h5 class="card-title">${productosDisponibles.nombre}</h5>
        <p class="card-text">${productosDisponibles.descripcion}</p>
        <p class="card-text">$ ${productosDisponibles.precio}</p>
        <a href="#" class="btn btn-dark" id="#bottonCarrito"
        " onClick="agregarCarrito(${indice})">COMPRAR</a>
        </div>`;
    tarjetas.appendChild(card);
});

const agregarCarrito=(indice)=>{
    const indiceEncontradoCarrito = carrito.findIndex((elemento)=>{
        return elemento.id === productosDisponibles[indice].id
    })
    if(indiceEncontradoCarrito === -1){
        const agregarproducto= productosDisponibles[indice];
        agregarproducto.cantidad = 1
        carrito.push(agregarproducto);
        actualizarlocalstorage(carrito);
        crearcarrito()
    }
    else {
        carrito[indiceEncontradoCarrito].cantidad += 1
        actualizarlocalstorage(carrito);
        crearcarrito();
    }
};

const modalCarrito = document.getElementById("cajacarrito");
let total = 0;
const crearcarrito = ()=>{
    modalCarrito.className = "cajacarrito";
    modalCarrito.innerHTML = "";
    if(carrito.length > 0){
        carrito.forEach((productosDisponibles, indice)=> {
            total = total + productosDisponibles.precio * productosDisponibles.cantidad;
            const carritoConteiner = document.createElement("div");
            carritoConteiner.className = "cajacarrito";
            carritoConteiner.innerHTML = `
            <img class="car-img" scr="${productosDisponibles.imagen}"/>
            <div class="product-details"> Cantidad: ${productosDisponibles.cantidad}</div>
            <div class="product-details"> Precio: $ ${productosDisponibles.precio}</div>
            <div class="product-details">Total: $ ${productosDisponibles.cantidad * productosDisponibles.precio}</div>
            <button class="btn btn-info" id="remove-product" onClick="removeProduct(${indice})">Eliminar</button>
            `;
            modalCarrito.appendChild(carritoConteiner);
        });
        const totalfinal = document.createElement("div");
            totalfinal.className = "total-carrito";
            totalfinal.innerHTML = `
            <div class="totaltotal"> TOTAL: $ ${total}</div>
            <button class="btn btn-info" id="finalizarcompra" onClick="finalizarcompra()">FINALIZAR COMPRA</button>
            `;
        modalCarrito.appendChild(carritoConteiner)
        }
        else{
            modalCarrito.classList.remove("carrito");
        }
};

const actualizarlocalstorage = (carrito)=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
};

const removeProduct =(indice)=>{
    carrito.splice(indice, 1);
    actualizarlocalstorage(carrito);
    crearcarrito()
};

const finalizarcompra = ()=> {
    const finaltotal = document.getElementsByClassName("totaltotal")[0].innerHTML;
    modalCarrito.innerHTML ="";
    const comprafinalizada = `
    <div class="product-details">Total: $ ${total}</div>
    <p class="datos-parrafo"> Ya casi estamos! Decinos donde te entregamos tu nueva prenda.</p>
    <button class="btn btn-info formulario" id="formulario" onClick="crearformulario()"> AGREGAR DIRECCION</button>
    `;
    modalCarrito.innerHTML = comprafinalizada;
}
/*------------------------------ alerta carrito------------------------------------*/
const bottonCarrito = document.getElementById('bottonCarrito')

bottonCarrito.addEventListener('click', ()=> {Swal.fire({
    icon: 'success',
    title: 'Producto agregado al carrito',
    text: 'De click abajo para ir a la carrito!',
   })
})

