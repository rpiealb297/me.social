import React from 'react';
import { useState, useEffect } from 'react';
import WidgetStatisticsProfile from './widget-statistics-profile';
import WidgetProfile from './widget-profile';

function WidgetHeaderProfile() {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
      const url = 'http://api.me.social/profile';
  
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => setDatos(data))
        .catch((error) => console.error("Error al cargar los datos de la API:", error));
    }, []);

    if (!datos) 
        return ( 
            <div class="widget-body pb-0">
                Cargando...
            </div>
        );

    return (
        <div class="widget-body pb-0">
            <div class="row d-flex align-items-center">
                <div class="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center">
                    <WidgetStatisticsProfile statistics={datos}/>
                </div>
                <div class="col-xl-4 col-md-4 d-flex justify-content-center">
                    <WidgetProfile profile={datos} />
                </div>
                <div class="col-xl-4 col-md-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center">
                    <div class="follow">
                        <a class="btn btn-gradient-01" href="me-social.php?action=follow&id=73ab80f32_21"><i class="la la-check"></i>Follow</a>
                        <div class="actions dark">
                            <div class="dropdown">
                                <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
                                    <i class="la la-ellipsis-h"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item"> Report</a>
                                    <a href="#" class="dropdown-item"> Block</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="head-nav nav nav-tabs justify-content-center">
                <li><a class="active" href="timeline">Timeline</a></li>
                <li><a href="about">About</a></li>
                <li><a href="friends">Friends</a></li>
                <li><a href="photos">Photos</a></li>
                <li><a href="videso">Videos</a></li>
            </ul>
        </div>    
    );
}

export default WidgetHeaderProfile;