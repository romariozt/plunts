// !Выпадающее меню с текстом в секции Prices
$('.accordion > div').on('click', function () {
  $(this).toggleClass('change__color-accordion');
  $(this).children('.prices__choice-arrow').toggleClass('prices__choice-arrow-rotate');
  $(this).parent('.accordion').toggleClass('change__color');
  $(this).next('.accordion__content').slideToggle(300);
})



// -------------------------------------------------------------------------
// !Переход по ссылке About us
$('#main-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#about-us').offset().top}, 1000)
})
// !Переход по ссылке Service
$('#service-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#service').offset().top}, 1000)
})
// !Переход по ссылке Price
$('#price-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#price').offset().top}, 1000)
})
// !Переход по ссылке Contacts
$('#contact-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#contacts').offset().top}, 1000)
})



// -------------------------------------------------------------------------
// !Выпадающее меню с текстом в секции Contact us
$('.accordion__contact > div').on('click', function () {
  $(this).toggleClass('contact__change-color-contentr');
  $(this).children('.contact__choice-arrow').toggleClass('contact__choice-arrow-rotate');
  $(this).parent('.accordion__contact').toggleClass('contact__change-color');
  $(this).next('.contacts__accordion').slideToggle(300);
})

// --------------------------------------------------------------------------

