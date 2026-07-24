import { motion } from 'framer-motion';
import { Icon } from './Icons';

const divisions = [
  {
    title: "AI Solutions",
    icon: "brain",
    color: "from-purple-500/20 to-pink-500/20",
    services: [
      "AI Chatbots", "AI Call Assistants", "AI Document Processing", "Predictive Analytics",
      "Business Intelligence", "Computer Vision", "AI Surveillance", "AI Reporting",
      "AI Automation", "Custom AI Agents"
    ]
  },
  {
    title: "Software Development",
    icon: "code",
    color: "from-blue-500/20 to-cyan-500/20",
    services: [
      "Websites", "Web Applications", "Mobile Apps", "Enterprise Systems",
      "ERP Systems", "CRM Systems", "HR Systems", "Inventory Systems",
      "Learning Management Systems", "Healthcare Systems", "Municipal Systems"
    ]
  },
  {
    title: "Cybersecurity",
    icon: "shield",
    color: "from-red-500/20 to-orange-500/20",
    services: [
      "Vulnerability Assessments", "Penetration Testing", "Security Audits", "SOC Dashboards",
      "Phishing Simulations", "Security Awareness Training", "Incident Response Planning",
      "Identity & Access Management", "Cloud Security", "Compliance Consulting"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "from-sky-500/20 to-indigo-500/20",
    services: [
      "Cloud Migration", "CI/CD Pipelines", "Kubernetes", "Docker",
      "AWS Deployments", "Azure Deployments", "Google Cloud Deployments",
      "Monitoring", "Disaster Recovery", "Infrastructure as Code"
    ]
  },
  {
    title: "Data Services",
    icon: "database",
    color: "from-emerald-500/20 to-teal-500/20",
    services: [
      "Dashboards", "Data Engineering", "Warehousing", "Reporting",
      "BI Solutions", "Data Governance", "Machine Learning Pipelines"
    ]
  },
  {
    title: "Smart Engineering",
    icon: "cpu",
    color: "from-amber-500/20 to-yellow-500/20",
    services: [
      "BIM Integration", "Construction Management Systems", "Site Management Apps", "Drone Inspections",
      "Digital Twins", "Smart Buildings", "IoT Monitoring", "Asset Management",
      "Project Tracking", "Structural Monitoring"
    ]
  },
  {
    title: "GovTech & Smart City",
    icon: "globe",
    color: "from-[#00FF9C]/20 to-emerald-500/20",
    services: [
      "Municipal Management Systems", "Permit Applications", "Citizen Service Portals", "Complaint Management",
      "Digital Document Workflows", "Procurement Tracking", "Smart City Dashboards",
      "Emergency Response Systems", "Traffic Analytics", "Water Monitoring", "Waste Management Platforms"
    ]
  }
];

const Services = () => {
  return (
    <div id="services" className="space-y-8 sm:space-y-16 py-6 sm:py-12">
      <div className="space-y-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="text-[#00FF9C] font-mono text-sm tracking-wider uppercase">— Divisions —</span>
          <div className="h-px bg-white/20 w-12 sm:w-24" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Technology & <span className="text-[#00FF9C]">Infrastructure</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-text-dim max-w-2xl text-sm sm:text-base leading-relaxed"
        >
          7 divisions delivering end-to-end digital solutions
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative max-w-7xl mx-auto">
        {divisions.map((division, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5, zIndex: 10 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group bg-[#0a161d] border border-white/10 rounded-[24px] overflow-hidden flex flex-col hover:border-[#00FF9C]/30 transition-all duration-500 shadow-2xl relative"
          >
            <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${division.color} blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-5 flex-1">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#00FF9C]/10 border border-[#00FF9C]/20 flex items-center justify-center text-[#00FF9C] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Icon name={division.icon} size={24} />
                </div>
                <h3 className="font-bold text-lg text-white group-hover:text-[#00FF9C] transition-colors leading-tight">
                  {division.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {division.services.map((service, j) => (
                  <span
                    key={j}
                    className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase font-bold tracking-wider hover:bg-[#00FF9C]/10 hover:border-[#00FF9C]/30 hover:text-[#00FF9C] transition-all duration-300"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;