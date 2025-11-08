import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, Bell, User } from 'lucide-react';
import OnboardingHero from './components/OnboardingHero';
import Dashboard from './components/Dashboard';
import WorkoutLibrary from './components/WorkoutLibrary';
import AIPlanner from './components/AIPlanner';

export default function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <button className="rounded-xl border border-white/10 bg-white/5 p-2"><Menu className="h-5 w-5" /></button>
          <h1 className="text-lg font-bold tracking-tight">VibeFit</h1>
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-white/10 bg-white/5 p-2"><Bell className="h-5 w-5" /></button>
            <button className="rounded-xl border border-white/10 bg-white/5 p-2"><User className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-5xl space-y-8 px-4 py-6">
        <OnboardingHero />
        <Dashboard />
        <WorkoutLibrary />
        <AIPlanner />
      </main>

      {/* Bottom nav - mobile first */}
      <nav className="sticky bottom-0 z-20 border-t border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto grid max-w-5xl grid-cols-4 px-4 py-2 text-center text-xs text-white/70">
          {[
            { key: 'home', label: 'Home' },
            { key: 'workouts', label: 'Workouts' },
            { key: 'progress', label: 'Progress' },
            { key: 'profile', label: 'Profile' },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`rounded-xl px-3 py-2 font-medium transition ${
                tab === item.key
                  ? 'bg-gradient-to-r from-blue-500/30 to-purple-600/30 text-white shadow-[0_0_14px_rgba(88,80,236,0.35)] ring-1 ring-white/10'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      </div>
    </div>
  );
}
