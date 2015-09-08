// http://owlcarousel.owlgraphic.com/demos/lazyLoad.html

jQuery(document).ready(function ($) {

  $("#slider-product").owlCarousel({
    slideSpeed : 50000,
    paginationSpeed : 50000,
    // navContainer: 'owl-dots',
    navText: ['&laquo;','&raquo;'],
    items : 1,
    nav: true,
    autoplay : false,
    autoplayTimeout: 10000,
    loop:true,
    itemsTablet: true,
    URLhashListener:true,
    startPosition: 'URLHash',
  });

});
