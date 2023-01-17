// ?МОДАЛЬНЕ ВІКНО

$('.modal__overlay-city-1').on('click', function () {
  if ($(e.target).closest('.modal').length == 0) {
      $(this).fadeOut();
  }
});

$('.close').on('click', function(){
  $(this).parents('.modal__overlay-city-1').fadeOut()
})

$('#open__modal-1').on('click', function(){
  $('.modal__overlay-city-1').fadeIn()
})

// -------------------------------------------------

$('.modal__overlay-city-2').on('click', function () {
  if($(e.target).closest('.modal').length == 0) {
    $(this).fadeOut();
  }
})

$('.close').on('click', function() {
  $(this).parents('.modal__overlay-city-2').fadeOut()
})

$('#open__modal-2').on('click', function(){
  $('.modal__overlay-city-2').fadeIn()
})

// -------------------------------------------------

$('.modal__overlay-city-3').on('click', function () {
  if($(e.target).closest('.modal').length == 0) {
    $(this).fadeOut();
  }
})

$('.close').on('click', function() {
  $(this).parents('.modal__overlay-city-3').fadeOut()
})

$('#open__modal-3').on('click', function(){
  $('.modal__overlay-city-3').fadeIn()
})

// -------------------------------------------------