import React from 'react';
import { useState, useEffect } from 'react';

function WidgetPhotos() {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
      const url = 'http://api.me.social/photos';
  
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => setDatos(data))
        .catch((error) => console.error("Error al cargar los datos de la API:", error));
    }, []);

    if (!datos) 
        return ( 
            <div class="row m-0">
                Cargando...
            </div>
        );

    return (
        <div class="row m-0">
            {
                datos.map((photo) =>(
                    <div class="col-xl-6 col-md-6 col-6 p-0">
                        <a href="javascript:void(0);">
                            <img class="img-fluid rounded border border-white" src={photo} alt="..."></img>
                        </a>
                    </div>
                ))
            }            
        </div>
    );
}

export default WidgetPhotos;