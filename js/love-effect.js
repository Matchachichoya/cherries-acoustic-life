document.addEventListener("DOMContentLoaded", () => {

  const hearts = document.querySelectorAll(".btn-wishlist");

  hearts.forEach(heart => {

    heart.addEventListener("click", function(e) {
      e.preventDefault();

      this.classList.toggle("liked");

      if (this.classList.contains("liked")) {

        let rect = this.getBoundingClientRect();
        let centerX = rect.left + rect.width / 2;
        let centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 40; i++) {

          let cherry = document.createElement("span");
          cherry.className = "cherry";
          cherry.innerHTML = "🍒";

          cherry.style.left = centerX + "px";
          cherry.style.top = centerY + "px";

          // 🔥 FIX: pakai radian
          let angle = Math.random() * Math.PI * 2;
          let distance = 200 + Math.random() * 400;

          let x = Math.cos(angle) * distance;
          let y = Math.sin(angle) * distance;

          cherry.style.setProperty("--x", x + "px");
          cherry.style.setProperty("--y", y + "px");

          document.body.appendChild(cherry);

          setTimeout(() => {
            cherry.remove();
          }, 1500);

        }
      }
    });

  });

});
