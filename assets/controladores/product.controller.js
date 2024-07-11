// es product-controller

import { productServices } from "../../servicios/product-service.js";

const d = document;
const seccionBalones = d.querySelector('[data-section="balones"]');
const seccionUniformes = d.querySelector('[data-section="uniformes"]');
const seccionPlayeras = d.querySelector('[data-section="playeras"]');

const crearNuevoProducto = (img, category, name, price, description, id) => {
  const producto = d.createElement("div");
  producto.classList.add("productos__caja");
  const contenido = `
    <div class="card">
    <div class="imgBx">
        <img src="${img}" alt="imagen producto">
    </div>
    <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="../pages/producto.html?category=${category}&id=${id}">Ver producto</a>
      </div>
    </div>
  `;
  producto.innerHTML = contenido;
  return producto;
};

//function mostrarProductosEnSeccion(seccion, fetchData){
  productServices/*[fetchData]*/.balones().then((data) => {
    data.forEach(({ img, category, name, price, description, id}) => {
      const nuevoProducto = crearNuevoProducto(img, category, name, price, description, id);
      seccion.appendChild(nuevoProducto);
    });
  }).catch((err) => alert('Ocurrió un error'));
//}


/*productServices.balones().then((data)=>{
  data.forEach(({img, category, name, price, description, id}) =>{
  const nuevoProducto = crearNuevoProducto(img, category, name, price, description, id)
  seccionBalones.appendChild(nuevoProducto)
  });
})
.catch((error)=> alert("Ocurrió un error")) */

productServices.uniformes().then((data)=>{
  data.forEach(({img, category, name, price, description, id}) =>{
  const nuevoProducto = crearNuevoProducto(img, category, name, price, description, id)
  seccionBalones.appendChild(nuevoProducto)
  });
})
.catch((error)=> alert("Ocurrió un error"))

productServices.playeras().then((data)=>{
  data.forEach(({img, category, name, price, description, id}) =>{
  const nuevoProducto = crearNuevoProducto(img, category, name, price, description, id)
  seccionBalones.appendChild(nuevoProducto)
  });
})
.catch((error)=> alert("Ocurrió un error"))

/*
mostrarProductosEnSeccion(seccionBalones, "balones");
mostrarProductosEnSeccion(seccionUniformes, "uniformes");
mostrarProductosEnSeccion(seccionPlayeras, "playeras");*/