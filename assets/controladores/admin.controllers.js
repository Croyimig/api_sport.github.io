// es productsAdmin

import { productServices } from "../../servicios/product-service.js";

const d = document;
const crearNuevoProducto = (img, category, name, price, description, id) => {
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
        <div class="editar__container">
        <button class="editaricono" type="button" id="${id}">
            <i class="bi bi-pencil"></i>
        </button>
        <button class="eliminar__icono" type="button" id="${id}">
            <i class="bi bi-trash"></i>
        </button>
    </div>
    `;
	producto.innerHTML = contenido;
    const btneliminar = producto.querySelector(".eliminar_icono")
    btneliminar.addEventListener("click", ()=>{
        const id = btneliminar.id;
        productServices.eliminarProducto(id)
        .then(response => {
            window.location.href = "../page/exito-eliminar.html"
        }).catch(err => console.log("Ocurrió un error"))
    })

	return producto;
};

const seccionAll = d.querySelector('[data-productos]');

productServices.allProducts().then((data) => {
	data.forEach(({img, category, name, price, description,id}) => {
		const nuevoProducto = crearNuevoProducto(
            img,
			category,
            name,
			price,
            description,
			id
		);
		seccionAll.appendChild(nuevoProducto);
	});
}).catch((err)=> console.log('ocurrió un error'));
