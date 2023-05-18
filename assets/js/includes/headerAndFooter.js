//Header Section Start
class MyHeder extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <header id="header" class="nav-on-banner">
        <div class="main-nav py-3 d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg navbar-light text-uppercase nav-white nav-primary-hover nav-primary-active fw-400">
                            <a class="navbar-brand" href="index.html"><img class="nav-logo" src="assets/images/logo/1.png" alt="Patron"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                            <div class="collapse navbar-collapse" id="main-navbar-content">
                                <ul class="navbar-nav justify-content-end">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index-security.html">Home</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="about.html">About</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="about.html">About</a></li>
                                            <li><a class="dropdown-item" href="about-2.html">About2</a></li>
                                            <li><a class="dropdown-item" href="about-3.html">About3</a></li>
                                            <li><a class="dropdown-item" href="our-history.html">Our History</a></li>
                                            <li><a class="dropdown-item" href="our-mission.html">Our Mission</a></li>
                                            <li><a class="dropdown-item" href="our-vision.html">Our Vision</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown unicode-megamenu-item-full-width unicode-megamenu-dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">Element</a>
                                        <div class="dropdown-menu unicode-megamenu-wrapper">
                                            <div class="mega-container unicode-megamenu-holder">
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-accordions.html"><span>Accordions</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-achievement.html"><span>Achievement</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-animation.html"><span>Animation</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-blog.html"><span>Blog</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-brand.html"><span>Brand</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-buttons.html"><span>Buttons</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-contact.html"><span>Contact</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-footer.html"><span>Footer</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-form.html"><span>Form</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-hover-effects.html"><span>Hover Effect</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-newsletter.html"><span>Newsletter</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-photo-gallery.html"><span>Photo Gallery</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-portfolio.html"><span>Portfolio</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-pricing-table.html"><span>Pricing Table</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-products.html"><span>Products</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-sections.html"><span>Sections</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-slider.html"><span>Slider</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-tab.html"><span>Tab</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-team.html"><span>Team</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-testimonials.html"><span>Testimonial</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-thumb-block.html"><span>Thumbnail Block</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-typography.html"><span>Typography</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">Pages</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="service.html">Service</a></li>
                                            <li><a class="dropdown-item" href="service-details.html">Service Details</a></li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="pricing.html">Pricing</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                                                    <li><a class="dropdown-item" href="pricing-extend.html">Pricing Extend</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="career.html">Career</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="career.html">Career</a></li>
                                                    <li><a class="dropdown-item" href="application.html">Application</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="team.html">Team</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="team.html">Team Member</a></li>
                                                    <li><a class="dropdown-item" href="profile-details.html">Member Profile</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="certification.html">Certificate</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="certification.html">Certification</a></li>
                                                    <li><a class="dropdown-item" href="certification-detail.html">Certification Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="general-support.html">Help and Support</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="how-it-work.html">How It Work</a></li>
                                                    <li><a class="dropdown-item" href="general-support.html">General Support</a></li>
                                                    <li><a class="dropdown-item" href="help-center.html">Help Center</a></li>
                                                    <li><a class="dropdown-item" href="support-article-details.html">Support Article</a></li>
                                                    <li><a class="dropdown-item" href="terms-and-condition.html">Terms &amp; Condition</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="dropdown-item" href="testimonial.html">Testimonial</a></li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="gallery.html">Gallery</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="gallery.html">Gallery default</a></li>
                                                    <li><a class="dropdown-item" href="gallery-fullwidth.html">Gallery fullwidth</a></li>
                                                    <li><a class="dropdown-item" href="gallery-masonry.html">Gallery masonry</a></li>
                                                    <li><a class="dropdown-item" href="gallery-detail.html">Gallery Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="dropdown-item" href="quote.html">Quote</a></li>
                                            <li><a class="dropdown-item" href="faq.html">Faq</a></li>
                                            <li><a class="dropdown-item" href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">Shop</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="shop.html">Shop</a></li>
                                            <li><a class="dropdown-item" href="shop-list.html">Shop List</a></li>
                                            <li><a class="dropdown-item" href="shop-single.html">Shop Single</a></li>
                                            <li><a class="dropdown-item" href="sign-in.html">Sign In</a></li>
                                            <li><a class="dropdown-item" href="sign-up.html">Sign Up</a></li>
                                            <li><a class="dropdown-item" href="cart.html">Cart</a></li>
                                            <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">News</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="blog.html">News</a></li>
                                            <li><a class="dropdown-item" href="blog-fullwidth-box.html">News Full Box Width</a></li>
                                            <li><a class="dropdown-item" href="blog-fullwidth.html">News Full Width</a></li>
                                            <li><a class="dropdown-item" href="blog-left-sidebar.html">News Left Sidebar</a></li>
                                            <li><a class="dropdown-item" href="blog-right-sidebar.html">News Right Sidebar</a></li>
                                            <li><a class="dropdown-item" href="news-details.html">News Details Right</a></li>
                                            <li><a class="dropdown-item" href="news-details-left-sidebar.html">News Details Left</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact</a>
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
                            <a class="navbar-brand" href="index.html"><img class="nav-logo" src="assets/images/logo/1.png" alt="Patron"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sticky-navbar-content" aria-controls="sticky-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                            <div class="collapse navbar-collapse" id="sticky-navbar-content">
                                <ul class="navbar-nav justify-content-end">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index-security.html">Home</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">About</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="about.html">About</a></li>
                                            <li><a class="dropdown-item" href="about-2.html">About2</a></li>
                                            <li><a class="dropdown-item" href="about-3.html">About3</a></li>
                                            <li><a class="dropdown-item" href="our-history.html">Our History</a></li>
                                            <li><a class="dropdown-item" href="our-mission.html">Our Mission</a></li>
                                            <li><a class="dropdown-item" href="our-vision.html">Our Vision</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown unicode-megamenu-item-full-width unicode-megamenu-dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">Element</a>
                                        <div class="dropdown-menu unicode-megamenu-wrapper">
                                            <div class="mega-container unicode-megamenu-holder">
                                                <div class="row">
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-accordions.html"><span>Accordions</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-achievement.html"><span>Achievement</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-animation.html"><span>Animation</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-blog.html"><span>Blog</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-brand.html"><span>Brand</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-buttons.html"><span>Buttons</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-contact.html"><span>Contact</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-footer.html"><span>Footer</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-form.html"><span>Form</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-hover-effects.html"><span>Hover Effect</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-newsletter.html"><span>Newsletter</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-photo-gallery.html"><span>Photo Gallery</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-portfolio.html"><span>Portfolio</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-pricing-table.html"><span>Pricing Table</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-products.html"><span>Products</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-sections.html"><span>Sections</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-slider.html"><span>Slider</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-3 col-sm-6">
                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                            <li class="menu-item">
                                                                <ul class="unicode-sub-megamenu">
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-tab.html"><span>Tab</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-team.html"><span>Team</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-testimonials.html"><span>Testimonial</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-thumb-block.html"><span>Thumbnail Block</span></a></li>
                                                                    <li class="menu-item"><a class="dropdown-item" href="element-typography.html"><span>Typography</span></a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">Pages</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="service.html">Service</a></li>
                                            <li><a class="dropdown-item" href="service-details.html">Service Details</a></li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="pricing.html">Pricing</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                                                    <li><a class="dropdown-item" href="pricing-extend.html">Pricing Extend</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="career.html">Career</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="career.html">Career</a></li>
                                                    <li><a class="dropdown-item" href="application.html">Application</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="team.html">Team</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="team.html">Team Member</a></li>
                                                    <li><a class="dropdown-item" href="profile-details.html">Member Profile</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="certification.html">Certificate</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="certification.html">Certification</a></li>
                                                    <li><a class="dropdown-item" href="certification-detail.html">Certification Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="general-support.html">Help and Support</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="how-it-work.html">How It Work</a></li>
                                                    <li><a class="dropdown-item" href="general-support.html">General Support</a></li>
                                                    <li><a class="dropdown-item" href="help-center.html">Help Center</a></li>
                                                    <li><a class="dropdown-item" href="support-article-details.html">Support Article</a></li>
                                                    <li><a class="dropdown-item" href="terms-and-condition.html">Terms &amp; Condition</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="dropdown-item" href="testimonial.html">Testimonial</a></li>
                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="gallery.html">Gallery</a>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="gallery.html">Gallery default</a></li>
                                                    <li><a class="dropdown-item" href="gallery-fullwidth.html">Gallery fullwidth</a></li>
                                                    <li><a class="dropdown-item" href="gallery-masonry.html">Gallery masonry</a></li>
                                                    <li><a class="dropdown-item" href="gallery-detail.html">Gallery Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a class="dropdown-item" href="quote.html">Quote</a></li>
                                            <li><a class="dropdown-item" href="faq.html">Faq</a></li>
                                            <li><a class="dropdown-item" href="404.html">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">Shop</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="shop.html">Shop</a></li>
                                            <li><a class="dropdown-item" href="shop-list.html">Shop List</a></li>
                                            <li><a class="dropdown-item" href="shop-single.html">Shop Single</a></li>
                                            <li><a class="dropdown-item" href="sign-in.html">Sign In</a></li>
                                            <li><a class="dropdown-item" href="sign-up.html">Sign Up</a></li>
                                            <li><a class="dropdown-item" href="cart.html">Cart</a></li>
                                            <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#">News</a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="blog.html">News</a></li>
                                            <li><a class="dropdown-item" href="blog-fullwidth-box.html">News Full Box Width</a></li>
                                            <li><a class="dropdown-item" href="blog-fullwidth.html">News Full Width</a></li>
                                            <li><a class="dropdown-item" href="blog-left-sidebar.html">News Left Sidebar</a></li>
                                            <li><a class="dropdown-item" href="blog-right-sidebar.html">News Right Sidebar</a></li>
                                            <li><a class="dropdown-item" href="news-details.html">News Details Right</a></li>
                                            <li><a class="dropdown-item" href="news-details-left-sidebar.html">News Details Left</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                                <div class="navbar-nav nav-element ms-4">
                                    <div class="navbar-nav search-pop position-relative">
                                        <i class="toggle-icon fas fa-search text-white"></i>
                                        <div class="search-form shadow-sm bg-white">
                                            <form action="#" method="post" class="position-relative">
                                                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                                                <button class="btn-search my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
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
                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="about.html">About</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="about.html">About</a></li>
                                                            <li><a class="dropdown-item" href="about-2.html">About2</a></li>
                                                            <li><a class="dropdown-item" href="about-3.html">About3</a></li>
                                                            <li><a class="dropdown-item" href="our-history.html">Our History</a></li>
                                                            <li><a class="dropdown-item" href="our-mission.html">Our Mission</a></li>
                                                            <li><a class="dropdown-item" href="our-vision.html">Our Vision</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="nav-item dropdown unicode-megamenu-item-full-width unicode-megamenu-dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#">Element</a>
                                                        <div class="dropdown-menu unicode-megamenu-wrapper">
                                                            <div class="mega-container unicode-megamenu-holder">
                                                                <div class="row">
                                                                    <div class="col-lg-3">
                                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                                            <li class="menu-item">
                                                                                <ul class="unicode-sub-megamenu">
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-accordions.html"><span>Accordions</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-achievement.html"><span>Achievement</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-animation.html"><span>Animation</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-blog.html"><span>Blog</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-brand.html"><span>Brand</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-buttons.html"><span>Buttons</span></a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="col-lg-3">
                                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                                            <li class="menu-item">
                                                                                <ul class="unicode-sub-megamenu">
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-contact.html"><span>Contact</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-footer.html"><span>Footer</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-form.html"><span>Form</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-hover-effects.html"><span>Hover Effect</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-newsletter.html"><span>Newsletter</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-photo-gallery.html"><span>Photo Gallery</span></a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="col-lg-3">
                                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                                            <li class="menu-item">
                                                                                <ul class="unicode-sub-megamenu">
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-portfolio.html"><span>Portfolio</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-pricing-table.html"><span>Pricing Table</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-products.html"><span>Products</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-progress-bar.html"><span>Progress Bar</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-sections.html"><span>Sections</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-slider.html"><span>Slider</span></a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="col-lg-3">
                                                                        <ul class="unicode-menu-element unicode-megamenu-list">
                                                                            <li class="menu-item">
                                                                                <ul class="unicode-sub-megamenu">
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-tab.html"><span>Tab</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-team.html"><span>Team</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-testimonials.html"><span>Testimonial</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-thumb-block.html"><span>Thumbnail Block</span></a></li>
                                                                                    <li class="menu-item"><a class="dropdown-item" href="element-typography.html"><span>Typography</span></a></li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="#">Pages</a>
                                                        <ul class="dropdown-menu">
                                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="pricing.html">Pricing</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                                                                    <li><a class="dropdown-item" href="pricing-extend.html">Pricing Extend</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="career.html">Career</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="career.html">Career</a></li>
                                                                    <li><a class="dropdown-item" href="application.html">Application</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="team.html">Team</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="team.html">Team Member</a></li>
                                                                    <li><a class="dropdown-item" href="profile-details.html">Member Profile</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="certification.html">Certificate</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="certification.html">Certification</a></li>
                                                                    <li><a class="dropdown-item" href="certification-detail.html">Certification Details</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="general-support.html">Help and Support</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="how-it-work.html">How It Work</a></li>
                                                                    <li><a class="dropdown-item" href="general-support.html">General Support</a></li>
                                                                    <li><a class="dropdown-item" href="help-center.html">Help Center</a></li>
                                                                    <li><a class="dropdown-item" href="support-article-details.html">Support Article</a></li>
                                                                    <li><a class="dropdown-item" href="terms-and-condition.html">Terms &amp; Condition</a></li>
                                                                </ul>
                                                            </li>
                                                            <li class="dropdown"> <a class="dropdown-toggle dropdown-item" href="gallery.html">Gallery</a>
                                                                <ul class="dropdown-menu">
                                                                    <li><a class="dropdown-item" href="gallery.html">Gallery default</a></li>
                                                                    <li><a class="dropdown-item" href="gallery-fullwidth.html">Gallery fullwidth</a></li>
                                                                    <li><a class="dropdown-item" href="gallery-masonry.html">Gallery masonry</a></li>
                                                                    <li><a class="dropdown-item" href="gallery-detail.html">Gallery Details</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a class="dropdown-item" href="testimonial.html">Testimonial</a></li>
                                                            <li><a class="dropdown-item" href="service.html">Service</a></li>
                                                            <li><a class="dropdown-item" href="service-details.html">Service Details</a></li>
                                                            <li><a class="dropdown-item" href="quote.html">Quote</a></li>
                                                            <li><a class="dropdown-item" href="faq.html">Faq</a></li>
                                                            <li><a class="dropdown-item" href="404.html">404 Page</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="shop.html">Shop</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="shop.html">Shop</a></li>
                                                            <li><a class="dropdown-item" href="shop-list.html">Shop List</a></li>
                                                            <li><a class="dropdown-item" href="shop-single.html">Shop Single</a></li>
                                                            <li><a class="dropdown-item" href="sign-in.html">Sign In</a></li>
                                                            <li><a class="dropdown-item" href="sign-up.html">Sign Up</a></li>
                                                            <li><a class="dropdown-item" href="cart.html">Cart</a></li>
                                                            <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="nav-item dropdown">
                                                        <a class="nav-link dropdown-toggle" href="blog.html">News</a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="blog.html">News</a></li>
                                                            <li><a class="dropdown-item" href="blog-fullwidth-box.html">News Full Box Width</a></li>
                                                            <li><a class="dropdown-item" href="blog-fullwidth.html">News Full Width</a></li>
                                                            <li><a class="dropdown-item" href="blog-left-sidebar.html">News Left Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="blog-right-sidebar.html">News Right Sidebar</a></li>
                                                            <li><a class="dropdown-item" href="news-details.html">News Details Right</a></li>
                                                            <li><a class="dropdown-item" href="news-details-left-sidebar.html">News Details Left</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="nav-item">
                                                        <a class="nav-link" href="contact.html">Contact</a>
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
customElements.define('my-header', MyHeder);


