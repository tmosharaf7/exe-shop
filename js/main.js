$(document).ready(function () {
  
  
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        navText: ['<i class=" fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      },
      600: {
        items: 3,
        nav: true,
        navText: ['<i class=" fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
        navText: ['<i class=" fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      }
    }
  });


  $('.testimonial_all').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: true,
        loop: true,
        autoplay: true,
        margin: 80,
        navText: ['<i class=" fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      },
      600: {
        items: 3,
        nav: true,
        loop: true,
        autoplay: true,
        margin: 80,
        navText: ['<i class=" fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      },
      1000: {
        items: 4,
        nav: true,
        loop: true,
        autoplay: true,
        margin: 100,
        navText: ['<i class=" fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
      }
    }
  })
});

