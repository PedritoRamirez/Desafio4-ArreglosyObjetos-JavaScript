import propiedades_alquiler from "./propiedadesAlquiler.js";

const cardContainer2 = document.querySelector('#contenedor');
let targetaAlqui="";

for (const element of propiedades_alquiler){
  targetaAlqui += `
    <div class="venta2">
      <h2>${element.nombre}</h2>  
      <img src= ${element.src} alt="">
      <h5>Descripcion: ${element.descripcion} </h5>
      <p>Ubicacion: ${element.ubicacion}</p>
      <p>Habitaciones: ${element.habitaciones}</p>
      <p>Costo: $${element.costo}</p>
      <p>${element.smoke?'<i style="color: green" class="fas fa-smoking"></i><span style="color: green"> Permitido Fumar</span>':'<i style="color: red" class="fas fa-smoking-ban"></i><span style="color: red">No se permite fumar</span>'}</p>
      <p>${element.pets?'<i style="color: green" class="fas fa-paw"></i><span style="color: green">Mascotas Permitidas</span>':'<i style="color: red" class="fas fa-ban"></i><span style="color: red">No se Permiten Mascotas</span>'}</p>
      </div> `
}
cardContainer2.innerHTML = targetaAlqui;                 /* de aqui para arriba funciona */
    

    
const cardContainer22 = document.querySelector('#alquiler');  
    /* cardContainer11.innerHTML += propiedades_alquiler[0]; 
    cardContainer11.innerHTML += propiedades_alquiler[1]; 
    cardContainer11.innerHTML += propiedades_alquiler[2];  */
    
    /* este es el for que manda los primeros 3 objetos del arreglo propiedades en alquiler a la pagina principal (index.html) */
targetaAlqui="";
for (let index = 0; index < propiedades_alquiler.length < 3; index++) {
  targetaAlqui += `
  <div class="venta2" >
      <h2>${propiedades_en_venta[index].nombre}</h2>  
      <img src= ${propiedades_en_venta[index].src} alt="">
      <h5>Descripcion: ${propiedades_en_venta[index].descripcion} </h5>
      <p>Ubicacion: ${propiedades_en_venta[index].ubicacion}</p>
      <p>Habitaciones: ${propiedades_en_venta[index].habitaciones}</p>
      <p>Costo: $${propiedades_en_venta[index].costo}</p>
      <p>${propiedades_en_venta[index].smoke?'<i style="color: green" class="fas fa-smoking"></i><span style="color: green"> Permitido Fumar</span>':'<i style="color: red" class="fas fa-smoking-ban"></i><span style="color: red">No se permite fumar</span>'}</p>
      <p>${propiedades_en_venta[index].pets?'<i style="color: green" class="fas fa-paw"></i><span style="color: green">Mascotas Permitidas</span>':'<i style="color: red" class="fas fa-ban"></i><span style="color: red">No se Permiten Mascotas</span>'}</p>
  </div> `
}
cardContainer22.innerHTML = targetaAlqui; 
// Tengo que enviar la variable targetaAlqui que contiene a los tres objetos para mostrar en la pagina principal