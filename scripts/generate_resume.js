
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
  PRIMARY: '#0f172a',    // Deep slate
  SECONDARY: '#334155',  // Medium slate
  ACCENT: '#3b82f6',     // Bright blue
  TEXT: '#475569',       // Light slate
  LIGHT_TEXT: '#64748b', // Muted slate
  BORDER: '#cbd5e1'      // Border gray
};

const WIDTH = 495; // A4 width (595) minus margins (50 * 2)

// --- Helper Functions ---
const drawLine = () => {
  doc.moveDown(0.5);
  doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor(COLORS.BORDER).lineWidth(0.5).stroke();
  doc.moveDown(0.8);
};

const sectionTitle = (title) => {
  doc.moveDown(1.2);
  doc.fontSize(13).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text(title.toUpperCase());
  doc.moveDown(0.2);
  doc.moveTo(50, doc.y).lineTo(120, doc.y).strokeColor(COLORS.ACCENT).lineWidth(2).stroke();
  doc.moveDown(0.8);
};

const subTitle = (title, period) => {
  const startY = doc.y;
  
  // Title Column
  doc.fontSize(11).font('Helvetica-Bold').fillColor(COLORS.SECONDARY)
     .text(title, 50, startY, { width: 380 });
  
  const titleEndY = doc.y;
  
  // Date Column (Right-aligned)
  if (period) {
    doc.fontSize(9).font('Helvetica').fillColor(COLORS.LIGHT_TEXT)
       .text(period, 430, startY, { width: 115, align: 'right' });
  }
  
  // Ensure next element starts below the longest column
  doc.y = Math.max(titleEndY, doc.y) + 2;
};

// --- Header ---
doc.fontSize(24).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('KOKETSO RAPHASHA', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(12).font('Helvetica-Bold').fillColor(COLORS.ACCENT).text('Software Developer & AI Specialist', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(9.5).font('Helvetica').fillColor(COLORS.TEXT).text('Centurion, South Africa | +27 78 117 2470 | raphashakoketso99@gmail.com', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/koketso-raphasha-27 | GitHub: github.com/Raphasha27', { align: 'center' });
drawLine();

// --- Professional Summary ---
sectionTitle('Professional Summary');
doc.fontSize(10).font('Helvetica').fillColor(COLORS.SECONDARY).text(
  'Innovative and results-driven Software Developer & AI Specialist with over 3 years of experience in architecting high-performance full-stack applications and intelligent AI systems. Co-founder of Kid of Dynamics, with a proven track record of delivering scalable solutions from real-time API gateways to ML-powered financial processors. Highly proficient in React, Java, Python, and cloud-native architectures.',
  { align: 'justify', lineGap: 2.5 }
);

// --- Technical Skills ---
sectionTitle('Technical Expertise');
const skillGroups = [
  { label: 'Languages', value: 'Python, JavaScript/TypeScript, Java, Go, C++, SQL' },
  { label: 'Frontend', value: 'React, Next.js, Framer Motion, Tailwind CSS, Three.js' },
  { label: 'Backend/DevOps', value: 'Spring Boot, Node.js, Docker, Kubernetes, AWS, Kafka, Redis' },
  { label: 'AI/ML', value: 'TensorFlow, PyTorch, Scikit-learn, NLP, LLM Fine-tuning' }
];

skillGroups.forEach(group => {
  doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text(`${group.label}: `, { continued: true })
     .font('Helvetica').fillColor(COLORS.TEXT).text(group.value);
  doc.moveDown(0.4);
});

// --- Experience ---
sectionTitle('Professional Experience');

subTitle('Kid of Dynamics', '2022 - Present');
doc.fontSize(10).font('Helvetica-Oblique').fillColor(COLORS.LIGHT_TEXT).text('Co-founder & Lead Developer');
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica').fillColor(COLORS.SECONDARY).list([
  'Architected high-availability microservices handling 10k+ concurrent requests.',
  'Deployed production-ready AI models improving financial processing speed by 30%.',
  'Managed full-stack product lifecycles from concept to AWS cloud deployment.'
], { bulletRadius: 1.5, textIndent: 15, lineGap: 2 });

doc.moveDown(1);
subTitle('CAPACITI / Fire4s Group', '2023 - Present');
doc.fontSize(10).font('Helvetica-Oblique').fillColor(COLORS.LIGHT_TEXT).text('Full-Stack Software Developer');
doc.moveDown(0.3);
doc.fontSize(10).font('Helvetica').fillColor(COLORS.SECONDARY).list([
  'Developed enterprise-grade features for the Fire4s Developer ecosystem.',
  'Optimized database performance and introduced real-time GPS tracking features.',
  'Mentored 15+ junior developers on modern React patterns and AI integration.'
], { bulletRadius: 1.5, textIndent: 15, lineGap: 2 });

// --- Key Projects ---
sectionTitle('Key Projects');

const projects = [
  { name: 'FlowSentinel', desc: 'Secure API Gateway handling 10k+ req/s with distributed rate limiting.' },
  { name: 'EduStream Pro', desc: 'AI Learning Platform with NLP-powered content generation and tracking.' },
  { name: 'FinAxis', desc: 'Financial processor with 94% accurate ML fraud detection via Kafka.' }
];

projects.forEach(p => {
  doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text(`${p.name}: `, { continued: true })
     .font('Helvetica').fillColor(COLORS.TEXT).text(p.desc);
  doc.moveDown(0.5);
});

// --- Education ---
sectionTitle('Education & Certifications');
subTitle('BSc Computer Science (Distinction)', 'Degree Completed');
doc.fontSize(10).font('Helvetica').fillColor(COLORS.SECONDARY).text('Top 10% of cohort. Focused on Algorithms, Distributed Systems, and AI.');
doc.moveDown(0.8);
doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('• Google Advanced Machine Learning Specialization');
doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('• Mobile Application Development (Distinction)');
doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.PRIMARY).text('• AWS Solutions Architect (In Progress)');

doc.end();
console.log('Premium Resume PDF generated successfully at ' + outputPath);


