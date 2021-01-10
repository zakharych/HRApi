

$(document).ready(function(){
  const history__list = document.querySelector('.history__list')
  console.log(history__list.children.length);

  $('.history__list').slick({
    infinite: false,
    slidesToShow: 11,
    slidesToScroll: 1,
    draggable: false,
  });

  //   $('.speakers__list').slick({
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   rows: 2,
  //   dots: false,
  //   responsive: [
  //     {
  //       breakpoint: 1060,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false
  //       }
  //     },
  //     {
  //       breakpoint: 830,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // });
});