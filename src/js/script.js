$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"</button>'
      });
  });