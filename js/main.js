const elsPlanToggler = document.querySelectorAll(".plan-toggler");
elsPlanToggler.forEach((elsPlanToggler) => {
  elsPlanToggler.addEventListener("click", function () {
    elsPlanToggler.nextElementSibling.classList.toggle("plan-card");
    // elsPlanToggler.nextElementSibling.style.animation = 'openCard ' + 1 + "s"
  });
});

const elSiteHeader = document.querySelector(".header");
const elSiteToggler = document.querySelector(".header_toggler");

if (elSiteToggler) {
  elSiteToggler.addEventListener("click", function () {
    elSiteHeader.classList.toggle("header--open");
  });
}

const modal = document.querySelector(".modal");
const modalCreateBtn = document.querySelector("[data-modal-open]");
function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

modalCreateBtn.addEventListener("click", openModal);
document.addEventListener("click", (element) => {
  if (element.target.classList.contains("modal")) {
    closeModal();
  }
});

document.addEventListener("keydown", (key) => {
  if ((key.code = "Escape" && modal.classList.contains("show"))) {
    closeModal();
  }
});
