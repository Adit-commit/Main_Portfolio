import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.units import inch

pdf_path = os.path.join(os.path.dirname(__file__), 'assets', 'Aditya_Soni_Resume.pdf')
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=0.5 * inch,
    rightMargin=0.5 * inch,
    topMargin=0.45 * inch,
    bottomMargin=0.45 * inch
)

styles = getSampleStyleSheet()

# Custom styles
title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=colors.HexColor('#0f172a'),
    alignment=1
)

sub_style = ParagraphStyle(
    'DocSub',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=14,
    textColor=colors.HexColor('#0284c7'),
    alignment=1
)

contact_style = ParagraphStyle(
    'DocContact',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=12,
    textColor=colors.HexColor('#334155'),
    alignment=1
)

sec_title_style = ParagraphStyle(
    'SecTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10.5,
    leading=14,
    textColor=colors.HexColor('#0284c7'),
    spaceAfter=2
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.8,
    leading=12.2,
    textColor=colors.HexColor('#1e293b')
)

bullet_style = ParagraphStyle(
    'BulletCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11.8,
    textColor=colors.HexColor('#334155'),
    leftIndent=12,
    firstLineIndent=-8
)

bold_text = ParagraphStyle(
    'BoldCustom',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.8,
    leading=12.2,
    textColor=colors.HexColor('#0f172a')
)

story = []

# Header
story.append(Paragraph('ADITYA SONI', title_style))
story.append(Spacer(1, 2))
story.append(Paragraph('B.Tech Computer Science & Engineering (1st Year) | Neural Networks, ML & Mathematics Enthusiast', sub_style))
story.append(Spacer(1, 2))
contact_line = 'Jaipur, Rajasthan, India &bull; Phone: +91 9630307240 &bull; Email: aditya.soni.linkedin@gmail.com<br/>GitHub: github.com/Adit-commit &bull; LinkedIn: linkedin.com/in/aditya-soni-918044429 &bull; Instagram: @aditya_soni_082'
story.append(Paragraph(contact_line, contact_style))
story.append(Spacer(1, 5))
story.append(HRFlowable(width='100%', thickness=1.2, color=colors.HexColor('#0284c7'), spaceAfter=6))

# Summary
story.append(Paragraph('PROFESSIONAL SUMMARY', sec_title_style))
summary_text = 'Driven 1st-year B.Tech Computer Science Engineering student at JECRC University with deep curiosity for Neural Networks, Machine Learning, and the Mathematics underpinning intelligent systems. Strong foundation in Python, C programming, Data Structures & Algorithms, and modern Git workflows. Passionate about solving real-world challenges by bridging theoretical algorithms with practical software applications and creative engineering.'
story.append(Paragraph(summary_text, body_style))
story.append(Spacer(1, 6))

# Education
story.append(Paragraph('EDUCATION', sec_title_style))

right_aligned = ParagraphStyle('RightAligned', parent=body_style, alignment=2)

edu_data = [
    [
        Paragraph('<b>Bachelor of Technology (B.Tech) — Computer Science & Engineering</b><br/><font color="#64748b">JECRC University, Jaipur</font>', body_style),
        Paragraph('<b>2026 – 2030 (Expected)</b><br/><font color="#0284c7">Currently 1st Year / 1st Sem</font>', right_aligned)
    ],
    [
        Paragraph('<b>Senior Secondary Education (Class XII)</b> — CBSE Board (78%)<br/><font color="#64748b">ECS School, Gwalior</font>', body_style),
        Paragraph('<b>Completed</b><br/>Physics, Chem, Math & CS', right_aligned)
    ],
    [
        Paragraph('<b>Secondary School Education (Class X)</b><br/><font color="#64748b">ST. Peter’s School, Dabra (M.P)</font>', body_style),
        Paragraph('<b>Completed</b><br/>Foundational Science & Logic', right_aligned)
    ]
]
edu_table = Table(edu_data, colWidths=[5.4 * inch, 2.1 * inch])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 3),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(edu_table)
story.append(Spacer(1, 5))

