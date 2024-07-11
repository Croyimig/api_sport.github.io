/*esto es productsAdmin-controllers*/

import { productServices } from "../../servicios/product-service.js";

const d = document;



const crearNuevoProducto = (img, name, price, description, category, id) => {
	const producto = d.createElement("div");
	producto.classList.add("productos__caja");
	const contenido = `
    <div class="card">
    <div class="imgBx">
        <img src="${img}"
            alt="imagen producto">
    </div>
        <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="/pages/producto.html?category=${category}&id=${id}">Ver producto</a>
        `;
        producto.innerHTML = contenido;
        return producto;
    };

const seccionAll = d.querySelector('[data-productos]');
productServices.allProducts().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoProducto = crearNuevoProducto(img,category,name,price,Description,id);
		seccionAll.appendChild(nuevoProducto);
	});
}).catch((err)=> alert('ocurrió un error'));