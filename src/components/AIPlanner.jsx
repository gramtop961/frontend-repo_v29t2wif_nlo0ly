import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const presets = [
  { key: 'weight_loss', label: 'Weight Loss' },
  { key: 'muscle_gain', label: 'Muscle Gain' },
  { key: 'strength', label: 'Strength' },
];

export default function AIPlanner() {
  const [goal, setGoal] = useState('weight_loss');
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    // Mocked response; hook to backend later
    await new Promise((r) => setTimeout(r, 800));
    const sample = {
      title: `${presets.find((p) => p.key === goal)?.label} • 4-Day Split`,
      days: [
        { name: 'Day 1 – Upper Push', blocks: ['Bench Press 4x8', 'Incline DB Press 3x10', 'Shoulder Press 3x10', 'Triceps Dips 3x12', '10-min HIIT finisher'] },
        { name: 'Day 2 – Lower', blocks: ['Back Squat 5x5', 'RDL 3x8', 'Walking Lunges 3x12', 'Calf Raises 4x15', 'Core: Planks 3x60s'] },
        { name: 'Day 3 – Upper Pull', blocks: ['Deadlift 5x3', 'Pull-ups 4xAMRAP', 'Barbell Row 4x8', 'Face Pulls 3x15', 'Bike: 12 min'] },
        { name: 'Day 4 – Conditioning', blocks: ['EMOM 20: Burpees/Row', 'Sled Push 6x30m', 'Assault Bike 3x10 min Z2'] },
      ],
      calories: goal === 'weight_loss' ? 2100 : goal === 'muscle_gain' ? 3000 : 2600,
      protein: goal === 'muscle_gain' ? 180 : 150,
    };
    setPlan(sample);
    setLoading(false);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">AI Workout Generator</h2>
        <div className="text-xs text-white/60">Beta</div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          {presets.map((p) => (
            <button
              key={p.key}
              onClick={() => setGoal(p.key)}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                goal === p.key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-[0_0_14px_rgba(88,80,236,0.45)]'
                  : 'bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {p.label}
            </button>
          ))}

          <button
            onClick={generate}
            disabled={loading}
            className="ml-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(88,80,236,0.35)] disabled:opacity-60"
          >
            <Sparkles className="h-4 w-4" />
            {loading ? 'Generating…' : 'Generate Plan'}
          </button>
        </div>

        {plan && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 grid gap-3 sm:grid-cols-2"
          >
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-white font-semibold">{plan.title}</div>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-white/80">
                {plan.days.map((d) => (
                  <li key={d.name} className="">
                    <span className="font-medium text-white">{d.name}:</span> {d.blocks.join(' · ')}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <div className="text-white font-semibold">Nutrition Targets</div>
              <div className="mt-2 grid grid-cols-2 gap-3 text-sm text-white/80">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Calories</div>
                  <div className="text-white font-bold text-lg">{plan.calories}</div>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="text-xs text-white/60">Protein (g)</div>
                  <div className="text-white font-bold text-lg">{plan.protein}</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
