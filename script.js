let currentIndex = 0;
const images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg", "gallery4.jpg", "gallery5.jpg"];

function openImage(index) {
    currentIndex = index;
    document.getElementById("full-image").src = images[currentIndex];
    document.getElementById("fullscreen-viewer").style.display = "flex";
}

function closeImage() {
    document.getElementById("fullscreen-viewer").style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById("full-image").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    document.getElementById("full-image").src = images[currentIndex];
}
