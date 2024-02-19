import React from 'react';
import { useState, useEffect } from 'react';

function WidgetFriends() {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
      const url = 'http://api.me.social/friends';
  
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => setDatos(data))
        .catch((error) => console.error("Error al cargar los datos de la API:", error));
    }, []);

    if (!datos) 
        return ( 
            <div class="friends-list">
                <div class="d-flex justify-content-between">
                    Cargando...
                </div>
            </div>
        );

    return (
        <div class="friends-list">
            <div class="d-flex justify-content-between">
                {
                    datos.map((friend) =>(
                        <a href="javascript:void(0);">
                            <img src={friend} class="img-fluid rounded-circle" alt="..."></img>
                        </a>
                    ))
                }
            </div>  
        </div>
    );
}

export default WidgetFriends;