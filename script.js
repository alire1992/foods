document.querySelector(".menu").addEventListener("click", function () {
  document.querySelectorAll(".target").forEach((el) => {
    el.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector(".section-1-icons i.change");
  icon.classList.remove("change");
  if (i <= icons.length) icon.nextElementSibling.classList.add("change");
  else {
    icons[0].classList.add("change");
    i = 1;
  }
}, 3000);
