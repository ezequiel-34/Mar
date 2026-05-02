let index = 0;

function iniciar() {
  document.querySelector(".start").style.display = "none";
  document.getElementById("book").style.display = "block";
  document.querySelector(".controls").style.display = "flex";

  const musica = document.getElementById("musica");
  musica.play().catch(() => {});
}

function next() {
  const spreads = document.querySelectorAll(".spread");
  if (index < spreads.length - 1) {
    spreads[index].classList.remove("active");
    index++;
    spreads[index].classList.add("active");
  }
}

function prev() {
  const spreads = document.querySelectorAll(".spread");
  if (index > 0) {
    spreads[index].classList.remove("active");
    index--;
    spreads[index].classList.add("active");
  }
}
