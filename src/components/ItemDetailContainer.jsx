import React from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

  const productos = [
    {   id: 1,
        category: "robots",
        title: "Robot Dolphin S100", 
        description: "El Dolphin S 100 es un limpiafondos ligero y pequeño y es el idóneo para todo tipo de piscinas de hasta 10m de longitud. Sistema de filtración de acceso superior – con un método rápido y sencillo de vaciado y limpieza. Ligero y fácil de manejar.", 
        price: "$500000", 
        pictureUrl: "/src/assets/dolphin-s-100-front-top-45deg.png" 
    },
    {   id: 2,
        category: "robots",
        title: "Robot Dolphin S200", 
        description: "En sólo dos horas, cepilla pisos, paredes y línea de flotación de la piscina, asegurando una cobertura eficiente y los mejores resultados de limpieza.", 
        price: "$600000", 
        pictureUrl: "/src/assets/s200.jpg" 
    },
    {   id: 3,
        category: "quimicos",
        title: "Cloro granulado",
        description: "Cloro granulado Nataclor x 1kg. Acción Prolongada. Ideal para piscinas revestidas", 
        price: "$3000", 
        pictureUrl: "/src/assets/cloro.png" 
    },
    {   id: 4,
        category: "quimicos",
        title: "Cloro instantáneo",
        description: "Cloro instantáneo Nataclor x 1kg. Disolución rápida. Apto para piscinas pintadas",
        price: "$3500",
        pictureUrl: "/src/assets/cloroinst.jpg" 
    },
    {   id: 5,
        category: "accesorios",
        title: "Boya Vulcano",
        description: "Boya Vulcano para pastillas multifunción",
        price: "$2000",
        pictureUrl: "/src/assets/boya.jpg" 
    },
    {   id: 6,
        category: "accesorios",
        title: "Limpiafondo Vulcano",
        description: "Limpiafondo Vulcano. Apto para piletas revestidas y pintadas",
        price: "$5000",
        pictureUrl: "/src/assets/limpia.jpg" 
    }
]


const mostrarProductos = () => {
  return new Promise ((resolve, reject) => {
    if (productos.length === 0) {
      reject(new Error("No hay datos"))
    }
    setTimeout(()=>{
      resolve(productos);
    }, 3000)
  })
}

mostrarProductos().then(productos)

  return (
    <>
      <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer