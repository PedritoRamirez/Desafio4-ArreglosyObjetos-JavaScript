import propiedades_en_venta from "./propiedadesVenta.js";


const cardContainer1 = document.querySelector('#contenedor2');
let targetaVenta = "";

for (const elementos of propiedades_en_venta) {
  targetaVenta += `
    <div class="venta1" >
      <h2>${elementos.nombre}</h2>  
      <img src= ${elementos.src} alt="">
      <h5>Descripcion: ${elementos.descripcion} </h5>
      <p>Ubicacion: ${elementos.ubicacion}</p>
      <p>Habitaciones: ${elementos.habitaciones}</p>
      <p>Costo: $${elementos.costo}</p>
      <p>${elementos.smoke?'<i style="color: green" class="fas fa-smoking"></i><span style="color: green"> Permitido Fumar</span>':'<i style="color: red" class="fas fa-smoking-ban"></i><span style="color: red">No se permite fumar</span>'}</p>
      <p>${elementos.pets?'<i style="color: green" class="fas fa-paw"></i><span style="color: green">Mascotas Permitidas</span>':'<i style="color: red" class="fas fa-ban"></i><span style="color: red">No se Permiten Mascotas</span>'}</p>
    </div> `
}
cardContainer1.innerHTML = targetaVenta;                                /* de aqui para arriba funciona */


  /* este es el for que manda los primeros 3 objetos del arreglo propiedades en venta a la pagina principal (index.html) */

  /* de aqui para abajo no funciona */
  const cardContainer11 = document.querySelector('#venta'); 
  targetaVenta = "";
  for (let index = 0; index < propiedades_en_venta.length < 3; index++) {
    targetaVenta += `
    <div class="venta1" >
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
  cardContainer11.innerHTML = targetaVenta; 
  // Tengo que enviar la variable targetaVenta que contiene a los tres objetos para mostrar en la pagina principal
                
 



