jQuery(document).ready(function ($) {

  var $form = $('form.ajax');

  $form.on('submit', function (e) {
    var $button = $(this).find('button[type="submit"]');
    var text = $button.text();
    $button
      .prop('disabled', true)
      .text('отправляется...');

    // отправим данные формы
    sendForm(this);

    $button
      .text(text)
      .prop('disabled', false);

    return false;
  });

});

var sendForm = function(form){
  var post = $(form).serializeArray();
  console.log(post);
  var url = $(form).attr('action');
  $.post(url, post)
    .fail(function () {
      alert('Произошла ошибка');
      // return '404';
    })
    .done(function (res) {
      if(res.error != undefined)
        alert(res.error);
      else if(!res.status) {
        alert('Сообщение не отправлено');
        $(form)[0].reset();
        // return '500';
      } else {
        alert('Успешно отправлено');
        $(form)[0].reset();
        // return '200';
      }
    });
  return false;
};