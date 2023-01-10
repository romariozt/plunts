// !Кнопка на верх
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 700){
    $('#up').fadeIn()
  }else{
    $('#up').fadeOut()
  }
})

$('#up').on('click', function () {
  $('html, body').animate({scrollTop: 0}, 500)
})