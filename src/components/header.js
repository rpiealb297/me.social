// src/MiComponente.js

import React from 'react';

function Header() {
  return (
    <header class="header">
                <nav class="navbar fixed-top">        
                    <div class="search-box">
                        <button class="dismiss"><i class="ion-close-round"></i></button>
                        <form id="searchForm" action="#" role="search">
                            <input type="search" placeholder="Search something ..." class="form-control"></input>
                        </form>
                    </div>
                    <div class="navbar-holder d-flex align-items-center align-middle justify-content-between">
                        <div class="navbar-header">
                            <a href="db-social.html" class="navbar-brand">
                                <div class="brand-image brand-big">
                                    <img src="assets/img/logo-cabecera.png" alt="logo" style= {{ width: '70px' }} class="logo-big"></img>
                                </div>
                                <div class="brand-image brand-small">
                                    <img src="assets/img/logo-cabecera.png" alt="logo" class="logo-small"></img>
                                </div>
                            </a>
                            <a id="toggle-btn" href="#" class="menu-btn active">
                                <span></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>
                        <ul class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right">
                            <li class="nav-item d-flex align-items-center"><a id="search" href="#"><i class="la la-search"></i></a></li>
                            <li class="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link"><i class="la la-bell animated infinite swing"></i><span class="badge-pulse"></span></a>
                                <ul aria-labelledby="notifications" class="dropdown-menu notification">
                                    <li>
                                        <div class="notifications-header">
                                            <div class="title">Notifications (1)</div>
                                            <div class="notifications-overlay"></div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfiJRwd4WB2DUaZHpt9W8FcJXTLA9wsSokIQ&usqp=CAU" alt="..." class="img-fluid"></img>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="me-social.php?action=notification&id=73ab80f32_21">
                                            <div class="message-icon">
                                                <i class="la la-user"></i>
                                            </div>
                                            <div class="message-body">
                                                <div class="message-body-heading">
                                                    New user registered
                                                </div>
                                                <span class="date">2 hours ago</span>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a rel="nofollow" href="me-social.php?action=notification&id=73ab80f32_21" class="dropdown-item all-notifications text-center">View All Notifications</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown"><a id="user" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link">
                              <img src="assets/img/avatar/avatar-01.jpg" alt="..." class="avatar rounded-circle"></img></a>
                                <ul aria-labelledby="user" class="user-size dropdown-menu">
                                    <li class="welcome">
                                        <a href="#" class="edit-profil"><i class="la la-gear"></i></a>
                                        <img src="https://i.pravatar.cc/300?u=joselito" alt="..." class="rounded-circle"></img>
                                    </li>
                                    <li>
                                        <a href="me-social.php?action=profile&id=73ab80f32_21" class="dropdown-item"> 
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a href="me-social.php?action=messages&id=73ab80f32_21" class="dropdown-item"> 
                                            Messages
                                        </a>
                                    </li>
                                    <li>
                                        <a href="me-social.php?action=settings&id=73ab80f32_21" class="dropdown-item no-padding-bottom"> 
                                            Settings
                                        </a>
                                    </li>
                                    <li class="separator"></li>
                                    <li>
                                        <a href="me-social.php?action=faq&id=73ab80f32_21" class="dropdown-item no-padding-top"> 
                                            Faq
                                        </a>
                                    </li>
                                    <li><a rel="nofollow" href="me-social.php?action=login&id=73ab80f32_21" class="dropdown-item logout text-center"><i class="ti-power-off"></i></a></li>
                                </ul>
                            </li>
                            <li class="nav-item"><a href="#off-canvas" class="open-sidebar"><i class="la la-ellipsis-h"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
  );
}

export default Header;