//Footer 1 Section Start
class MyFooter extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <footer class="full-row bg-footer text-light">
        <div class="container">
            <div class="row row-cols-lg-3 row-cols-1 gy-5 xxs-link-single">
                <div class="col">
                    <div class="footer-widget">
                        <div class="footer-logo mb-4">
                            <a href="#"><img src="assets/images/logo/1.png" alt="Image not found!"></a>
                        </div>
                        <p>Sample text has to be added.</p>
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
                        <h4 class="widget-title text-white mb-4">Page Links</h4>
                        <ul>
                            <li><a href="about.html"><span class="text">About Company</span></a></li>
                            <li><a href="#"><span class="text">Payment System</span></a></li>
                            <li><a href="terms-and-condition.html"><span class="text">Terms and Conditions</span></a></li>
                            <li><a href="our-history.html"><span class="text">Company History</span></a></li>
                            <li><a href="#"><span class="text">Consultation</span></a></li>
                            <li><a href="career.html"><span class="text">Careers</span></a></li>
                            <li><a href="how-it-work.html"><span class="text">How It Work</span></a></li>
                            <li><a href="#"><span class="text">Event Coverage</span></a></li>
                            <li><a href="#"><span class="text">Emeargency Support</span></a></li>
                            <li><a href="#"><span class="text">Technology Support</span></a></li>
                            <li><a href="#"><span class="text">Guard Supply</span></a></li>
                            <li><a href="#"><span class="text">Trasted Partner</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="footer-widget widget-newsletter">
                        <h4 class="widget-title text-white mb-4">Newslatter</h4>
                        <p>Subscribe to our news and get most important industry news</p>
                        <div class="outline-form-style-1 newsletter-number mt-30">
                            <form class="form-outline square-shape" action="#" method="post">
                                <input type="text" class="form-control input-field bg-light" name="search" placeholder="Email Address">
                                <button type="submit" name="submit" class="submit bg-primary">Subscribes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        `;
    }

}
customElements.define('my-footer', MyFooter);


//Footer Bottom 1 Section Start
class MyFooterBottom extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <div class="full-row bg-dark fs-13 py-4">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="d-flex flex-wrap justify-content-between align-items-center">
                            <div class="nav-style-1 list-color-white hover-list-color-primary list-font-13 list-mr-20">
                                <ul>
                                    <li><a href="how-it-work.html">How It Work</a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="#">Trusty and Safty</a></li>
                                    <li><a href="#">Payment</a></li>
                                    <li><a href="sign-in.html">My Account</a></li>
                                    <li><a href="general-support.html">General Support</a></li>
                                </ul>
                            </div>
                            <span class="copyright-text text-white">© 2023 All Rights Reserved by <a target=”_blank” href="https://www.mcxpert.com/">McXpert Technologies</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

}
customElements.define('my-footer-bottom', MyFooterBottom);


//Scroll to top
class MyScroll extends HTMLElement{

    connectedCallback(){
        this.innerHTML = `
        <a href="#" class="bg-primary text-white" id="scroll"><i class="fa fa-angle-up"></i></a>
        `;
    }

}
customElements.define('my-scroll', MyScroll);