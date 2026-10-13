/**
 * RESUME PREVIEW & DUAL FORMAT DOWNLOAD HANDLER
 * Handles PDF & DOCX downloads and ATS Modal preview
 */

document.addEventListener('DOMContentLoaded', () => {
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const modalCloseResumeBtn = document.getElementById('modal-close-resume-btn');
  const modalPrintResumeBtn = document.getElementById('modal-print-resume-btn');

  // Triggers for opening the Resume Modal
  const previewResumeBtn = document.getElementById('preview-resume-btn');
  const heroResumeBtn = document.getElementById('hero-resume-btn');
  const navResumeBtn = document.getElementById('nav-resume-btn');
  const drawerResumeBtn = document.getElementById('drawer-resume-btn');
  const resumePreviewTrigger = document.getElementById('resume-preview-trigger');
  const inspectResumeBtn = document.getElementById('inspect-resume-btn');

  // Direct download buttons
  const downloadPdfBtn = document.getElementById('download-pdf-btn');
  const downloadDocxBtn = document.getElementById('download-docx-btn');
  const heroDownloadResumeBtn = document.getElementById('hero-download-resume-btn');

  function openResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    if (!resumeModal) return;
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function triggerDownload(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    if (window.showToast) {
      window.showToast(`Downloading ${filename}...`, 'success');
    }
  }

  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerDownload('assets/Aditya_Soni_Resume.pdf', 'Aditya_Soni_Resume.pdf');
    });
  }

  if (downloadDocxBtn) {
    downloadDocxBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerDownload('assets/Aditya_Soni_Resume.docx', 'Aditya_Soni_Resume.docx');
    });
  }

  if (heroDownloadResumeBtn) {
    heroDownloadResumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      triggerDownload('assets/Aditya_Soni_Resume.pdf', 'Aditya_Soni_Resume.pdf');
    });
  }

  if (previewResumeBtn) previewResumeBtn.addEventListener('click', openResumeModal);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResumeModal);
  if (navResumeBtn) navResumeBtn.addEventListener('click', openResumeModal);
  if (resumePreviewTrigger) resumePreviewTrigger.addEventListener('click', openResumeModal);
  if (inspectResumeBtn) inspectResumeBtn.addEventListener('click', openResumeModal);

  if (drawerResumeBtn) {
    drawerResumeBtn.addEventListener('click', () => {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) drawer.classList.remove('open');
      openResumeModal();
    });
  }

  if (resumeModalClose) resumeModalClose.addEventListener('click', closeResumeModal);
  if (modalCloseResumeBtn) modalCloseResumeBtn.addEventListener('click', closeResumeModal);

  if (modalPrintResumeBtn) {
    modalPrintResumeBtn.addEventListener('click', () => {
      if (window.showToast) {
        window.showToast('Opening print dialog for ATS resume...', 'info');
      }
      setTimeout(() => {
        window.print();
      }, 300);
    });
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  // Escape key listener for all modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeResumeModal();
      const certModal = document.getElementById('cert-modal');
      if (certModal) certModal.classList.remove('active');
      const projectModal = document.getElementById('project-modal');
      if (projectModal) projectModal.classList.remove('active');
    }
  });
});
