const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.getElementById('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventlisteners();

function cargarEventlisteners (){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}


function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.Contains('agregar-carrito')){
        const elemento = e.target.parentElment.parentElment;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imgen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento)
}