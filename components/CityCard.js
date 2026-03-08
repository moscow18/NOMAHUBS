import Link from 'next/link';

export default function CityCard({ city }) {
  return (
    <Link 
      href={`/cities/${city.name.toLowerCase()}`}
      className="bg-[#111] border border-gray-800 rounded-2xl p-5 hover:border-[#FFCC00] transition-all group block"
    >
      <div className="relative h-48 w-full mb-4 overflow-hidden rounded-xl">
        <img 
          src={city.image_url} 
          alt={city.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-1">{city.name}</h3>
      <p className="text-gray-500 mb-4">{city.country}</p>
      
      <div className="flex justify-between items-center border-t border-gray-800 pt-4">
        <div className="flex flex-col">
          <span className="text-gray-500 text-xs uppercase">WiFi Speed</span>
          <span className="text-[#FFCC00] font-mono font-bold">{city.wifi_speed} Mbps</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-gray-500 text-xs uppercase">Cost</span>
          <span className="text-white font-bold">${city.cost_per_month}/mo</span>
        </div>
      </div>
    </Link>
  );
}