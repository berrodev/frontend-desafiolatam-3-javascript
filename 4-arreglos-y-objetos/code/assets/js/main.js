// Propiedades en alquiler

const propiedades_alquiler = [
  {
    nombre: 'Departamento en Las Condes',
    src: 'https://example.com/las-condes-alquiler.jpg',
    descripcion: 'Hermoso departamento amoblado en el centro de Las Condes.',
    ubicacion: 'Las Condes, Santiago',
    habitaciones: 2,
    costo: 750000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Casa en Viña del Mar',
    src: 'https://example.com/vina-casa-alquiler.jpg',
    descripcion: 'Casa amplia con jardín a pocos minutos de la playa.',
    ubicacion: 'Viña del Mar, Valparaíso',
    habitaciones: 3,
    costo: 1200000,
    smoke: false,
    pets: false,
  },
  {
    nombre: 'Loft en Providencia',
    src: 'https://example.com/providencia-loft-alquiler.jpg',
    descripcion: 'Moderno loft ideal para profesionales.',
    ubicacion: 'Providencia, Santiago',
    habitaciones: 1,
    costo: 500000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Cabaña en Puerto Varas',
    src: 'https://example.com/puerto-varas-cabana.jpg',
    descripcion: 'Acogedora cabaña con vistas al lago Llanquihue.',
    ubicacion: 'Puerto Varas, Los Lagos',
    habitaciones: 2,
    costo: 650000,
    pets: false,
  },
];

// Propiedades en venta

const propiedades_venta = [
  {
    nombre: 'Departamento en Santiago Centro',
    src: 'https://example.com/santiago-centro-venta.jpg',
    descripcion: 'Departamento nuevo cerca del metro y servicios.',
    ubicacion: 'Santiago Centro, Santiago',
    habitaciones: 2,
    costo: 75000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Casa en La Serena',
    src: 'https://example.com/la-serena-casa-venta.jpg',
    descripcion: 'Casa familiar con patio y estacionamiento.',
    ubicacion: 'La Serena, Coquimbo',
    habitaciones: 4,
    costo: 135000000,
    smoke: true,
    pets: true,
  },
  {
    nombre: 'Parcela en Curicó',
    src: 'https://example.com/curico-parcela-venta.jpg',
    descripcion: 'Parcela con 5000 m² de terreno y casa estilo rústico.',
    ubicacion: 'Curicó, Maule',
    habitaciones: 3,
    costo: 98000000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Penthouse en Vitacura',
    src: 'https://example.com/vitacura-penthouse-venta.jpg',
    descripcion: 'Penthouse de lujo con vistas panorámicas.',
    ubicacion: 'Vitacura, Santiago',
    habitaciones: 3,
    costo: 380000000,
    smoke: true,
    pets: false,
  },
];

const homeAlquilerContainer = document.getElementById(
  'propiedades-alquiler-container'
);
const homeVentaContainer = document.getElementById(
  'propiedades-venta-container'
);

// Array con las ultimas 3 propiedades en venta
const ultimas3PropiedadesVenta = propiedades_venta.slice(-3);

for (propiedad of ultimas3PropiedadesVenta) {
  homeVentaContainer.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento en el centro de la ciudad
                </h5>
                <p class="card-text">
                  Este apartamento de 2 habitaciones está ubicado en el corazón
                  de la ciudad, cerca de todo.
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Main Street,
                  Anytown, CA 91234
                </p>
                <p>
                  <i class="fas fa-bed"></i> 2 Habitaciones |
                  <i class="fas fa-bath"></i> 2 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 2.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
            </div>
          </div>`;
}
// homeAlquilerContainer.innerHTML = `
//         <div class="col-md-4 mb-4">
//             <div class="card">
//               <img
//                 src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
//                 class="card-img-top"
//                 alt="Imagen del departamento"
//               />
//               <div class="card-body">
//                 <h5 class="card-title">
//                   Apartamento en el centro de la ciudad
//                 </h5>
//                 <p class="card-text">
//                   Este apartamento de 2 habitaciones está ubicado en el corazón
//                   de la ciudad, cerca de todo.
//                 </p>
//                 <p>
//                   <i class="fas fa-map-marker-alt"></i> 123 Main Street,
//                   Anytown, CA 91234
//                 </p>
//                 <p>
//                   <i class="fas fa-bed"></i> 2 Habitaciones |
//                   <i class="fas fa-bath"></i> 2 Baños
//                 </p>
//                 <p><i class="fas fa-dollar-sign"></i> 2.000</p>
//                 <p class="text-danger">
//                   <i class="fas fa-smoking-ban"></i> No se permite fumar
//                 </p>
//                 <p class="text-success">
//                   <i class="fas fa-paw"></i> Mascotas permitidas
//                 </p>
//               </div>
//             </div>
//           </div>`;
