import React from 'react';

function WidgetComments(props) {
    console.log(props);
    return (
        <div class="comments">
            <div class="comments-header d-flex align-items-center">
                <div class="user-image">
                    <img class="rounded-circle" src={props.comments.image_url} alt="..."></img>
                </div>
                <div class="d-flex flex-column mr-auto">
                    <div class="title">
                        <span class="username">{props.comments.name}</span>
                    </div>
                    <div class="time">{props.comments.time}</div>
                </div>
            </div>
            <div class="comments-body">
                <p>
                {props.comments.description}
                </p>
            </div>
            <div class="comments-footer d-flex align-items-center">
                <div class="meta">
                    <ul>
                        <li>
                            <a href="javascript:void(0);">
                                <i class="la la-flag"></i>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <span class="rep">Reply</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WidgetComments;