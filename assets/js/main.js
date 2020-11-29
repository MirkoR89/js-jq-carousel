$(document).ready(function() {

  // Funzione per scorrere le immagini in avanti
  $(".next").click(function() {
    if ($(".last").hasClass("active")) {
      $(".first").addClass("active");
      $(".last").removeClass("active");
    } else {
      $(".active").next().addClass("active");
      $(".active").prev().removeClass("active");
    }
  });

  // Funzione per scorrere le immagini indietro
  $(".prev").click(function () {
    if ($(".first").hasClass("active")) {
      $(".last").addClass("active");
      $(".first").removeClass("active");
    } else {
      $(".active").prev().addClass("active");
      $(".active").next().removeClass("active");
    }
  })
});
