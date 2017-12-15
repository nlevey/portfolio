/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function(){
    $(this).blur();
})

document.addEventListener("DOMContentLoaded", function () {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS('particles-js', {
    "particles": {
    "number": {
    "value": 30,
    "density": {
    "enable": true,
    "value_area": 800
    }
    },
    "color": {
    "value": "#ffffff"
    },
    "shape": {
    "type": "polygon",
    "stroke": {
    "width": 0,
    "color": "#000000"
    },
    "polygon": {
    "nb_sides": 5
    },
    "image": {
    "src": "img/github.svg",
    "width": 100,
    "height": 100
    }
    },
    "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
    "enable": false,
    "speed": 1,
    "opacity_min": 0.1,
    "sync": false
    }
    },
    "size": {
    "value": 3,
    "random": true,
    "anim": {
    "enable": false,
    "speed": 19.18081918081918,
    "size_min": 0.1,
    "sync": false
    }
    },
    "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
    },
    "move": {
    "enable": true,
    "speed": 4,
    "direction": "none",
    "random": true,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
    "enable": false,
    "rotateX": 600,
    "rotateY": 1200
    }
    },
    nb: 80
    },
    "interactivity": {
    "detect_on": "window",
    "events": {
    "onhover": {
    "enable": false,
    "mode": "grab"
    },
    "onclick": {
    "enable": true,
    "mode": "push"
    },
    "resize": true
    },
    "modes": {
    "grab": {
    "distance": 400,
    "line_linked": {
    "opacity": 1
    }
    },
    "bubble": {
    "distance": 400,
    "size": 40,
    "duration": 2,
    "opacity": 8,
    "speed": 3
    },
    "repulse": {
    "distance": 200,
    "duration": 0.4
    },
    "push": {
    "particles_nb": 4
    },
    "remove": {
    "particles_nb": 2
    }
    }
    },
    "retina_detect": true
    });
});