
import PDFDocument from 'pdfkit';
import fs from 'fs';

const doc = new PDFDocument({
  size: 'A4',
  margin: 50,
  bufferPages: true
});

const outputPath = './public/Koketso_Raphasha_Resume.pdf';
doc.pipe(fs.createWriteStream(outputPath));

// --- Styling Constants ---
const COLORS = {
  PRIMARY: '#0f172a',
  SECONDARY: '#334155',
  ACCENT: '#3b82f6',
  TEXT: '#475569',
  LIGHT_TEXT: '#64748b',
  BORDER: '#cbd5e1'
};

// --- Helper Functions ---
const drawLine = () => {
  doc.moveDown(0.5);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor(COLORS.BORDER).lineWidth(0.5).stroke();
  doc.moveDown(0.8);
};

const sectionTitle = (title) => {
  doc.moveDown(1);
  doc.fontSize(13).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text(title.toUpperCase());
  doc.moveDown(0.3);
  doc.moveTo(50, doc.y).lineTo(150, doc.y).strokeColor(COLORS.ACCENT).lineWidth(2).stroke();
  doc.moveDown(0.6);
};

const subTitle = (title, period) => {
  const currentY = doc.y;
  doc.fontSize(11).font('Helvetica-Bold').fillColor(COLORS.SECONDARY).text(title, { width: 350 });
  const textEndY = doc.y;
  
  if (period) {
    doc.fontSize(9).font('Helvetica').fillColor(COLORS.LIGHT_TEXT).text(period, 400, currentY, { align: 'right', width: 145 });
  }
  
  // Reset Y to whichever is lower
  doc.y = Math.max(textEndY, doc.y);
  doc.moveDown(0.1);
};

// --- Header ---
doc.fontSize(22).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('KOKETSO RAPHASHA', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(11).font('Helvetica-Bold').fillColor(COLORS.ACCENT).text('Software Developer & AI Specialist', { align: 'center' });
doc.moveDown(0.4);
doc.fontSize(9).font('Helvetica').fillColor(COLORS.TEXT).text('Centurion, South Africa | +27 78 117 2470 | raphashakoketso99@gmail.com', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/koketso-raphasha-27 | GitHub: github.com/Raphasha27', { align: 'center' });
drawLine();

// --- Professional Summary ---
sectionTitle('Professional Summary');
doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.SECONDARY).text(
  'Innovative Software Developer & AI Specialist with 3+ years of experience in architecting high-performance full-stack applications and intelligent AI systems. Co-founder of Kid of Dynamics, with a proven track record in delivering scalable solutions from real-time API gateways to ML-powered financial processors. Highly proficient in React, Python, and cloud-native architectures.',
  { align: 'justify', lineGap: 2 }
);

// --- Technical Skills ---
sectionTitle('Technical Expertise');
const skillGroups = [
  { label: 'Languages', value: 'Python (Adv.), JavaScript/TypeScript (Adv.), Java, Go, C++, SQL' },
  { label: 'Frontend', value: 'React, Next.js, Framer Motion, Tailwind CSS, Three.js' },
  { label: 'Backend/DevOps', value: 'Spring Boot, Node.js, Docker, Kubernetes, AWS, Kafka, Redis' },
  { label: 'AI/ML', value: 'TensorFlow, PyTorch, Scikit-learn, NLP, LLM Fine-tuning' }
];

skillGroups.forEach(group => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text(`${group.label}: `, { continued: true })
     .font('Helvetica').fillColor(COLORS.TEXT).text(group.value);
  doc.moveDown(0.3);
});

// --- Experience ---
sectionTitle('Professional Experience');

subTitle('Kid of Dynamics', '2022 - Present');
doc.fontSize(9.5).font('Helvetica-Oblique').fillColor(COLORS.LIGHT_TEXT).text('Co-founder & Lead Developer');
doc.moveDown(0.2);
doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.SECONDARY).list([
  'Architected scalable microservices handling thousands of concurrent requests.',
  'Integrated advanced AI models into production workflows, boosting efficiency by 30%.',
  'Led full-stack product lifecycles from initial concept to global cloud deployment.'
], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

doc.moveDown(0.8);
subTitle('CAPACITI Tech Program / Fire4s Group', '2023 - Present');
doc.fontSize(9.5).font('Helvetica-Oblique').fillColor(COLORS.LIGHT_TEXT).text('Software Developer & Mentor');
doc.moveDown(0.2);
doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.SECONDARY).list([
  'Developed enterprise-grade features for the Fire4s Developer ecosystem.',
  'Implemented secure, event-driven architectures using Kafka and Redis.',
  'Mentored junior developers on production-ready React and AI integration patterns.'
], { bulletRadius: 1.5, textIndent: 12, lineGap: 1.5 });

// --- Key Projects ---
sectionTitle('Key Projects');

const projects = [
  { name: 'FlowSentinel', desc: 'High-performance API Gateway handling 10k+ req/s with distributed rate limiting.' },
  { name: 'EduStream Pro', desc: 'AI Learning Platform utilizing custom NLP models for dynamic content generation.' },
  { name: 'FinAxis', desc: 'Financial processor with 94% accurate ML-based fraud detection via Kafka and Redis.' }
];

projects.forEach(p => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text(`${p.name}: `, { continued: true })
     .font('Helvetica').fillColor(COLORS.TEXT).text(p.desc);
  doc.moveDown(0.4);
});

// --- Education ---
sectionTitle('Education & Certifications');
subTitle('BSc Computer Science (Distinction)', 'Awarded');
doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.SECONDARY).text('Top 10% of cohort. Specialization in Algorithms, Distributed Systems, and AI.');
doc.moveDown(0.6);
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('• Google Advanced Machine Learning Specialization');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('• Mobile Application Development (Distinction)');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('• AWS Solutions Architect (In Progress)');

doc.end();
console.log('Organized Resume PDF generated successfully at ' + outputPath);

