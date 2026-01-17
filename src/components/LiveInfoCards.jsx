import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, MapPin, Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const LiveInfoCards = ({ isDarkMode }) => {
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
    if (code === 0) return <Sun className="w-5 h-5 text-yellow-500" />;
    if (code <= 3) return <Cloud className="w-5 h-5 text-blue-400" />;
    if (code >= 51 && code <= 67) return <CloudRain className="w-5 h-5 text-blue-500" />;
    if (code >= 71 && code <= 86) return <CloudRain className="w-5 h-5 text-slate-400" />;
    if (code >= 95) return <Wind className="w-5 h-5 text-purple-500" />;
    return <Cloud className="w-5 h-5 text-blue-400" />;
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
        const geoResponse = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
        const geoData = await geoResponse.json();
        const city = geoData.city || geoData.locality || 'Unknown Location';
        const country = geoData.countryCode || '';

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
          try {
            const ipResponse = await fetch('https://ipapi.co/json/');
            const ipData = await ipResponse.json();
            if (ipData.latitude && ipData.longitude) {
              fetchWeatherData(ipData.latitude, ipData.longitude);
            }
          } catch (e) {
            setWeather(prev => ({ ...prev, condition: 'Location denied', location: 'Centurion, SA' })); 
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

  const cardBaseClasses = `backdrop-blur-md border transition-all duration-500 rounded-3xl p-6 shadow-xl ${
    isDarkMode 
      ? 'bg-slate-900/40 border-white/10 hover:bg-slate-900/60' 
      : 'bg-white/80 border-slate-200 hover:bg-white shadow-slate-200/50'
  }`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
      {/* Calendar Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={cardBaseClasses}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-50'}`}>
            <CalendarIcon className={`w-5 h-5 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`} />
          </div>
          <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Live Calendar</h3>
        </div>
        <div className="space-y-1">
          <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{formatTime(currentTime)}</p>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{formatDate(currentTime)}</p>
        </div>
      </motion.div>

      {/* Weather Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={cardBaseClasses}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`p-2 rounded-xl ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-50'}`}>
            <Cloud className={`w-5 h-5 ${isDarkMode ? 'text-orange-300' : 'text-orange-600'}`} />
          </div>
          <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Climate</h3>
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <p className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              {weather.temp}{weather.temp !== '--' ? '°C' : ''}
            </p>
            {getWeatherIcon(weather.weatherCode)}
          </div>
          <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{weather.condition}</p>
          <div className={`flex items-center gap-1 text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            <MapPin className="w-3 h-3" />
            <span className="truncate">{weather.location}</span>
          </div>
        </div>
      </motion.div>

      {/* Code Identity Card - Spans 2 columns */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`md:col-span-2 backdrop-blur-md border rounded-3xl p-6 shadow-xl relative overflow-hidden transition-all duration-500 ${
          isDarkMode 
            ? 'bg-slate-900/60 border-white/10 hover:border-blue-500/30' 
            : 'bg-slate-900 border-slate-800'
        }`}
      >
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
          
          <div className="font-mono text-xs sm:text-sm space-y-1">
            <div className="text-slate-500"><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-slate-400">=</span> <span className="text-yellow-300">{'{'}</span></div>
            <div className="pl-4"><span className="text-green-300">name</span>: <span className="text-orange-300">'Koketso Raphasha'</span>,</div>
            <div className="pl-4"><span className="text-green-300">role</span>: <span className="text-orange-300">'Software Developer'</span>,</div>
            <div className="pl-4"><span className="text-green-300">skills</span>: [<span className="text-orange-300">'React'</span>, <span className="text-orange-300">'AI'</span>],</div>
            <div className="text-yellow-300">{'}'}</div>
            <div className="mt-2 text-slate-500"><span className="text-purple-400">console</span>.<span className="text-blue-300">log</span>(developer) <span className="text-green-400 ml-2">// 🚀</span></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LiveInfoCards;
