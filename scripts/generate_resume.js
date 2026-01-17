
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 50
});

const outputPath = './public/Koketso_Raphasha_Resume.pdf';
doc.pipe(fs.createWriteStream(outputPath));

// --- Helper Functions ---
const sectionTitle = (title) => {
  doc.moveDown();
  doc.fontSize(14).font('Helvetica-Bold').fillColor('#1e293b').text(title.toUpperCase(), { underline: true });
  doc.moveDown(0.5);
};

const subTitle = (title, period) => {
  const y = doc.y;
  doc.fontSize(12).font('Helvetica-Bold').fillColor('#334155').text(title);
  if (period) {
    doc.fontSize(10).font('Helvetica').fillColor('#64748b').text(period, 400, y, { align: 'right' });
  }
};

// --- Header ---
doc.fontSize(24).font('Helvetica-Bold').fillColor('#0f172a').text('KOKETSO RAPHASHA', { align: 'center' });
doc.fontSize(12).font('Helvetica').fillColor('#3b82f6').text('Software Developer & AI Specialist', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica').fillColor('#475569').text('Centurion, South Africa | +27 78 117 2470 | raphashakoketso99@gmail.com', { align: 'center' });
doc.text('LinkedIn: linkedin.com/in/koketso-raphasha-27 | GitHub: github.com/Raphasha27', { align: 'center' });
doc.moveDown();
doc.moveTo(50, doc.y).lineTo(545, doc.y).strokeColor('#cbd5e1').stroke();
doc.moveDown();

// --- Professional Summary ---
sectionTitle('Professional Summary');
doc.fontSize(10).font('Helvetica').fillColor('#334155').text(
  'Innovative and results-driven Software Developer & AI Specialist with over 3 years of experience in architecting high-performance full-stack applications and intelligent AI systems. Co-founder of Kid of Dynamics, with a proven track record of delivering scalable solutions, from real-time API gateways to ML-powered financial processors. Passionate about merging theoretical computer science with production-ready engineering.',
  { align: 'justify', lineGap: 2 }
);

// --- Technical Skills ---
sectionTitle('Technical Expertise');
const skills = [
  { category: 'Languages', items: 'Python, JavaScript, TypeScript, Java, Go, C++, SQL' },
  { category: 'Frontend', items: 'React, Next.js, Framer Motion, Tailwind CSS, Three.js' },
  { category: 'Backend/Cloud', items: 'Spring Boot, Node.js, Docker, Kubernetes, AWS, Kafka, Redis' },
  { category: 'AI & Machine Learning', items: 'TensorFlow, PyTorch, Scikit-learn, NLP, LLM Fine-tuning' }
];

skills.forEach(skill => {
  doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text(`${skill.category}: `, { continued: true })
     .font('Helvetica').fillColor('#334155').text(skill.items);
  doc.moveDown(0.2);
});

// --- Experience ---
sectionTitle('Professional Experience');

subTitle('Kid of Dynamics', '2022 - Present');
doc.fontSize(10).font('Helvetica-Oblique').fillColor('#64748b').text('Co-founder & Software Developer');
doc.fontSize(10).font('Helvetica').fillColor('#334155').list([
  'Scaled architectural design for initial product lines, focusing on high-availability microservices.',
  'Integrated AI models into core workflows, improving transaction processing efficiency by 30%.',
  'Managed full-stack lifecycles from ideation to production deployment on cloud infrastructure.'
], { bulletRadius: 2, textIndent: 15 });

doc.moveDown(0.5);
subTitle('CAPACITI Tech Program / Fire4s Group', '2023 - Present');
doc.fontSize(10).font('Helvetica-Oblique').fillColor('#64748b').text('Full-Stack Contributor');
doc.fontSize(10).font('Helvetica').fillColor('#334155').list([
  'Developed and optimized core features for the Fire4s Developer Group ecosystem.',
  'Collaborated with cross-functional teams to implement secure event-driven architectures.',
  'Mentored up-and-coming developers on modern React patterns and AI integration.'
], { bulletRadius: 2, textIndent: 15 });

// --- Featured Projects ---
sectionTitle('Key Projects');

doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text('FlowSentinel: ', { continued: true })
   .font('Helvetica').fillColor('#334155').text('High-performance API Gateway handling 10k+ req/s with distributed rate limiting.');
doc.moveDown(0.2);
doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text('EduStream Pro: ', { continued: true })
   .font('Helvetica').fillColor('#334155').text('AI Learning Platform using custom NLP models for content generation and tracking.');
doc.moveDown(0.2);
doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text('FinAxis: ', { continued: true })
   .font('Helvetica').fillColor('#334155').text('Financial processor with 94% accurate ML-based fraud detection via Kafka and Redis.');

// --- Education ---
sectionTitle('Education & Certifications');
subTitle('BSc Computer Science (Distinction)', 'Degree Completed');
doc.fontSize(10).font('Helvetica').fillColor('#334155').text('Top 10% of cohort. Focused on Algorithms, Distributed Systems, and AI.');
doc.moveDown(0.5);
doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text('Google Advanced Machine Learning Specialization');
doc.fontSize(10).font('Helvetica-Bold').fillColor('#0f172a').text('Mobile Application Development (Distinction)');

doc.end();
console.log('Resume PDF generated successfully at ' + outputPath);
