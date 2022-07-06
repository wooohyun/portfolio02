$(function () {
  $(' .main_page .controls i:nth-child(1)').on('click', function () {
    $('video').trigger('play');
  });
  $(' .main_page .controls i:nth-child(2)').on('click', function () {
    $('video').trigger('pause');
  });

  $('.product_slide').slick({
  });

  $('.Tasting_Notes_rows').hide();
  $('.Information_rows').hide();

  $('.product_slide .taste01').on('click', function () {
    $('.01').toggle('');
  })

  $('.product_slide .info01').on('click', function () {
    $('.02').toggle('');
  })
  $('.product_slide .taste02').on('click', function () {
    $('.03').toggle('');
  })

  $('.product_slide .info02').on('click', function () {
    $('.04').toggle('');
  })
  $('.product_slide .taste03').on('click', function () {
    $('.05').toggle('');
  })

  $('.product_slide .info03').on('click', function () {
    $('.06').toggle('');
  })
  $('.product_slide .taste04').on('click', function () {
    $('.07').toggle('');
  })

  $('.product_slide .info04').on('click', function () {
    $('.08').toggle('');
  })

  // https://www.youtube.com/embed/nEYyhGidL44?start=58&end=100 구간반복 ?start=58&end=100

  $("#main_Bg_video").YTPlayer({
    videoURL: "https://youtu.be/RKWu1kWLc6Y",
    containment: ".main_Bg_video",
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
  });

  $(".main_Bg_video .zoom").on("click", function (e) {
    e.preventDefault();
    $("#main_Bg_video").YTPFullscreen();
  });

  $('.main_hover .container').slick({
    slidesToShow: 3,
  });

});