import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 px-6 md:px-12 py-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* اللوجو */}
        <Link href="/" className="text-2xl font-black text-white uppercase tracking-tighter">
          Nomad<span className="text-[#FFCC00]">Hub</span>
        </Link>
        
        {/* روابط التنقل الأساسية */}
        <div className="hidden md:flex gap-10 text-gray-400 font-medium">
          <Link href="/" className="hover:text-[#FFCC00] transition-colors">Home</Link>
          <Link href="/cities" className="hover:text-[#FFCC00] transition-colors">Cities</Link>
          <Link href="/about" className="hover:text-[#FFCC00] transition-colors">About</Link>
        </div>

        {/* زرار إضافة مدينة */}
        <Link 
          href="/add-city" 
          className="bg-[#FFCC00] text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(255,204,0,0.2)]"
        >
          Add City
        </Link>
      </div>
    </nav>
  );
}