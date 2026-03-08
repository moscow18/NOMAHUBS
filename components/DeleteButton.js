"use client";
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function DeleteButton({ cityId }) {
  const router = useRouter();

  const handleDelete = async () => {
    // 1. سؤال التأكيد بشكل احترافي
    const result = await Swal.fire({
      title: 'متأكد يا موسكو؟',
      text: "مش هتعرف ترجع المدينة دي تاني بعد ما تتمسح!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'أيوه، امسحها!',
      cancelButtonText: 'لا، خلّيها',
      background: '#111',
      color: '#fff'
    });

    if (result.isConfirmed) {
      // 2. هنا بنستلم الـ error من الـ Supabase (ده السطر اللي كان ناقص)
      const { error } = await supabase
        .from('cities')
        .delete()
        .eq('id', cityId);

      // 3. دلوقتي البرنامج عارف يعني إيه error
      if (error) {
        Swal.fire({
          title: 'Error!',
          text: 'فيه مشكلة حصلت: ' + error.message,
          icon: 'error',
          background: '#111',
          color: '#fff'
        });
      } else {
        await Swal.fire({
          title: 'تم المسح بنجاح!',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
          background: '#111',
          color: '#fff'
        });
        
        router.push('/');
        router.refresh();
      }
    }
  };

  return (
    <button 
      onClick={handleDelete}
      className="mt-8 bg-red-600/10 border border-red-600 text-red-500 px-8 py-3 rounded-2xl hover:bg-red-600 hover:text-white transition-all font-black text-xs tracking-widest uppercase"
    >
      Delete City
    </button>
  );
}