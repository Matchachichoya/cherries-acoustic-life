document.addEventListener("DOMContentLoaded", () => {

  const hearts = document.querySelectorAll(".btn-wishlist");

  hearts.forEach(heart => {

    heart.addEventListener("click", function(e) {
      e.preventDefault();

      // Ubah warna love
      this.classList.toggle("liked");

      // Cherry bomb hanya saat like
      if(this.classList.contains("liked")) {

let rect = this.getBoundingClientRect();
let centerX = rect.left + rect.width / 2;
let centerY = rect.top + rect.height / 2;

        for(let i = 0; i < 40; i++) {

          let cherry = document.createElement("span");

          cherry.className = "cherry";
          cherry.innerHTML = "🍒";
          cherry.style.left = centerX + "px";
          cherry.style.top = centerY + "px";

          let angle = Math.random() * 360;
          let distance = 200 + Math.random() * 400;

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
