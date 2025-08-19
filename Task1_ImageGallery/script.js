let currentIndex = 0;
let images = [];

let lightboxIn = (source, index) => {
  document.getElementById("lightbox-img").src = source;
  document.getElementById("lightbox").style.display = "flex";
  currentIndex = index;
}

let lightboxOut = () => document.getElementById("lightbox").style.display = "none";

let prevImage = (event) => {
  event.stopPropagation();
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

let nextImage = (event) => {
  event.stopPropagation();
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

let filterImages = category => {
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.style.display = item.dataset.category === category || category === 'all'? "inline-block" : "none"; 
  });
}

window.onload = () => {
  images = Array.from(document.querySelectorAll(".gallery-item img"));

  images.forEach((img, index) => {
    img.setAttribute("loading", "lazy");
    img.addEventListener("click", () => lightboxIn(img.src, index));
  });

  document.getElementById("nextBtn").addEventListener("click", nextImage);
  document.getElementById("prevBtn").addEventListener("click", prevImage);

  document.addEventListener("keydown", (event) => {
    const isLightboxOpen = document.getElementById("lightbox").style.display === "flex";

    if (!isLightboxOpen) return;

    switch (event.key) {
      case "ArrowRight":
        nextImage(event);
      break;
      case "ArrowLeft":
        prevImage(event);
      break;
      case "Escape":
        lightboxOut();
      break;
    }
  });
}

