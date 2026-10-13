/**
 * INTERACTIVE NEURAL PARTICLES CANVAS
 * Adapts dynamically between Dribbble Studio Light and Dark Theme
 */

(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const maxDistance = 140;
  const mouse = { x: null, y: null, radius: 180 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', () => {
    resize();
    initParticles();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.7;
      this.radius = Math.random() * 2 + 1.2;
      this.baseAlpha = Math.random() * 0.4 + 0.25;
      this.isPink = Math.random() > 0.5;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.5;
          this.y += (dy / dist) * force * 1.5;
        }
      }
    }

    draw(isDark) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      if (isDark) {
        ctx.fillStyle = this.isPink
          ? `rgba(236, 72, 153, ${this.baseAlpha})`
          : `rgba(99, 102, 241, ${this.baseAlpha})`;
      } else {
        ctx.fillStyle = this.isPink
          ? `rgba(236, 72, 153, ${this.baseAlpha * 0.7})`
          : `rgba(99, 102, 241, ${this.baseAlpha * 0.7})`;
      }
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.max(Math.floor((width * height) / 18000), 35), 75);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    // Synapses lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const factor = (1 - dist / maxDistance);
          const opacity = isDark ? factor * 0.2 : factor * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = isDark
            ? `rgba(139, 92, 246, ${opacity})`
            : `rgba(99, 102, 241, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw(isDark);
    });

    requestAnimationFrame(render);
  }

  resize();
  initParticles();
  render();
})();
