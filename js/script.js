// !Выпадающее меню с текстом
$('.accordion > div').on('click', function () {
  $(this).toggleClass('change__color-accordion');
  $(this).children('.prices__choice-arrow').toggleClass('prices__choice-arrow-rotate');
  $(this).parent('.accordion').toggleClass('change__color');
  $(this).next('.accordion__content').slideToggle(300);
})





// !Переход по ссылке About us
$('#hiring-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#hiring').offset().top}, 1000)
})
// !Переход по ссылке Service
$('#hiring-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#hiring').offset().top}, 1000)
})
// !Переход по ссылке Price
$('#hiring-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#hiring').offset().top}, 1000)
})
// !Переход по ссылке Contacts
$('#hiring-link').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: $('#hiring').offset().top}, 1000)
})