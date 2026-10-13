/**
 * ADITYA SONI - PURRWEB PORTFOLIO CONTROLLER
 * Animations, Interactive Inspector Lens, Micro-interactions, Toast Engine
 */

// Global Toast System
window.showToast = function (message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = '<i class="fa-solid fa-circle-info"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'warning') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';

  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 20);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3800);
};

document.addEventListener('DOMContentLoaded', () => {
  // 0. Dribbble Studio Theme Switcher (Light Studio by default)
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('aditya-theme') || 'light';
  
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isCurrentlyDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isCurrentlyDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('aditya-theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        window.showToast('Switched to Dribbble Studio Light Theme ✨', 'info');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('aditya-theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        window.showToast('Switched to Dark Mode 🌙', 'info');
      }
    });
  }

  // 1. Signature Purrweb Interactive Inspector Lens Tool
  const inspectorToggle = document.getElementById('inspector-toggle');
  const inspectorLens = document.getElementById('inspector-lens');
  const lensTag = document.getElementById('lens-tag');
  let isInspectorActive = false;

  if (inspectorToggle && inspectorLens) {
    inspectorToggle.addEventListener('click', () => {
      isInspectorActive = !isInspectorActive;
      inspectorToggle.classList.toggle('active', isInspectorActive);
      inspectorLens.classList.toggle('active', isInspectorActive);
      
      if (isInspectorActive) {
        window.showToast('Inspector Lens Activated! Hover over any element to inspect.', 'info');
      } else {
        window.showToast('Inspector Lens Deactivated.', 'info');
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isInspectorActive) return;
      inspectorLens.style.left = `${e.clientX}px`;
      inspectorLens.style.top = `${e.clientY}px`;

      // Identify element underneath
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target && lensTag) {
        const closestCard = target.closest('[data-component]') || target.closest('section') || target;
        const compName = closestCard.getAttribute('data-component') || closestCard.tagName.toLowerCase();
        lensTag.textContent = compName.toUpperCase();
      }
    });
  }

  // 2. Typewriter Effect
  const typewriterElement = document.getElementById('typewriter-text');
  const roles = [
    'Neural Networks & Deep Learning Explorer',
    'Mathematics & Calculus Behind Machine Learning',
    'Formula 1 Telemetry & Strategy Enthusiast',
    'Solo Traveler & Visual Cinema Storyteller',
    '1st Year B.Tech CSE @ JECRC University'
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 85;

  function typeEffect() {
    if (!typewriterElement) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterElement.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 40;
    } else {
      typewriterElement.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2200;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(typeEffect, typingSpeed);
  }
  typeEffect();

  // 3. 3D Tilt Effect on Purrweb Avatar Frame
  const avatarCard = document.querySelector('.purr-avatar-frame');
  if (avatarCard) {
    avatarCard.addEventListener('mousemove', (e) => {
      const rect = avatarCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;
      avatarCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    avatarCard.addEventListener('mouseleave', () => {
      avatarCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  // 4. Navbar Sticky Effect & Scroll Spy
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    const scrollPos = window.pageYOffset + 220;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 5. Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.add('open');
    });
  }

  if (drawerClose && mobileDrawer) {
    drawerClose.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
    });
  }

  document.querySelectorAll('.drawer-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
    });
  });

  // 6. Skills Category Filter
  const tabBtns = document.querySelectorAll('.tab-btn');
  const skillTiles = document.querySelectorAll('.skill-tile');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');

      skillTiles.forEach((tile) => {
        const cat = tile.getAttribute('data-category');
        if (category === 'all' || cat.includes(category)) {
          tile.style.display = 'flex';
          tile.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  // 7. Project Modal Details
  const projectModal = document.getElementById('project-modal');
  const projectModalTitle = document.getElementById('project-modal-title');
  const projectModalBody = document.getElementById('project-modal-body');
  const projectModalClose = document.getElementById('project-modal-close');
  const modalCloseProjBtn = document.getElementById('modal-close-proj-btn');
  const viewProjectBtns = document.querySelectorAll('.view-project-btn');

  const projectDetailsMap = {
    portfolio: {
      title: '🌐 Personal Portfolio Website (Live on Vercel)',
      content: `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">
            <strong>Personal Portfolio Website</strong> independently designed, built, and continuously deployed by Aditya Soni within his 1st semester of B.Tech CSE. Serves as a central showcase for engineering projects, AI skills, and contact channels.
          </p>
          <div style="background:rgba(16,185,129,0.06); border:1px solid rgba(16,185,129,0.25); padding:16px; border-radius:12px;">
            <h4 style="color:#34d399; margin-bottom:8px; font-size:0.95rem;"><i class="fa-solid fa-rocket"></i> Deployment &amp; Highlights:</h4>
            <p style="font-family:var(--font-code); font-size:0.85rem; color:#cbd5e1;">
              • Live URL: <a href="https://portfolio-five-zeta-uhe7qqcuri.vercel.app" target="_blank" style="color:var(--neon-cyan); text-decoration:underline;">portfolio-five-zeta-uhe7qqcuri.vercel.app</a><br/>
              • Built with: HTML5, CSS3 responsive layout &amp; Modern UI/UX<br/>
              • Hosted with zero-config automated pipelines on Vercel
            </p>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
            <a href="https://portfolio-five-zeta-uhe7qqcuri.vercel.app" target="_blank" rel="noopener noreferrer" class="btn btn-purrweb btn-sm">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Website
            </a>
            <a href="https://github.com/Adit-commit" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <i class="fa-brands fa-github"></i> View GitHub Repo
            </a>
          </div>
        </div>
      `
    },
    webapp: {
      title: '⚡ Web Application Project (Structured Logic & AI Acceleration)',
      content: `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">
            Developed an interactive web-based application applying core HTML/CSS concepts, JavaScript DOM interactions, and structured programming logic.
          </p>
          <div style="background:rgba(139,92,246,0.06); border:1px solid rgba(139,92,246,0.25); padding:16px; border-radius:12px;">
            <h4 style="color:#c084fc; margin-bottom:8px; font-size:0.95rem;"><i class="fa-solid fa-code-commit"></i> Workflow &amp; AI Integration:</h4>
            <p style="font-family:var(--font-code); font-size:0.85rem; color:#cbd5e1;">
              • Managed full lifecycle with Git &amp; GitHub version control (branches, atomic commits)<br/>
              • Leveraged AI-assisted development tools (ChatGPT, Claude, GitHub Copilot) to debug code, optimize logic, and accelerate learning velocity
            </p>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
            <a href="https://github.com/Adit-commit" target="_blank" rel="noopener noreferrer" class="btn btn-purrweb btn-sm">
              <i class="fa-brands fa-github"></i> Inspect GitHub Repository
            </a>
          </div>
        </div>
      `
    },
    neurosim: {
      title: '🧠 NeuroSim: Neural Network & Backprop Visualizer from Scratch',
      content: `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">
            Built from scratch to understand the mathematical mechanics of Neural Networks without relying on high-level black box ML frameworks.
          </p>
          <div style="background:rgba(0,245,212,0.06); border:1px solid rgba(0,245,212,0.25); padding:16px; border-radius:12px;">
            <h4 style="color:var(--neon-cyan); margin-bottom:8px; font-size:0.95rem;"><i class="fa-solid fa-calculator"></i> Mathematics Foundation:</h4>
            <p style="font-family:var(--font-code); font-size:0.85rem; color:#cbd5e1;">
              • Forward Pass Matrix Transformations: Z = W &bull; A + b<br/>
              • Activations: Sigmoid, ReLU, Softmax<br/>
              • Multivariable Calculus: &part;L/&part;W backpropagation gradient descent updates
            </p>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
            <a href="https://github.com/Adit-commit" target="_blank" rel="noopener noreferrer" class="btn btn-outline-cyan btn-sm">
              <i class="fa-brands fa-github"></i> Explore NeuroSim Code
            </a>
          </div>
        </div>
      `
    },
    apextelemetry: {
      title: '🏎️ ApexTelemetry: Formula 1 Race Lap Time & Strategy Predictor',
      content: `
        <div style="display:flex; flex-direction:column; gap:16px;">
          <p style="color:var(--text-secondary); font-size:0.95rem; line-height:1.6;">
            A data science and machine learning model inspired by Formula 1 race engineering. Forecasts tire compound decay curves and optimal pit stop windows based on simulated telemetry metrics.
          </p>
          <div style="background:rgba(255,75,114,0.06); border:1px solid rgba(255,75,114,0.25); padding:16px; border-radius:12px;">
            <h4 style="color:#ff7597; margin-bottom:8px; font-size:0.95rem;"><i class="fa-solid fa-flag-checkered"></i> Telemetry Parameters:</h4>
            <p style="font-family:var(--font-code); font-size:0.85rem; color:#cbd5e1;">
              • Compound Wear: Soft (C4/C5), Medium (C3), Hard (C1/C2)<br/>
              • Track temperature vs. degradation curves &amp; undercut/overcut strategy modeling
            </p>
          </div>
          <div style="display:flex; gap:10px; flex-wrap:wrap; margin-top:8px;">
            <a href="https://github.com/Adit-commit" target="_blank" rel="noopener noreferrer" class="btn btn-purrweb btn-sm">
              <i class="fa-brands fa-github"></i> View F1 Telemetry Project
            </a>
          </div>
        </div>
      `
    }
  };

  viewProjectBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = projectDetailsMap[projKey];
      if (data && projectModal) {
        projectModalTitle.innerHTML = data.title;
        projectModalBody.innerHTML = data.content;
        projectModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
  if (modalCloseProjBtn) modalCloseProjBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // 8. One-Click Copy to Clipboard
  const copyButtons = document.querySelectorAll('.copy-pill-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          window.showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
        });
      } else {
        const temp = document.createElement('textarea');
        temp.value = textToCopy;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        window.showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
      }
    });
  });

  // 9. Contact Transmission Form
  const contactForm = document.getElementById('transmission-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('sender-name').value.trim();
      const email = document.getElementById('sender-email').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !email || !message) {
        window.showToast('Please fill out all required fields.', 'warning');
        return;
      }

      window.showToast('Transmission prepared! Opening email client...', 'success');

      const mailtoLink = `mailto:aditya.soni.linkedin@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry - ${subject}] from ${name}`
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nTopic: ${subject}\n\nMessage:\n${message}`
      )}`;

      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 700);

      contactForm.reset();
    });
  }

  // 10. Back To Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
