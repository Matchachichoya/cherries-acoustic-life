document.addEventListener("DOMContentLoaded", () => {

  const hearts = document.querySelectorAll(".btn-wishlist");

  hearts.forEach(heart => {

    heart.addEventListener("click", function(e) {
      e.preventDefault();

      // Ubah warna love
      this.classList.toggle("liked");

      // Cherry bomb hanya saat like
      if(this.classList.contains("liked")) {

        for(let i = 0; i < 8; i++) {

          let cherry = document.createElement("span");

          cherry.className = "cherry";
          cherry.innerHTML = "🍒";

          let angle = Math.random() * 360;
          let distance = 40 + Math.random() * 30;

          let x = Math.cos(angle) * distance + "px";
          let y = Math.sin(angle) * distance + "px";

          cherry.style.setProperty("--x", x);
          cherry.style.setProperty("--y", y);

          this.appendChild(cherry);

          setTimeout(() => {
            cherry.remove();
          }, 800);

        }

      }

    });

  });

});
