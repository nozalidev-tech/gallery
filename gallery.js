const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "flex";
  lightboxImg.src = images[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function next() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

function prev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
}

/* Filters */
function filterImages(category) {
  images.forEach(img => {
    if (category === "all" || img.dataset.category === category) {
      img.style.display = "block";
    } else {
      img.style.display = "none";
    }
  });
}