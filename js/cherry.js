window.addEventListener("load", function () {
    const container = document.getElementById("cherry-container");

    const sakura = ["🌸", "🍒", "🌸", "🍒"];

    for (let i = 0; i < 40; i++) {
        let cherry = document.createElement("div");

        cherry.classList.add("cherry");

        cherry.innerHTML = sakura[Math.floor(Math.random() * sakura.length)];

        cherry.style.left = Math.random() * 100 + "vw";

        cherry.style.fontSize =
            (Math.random() * 15 + 15) + "px";

        cherry.style.animationDuration =
            (Math.random() * 4 + 3) + "s";

        cherry.style.animationDelay =
            (Math.random() * 2) + "s";

        container.appendChild(cherry);
    }

    // Menghilangkan efek setelah selesai
    setTimeout(() => {
        container.remove();
    }, 8000);
});
