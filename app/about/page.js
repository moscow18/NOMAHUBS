export default function AboutPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 flex items-center justify-center px-6">
      <div className="max-w-3xl text-center bg-[#111] p-12 rounded-[2.5rem] border border-gray-800 shadow-2xl">
        <h1 className="text-6xl font-black text-white mb-8 uppercase tracking-tighter">
          ABOUT <span className="text-[#FFCC00]">NOMADHUB</span>
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Welcome to <span className="text-[#FFCC00] font-bold">NomadHub</span>, a platform built by 
          <span className="text-white font-bold italic"> Moscow </span> 
          to help digital nomads find their next home.
        </p>
        <div className="mt-10 pt-10 border-t border-gray-800">
          <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">
            Developed on: AMD Ryzen 5 7520U
          </p>
        </div>
      </div>
    </div>
  );
}