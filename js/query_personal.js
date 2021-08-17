let card = document.querySelectorAll("#portafolio-nav ul li a");

$(function () {
  $(".modal-sericios").hide();

  $(card[0]).on("click", function () {
    $(".card").fadeIn(500);
    $(card).removeClass("activo");
    $(card[0]).addClass("activo");
  });
  $(card[1]).on("click", function () {
    $(".card").fadeOut(500);
    $(".card.p1").fadeIn(500);
    $(".card.p1").css({
      left: "0",
    });
    $(card).removeClass("activo");
    $(card[1]).addClass("activo");
  });
  $(card[2]).on("click", function () {
    $(".card").fadeOut(500);
    $(".card.p2").fadeIn(500);
    $(".card.p2").css({
      left: "0",
    });
    $(card).removeClass("activo");
    $(card[2]).addClass("activo");
  });
  $(card[3]).on("click", function () {
    $(".card").fadeOut(500);
    $(".card.p3").fadeIn(500);
    $(".card.p3").css({
      left: "0",
    });
    $(card).removeClass("activo");
    $(card[3]).addClass("activo");
  });

  $("#btn-cliente").on("click", function () {
    $(".modal-sericios").show(300);
    $(".modal-sericios").css({
      visibility: "visible",
    });
  });
  $(".modal-sericios .close").click(function (e) {
    e.preventDefault();
    $(".modal-sericios").hide(300);
  });
  $(".close-modal-s").on("click", function () {
    $(".modal-sericios").hide(300);
  });
});
