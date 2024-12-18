// Propiedades en alquiler
const rentalEstates = [
  {
    title: 'Departamento en Las Condes',
    src: './assets/img/estates/las-condes-depto.webp',
    description: 'Hermoso departamento amoblado en el centro de Las Condes.',
    location: 'Las Condes, Santiago',
    rooms: 2,
    price: 750000,
    smoke: false,
    pets: true,
  },
  {
    title: 'Casa en Viña del Mar',
    src: './assets/img/estates/vina-casa.webp',
    description: 'Casa amplia con jardín a pocos minutos de la playa.',
    location: 'Viña del Mar, Valparaíso',
    rooms: 3,
    price: 1200000,
    smoke: false,
    pets: false,
  },
  {
    title: 'Loft en Providencia',
    src: './assets/img/estates/providencia-loft.webp',
    description: 'Moderno loft ideal para profesionales.',
    location: 'Providencia, Santiago',
    rooms: 1,
    price: 500000,
    smoke: true,
    pets: true,
  },
  {
    title: 'Cabaña en Puerto Varas',
    src: './assets/img/estates/puerto-varas-cabana.webp',
    description: 'Acogedora cabaña con vistas al lago Llanquihue.',
    location: 'Puerto Varas, Los Lagos',
    rooms: 2,
    price: 650000,
    smoke: true,
    pets: false,
  },
];

// Propiedades en venta
const saleEstates = [
  {
    title: 'Departamento en Santiago Centro',
    src: './assets/img/estates/santiago-depto.webp',
    description: 'Departamento nuevo cerca del metro y servicios.',
    location: 'Santiago Centro, Santiago',
    rooms: 2,
    price: 75000000,
    smoke: false,
    pets: true,
  },
  {
    title: 'Casa en La Serena',
    src: './assets/img/estates/la-serena.webp',
    description: 'Casa familiar con patio y estacionamiento.',
    location: 'La Serena, Coquimbo',
    rooms: 4,
    price: 135000000,
    smoke: true,
    pets: true,
  },
  {
    title: 'Parcela en Curicó',
    src: './assets/img/estates/curico-parcela.webp',
    description: 'Parcela con 5000 m² de terreno y casa estilo rústico.',
    location: 'Curicó, Maule',
    rooms: 3,
    price: 98000000,
    smoke: false,
    pets: true,
  },
  {
    title: 'Penthouse en Vitacura',
    src: './assets/img/estates/vitacura-penthouse.webp',
    description: 'Penthouse de lujo con vistas panorámicas.',
    location: 'Vitacura, Santiago',
    rooms: 3,
    price: 380000000,
    smoke: true,
    pets: false,
  },
];

// Se obtienen los elementos del DOM
const homeRentalEstatesContainer = document.getElementById(
  'propiedades-alquiler-container'
);
const homeSaleEstatesContainer = document.getElementById(
  'propiedades-venta-container'
);

// Arreglo con los ultimas 3 propiedades en venta
const lastThreeEstatesForSale = saleEstates.slice(-3);

// Arreglo con las ultimas 3 propiedades en alquiler
const lastThreeEstatesForRent = rentalEstates.slice(-3);

// Función para iterar un array de propiedades para añadirlas al html y que acepte la cantidad de propiedades a mostrar. Si no se pasa la cantidad, se muestran todas las propiedades

function addEstatesToHtml(estates, container, amount = estates.length) {
  for (const {
    title,
    src,
    description,
    location,
    rooms,
    price,
    smoke,
    pets,
  } of estates.slice(-amount)) {
    container.innerHTML += `
          <div class="col-md-4 mb-4">
              <div class="card h-100">
                <img
                  src="${src}"
                  class="card-img-top"
                  alt="Imagen de la propiedad"
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${title}
                  </h5>
                  <p class="card-text">
                    ${description}
                  </p>
                  <p>
                    <i class="fas fa-map-marker-alt"></i> ${location}
                  </p>
                  <p>
                    <i class="fas fa-bed"></i> ${rooms} Habitaciones
                  </p>
                  <p><i class="fas fa-dollar-sign"></i> ${price.toLocaleString()}</p>
                  <p class="${smoke ? 'text-success' : 'text-danger'}">
                     ${
                       smoke
                         ? '<i class="fa-solid fa-smoking"></i> Se permite fumar'
                         : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
                     }
                  </p>
                  <p class="${pets ? 'text-success' : 'text-danger'}">
                    ${
                      pets
                        ? '<i class="fa-solid fa-paw"></i> Mascotas permitidas'
                        : '<i class="fas fa-ban"></i> No se permiten mascotas'
                    }
                  </p>
                </div>
              </div>
            </div>`;
  }
}

// Se añaden las ultimas 3 propiedades en venta al html si existe el contenedor
homeSaleEstatesContainer &&
  addEstatesToHtml(saleEstates, homeSaleEstatesContainer, 3);

// Se añaden las ultimas 3 propiedades en arriendo al html si existe el contenedor
homeRentalEstatesContainer &&
  addEstatesToHtml(rentalEstates, homeRentalEstatesContainer, 3);

// PÁGINA PROPIEDADES EN VENTA ----------------------------------------------
// Se obtienen los elementos del DOM
const ventaSaleEstatesContainer = document.getElementById(
  'propiedades-venta-container-all'
);
// Se añaden todas las propiedades en venta al html de la pagina de propiedades en venta si existe el contenedor
ventaSaleEstatesContainer &&
  addEstatesToHtml(saleEstates, ventaSaleEstatesContainer);

// PÁGINA PROPIEDADES EN ALQUILER ----------------------------------------------
// Se obtienen los elementos del DOM
const alquilerRentalEstatesContainer = document.getElementById(
  'propiedades-alquiler-container-all'
);
// Se añaden todas las propiedades en alquiler al html de la pagina de propiedades en alquiler si existe el contenedor
alquilerRentalEstatesContainer &&
  addEstatesToHtml(rentalEstates, alquilerRentalEstatesContainer);