# Technical Skills
story.append(Paragraph('TECHNICAL SKILLS & DOMAINS', sec_title_style))
skills_data = [
    [Paragraph('<b>Programming Languages:</b>', bold_text), Paragraph('Python (Proficient, OOP, Scripting), C Language (Pointers, Memory, Structures), C++ Basics', body_style)],
    [Paragraph('<b>AI & Neural Networks:</b>', bold_text), Paragraph('Neural Networks from Scratch (Perceptrons, Forward/Backprop), Scikit-Learn, NumPy, Pandas, Matplotlib', body_style)],
    [Paragraph('<b>Math Behind AI:</b>', bold_text), Paragraph('Linear Algebra (Vectors, Matrices, Dot Products, Transformations), Multivariable Calculus (Gradients, Chain Rule), Probability & Statistics', body_style)],
    [Paragraph('<b>Core Computer Science:</b>', bold_text), Paragraph('Data Structures & Algorithms (Arrays, Linked Lists, Stacks, Queues, Binary Search, Big-O Complexity)', body_style)],
    [Paragraph('<b>Web & Development Tools:</b>', bold_text), Paragraph('HTML5, CSS3 (Modern Glassmorphism & Responsive Layouts), JavaScript Basics, Git & GitHub, VS Code, Linux CLI, Vercel', body_style)]
]
skills_table = Table(skills_data, colWidths=[2.2 * inch, 5.3 * inch])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('BOTTOMPADDING', (0,0), (-1,-1), 2),
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(skills_table)
story.append(Spacer(1, 5))

# Featured Projects
story.append(Paragraph('FEATURED PROJECTS', sec_title_style))

story.append(Paragraph('<b>NeuroSim: Neural Network & Backpropagation Visualizer</b> &bull; <i>Python, NumPy, Canvas Architecture</i>', bold_text))
story.append(Paragraph('&bull; Programmed a modular neural network architecture from first principles without black-box ML frameworks, manually writing matrix transformations, activation functions (ReLU, Sigmoid), and Cross-Entropy loss.', bullet_style))
story.append(Paragraph('&bull; Computed analytical gradient vectors via backpropagation chain rule, visualizing loss reduction and weight trajectory updates across training epochs.', bullet_style))
story.append(Spacer(1, 3))

story.append(Paragraph('<b>ApexTelemetry: Formula 1 Race Telemetry & Lap Time Predictor</b> &bull; <i>Python, Scikit-Learn, Pandas</i>', bold_text))
story.append(Paragraph('&bull; Built an intelligent F1 predictive model factoring in tire compound degradation curves, track temperatures, and sector speeds inspired by real-world telemetry dynamics.', bullet_style))
story.append(Paragraph('&bull; Applied regression and feature importance techniques to predict optimal pit window timing with verified error minimization.', bullet_style))
story.append(Spacer(1, 3))

story.append(Paragraph('<b>Personal Developer Portfolio & Web Application</b> &bull; <i>HTML5, CSS3, JavaScript, Vercel</i>', bold_text))
story.append(Paragraph('&bull; Engineered a modern Dribbble-inspired portfolio featuring neural particle simulations, interactive AI certificate generator, ATS resume modal, and responsive mobile UX.', bullet_style))
story.append(Paragraph('&bull; Tracked development lifecycle using Git/GitHub version control (github.com/Adit-commit) and deployed live on Vercel.', bullet_style))
story.append(Spacer(1, 5))

# Certifications & Passions
story.append(Paragraph('CREDENTIALS & PASSIONS', sec_title_style))
story.append(Paragraph('&bull; <b>AI & Machine Learning Foundations Certificate:</b> Autonomous attestation of competence in mathematical foundations, neural networks, and Python ML pipelines.', bullet_style))
story.append(Paragraph('&bull; <b>Formula 1 Racing (Enthusiast):</b> Passionate analyst of aerodynamic telemetry, telemetry telemetry curves, and team strategic decision-making.', bullet_style))
story.append(Paragraph('&bull; <b>Solo Travelling:</b> Solo traveler exploring diverse cultural landscapes across India, enhancing adaptability, resilience, and independent problem-solving.', bullet_style))
story.append(Paragraph('&bull; <b>Cinema & Visual Analysis:</b> Enthusiast of visual direction, color grading palettes, and narrative arcs in global cinema.', bullet_style))

doc.build(story)
print('PDF generated successfully at:', pdf_path)
