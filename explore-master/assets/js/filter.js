//  external js: isotope.pkgd.js


// init Isotope

var $grid = $('.demo-list').isotope({
  itemSelector: '.demo-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: function (element) {
      return $(element).text();
    }
  }
});
$('.filter button').on("click", function () {
  var value = $(this).attr('data-name');
    $grid.isotope({
      filter: value
    });
  $('.filter button').removeClass('active');
  $(this).addClass('active');
})

 // change is-checked class on buttons
 $('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});






//search 
