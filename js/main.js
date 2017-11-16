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





var selectIds = $('#panel1,#panel2,#panel3,#panel4,#panel5,#panel6,#panel7');
$(function ($) {
    selectIds.on('show.bs.collapse hidden.bs.collapse', function () {
        $(this).prev().find('.fa').toggleClass('fa-plus fa-minus');
    })
});



$( function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	} );