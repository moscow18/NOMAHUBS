import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 pt-20 pb-10 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* القسم الأول: اللوجو والوصف */}
        <div className="space-y-6">
          <Link href="/" className="text-3xl font-black text-white uppercase tracking-tighter">
            NOMAD<span className="text-[#FFCC00]">HUB.</span>
          </Link>
          <p className="text-gray-500 leading-relaxed max-w-sm">
            أفضل منصة لمساعدة الـ Digital Nomads في العثور على وجهتهم القادمة. مشروع تم تطويره بواسطة موسكو.
          </p>
        </div>

        {/* القسم الثاني: روابط سريعة */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
          <ul className="space-y-4 text-gray-500">
            <li><Link href="/" className="hover:text-[#FFCC00] transition-colors">Home</Link></li>
            <li><Link href="/cities" className="hover:text-[#FFCC00] transition-colors">All Cities</Link></li>
            <li><Link href="/about" className="hover:text-[#FFCC00] transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* القسم الثالث: التواصل */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-all">FB</a>
            <a href="#" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-all">TW</a>
            <a href="#" className="w-10 h-10 bg-[#111] rounded-full flex items-center justify-center hover:bg-[#FFCC00] hover:text-black transition-all">IG</a>
          </div>
          <p className="text-gray-600 mt-6 text-xs font-mono uppercase">
            Developed on Device: Moscow (Ryzen 5)
          </p>
        </div>
      </div>

      {/* الحقوق النهائية */}
      <div className="max-w-7xl mx-auto border-t border-gray-900 pt-8 text-center">
        <p className="text-gray-700 text-[10px] uppercase tracking-[0.5em]">
          © 2026 NomadHub Project - Built with Next.js 16 & Supabase
        </p>
      </div>
    </footer>
  );
}