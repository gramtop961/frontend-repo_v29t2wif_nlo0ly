import { motion } from 'framer-motion';
import { Dumbbell, Play } from 'lucide-react';

const categories = [
  {
    name: 'Chest',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Back',
    image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1400&auto=format&fit=crop',
  },
  {
    name: 'Legs',
    image: 'https://images.unsplash.com/photo-1603309288245-c9b16e639aaf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCYWNrfGVufDB8MHx8fDE3NjI1OTc2MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'Cardio',
    image: 'https://images.unsplash.com/photo-1537094082840-dcbbfa99385f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMZWdzfGVufDB8MHx8fDE3NjI1OTc2MDV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    name: 'HIIT',
    image: 'https://images.unsplash.com/flagged/photo-1556746834-1cb5b8fabd54?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDYXJkaW98ZW58MHwwfHx8MTc2MjU5NzYwNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function WorkoutLibrary() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Workout Library</h2>
        <button className="text-sm text-white/70 hover:text-white">See all</button>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {categories.map((cat, idx) => (
          <motion.button
            key={cat.name}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <img src={cat.image} alt={cat.name} className="h-28 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-3">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-white/10 p-1.5 backdrop-blur-sm">
                  <Dumbbell className="h-4 w-4 text-blue-300" />
                </div>
                <div className="text-sm font-semibold text-white">{cat.name}</div>
                <div className="ml-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1.5 text-white shadow-[0_0_12px_rgba(88,80,236,0.45)] transition group-hover:scale-110">
                  <Play className="h-3 w-3" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
