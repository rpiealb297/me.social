import React from 'react';

function WidgetProfile(props) {
    
    // Renderizar los datos del profile
    return (
        <div>
            <div class="image-default">
                <img class="rounded-circle" src={props.profile.image_url} alt="..."></img>
            </div>
            <div class="infos">
                <h2>{props.profile.name}</h2>
                <div class="location">{props.profile.location}</div>
            </div>
        </div>
    );
}

export default WidgetProfile;