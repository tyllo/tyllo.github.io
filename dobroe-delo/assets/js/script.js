/****************************************
              модальное окно
========================================*/

// покажем модальное окно
$( document ).ready(function () {

  var $modals = $('a[data-modal-id]');

  $modals.click(function (e) {
    e.preventDefault();
    var id = $(e.currentTarget).attr('data-modal-id');
    $('#' + id).toggleClass('hidden');
  });

  // скроем модальное окно
  $('a[href="#close"]').click(function (e) {
    e.preventDefault();
    $(e.currentTarget).closest('.modal-container').toggleClass('hidden');;
  });
});
