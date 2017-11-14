$(window).scroll(function() {
  var e = $(window).scrollTop();
  e >= 2 ? ($(".headerWrapper").addClass("navbar-fixed-top"),
  $(".mainNav").css({
      padding: "0 10px",
  })) : ($(".headerWrapper").removeClass("navbar-fixed-top"),
  $(".mainNav").css({
      padding: "10px",
  }))
})