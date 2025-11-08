import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Flame, CalendarCheck, Gauge, Activity } from 'lucide-react';

export default function Dashboard() {
  const today = useMemo(() => new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' }), []);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Today</h2>
        <div className="text-sm text-white/60">{today}</div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-2 ring-1 ring-white/10">
              <CalendarCheck className="h-5 w-5 text-blue-300" />
            </div>
            <div>
              <div className="text-sm text-white/60">Workout</div>
              <div className="text-white font-semibold">Push Day • 45 min</div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <MiniStat icon={<Flame className="h-4 w-4" />} label="Calories" value="430" />
            <MiniStat icon={<Activity className="h-4 w-4" />} label="HR Avg" value="132" />
          </div>
          <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(88,80,236,0.35)]">Start Workout</button>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 p-2 ring-1 ring-white/10">
                <Gauge className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <div className="text-sm text-white/60">Progress</div>
                <div className="text-white font-semibold">Weekly Goals</div>
              </div>
            </div>
            <div className="text-xs text-white/60">3/5 sessions</div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <Ring label="Move" percent={72} color="from-pink-500 to-purple-500" />
            <Ring label="Train" percent={58} color="from-blue-500 to-cyan-500" />
            <Ring label="Recover" percent={86} color="from-emerald-500 to-lime-500" />
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <motion.div
      className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-xl"
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

function MiniStat({ icon, label, value }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-white/80">
      <span className="text-blue-300">{icon}</span>
      <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
      <div className="ml-auto text-sm font-bold text-white">{value}</div>
    </div>
  );
}

function Ring({ label, percent, color }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <svg viewBox="0 0 36 36" className="h-full w-full">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
          </defs>
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
          />
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#grad-Move)"
            strokeWidth="3"
            strokeDasharray={`${percent}, 100`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-sm font-bold text-white">{percent}%</div>
      </div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}
