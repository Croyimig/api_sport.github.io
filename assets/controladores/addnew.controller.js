import { productServices } from "../../servicios/product-service.js"

const d = document;
const form = d.querySelector("[data-form]");

form.addEventListener("submit", ()=>{
    e.preventDefault();
    const url = d.querySelector("[data-url]")
    const name = d.querySelector("[data-name]")
    const category = d.querySelector("[data-category]")
    const price = d.querySelector("[data-price]")
    const description = d.querySelector("[data-description]")

    productServices.crearNuevoProducto(url,category,name,price,description,id).then((respuesta) =>{
        window.location.href = "./pages/exito.html";
        }).catch(err => console.log(err));

    })
