"use client"; // لازم عشان بنستخدم useState و handleSubmit
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function AddCity() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const newCity = {
      name: formData.get('name'),
      country: formData.get('country'),
      cost_per_month: parseInt(formData.get('cost')),
      wifi_speed: parseInt(formData.get('wifi')),
      image_url: formData.get('image'),
    };

  const { error } = await supabase.from('cities').insert([newCity]);

  // جوه دالة handleSubmit بعد الـ insert
  if (error) {
    Swal.fire({
      title: 'Error!',
      text: 'حصل مشكلة يا موسكو: ' + error.message,
      icon: 'error',
      confirmButtonColor: '#FFCC00',
      background: '#111',
      color: '#fff'
    });
  } else {
    Swal.fire({
      title: 'Success!',
      text: 'المدينة انضافت بنجاح! 🚀',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      background: '#111',
      color: '#fff'
    });
    router.push('/');
  }
};

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 px-6">
      <div className="max-w-2xl mx-auto bg-[#111] p-10 rounded-[2.5rem] border border-gray-800 shadow-2xl">
        <h1 className="text-4xl font-black text-white mb-2">ADD <span className="text-[#FFCC00]">NEW CITY</span></h1>
        <p className="text-gray-500 mb-10">Expand the NomadHub database from your Moscow device.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="name" placeholder="City Name (e.g. London)" className="bg-black border border-gray-800 p-4 rounded-2xl text-white focus:border-[#FFCC00] outline-none" required />
            <input name="country" placeholder="Country" className="bg-black border border-gray-800 p-4 rounded-2xl text-white focus:border-[#FFCC00] outline-none" required />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input name="cost" type="number" placeholder="Cost/mo ($)" className="bg-black border border-gray-800 p-4 rounded-2xl text-white focus:border-[#FFCC00] outline-none" required />
            <input name="wifi" type="number" placeholder="WiFi Speed (Mbps)" className="bg-black border border-gray-800 p-4 rounded-2xl text-white focus:border-[#FFCC00] outline-none" required />
          </div>

          <input name="image" placeholder="Image URL (Unsplash link)" className="w-full bg-black border border-gray-800 p-4 rounded-2xl text-white focus:border-[#FFCC00] outline-none" required />

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#FFCC00] text-black font-black py-5 rounded-2xl hover:scale-[1.02] transition-transform disabled:opacity-50"
          >
            {loading ? "SAVING TO SUPABASE..." : "PUBLISH CITY"}
          </button>
        </form>
      </div>
    </div>
  );
}