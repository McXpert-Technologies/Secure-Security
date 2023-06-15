//Header Section Start
class MyHeder extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="nav-on-banner">
        <div class="main-nav py-3 d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light text-uppercase nav-white nav-primary-hover nav-primary-active fw-400">
                            <a class="navbar-brand" href="index.html"><img class="nav-logo" src="assets/images/logo/logo12.png" alt="Logo"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                            <div class="collapse navbar-collapse" id="main-navbar-content">
                            <ul class="navbar-nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="services.html">services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="client.html">Clientele</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-sticky bg-secondary py-2">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col">
                        <nav class="navbar navbar-expand-lg navbar-light text-uppercase nav-white nav-primary-hover nav-primary-active">
                            <a class="navbar-brand" href="index.html"><img class="nav-logo" src="assets/images/logo/logo1.png" alt="Patron"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                            <div class="collapse navbar-collapse" id="sticky-navbar-content">
                                <ul class="navbar-nav justify-content-end">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="services.html">services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="client.html">Clientele</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-mobile py-10 bg-default d-lg-none">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-12 col-xl-12">
                        <div class="h-100 md-py-10">
                            <div class="nav-leftpush-overlay">
                                <nav class="navbar navbar-expand-lg navbar-light justify-content-between nav-dark nav-primary-hover">
                                    <a class="navbar-brand" href="#" rel="home">
                                        <img class="mobile-logo" src="assets/images/logo/logo1.png" alt="Logo">
                                    </a> <button type="button" class="push-nav-toggle d-lg-none bg-white rounded-0">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="navbar-slide-push transation-this">
                                        <div class="login-signup bg-dark d-flex justify-content-between py-10 px-20 align-items-center">
                                            <span class="slide-nav-close"><i class="flaticon-cancel flat-mini text-white"></i></span>
                                        </div>
                                        <div class="menu-and-category px-4">
                                            <div class="menu-primary-menu-container">
                                            <ul class="navbar-nav justify-content-end">
                                            <li class="nav-item">
                                                <a class="nav-link" href="index.html">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="about.html">About Us</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="services.html">services</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="client.html">Clientele</a>
                                            </li>
                                            <li class="nav-item">
                                            <a class="nav-link" href="contact.html">Contact Us</a>
                                            </li>
                                        </ul>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
        `;
  }
}
customElements.define("my-header", MyHeder);

//Footer 1 Section Start
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class=" bg-footer text-light pt-5">
        <div class="container">
            <div class="row row-cols-lg-3 row-cols-1 gy-5 xxs-link-single">
                <div class="col">
                    <div class="footer-widget">
                        <div class="footer-logo mb-4">
                            <a href="#"><img src="assets/images/logo/Flogo.png" alt="Image not found!"></a>
                        </div>
                        <p style="padding-right:30px;">We are a team of dedicated professionals who specialize in providing top-notch security solutions.</p>
                    </div>
                    <div class="footer-widget">
                        <div class="transparent-social-media-1 list-color-light hover-list-color-primary hyperlink-mr-20">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="footer-widget widget-link-double">
                        <h4 class="widget-title text-white mb-4">Quick Links</h4>
                        <ul>
                            <li><a href="index.html"><span class="text">Home</span></a></li>
                            <li><a href="about.html"><span class="text">About Us</span></a></li>
                            <li><a href="services.html"><span class="text">Services</span></a></li>
                            <li><a href="client.html"><span class="text">Clientele</span></a></li>
                            <li><a href="contact.html"><span class="text">Contact Us</span></a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="footer-widget widget-contact-1">
                        <h3 class="widget-title text-white mb-4">Get In Touch</h3>
                        <ul>
                            <li>
                                <h6 class="title text-white"><i class="fa fa-map-marker mr-2"></i>Address :</h6>
                                <span class="text">
                
                                No 92 Kandewatta Road, Nugegoda, Colombo
                                



                                </span>
                            </li>
                            <li>
                                <h6 class="title text-white"> <i class="fa fa-phone mr-2"></i> Phone :</h6>
                                <span class="text">(+94) 11 2821997, (+94) 11 2827762, (+94) 11 2821996</span>
                            </li>
                            <li class="mb-5">
                                <h6 class="title text-white"><i class="fa fa-envelope mr-2"></i> Email :</h6>
                                <span class="text">secure@sltnet.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `;
  }
}
customElements.define("my-footer", MyFooter);

//Footer Bottom 1 Section Start
class MyFooterBottom extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="full-row bg-dark fs-13 py-4">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="d-flex flex-wrap justify-content-center align-items-center">
                            <span class="copyright-text text-white">© 2023 All Rights Reserved by <a target=”_blank” href="https://www.mcxpert.com/">McXpert Technologies</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
  }
}
customElements.define("my-footer-bottom", MyFooterBottom);

//Scroll to top
class MyScroll extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <a href="#" class="bg-primary text-white" id="scroll"><i class="fa fa-angle-up"></i></a>
        `;
  }
}
customElements.define("my-scroll", MyScroll);

//Other Page Header Section Start
class MyOtherHeder extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header id="header" class="default-header bg-default nav-initial nav-on-top">
            <div class="main-nav py-3 d-none d-lg-block">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg navbar-light text-uppercase nav-dark nav-primary-hover nav-primary-active fw-500">
                                <a class="navbar-brand" href="index.html"><img class="nav-logo" src="assets/images/logo/logo2.png" alt="logo"></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="main-navbar-content">
                                    <ul class="navbar-nav justify-content-end">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">About Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="services.html">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="client.html">Clientele</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact Us</a>
                                    </li>
                                </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-sticky bg-white py-2">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col">
                            <nav class="navbar navbar-expand-lg navbar-light text-uppercase nav-dark nav-primary-hover nav-primary-active fw-500">
                                <a class="navbar-brand" href="index.html"><img class="nav-logo" src="assets/images/logo/1.png" alt="Patron"></a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                              </button>
                                <div class="collapse navbar-collapse" id="sticky-navbar-content">
                                    <ul class="navbar-nav justify-content-end">
                                        <li class="nav-item">
                                            <a class="nav-link" href="index.html">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="about.html">About Us</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="services.html">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="client.html">Clientele</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-mobile py-10 bg-default d-lg-none">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12 col-xl-12">
                            <div class="h-100 md-py-10">
                                <div class="nav-leftpush-overlay">
                                    <nav class="navbar navbar-expand-lg navbar-light justify-content-between nav-dark nav-primary-hover">
                                        <a class="navbar-brand" href="#" rel="home">
                                            <img class="mobile-logo" src="assets/images/logo/2.png" alt="Patron">
                                        </a> <button type="button" class="push-nav-toggle d-lg-none bg-white rounded-0">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="navbar-slide-push transation-this">
                                            <div class="login-signup bg-dark d-flex justify-content-between py-10 px-20 align-items-center">
                                                <span class="slide-nav-close"><i class="flaticon-cancel flat-mini text-white"></i></span>
                                            </div>
                                            <div class="menu-and-category px-4">
                                                <div class="menu-primary-menu-container">
                                                    <ul class="navbar-nav justify-content-end">
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="index.html">Home</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="about.html">About Us</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="services.html">Services</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="client.html">Clientele</a>
                                                        </li>
                                                        <li class="nav-item">
                                                            <a class="nav-link" href="contact.html">Contact Us</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        `;
  }
}
customElements.define("my-other-header", MyOtherHeder);
