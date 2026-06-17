function initSlick(selector, options) {
  var $el = $(selector);
  if ($el.length) {
    $el.slick(options);
  }
}

function initStackSlider(selector) {
  var $slider = $(selector);
  if (!$slider.length) {
    return;
  }

  $slider.on("init", function (event, slick) {
    var cur = $(slick.$slides[slick.currentSlide]);
    var next = cur.next();
    var next2 = next.next();
    var prev = cur.prev();
    var prev2 = prev.prev();

    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    prev2.addClass("slick-sprev2");
    next2.addClass("slick-snext2");
    cur.removeClass("slick-snext slick-sprev slick-snext2 slick-sprev2");

    slick.$prev = prev;
    slick.$next = next;
  }).on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var cur = $(slick.$slides[nextSlide]);
    var next = cur.next();
    var prev = cur.prev();

    slick.$prev.removeClass("slick-sprev");
    slick.$next.removeClass("slick-snext");
    slick.$prev.prev().removeClass("slick-sprev2");
    slick.$next.next().removeClass("slick-snext2");

    prev.addClass("slick-sprev");
    next.addClass("slick-snext");
    prev.prev().addClass("slick-sprev2");
    next.next().addClass("slick-snext2");

    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass("slick-snext slick-sprev slick-snext2 slick-sprev2");
  });
}

initSlick(".banner-slider", {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [
    { breakpoint: 1200, settings: { dots: true, arrows: false } },
    { breakpoint: 992, settings: { dots: true, arrows: false } },
    { breakpoint: 768, settings: { dots: true, arrows: false } },
    { breakpoint: 576, settings: { dots: true, arrows: false } }
  ]
});

initStackSlider(".rev_slider");
initSlick(".rev_slider", {
  speed: 1000,
  arrows: false,
  dots: true,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1200,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  swipe: true,
  customPaging: function () {
    return "";
  }
});

if ($(".counter").length) {
  $(".counter").counterUp({
    delay: 10,
    time: 1000
  });
}

initSlick(".course-slider", {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 1200,
  centerMode: true,
  centerPadding: "0",
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>',
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2, centerMode: false } },
    { breakpoint: 768, settings: { slidesToShow: 1, arrows: false, dots: true } },
    { breakpoint: 576, settings: { slidesToShow: 1, arrows: false, dots: true } }
  ]
});

initStackSlider(".test_slider");
initSlick(".test_slider", {
  speed: 1000,
  arrows: true,
  dots: false,
  focusOnSelect: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1200,
  centerMode: true,
  slidesPerRow: 1,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "0",
  swipe: true,
  customPaging: function () {
    return "";
  },
  asNavFor: ".details-slider",
  prevArrow: '<i class="fas fa-angle-left prev"></i>',
  nextArrow: '<i class="fas fa-angle-right next"></i>'
});

initSlick(".details-slider", {
  dots: false,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".test_slider"
});

initSlick(".teacher-slider", {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 1200,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 3, dots: true } },
    { breakpoint: 768, settings: { slidesToShow: 2, dots: true } },
    { breakpoint: 576, settings: { slidesToShow: 1, dots: true } }
  ]
});

initSlick(".footer-slider", {
  dots: false,
  infinite: true,
  speed: 900,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "30px",
  autoplay: false,
  autoplaySpeed: 1200,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } }
  ]
});
