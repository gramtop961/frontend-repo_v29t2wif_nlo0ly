import { motion } from 'framer-motion';

const quotes = [
  {
    text: "Show up. Put in the work. The results will follow.",
    author: "— Elite Mindset",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  },
  {
    text: "Strength is built one rep at a time.",
    author: "— Focused & Relentless",
    image:
      "https://images.unsplash.com/photo-1599050751705-06e1a7c7d5b6?q=80&w=1600&auto=format&fit=crop",
  },
  {
    text: "Discipline beats motivation.",
    author: "— Daily Grind",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function OnboardingHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0a0a0f] ring-1 ring-white/10 shadow-xl">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Carousel */}
        <div className="relative h-72 md:h-[420px]">
          {quotes.map((q, i) => (
            <motion.img
              key={q.text}
              src={q.image}
              alt="athlete"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: i === 0 ? 1 : 0 }}
              transition={{ duration: 0.8, delay: i * 3, repeat: Infinity, repeatDelay: (quotes.length - 1) * 3 }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
          <motion.h1
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Train in style. Perform with power.
          </motion.h1>
          <motion.p
            className="text-white/70 max-w-md"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            A premium fitness experience with AI-powered plans, stunning visuals, and a sleek dark theme with neon glow.
          </motion.p>

          <div className="mt-2 flex flex-wrap gap-3">
            <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(88,80,236,0.35)] transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(88,80,236,0.55)] focus:outline-none">
              Get Started
            </button>
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/10 focus:outline-none">
              Explore Workouts
            </button>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <Stat label="Programs" value="120+" />
            <Stat label="Videos" value="500+" />
            <Stat label="Calories Burned" value="2.3M" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80 backdrop-blur">
      <div className="text-lg font-bold text-white">{value}</div>
      <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  );
}
