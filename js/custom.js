const myTimeout = setTimeout(
    $('#slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }),

    $('#category').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    }),

    $('#product').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    }),

    $('#blog').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },           
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    }),

    $('#testi').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }),

    $('#gallery').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 4
            },
            1200: {
                items: 5
            },
        }
    }),
    
    function myStopFunction() {
        clearTimeout(myTimeout);
    }
    , 500);

    // ===================== Menu Start ==============================================

    const closeBtn = document.querySelector('.closeBtn');
    const navbar = document.querySelector('.navbar');
    const resNav = document.querySelector('.resNav');
    const overlay = document.querySelector('.overlay');

    navbar.addEventListener('click', () =>{
        resNav.classList.toggle('navActive');
        overlay.classList.toggle('overlayActive');
    })
    closeBtn.addEventListener('click', () => {
        resNav.classList.toggle('navActive');
        overlay.classList.toggle('overlayActive');
    })
    overlay.addEventListener('click', () => {
        resNav.classList.toggle('navActive');
        overlay.classList.toggle('overlayActive');
    })

    // ===================== Menu End ==============================================

    // ===================== Back to Top Start ==============================================

    $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) { 
                $('#back-top').fadeIn(); 
            } else { 
                $('#back-top').fadeOut(); 
            } 
        }); 
        $('#back-top').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 600); 
            return false; 
        }); 
    });

    // ===================== Back to Top End ==============================================
