$(document).ready(function () {
     $('.testimonials').slick({
          autoplay: true,
          infinite: true,
          speed: 400,
          slidesToShow: 2,
          slidesToScroll: 2,
          responsive: [{
               breakpoint: 992,
               settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
               }
          }]
     })
});