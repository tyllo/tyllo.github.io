

$(document).ready(function () {

  // слайдер
  // http://owlcarousel.owlgraphic.com/demos/lazyLoad.html
  $(".slider").owlCarousel({
      slidespeed : 1000,
      paginationSpeed : 1000,
      items : 1,
      autoplay : 1000,
      rewindSpeed : 1000,
      loop:true,
      // ленивая загрузка фото слайдера
      lazyLoad : true,
      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      itemsTablet: true,
      // itemsMobile : false
  });

  // форма
  $('form.ajax').on('submit', function () {
      var form = this;
      var post = $(this).serializeArray();
      var url = $(this).attr('action');
      $.post(url, post)
          .fail(function(){
              alert('Произошла ошибка или недоступен сервер');
          })
          .done(function(res){
              if(res.error != undefined)
                  alert(res.error);
              else if(!res.status) {
                  alert('Сообщение не отправлено');
                  $(form)[0].reset();
                  $.fancybox.close()
              } else {
                  alert('Успешно отправлено');
                  $(form)[0].reset();
              }
          });
      return false;
  });

  // спрячем содержимое body пока отображается мобильное меню
  $('.mobile-menu_nav-trigger').click(function (e) {
    // скроем содержимое body пока показывается меню
    $('body').toggleClass('overflow');
  });

 // конвертер валют
  (function reload__widget () {
    var sc = document.getElementById("sc__widget");
    if (sc) sc.parentNode.removeChild(sc);
    sc = document.createElement("script");
    sc.type = "text/javascript";
    sc.charset = "UTF-8";
    sc.async = true;
    sc.id="sc__widget";
    sc.src = "http://freecurrencyrates.com/ru/widget-vertical?iso=XUMUSDEURSGDCADAUD&df=2&p=__widget&v=fits&source=cbr&width=220&width_title=0&firstrowvalue=1.00&thm=A6C9E2,FCFDFD,4297D7,5C9CCC,FFFFFF,C5DBEC,FCFDFD,2E6E9E,000000&tzo="+(new Date()).getTimezoneOffset();
    var div = document.getElementById("gcw_main__widget");
    console.log(div);
    div.parentNode.insertBefore(sc, div);
  })();


});

