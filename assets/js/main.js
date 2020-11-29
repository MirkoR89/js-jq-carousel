$(".next").click(function() {
  if ($(".last").hasClass("active")) {
      $(".first").addClass("active");
      $(".last").removeClass("active");
    } else {
      $(".active").next().addClass("active");
      $(".active").prev().removeClass("active");
    }
});
