// script.js

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const bgMusic = document.getElementById("bgMusic");
    const photo = document.getElementById("photo");

    playButton.addEventListener("click", () => {
        if (bgMusic.paused) {
            bgMusic.play();
            playButton.textContent = "Tắt nhạc";
            createSparkles(playButton);
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

    // personal message
    const showMessage = document.getElementById("showMessage");
    const customInput = document.getElementById("customMessage");
    const displayed = document.getElementById("displayedMessage");

    showMessage.addEventListener("click", () => {
        if (customInput.value.trim()) {
            displayed.textContent = customInput.value;
            createSparkles(showMessage);
        }
    });

    // Allow Enter key to display message
    customInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            showMessage.click();
        }
    });

    // generate floating hearts continuously
    const heartsContainer = document.querySelector('.hearts');
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 4 + Math.random() * 4 + 's';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 8000);
    }
    setInterval(createHeart, 500);

    // Sparkle effect on click
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = centerX + 'px';
            sparkle.style.top = centerY + 'px';
            sparkle.style.width = '8px';
            sparkle.style.height = '8px';
            sparkle.style.background = '#ff7eb9';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.boxShadow = '0 0 10px #ff7eb9';
            document.body.appendChild(sparkle);

            const angle = (Math.PI * 2 * i) / 8;
            const distance = 50;
            const vx = Math.cos(angle) * distance;
            const vy = Math.sin(angle) * distance;

            let x = centerX;
            let y = centerY;
            let opacity = 1;
            const duration = 600;
            const startTime = Date.now();

            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);

                x += vx / 30;
                y += vy / 30;
                opacity = 1 - progress;

                sparkle.style.left = x + 'px';
                sparkle.style.top = y + 'px';
                sparkle.style.opacity = opacity;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    sparkle.remove();
                }
            };
            animate();
        }
    }
});