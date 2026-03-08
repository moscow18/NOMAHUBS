import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// لازم تحط { children } هنا بين الأقواس عشان الـ Next.js يفهمها
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] antialiased flex flex-col min-h-screen text-white">
        <Navbar />
        
        {/* الـ main بياخد الـ flex-grow عشان يزق الفوتر لتحت لو الصفحة فاضية */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}