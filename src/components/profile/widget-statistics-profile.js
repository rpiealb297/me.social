import React from 'react';

function WidgetStatisticsProfile(props) {
    
    // Renderizar los datos del profile
    return (
        <ul>
            <li>
                <div class="counter">{props.statistics.followers}</div>
                <div class="heading">Followers</div>
            </li>
            <li>
                <div class="counter">{props.statistics.likes}</div>
                <div class="heading">Likes</div>
            </li>
            <li>
                <div class="counter">{props.statistics.products}</div>
                <div class="heading">Products</div>
            </li>
        </ul>
    );
}

export default WidgetStatisticsProfile;