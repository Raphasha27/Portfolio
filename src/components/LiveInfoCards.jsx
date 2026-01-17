import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const LiveInfoCards = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({
    temp: '--',
    condition: 'Loading...',
    location: 'Detecting location...',
    humidity: '--',
    wind: '--',
    icon: 'cloud'
  });
  const [loading, setLoading] = useState(true);

  const getWeatherIcon = (code) => {
    // WMO Weather interpretation codes (WW)
    if (code === 0) return <Sun className="w-5 h-5 text-yellow-400" />;
    if (code <= 3) return <Cloud className="w-5 h-5 text-blue-300" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-5 h-5 text-blue-400" />;
    if (code >= 71 && code <= 86) return <CloudRain className="w-5 h-5 text-slate-300" />;
    if (code >= 95) return <Wind className="w-5 h-5 text-purple-400" />;
    return <Cloud className="w-5 h-5 text-blue-300" />;
  };

  const getWeatherCondition = (code) => {
    if (code === 0) return 'Clear Sky';
    if (code === 1) return 'Mainly Clear';
    if (code === 2) return 'Partly Cloudy';
    if (code === 3) return 'Overcast';
    if (code >= 45 && code <= 48) return 'Foggy';
    if (code >= 51 && code <= 55) return 'Drizzle';
    if (code >= 61 && code <= 67) return 'Rainy';
    if (code >= 71 && code <= 77) return 'Snowy';
    if (code >= 80 && code <= 82) return 'Rain Showers';
    if (code >= 95) return 'Thunderstorm';
    return 'Cloudy';
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const fetchWeatherData = async (lat, lon) => {
      try {
        // Fetch location name
        const geoResponse = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        const geoData = await geoResponse.json();
        const city = geoData.city || geoData.locality || 'Unknown Location';
        const country = geoData.countryCode || '';

        // Fetch weather
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m,wind_speed_10m`);
        const weatherData = await weatherResponse.json();
        
        setWeather({
          temp: Math.round(weatherData.current_weather.temperature),
          condition: getWeatherCondition(weatherData.current_weather.weathercode),
          location: `${city}${country ? ', ' + country : ''}`,
          humidity: weatherData.hourly.relative_humidity_2m[0],
          wind: Math.round(weatherData.current_weather.windspeed),
          weatherCode: weatherData.current_weather.weathercode
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather:", error);
        setWeather(prev => ({ ...prev, condition: 'Weather unavailable', location: 'Location error' }));
        setLoading(false);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        async (error) => {
          console.warn("Geolocation denied, falling back to IP-based location.");
          // Fallback to IP-based location
          try {
            const ipResponse = await fetch('https://ipapi.co/json/');
            const ipData = await ipResponse.json();
            if (ipData.latitude && ipData.longitude) {
              fetchWeatherData(ipData.latitude, ipData.longitude);
            }
          } catch (e) {
            setWeather(prev => ({ ...prev, condition: 'Location denied', location: 'Centurion, SA' })); // Default fallback
            setLoading(false);
          }
        }
      );
    } else {
      setLoading(false);
    }

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {/* Calendar Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/20 rounded-xl">
            <CalendarIcon className="w-5 h-5 text-blue-300" />
          </div>
          <h3 className="font-bold text-white text-sm">Live Calendar</h3>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-bold text-white">{formatTime(currentTime)}</p>
          <p className="text-sm text-slate-300">{formatDate(currentTime)}</p>
        </div>
      </motion.div>

      {/* Weather Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl hover:bg-white/15 transition-all"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-500/20 rounded-xl">
            <Cloud className="w-5 h-5 text-orange-300" />
          </div>
          <h3 className="font-bold text-white text-sm">Climate</h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <p className="text-3xl font-bold text-white">
              {weather.temp}{weather.temp !== '--' ? '°C' : ''}
            </p>
            {getWeatherIcon(weather.weatherCode)}
          </div>
          <p className="text-sm text-slate-300">{weather.condition}</p>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{weather.location}</span>
          </div>
          {weather.temp !== '--' && (
            <div className="flex gap-3 mt-1 text-[10px] text-slate-500 font-medium uppercase tracking-wider">
              <span className="flex items-center gap-1"><Wind className="w-3 h-3" /> {weather.wind} km/h</span>
              <span className="flex items-center gap-1">Humidity: {weather.humidity}%</span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Code Identity Card - Spans 2 columns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="md:col-span-2 backdrop-blur-xl bg-slate-900/40 border border-white/20 rounded-3xl p-6 shadow-2xl hover:border-blue-500/30 transition-all overflow-hidden relative"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-xs text-slate-400 ml-2">developer_identity.js</span>
          </div>
          
          <div className="font-mono text-sm space-y-1">
            <div className="text-slate-500">
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">developer</span>{' '}
              <span className="text-slate-400">=</span>{' '}
              <span className="text-yellow-300">{'{'}</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">name</span>
              <span className="text-slate-400">:</span>{' '}
              <span className="text-orange-300">'Koketso Raphasha'</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">role</span>
              <span className="text-slate-400">:</span>{' '}
              <span className="text-orange-300">'Software Developer & AI Specialist'</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">skills</span>
              <span className="text-slate-400">:</span>{' '}
              [<span className="text-orange-300">'React'</span>,{' '}
              <span className="text-orange-300">'Python'</span>,{' '}
              <span className="text-orange-300">'AI/ML'</span>,{' '}
              <span className="text-orange-300">'Cloud'</span>]
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4 text-slate-300">
              <span className="text-green-300">passion</span>
              <span className="text-slate-400">:</span>{' '}
              <span className="text-orange-300">'Building intelligent systems'</span>
            </div>
            <div className="text-yellow-300">{'}'}</div>
            <div className="mt-2 text-slate-500">
              <span className="text-purple-400">console</span>
              <span className="text-slate-400">.</span>
              <span className="text-blue-300">log</span>
              <span className="text-slate-400">(</span>
              developer
              <span className="text-slate-400">)</span>
              <span className="text-green-400 ml-2">// Ready to create amazing things! 🚀</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveInfoCards;
