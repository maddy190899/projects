import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="p-10 text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Sparkles className="mx-auto text-emerald-500 w-8 h-8" />
        <h1 className="text-3xl font-bold text-slate-800">Dental Clinic</h1>
      </motion.div>
    </div>
  );
}
