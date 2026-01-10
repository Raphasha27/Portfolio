import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Share2, Smartphone } from 'lucide-react';

export default function DigitalCard() {
  const localIp = "192.168.18.65";
  const websiteUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? `http://${localIp}:3000`
    : window.location.href;

  return (
    <motion.div 
      className="qr-sidebar glass"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="qr-sidebar-content">
        <div className="qr-sidebar-header">
           <Smartphone size={20} color="var(--primary)" />
           <h4>Connect</h4>
        </div>

        <div className="qr-sidebar-frame glass">
          <QRCodeSVG 
            value={websiteUrl} 
            size={120}
            bgColor={"transparent"}
            fgColor={"#ffffff"}
            level={"H"}
            includeMargin={false}
          />
        </div>

        <div className="qr-sidebar-footer">
          <p>Scan to view on Mobile</p>
          <div className="link-text">
            <Share2 size={12} />
            <span>raphasha.dev</span>
          </div>
        </div>
      </div>

      <style>{`
        .qr-sidebar {
          position: fixed;
          top: 50%;
          right: 24px;
          transform: translateY(-50%);
          width: 180px;
          padding: 24px 16px;
          z-index: 1000;
          border: 1px solid var(--glass-border);
          text-align: center;
        }
        .qr-sidebar-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 20px;
        }
        .qr-sidebar-header h4 {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .qr-sidebar-frame {
          display: inline-block;
          padding: 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .qr-sidebar-footer p {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 8px;
        }
        .link-text {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          font-size: 0.7rem;
          color: var(--primary);
          font-weight: 600;
        }
        @media (max-width: 1280px) {
          .qr-sidebar {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
