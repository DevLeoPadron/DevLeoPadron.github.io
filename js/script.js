let hideText_btn = document.getElementById("hideText_btn");

let hideText = document.getElementById("hideText");

hideText_btn.addEventListener("click", toggleText);

function toggleText() {
  hideText.classList.toggle("show");
  if (hideText.classList.contains("show")) {
    hideText_btn.innerHTML = "Leer Menos";
  } else {
    hideText_btn.innerHTML = "Leer Mas";
  }
}

let hideSkill_btn = document.getElementById("hideSkill_btn");

let hideSkill = document.getElementById("hideSkill");

hideSkill_btn.addEventListener("click", toggleSkill);

function toggleSkill() {
  hideSkill.classList.toggle("show");
  if (hideSkill.classList.contains("show")) {
    hideSkill_btn.innerHTML = "Ocultar Habilidades y Tecnologias";
  } else {
    hideSkill_btn.innerHTML = "Ver Habilidades y Tecnologias";
  }
}
