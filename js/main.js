let tooltip = document.querySelectorAll("#tooltip");
let skill = document.querySelector("#card-skill");
let selectSkill = document.querySelectorAll(".img-skill a");
let linkMobil = document.getElementById("menu-mobiel");
let menuMobil = document.querySelector(".navigation");

let selectToolTip = document.querySelectorAll(".tooltip");
let navegadorHeader = document.querySelectorAll("#nav-header ul li a");
let navegadorSticky = document.getElementById("nav-header");

let sticky = navegadorSticky.offsetTop;

const calcularPosisionTooltips = () => {
  const x = skill.offsetLeft;
  const y = skill.offsetTop;

  for (let i = 0; i < tooltip.length; i++) {
    let tooltipWidth = tooltip[i].clientWidth;
    let tooltipHeight = tooltip[i].clientHeight;

    let izq = x - tooltipWidth / 2 + 50;
    let arriba = y - tooltipHeight - 20;

    tooltip[i].style.left = `${izq}px`;
    tooltip[i].style.top = `${arriba}px`;
  }
};

window.addEventListener("load", () => calcularPosisionTooltips());
window.addEventListener("resize", () => calcularPosisionTooltips());

let tipName = selectToolTip[0].classList[1];

selectSkill.forEach(listaSkill);

function listaSkill(lista) {
  lista.addEventListener("mouseenter", () => {
    selectToolTip.forEach((tip) => {
      if (lista.id == tip.classList[1]) {
        tip.classList.add("mostrar-tooltip");
      }
    });
  });
  lista.addEventListener("mouseleave", () => {
    selectToolTip.forEach((tip) => {
      if (lista.id == tip.classList[1]) {
        tip.classList.remove("mostrar-tooltip");
      }
    });
  });
}

navegadorHeader.forEach((link) => {
  link.addEventListener("click", function () {
    if (link.id == "servicios") {
      $(".modal-sericios").show(300);
      $(".modal-sericios").css({
        visibility: "visible",
      });
    }
  });
});

$("#nav-header ul li a").on("click", function (e) {
  if (this.hash != "") {
    e.preventDefault();

    const hash = this.hash;
    const interval = 600;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      interval
    );
  }
});

window.onscroll = function () {
  if (window.scrollY >= 600) {
    navegadorSticky.classList.add("sticky");
  } else {
    navegadorSticky.classList.remove("sticky");
  }
};

linkMobil.addEventListener("click", function () {
  menuMobil.classList.toggle("mostrar");
  let menu = document.querySelector(".menu").classList.toggle("mostrar");
});
