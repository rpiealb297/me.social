import React from 'react';

function LateralMenu() {
  return (
                <div class="compact-sidebar light-sidebar has-shadow">
                    <nav class="side-navbar box-scroll sidebar-scroll">
                        <ul class="list-unstyled">
                            <li>
                                <a href="news">
                                    <i class="ti ti-receipt"></i><span>Newsfeed</span>
                                </a>
                            </li>
                            <li>
                                <a href="messages">
                                    <i class="ti ti-comments"></i><span>Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="friends">
                                    <i class="ti ti-user"></i><span>Friends</span>
                                </a>
                            </li>
                            <li>
                                <a href="groups">
                                    <i class="ti ti-world"></i><span>Groups</span>
                                </a>
                            </li>
                            <li>
                                <a href="events">
                                    <i class="ti ti-calendar"></i><span>Events</span>
                                </a>
                            </li>
                            <li>
                                <a href="musics">
                                    <i class="ti ti-headphone"></i><span>Musics</span>
                                </a>
                            </li>
                            <li>
                                <a href="images">
                                    <i class="ti ti-gallery"></i><span>Images</span>
                                </a>
                            </li>
                            <li>
                                <a href="videos">
                                    <i class="ti ti-control-play"></i><span>Videos</span>
                                </a>
                            </li>
                            <li>
                                <a href="statistics">
                                    <i class="ti ti-stats-up"></i><span>Statistics</span>
                                </a>
                            </li>
                            <li>
                                <a href="back">
                                    <i class="la la-angle-left"></i><span>Go Back</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>    
    );
}
        
export default LateralMenu;