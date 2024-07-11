// Define the base API URL
const BASE_API_URL = "https://my-alura-geek-api.vercel.app/product";

// Generic function for making HTTP requests
const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

// Object that contains all service functions to interact with the API
export const productServices = {
  // Get products from the "balones" category
  balones: () => fetchData(`${BASE_API_URL}?category=balones`),

  // Get products from the "uniformes" category
  uniformes: () => fetchData(`${BASE_API_URL}?category=uniformes`),

  // Get products from the "playeras" category
  playeras: () => fetchData(`${BASE_API_URL}?category=playeras`),

  // Get all products without filtering
  allProducts: () => fetchData(BASE_API_URL),

  // Create a new product
  crearNuevoProducto: (img, name, price, description, category) => {
    const id = uuid.v4();
    return fetchData(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },
  // Delete a product by its ID
 /*const*/ eliminarProducto: (id) => fetchData(`${BASE_API_URL}/${id}`, { method: "DELETE" }),

  // Get details of a product by its ID
  /*const*/ detalleProducto: (id) => fetchData(`${BASE_API_URL}/${id}`),

  // Update a product by its ID
  actualizarProducto: (img, category, name, price, description, id) => {
    return fetchData(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },

  // Get details of a product by its ID (seems duplicated)
  productoIndividual: (id) => fetchData(`${BASE_API_URL}/${id}`),

  // Get related products (not used in this code)
  relacionados: () => fetchData(BASE_API_URL),
};


/* pasado a admin

const crearNuevoProducto = (img,name,price,description,category,id) =>{
const producto = d.createElement("div")
producto.classList.add('productos__caja')
const contenido =
  `
    <div class="card">
      <div class="imgBx">
          <img src="${img}" alt="${name}">
      </div>
      <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="./pages/producto.html/">Ver producto</a>
      </div>
    </div>
  `;
  producto.innerHTML= contenido;
  return producto;
  }

*/
/*----hasta aquí se mueve------
-----Fetch-----

const balones = ()=> fetch("http://localhost:5555/product?category=balones").then((response).json() => response.json());
const uniformes = ()=> fetch("http://localhost:5555/product?category=uniformes").then((response).json() => response.json());
const playeras = ()=> fetch("http://localhost:5555/product?category=playeras").then((response).json() => response.json());

const allProducts = () =>
  fetch("http://localhost:5555/product").then((response) => response.json());


const crearNuevoProducto = (url,category,name,price,description) =>{
  return fetch("http://localhost:5555/product", {
    method:"POST"
    headers:{
    "Content-Type": "application/json"
    },
    body:({
      url,
      category,
      name,
      price,
      description,
      id: uuid.v4()
    })
  })
  }
*/
/* ------esto también se mueve -----
balones().then((data)=>{
    data.forEach((product) =>{
    const nuevoProducto = crearNuevoProducto(product.img, product.name, product.price, product.description, product.category, product.id)
    seccionBalones.appendChild(nuevoProducto)
    });
  })
  .catch((error)=> alert("Ocurrió un error"))

uniformes().then((data)=>{
    data.forEach((product) =>{
    const nuevoProducto = crearNuevoProducto(product.img, product.name, product.price, product.description, product.category, product.id)
    seccionBalones.appendChild(nuevoProducto)
    });
  })
  .catch((error)=> alert("Ocurrió un error"))

playeras().then((data)=>{
    data.forEach((product) =>{
    const nuevoProducto = crearNuevoProducto(product.img, product.name, product.price, product.description, product.category, product.id)
    seccionBalones.appendChild(nuevoProducto)
    });
  })
  .catch((error)=> alert("Ocurrió un error"))




*/

/* reemplazado por fetch-------------
const promise = new Promise((resolve, reject)=>
  {
    const http = new XMLHttpRequest();
    http.open('GET', "http://localhost:5555/product?categoty=balones")
    http.send();

    http.onload = ()=>{
    cons response = JSON.parse(http.response);
    if(http.status >=400)
      {
        reject(response)
      } else {
          resolve(response)
       }
    }
    })
    return promise;
    */