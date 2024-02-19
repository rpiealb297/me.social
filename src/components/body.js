import React from 'react';
import LateralMenu from './lateral-menu';
import WidgetHeaderProfile from './profile/widget-header-profile';
import WidgetFriends from './friends/widget-friends';
import WidgetPhotos from './photos/widget-photos';
import WidgetTimeLine from './timeline/widget-timeline';

function Body() {
  return (
            <div class="page-content d-flex align-items-stretch">
                <LateralMenu />

                <div class="content-inner compact">
      					<div class="jumbotron jumbotron-fluid"></div>
                    <div class="container-fluid">
                        <div class="row justify-content-center">
                            <div class="col-xl-11">
                                <div class="widget head-profile has-shadow">
                                    <WidgetHeaderProfile />
                                </div>
                                <div class="row">
                                    <div class="col-xl-3 column">
                                        <div class="widget has-shadow">
                                            <div class="widget-header bordered no-actions d-flex align-items-center">
                                                <h5>About Me</h5>
                                            </div>
                                            <div class="widget-body">
                                                <p>
                                                    Hi, I'm David a quantum enthusiast with a passion for unraveling the mysteries of the universe. Hat, glasses, and a curious mind!
                                                </p>
                                            </div>
                                        </div>
                                        <div class="widget has-shadow">
                                            <div class="widget-header bordered no-actions d-flex align-items-center">
                                                <h5>Twitter Feed</h5>
                                            </div>
                                            <div class="widget-body p-0">
                                                <ul class="list-group w-100">
                                                    <li class="list-group-item">
                                                        <div class="media">
                                                            <div class="media-body align-self-center">
                                                                <div class="text-dark pb-2">
                                                                    <i class="ion-social-twitter align-middle text-twitter pr-2"></i>@farady_dan
                                                                </div>
                                                                <p>
                                                                "Just added a quantum twist to my new ride 🏍️⚛️. Let's see if Schrödinger's cat enjoys the spin through spacetime! 🐱💨 <a href="#" class="text-twitter">#QuantumCruising</a> " 🚀🏁 <a href="#" class="text-twitter">#NewWheels</a>
                                                                </p>
                                                                <small>1 hour ago</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="media">
                                                            <div class="media-body align-self-center">
                                                                <div class="text-dark pb-2">
                                                                    <i class="ion-social-twitter align-middle text-twitter pr-2"></i>@dfarady_dan
                                                                </div>
                                                                <p>
                                                                "Diving into 'Zero Frequency' by an incredible Spanish author. 📖🇪🇸 This one promises a thrilling journey through the universe of possibilities. Can't wait to unravel its mysteries! 🌌🧠 <a href="#" class="text-twitter">#Bookworm</a>" 📚🔍
                                                                    
                                                                </p>
                                                                <small>2 hours ago</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="widget has-shadow">
                                            <div class="widget-header bordered no-actions d-flex align-items-center">
                                                <h5>Blog Posts</h5>
                                            </div>
                                            <div class="widget-body p-0">
                                                <ul class="list-group w-100">
                                                    <li class="list-group-item">
                                                        <div class="media">
                                                            <div class="media-body align-self-center">
                                                                <h3 class="mb-3">A Journey Through Time and Quantum Physics</h3>
                                                                <p>
                                                                In this blog post, Professor Dan Faraday could combine his passion for quantum physics and time to explore intriguing concepts such as relativity, wormholes, and the possibility of time travel. He could discuss the theories of Stephen Hawking and other prominent physicists and how these theories have influenced his personal understanding of time and space.
                                                                </p>
                                                                <small>1 hour ago</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-group-item">
                                                        <div class="media">
                                                            <div class="media-body align-self-center">
                                                                <h3 class="mb-3">The Quantum Bike: Blending Two Passions</h3>
                                                                <p>
                                                                Given Dan's fondness for his new motorbike with a quantum-themed sticker, he could write a fun and engaging blog post about his experience as a motorcyclist and a physics enthusiast. He could discuss how he combines his two passions, the thrill of riding a motorcycle and his fascination with the mysteries of the quantum universe, and how this unique blend provides him with a special perspective on life and adventure.
                                                                </p>
                                                                <small>1 day ago</small>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <WidgetTimeLine />
                                    </div>
                                    <div class="col-xl-3 column">
                                        <div class="widget has-shadow">
                                            <div class="widget-header bordered no-actions d-flex align-items-center">
                                                <h5>Friends (104)</h5>
                                            </div>
                                            <div class="widget-body">
                                                <WidgetFriends />
                                            </div>
                                        </div>
                                        <div class="widget has-shadow">
                                            <div class="widget-header bordered no-actions d-flex align-items-center">
                                                <h5>Last Photos</h5>
                                            </div>
                                            <div class="widget-body p-3">
                                                <WidgetPhotos />
                                            </div>
                                        </div>
                                        <div class="widget no-bg text-center">
                                            <ul class="social-network">
                                                <li>
                                                    <a href="javascript:void(0);" class="ico-facebook" title="Facebook">
                                                        <i class="ion-social-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="ico-twitter" title="Twitter">
                                                        <i class="ion-social-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="ico-youtube" title="Youtube">
                                                        <i class="ion-social-youtube"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="ico-linkedin" title="Linkedin">
                                                        <i class="ion-social-linkedin"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer class="main-footer">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center">
                                <p class="text-gradient-02">Design By Saerox</p>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center">
                                <ul class="nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="documentation.html">Documentation</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="changelog.html">Changelog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                    <a href="#" class="go-top"><i class="la la-arrow-up"></i></a>
                    <div class="off-sidebar from-right">
                        <div class="off-sidebar-container">
                            <header class="off-sidebar-header">
                                <ul class="button-nav nav nav-tabs mt-3 mb-3 ml-3" role="tablist" id="weather-tab">
                                    <li><a class="active" data-toggle="tab" href="#messenger" role="tab" id="messenger-tab">Messages</a></li>
                                    <li><a data-toggle="tab" href="#today" role="tab" id="today-tab">Today</a></li>
                                </ul>
                                <a href="#off-canvas" class="off-sidebar-close"></a>
                            </header>
                            <div class="off-sidebar-content offcanvas-scroll auto-scroll">
                                <div class="tab-content">
                                    <div role="tabpanel" class="tab-pane show active fade" id="messenger" aria-labelledby="messenger-tab">
                                        <span class="date">Today</span>
                                        <div class="messenger-message messenger-message-sender">
                                            <img class="messenger-image messenger-image-default" src="assets/img/avatar/avatar-02.jpg" alt="..."></img>
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                        <span class="mb-2">Brandon wrote</span>
                                                        Hi David, what's up?
                                                    </p>
                                                </div>
                                                <div class="messenger-details">
                                                    <span class="messenger-message-localization font-size-small">2 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="messenger-message messenger-message-recipient">
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                       Hi Brandon, fine and you?
                                                   </p>
                                                    <p>
                                                       I'm working on the next update of Elisyam
                                                   </p>
                                                </div>
                                                <div class="messenger-details">
                                                    <span class="messenger-message-localisation font-size-small">3 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="messenger-message messenger-message-sender">
                                            <img class="messenger-image messenger-image-default" src="assets/img/avatar/avatar-02.jpg" alt="..."></img>
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                        <span class="mb-2">Brandon wrote</span>
                                                        I can't wait to see
                                                    </p>
                                                </div>
                                                <div class="messenger-details">
                                                    <span class="messenger-message-localization font-size-small">5 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="messenger-message messenger-message-recipient">
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                       I'm almost done
                                                   </p>
                                                </div>
                                                <div class="messenger-details">
                                                    <span class="messenger-message-localisation font-size-small">10 minutes ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="date">Yesterday</span>
                                        <div class="messenger-message messenger-message-sender">
                                            <img class="messenger-image messenger-image-default" src="assets/img/avatar/avatar-05.jpg" alt="..."></img>
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                        I updated the server tonight
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="messenger-message messenger-message-recipient">
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                       Didn't you have any problems?
                                                   </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="messenger-message messenger-message-sender">
                                            <img class="messenger-image messenger-image-default" src="assets/img/avatar/avatar-05.jpg" alt="..."></img>
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                        No!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="messenger-message messenger-message-recipient">
                                            <div class="messenger-message-wrapper">
                                                <div class="messenger-message-content">
                                                    <p>
                                                       Great!
                                                   </p>
                                                    <p>
                                                       See you later!
                                                   </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="enter-message">
                                            <div class="enter-message-form">
                                                <input type="text" placeholder="Enter your message..."/>
                                            </div>
                                            <div class="enter-message-button">
                                                <a href="" class="send"><i class="ion-paper-airplane"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" class="tab-pane fade" id="today" aria-labelledby="today-tab">
                                        <div class="sidebar-heading pt-0">Today</div>
                                        <div class="today-stats mt-3 mb-3">
                                            <div class="row">
                                                <div class="col-4 text-center">
                                                    <i class="la la-users"></i>
                                                    <div class="counter">264</div>
                                                    <div class="heading">Clients</div>
                                                </div>
                                                <div class="col-4 text-center">
                                                    <i class="la la-cart-arrow-down"></i>
                                                    <div class="counter">360</div>
                                                    <div class="heading">Sales</div>
                                                </div>
                                                <div class="col-4 text-center">
                                                    <i class="la la-money"></i>
                                                    <div class="counter">$ 4,565</div>
                                                    <div class="heading">Earnings</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="sidebar-heading">Friends</div>
                                        <div class="quick-friends mt-3 mb-3">
                                            <ul class="list-group w-100">
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-left align-self-center mr-3">
                                                            <img src="https://i.pravatar.cc/300?u=rick" alt="..." class="img-fluid rounded-circle" style = {{ width: '35px' }} ></img>
                                                        </div>
                                                        <div class="media-body align-self-center">
                                                            <a href="javascript:void(0);">Brandon Smith</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-left align-self-center mr-3">
                                                            <img src="https://i.pravatar.cc/300?u=morty" alt="..." class="img-fluid rounded-circle" style = {{ width: '35px' }}></img>
                                                        </div>
                                                        <div class="media-body align-self-center">
                                                            <a href="javascript:void(0);">Louis Henry</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-left align-self-center mr-3">
                                                            <img src="https://i.pravatar.cc/300?u=jerry" alt="..." class="img-fluid rounded-circle" style = {{ width: '35px' }}></img>
                                                        </div>
                                                        <div class="media-body align-self-center">
                                                            <a href="javascript:void(0);">Nathan Hunter</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-left align-self-center mr-3">
                                                            <img src="https://i.pravatar.cc/300?u=summer" alt="..." class="img-fluid rounded-circle" style = {{ width: '35px' }}></img>
                                                        </div>
                                                        <div class="media-body align-self-center">
                                                            <a href="javascript:void(0);">Megan Duncan</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-left align-self-center mr-3">
                                                            <img src="https://i.pravatar.cc/300?u=" alt="..." class="img-fluid rounded-circle" style = {{ width: '35px' }}></img>
                                                        </div>
                                                        <div class="media-body align-self-center">
                                                            <a href="javascript:void(0);">Beverly Oliver</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="sidebar-heading">Settings</div>
                                        <div class="quick-settings mt-3 mb-3">
                                            <ul class="list-group w-100">
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-body align-self-center">
                                                            <p class="text-dark">Notifications Email</p>
                                                        </div>
                                                        <div class="media-right align-self-center">
                                                            <label>
                                                                <input class="toggle-checkbox" type="checkbox" checked></input>
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-body align-self-center">
                                                            <p class="text-dark">Notifications Sound</p>
                                                        </div>
                                                        <div class="media-right align-self-center">
                                                            <label>
                                                                <input class="toggle-checkbox" type="checkbox"></input>
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="list-group-item">
                                                    <div class="media">
                                                        <div class="media-body align-self-center">
                                                            <p class="text-dark">Chat Message Sound</p>
                                                        </div>
                                                        <div class="media-right align-self-center">
                                                            <label>
                                                                <input class="toggle-checkbox" type="checkbox" checked></input>
                                                                <span>
                                                                    <span></span>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
        }
        
        export default Body;