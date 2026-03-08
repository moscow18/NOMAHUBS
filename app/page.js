"use client"; // السطر ده لازم يكون رقم 1

import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import CityCard from '../components/CityCard';

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getCities() {
      // سحب البيانات من جدول المدن في Supabase
      const { data } = await supabase.from('cities').select('*');
      setCities(data || []);
    }
    getCities();
  }, []);

  // فلترة المدن بناءً على الاسم اللي بتكتبه يا موسكو
  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 text-white">
      <section className="text-center mb-16 px-4">
        <h1 className="text-6xl font-black mb-6 uppercase tracking-tighter">
          Explore <span className="text-[#FFCC00]">Nomad Hubs</span>
        </h1>
        
        {/* شريط البحث */}
        <div className="max-w-xl mx-auto relative px-4">
          <input 
            type="text"
            placeholder="Search by city name (e.g. Cairo)..."
            className="w-full bg-[#111] border border-gray-800 p-5 rounded-2xl outline-none focus:border-[#FFCC00] transition-all text-lg text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* عرض المدن المفلترة */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto pb-20">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">مفيش مدينة بالاسم ده يا موسكو..</p>
        )}
      </div>
    </div>
  );
}