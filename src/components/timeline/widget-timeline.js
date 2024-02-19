import React from 'react';
import { useState, useEffect } from 'react';
import WidgetComments from './widget-comments';

function WidgetTimeLine() {
    const [datos, setDatos] = useState(null);

    useEffect(() => {
      const url = 'http://api.me.social/timeline';
  
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((data) => setDatos(data))
        .catch((error) => console.error("Error al cargar los datos de la API:", error));
    }, []);

    if (!datos) 
        return ( 
            <div class="widget has-shadow">
                Cargando...
            </div>
        );

    return (
        <div>
            {
                datos.map((timeline) =>(
                    <div class="widget has-shadow">
                        <div class="widget-header d-flex align-items-center">
                            <div class="user-image">
                                <img class="rounded-circle" src={timeline.image_url} alt="..."></img>
                            </div>
                            <div class="d-flex flex-column mr-auto">
                                <div class="title">
                                    <span class="username">{timeline.name}</span>
                                </div>
                                <div class="time">{timeline.time}</div>
                            </div>
                            <div class="widget-options">
                                <div class="dropdown">
                                    <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
                                        <i class="la la-ellipsis-h"></i>
                                    </button>
                                    <div class="dropdown-menu">
                                        <a href="javascript:void(0);" class="dropdown-item"> 
                                            <i class="la la-edit"></i>Edit Post
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item"> 
                                            <i class="la la-trash"></i>Delete Post
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item"> 
                                            <i class="la la-bell-slash"></i>Disable Notifications
                                        </a>
                                        <a href="javascript:void(0);" class="dropdown-item faq"> 
                                            <i class="la la-question-circle"></i>FAQ
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="widget-body">
                            <p>
                                {timeline.description}
                            </p>
                        </div>
                        <div class="widget-footer d-flex align-items-center">
                            <div class="col-xl-8 col-md-8 col-7 no-padding d-flex justify-content-start">
                                <div class="users-like">
                                    <a href="javascript:void(0);">
                                        <img src="assets/img/avatar/avatar-01.jpg" class="img-fluid rounded-circle" alt="..."></img>
                                    </a>
                                    <a href="javascript:void(0);">
                                        <img src="assets/img/avatar/avatar-02.jpg" class="img-fluid rounded-circle" alt="..."></img>
                                    </a>
                                    <a href="javascript:void(0);">
                                        <img src="assets/img/avatar/avatar-03.jpg" class="img-fluid rounded-circle" alt="..."></img>
                                    </a>
                                    <a href="javascript:void(0);">
                                        <img src="assets/img/avatar/avatar-09.jpg" class="img-fluid rounded-circle" alt="..."></img>
                                    </a>
                                    <a class="view-more" href="javascript:void(0);">
                                        +4
                                    </a>
                                 </div>
                            </div>
                            <div class="col-xl-4 col-md-4 col-5 no-padding d-flex justify-content-end">
                                <div class="meta">
                                    <ul>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i class="la la-comment"></i><span class="numb">{timeline.likes}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i class="la la-heart-o"></i><span class="numb">{timeline.likes}</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>   
                        {
                            timeline.replies.map((reply) => (
                                <WidgetComments comments={reply} />
                            ))
                        }
                    </div>
                ))
            }  
        </div>
    );
}

export default WidgetTimeLine;