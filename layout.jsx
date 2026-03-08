import './globals.css';
// import { Navbar } from '../components/Navbar'; // هنكريته الخطوة الجاية

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        {/* <Navbar /> */}
        <main>{children}</main>
        <footer className="p-10 border-t border-yellow-500/20 text-center text-sm text-gray-500">
          © 2026 <span className="text-[#FFCC00] font-bold">NomadHub</span> | Built by Moscow
        </footer>
      </body>
    </html>
  );
}