import { supabase } from '../../../lib/supabase';
import DeleteButton from '../../../components/DeleteButton'; // اتأكد إنك عملت الملف ده

export default async function CityDetails({ params }) {
  const resolvedParams = await params;
  const cityName = decodeURIComponent(resolvedParams.name);

  const { data: city, error } = await supabase
    .from('cities')
    .select('*')
    .ilike('name', cityName)
    .maybeSingle();

  if (error || !city) {
    return (
      <div className="bg-[#0a0a0a] min-h-screen text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-black mb-4 uppercase">City Not Found</h1>
        <a href="/" className="bg-[#FFCC00] text-black px-6 py-2 rounded-full font-bold">Back Home</a>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Hero Section - التصميم الأصلي */}
      <div className="relative h-[65vh] w-full">
        <img 
          src={city.image_url} 
          className="w-full h-full object-cover opacity-50 shadow-inner" 
          alt={city.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <span className="text-[#FFCC00] font-mono tracking-widest uppercase text-sm mb-2">Digital Nomad Guide</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            {city.name}<span className="text-[#FFCC00]">.</span>
          </h1>
          <p className="text-xl text-gray-300 mt-4 font-light">{city.country}</p>
          
          {/* زرار المسح - حطيناه هنا بشكل شيك تحت الاسم */}
          <DeleteButton cityId={city.id} />
        </div>
      </div>

      {/* Details Grid - رجعنا الـ 3 columns والـ Sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Overview Section */}
          <div className="lg:col-span-2 space-y-8">
            <h2 className="text-3xl font-bold border-l-4 border-[#FFCC00] pl-6 uppercase">Overview</h2>
            <p className="text-gray-400 leading-relaxed text-xl">
              تعتبر {city.name} وجهة مثالية للـ Digital Nomads. بتكلفة معيشة حوالي 
              <span className="text-white font-bold text-2xl px-2"> ${city.cost_per_month} </span> 
              وسرعة إنترنت تصل لـ <span className="text-white font-bold text-2xl px-2"> {city.wifi_speed} Mbps</span>. 
              مثالية جداً للشغل والمذاكرة من لابتوبك  <span className="text-[#FFCC00]"></span>.
            </p>
          </div>

          {/* Sidebar Stats Card - التصميم القديم الشيك */}
          <div className="bg-[#111] p-8 rounded-[2rem] border border-gray-800 h-fit sticky top-24">
            <h3 className="text-[#FFCC00] text-xs font-black uppercase tracking-widest mb-8 text-center">Vital Statistics</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="text-gray-500">Living Cost</span>
                <span className="font-bold text-xl">${city.cost_per_month}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                <span className="text-gray-500">WiFi Speed</span>
                <span className="font-bold text-xl text-[#FFCC00]">{city.wifi_speed} Mbps</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Nomad Score</span>
                <span className="font-bold text-xl text-green-400">9.8/10</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}