// بنطلع مرتين بس: واحدة لـ app وواحدة لـ src
import { supabase } from '../../lib/supabase';
import CityCard from '../../components/CityCard';

export default async function CitiesPage() {
  const { data: cities, error } = await supabase.from('cities').select('*');

  if (error) return <div className="text-white text-center py-40">خطأ في الاتصال يا موسكو!</div>;

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-32 px-10">
      <h1 className="text-5xl font-black text-white mb-16 uppercase tracking-tighter">
        All <span className="text-[#FFCC00]">Cities</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        {cities?.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}