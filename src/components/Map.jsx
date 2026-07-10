import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const johannesburg = [-26.2041, 28.0473];

const markerIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="width:24px;height:24px;background:#00FF9C;border:3px solid #00FF9C;border-radius:50%;box-shadow:0 0 20px rgba(0,255,156,0.6),0 0 60px rgba(0,255,156,0.3);"></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const MapController = () => {
  const map = useMap();
  useEffect(() => {
    map.setView(johannesburg, 10, { animate: true });
  }, [map]);
  return null;
};

const Map = () => {
  const [ready, setReady] = useState(false);

  return (
    <section id="location" className="py-16 sm:py-24 relative overflow-hidden bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 sm:space-y-4">
            <div className="text-blue-400 font-bold text-xs tracking-[0.3em] uppercase">— PRESENCE —</div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Global Reach, <span className="text-blue-400">Local Roots</span></h2>
            <p className="text-text-dim text-sm sm:text-base max-w-md">
              Based in the heart of Gauteng, South Africa. Delivering high-performance solutions to the world.
            </p>
          </div>
          <div className="glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-blue-500/20 flex items-center gap-3 sm:gap-4 self-start">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-ping" />
            <span className="text-xs sm:text-sm font-bold font-mono text-blue-400 uppercase tracking-widest">Johannesburg, South Africa</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-1.5 sm:p-2 rounded-2xl sm:rounded-[40px] border border-blue-500/30 overflow-hidden h-[300px] sm:h-[400px] lg:h-[480px] relative group bg-white/5"
        >
          {!ready && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#000814] z-20">
              <div className="w-20 h-20 border-2 border-blue-500/20 rounded-full border-t-blue-500 animate-spin mb-4" />
              <div className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.5em] animate-pulse">Loading Map...</div>
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(59,130,246,0.1)_50%)] bg-[length:100%_4px] animate-scan" />
            </div>
          )}

          <div className={`w-full h-full rounded-[32px] overflow-hidden transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
            <MapContainer
              center={johannesburg}
              zoom={10}
              scrollWheelZoom={false}
              zoomControl={true}
              className="w-full h-full"
              whenReady={() => setReady(true)}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              <MapController />
              <Marker position={johannesburg} icon={markerIcon}>
                <Popup>
                  <div className="text-center font-mono text-xs">
                    <strong className="text-base">Johannesburg</strong><br />
                    Gauteng, South Africa
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="absolute inset-0 pointer-events-none border-[20px] border-blue-500/10 rounded-[40px]" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#000814] via-transparent to-transparent opacity-30" />
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
