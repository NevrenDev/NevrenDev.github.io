function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
  }
  
  document.addEventListener("DOMContentLoaded", function () {    
    const particlesContainer = document.querySelector(".particles");

    function createParticle() {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = Math.random() * window.innerHeight + "px";
        particlesContainer.appendChild(particle);
    }

    for (let i = 0; i < 50; i++) {
        createParticle();
    }

    const particles = document.querySelectorAll(".particle");

    function moveParticles() {
        particles.forEach((particle, index) => {
            const speed = (index + 1) * 0.3; //Particle Speed Control
            let x = parseFloat(particle.style.left);
            let y = parseFloat(particle.style.top);

            x += speed;

            if (x > window.innerWidth || x < 0) {
                x = Math.random() * window.innerWidth;
            }

            y += speed;

            if (y > window.innerHeight || y < 0) {
                y = Math.random() * window.innerHeight;
            }

            particle.style.left = x + "px";
            particle.style.top = y + "px";
        });

        requestAnimationFrame(moveParticles);
    }

    moveParticles();
});

function changeSection(section) {
    window.location = "#"+section;
}

function gamePage(page) {
    window.location = page+"/";
}

function goBack() {
    window.location = "../";
}
