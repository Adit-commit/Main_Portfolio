/**
 * AI CERTIFICATE GENERATOR & DOWNLOAD ENGINE
 * Generates ultra-crisp 1920x1080 Attestation for Aditya Soni
 */

document.addEventListener('DOMContentLoaded', () => {
  const downloadCertBtn = document.getElementById('download-cert-btn');
  const previewCertBtn = document.getElementById('preview-cert-btn');
  const certModal = document.getElementById('cert-modal');
  const certModalClose = document.getElementById('cert-modal-close');
  const modalDownloadCertBtn = document.getElementById('modal-download-cert-btn');
  const modalCloseCertBtn = document.getElementById('modal-close-cert-btn');
  const certCanvasPreview = document.getElementById('cert-canvas-preview');

  // Generate canvas certificate
  function generateCertificateCanvas() {
    const canvas = document.createElement('canvas');
    canvas.width = 1920;
    canvas.height = 1080;
    const ctx = canvas.getContext('2d');

    // 1. Deep Obsidian Gradient Background
    const bgGradient = ctx.createLinearGradient(0, 0, 1920, 1080);
    bgGradient.addColorStop(0, '#070a14');
    bgGradient.addColorStop(0.5, '#0c1324');
    bgGradient.addColorStop(1, '#080d1a');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 1920, 1080);

    // 2. Subtle Tech Grid Pattern
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.035)';
    ctx.lineWidth = 1;
    for (let x = 0; x < 1920; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1080);
      ctx.stroke();
    }
    for (let y = 0; y < 1080; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1920, y);
      ctx.stroke();
    }

    // 3. Luxurious Dual Border with Gold & Neon Accents
    const borderGradient = ctx.createLinearGradient(0, 0, 1920, 1080);
    borderGradient.addColorStop(0, '#00f2fe');
    borderGradient.addColorStop(0.5, '#fbbf24');
    borderGradient.addColorStop(1, '#a855f7');
    ctx.strokeStyle = borderGradient;
    ctx.lineWidth = 6;
    ctx.strokeRect(50, 50, 1820, 980);

    // Inner thin border
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(70, 70, 1780, 940);

    // Corner decorative brackets
    const corners = [
      [50, 50],
      [1870, 50],
      [50, 1030],
      [1870, 1030]
    ];
    ctx.fillStyle = '#fbbf24';
    corners.forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 9, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Header Top Bar
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('GLOBAL AI & COMPUTATIONAL INTELLIGENCE COUNCIL', 960, 160);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px "JetBrains Mono", monospace';
    ctx.fillText('VERIFIED CREDENTIAL ID: AS-AIML-2026-X984  •  CRYPTOGRAPHIC ATTESTATION', 960, 205);

    // Horizontal Rule
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.moveTo(350, 235);
    ctx.lineTo(1570, 235);
    ctx.stroke();

    // 5. Main Title & Recipient
    ctx.fillStyle = '#c084fc';
    ctx.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CERTIFICATE OF DISTINCTION & PROFICIENCY', 960, 310);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px "Outfit", sans-serif';
    ctx.fillText('Neural Networks & Applied Machine Learning Foundations', 960, 375);

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'italic 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('This autonomous distinction is proudly awarded to', 960, 445);

    // Candidate Name
    ctx.fillStyle = '#00f2fe';
    ctx.font = 'bold 64px "Outfit", sans-serif';
    ctx.shadowColor = 'rgba(0, 242, 254, 0.6)';
    ctx.shadowBlur = 24;
    ctx.fillText('ADITYA SONI', 960, 540);
    ctx.shadowBlur = 0; // reset

    // Underline
    ctx.strokeStyle = '#00f2fe';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(960 - 240, 565);
    ctx.lineTo(960 + 240, 565);
    ctx.stroke();

    // Body Text
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('In recognition of demonstrated excellence in Python for Scientific Computing,', 960, 630);
    ctx.fillText('Foundational Neural Architectures, Scikit-Learn Pipelines, Data Structures & Algorithmic Logic,', 960, 670);
    ctx.fillText('and passionate dedication toward understanding the Mathematics and practical engineering of AI.', 960, 710);

    // 6. Signatures and Seals
    // Left Signature
    ctx.textAlign = 'left';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(220, 870);
    ctx.lineTo(520, 870);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Autonomous AI Verification Authority', 220, 905);
    ctx.fillStyle = '#64748b';
    ctx.font = '15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Decentralized Neural Ledger Node', 220, 935);

    // Center Gold Seal
    ctx.save();
    ctx.translate(960, 890);
    ctx.beginPath();
    ctx.arc(0, 0, 62, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(251, 191, 36, 0.12)';
    ctx.fill();
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 4]);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    ctx.fillText('★ VERIFIED ★', 0, -6);
    ctx.font = '13px "JetBrains Mono", monospace';
    ctx.fillText('SEAL 2026', 0, 18);
    ctx.restore();

    // Right Signature
    ctx.textAlign = 'right';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(1400, 870);
    ctx.lineTo(1700, 870);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('B.Tech Technical Evaluation Board', 1700, 905);
    ctx.fillStyle = '#64748b';
    ctx.font = '15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Undergraduate Applied Computing Guild', 1700, 935);

    return canvas;
  }

  // Download Trigger
  function triggerCertificateDownload() {
    if (window.showToast) {
      window.showToast('Generating high-resolution AI Certificate...', 'info');
    }
    setTimeout(() => {
      const canvas = generateCertificateCanvas();
      const link = document.createElement('a');
      link.download = 'Aditya_Soni_AI_ML_Certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
      if (window.showToast) {
        window.showToast('AI Certificate downloaded successfully!', 'success');
      }
    }, 250);
  }

  // Open Modal
  function openCertModal() {
    if (!certModal) return;
    const canvas = generateCertificateCanvas();
    if (certCanvasPreview) {
      certCanvasPreview.innerHTML = '';
      canvas.style.width = '100%';
      canvas.style.height = 'auto';
      canvas.style.borderRadius = '12px';
      canvas.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
      certCanvasPreview.appendChild(canvas);
    }
    certModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModal() {
    if (!certModal) return;
    certModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (downloadCertBtn) downloadCertBtn.addEventListener('click', triggerCertificateDownload);
  if (modalDownloadCertBtn) modalDownloadCertBtn.addEventListener('click', triggerCertificateDownload);
  if (previewCertBtn) previewCertBtn.addEventListener('click', openCertModal);
  if (certModalClose) certModalClose.addEventListener('click', closeCertModal);
  if (modalCloseCertBtn) modalCloseCertBtn.addEventListener('click', closeCertModal);

  if (certModal) {
    certModal.addEventListener('click', (e) => {
      if (e.target === certModal) closeCertModal();
    });
  }
});
