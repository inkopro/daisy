var mixer = mixitup('.portfolio__iner');

$(document).ready(function () {
  // Плавная прокрутка меню
  $('div a[href^="#"]').click(function () {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
    // Активная ссылка
    $('nav a[href^="#"]').parent().removeClass('active');
    $(this).parent().addClass('active');
    $('.header__menu_mobile').toggle(500);
    $('.menu__burger').toggleClass('close');
    return false;
  });
  // Мобильное меню
  $('.menu__burger').click(function () {
    $('.header__menu_mobile').toggle(500);
    $(this).toggleClass('close');
  });
});