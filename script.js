// script.js

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const bgMusic = document.getElementById("bgMusic");
    const photo = document.getElementById("photo");

    playButton.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            playButton.textContent = "Tắt nhạc";
        } else {
            bgMusic.pause();
            playButton.textContent = "Bật nhạc";
        }
    });

    // kích hoạt hiệu ứng ảnh khi nhạc chạy
    bgMusic.addEventListener("play", () => {
        photo.classList.add("playing");
    });

    bgMusic.addEventListener("pause", () => {
        photo.classList.remove("playing");
    });
});