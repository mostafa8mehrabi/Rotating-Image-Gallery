const imageContainer = document.querySelector(".image-container");
const prevBtn = document.getElementById("prev");
const auto = document.getElementById("auto");
const nextBtn = document.getElementById("next");
//EventListener
let x = 0;
let timer = 0;
prevBtn.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery_manual();
});
nextBtn.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery_manual();
});
function updateGallery_manual() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  // timer = setTimeout(() => {
  //   x = x - 45;
  //   updateGallery();
  // }, 5000);
}
function updateGallery_automatic() {
  imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery_automatic();
  }, 2000);
}
auto.addEventListener("click", () => {
  x = x - 45;
  updateGallery_automatic();
});
