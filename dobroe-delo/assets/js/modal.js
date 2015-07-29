jQuery(document).ready(function ($) {

  var $modals = $('a[data-modal-id]');

  // покажем модальное окно
  $modals.click(function (e) {
    e.preventDefault();
    var id = $(e.currentTarget).attr('data-modal-id');
    $('#' + id).toggleClass('hidden');
    $('body').toggleClass('overflow');
  });

  // скроем модальное окно
  $('a[href="#close"]').click(function (e) {
    e.preventDefault();
    $(e.currentTarget).closest('.modal-container').toggleClass('hidden');
    $('body').toggleClass('overflow');
  });

});
