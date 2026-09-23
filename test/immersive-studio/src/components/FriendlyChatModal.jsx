import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Coffee, Heart, Send, Sparkles, Smile } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function FriendlyChatModal({ isOpen, onClose }) {
  const [drink, setDrink] = useState('☕ Pour-over Coffee');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    story: '',
    timing: 'In the next 2-3 months'
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);

      try {
        confetti({
          particleCount: 70,
          spread: 50,
          origin: { y: 0.6 },
          colors: ['#E05A47', '#E69D35', '#2C4C38', '#FAF7F2']
        });
      } catch {
        // Fallback
      }
    }, 600);
  };

  const handleReset = () => {
    setSent(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-xs overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-[#FAF7F2] border border-stone-200 rounded-3xl max-w-xl w-full p-6 sm:p-10 shadow-2xl relative my-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 border border-stone-200 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-2">
              <Coffee className="w-4 h-4 text-amber-700" />
              <span>Friendly Coffee Chat</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-human font-bold text-stone-900 mb-2">
              Tell us about what <br />
              <span className="italic font-normal text-[#E05A47] font-human">you're dreaming of building.</span>
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm mb-6 leading-relaxed">
              No sales pitches, no pressure, and no corporate nonsense. Just an honest conversation about your craft, your goals, and how we can help.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    What should we call you? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your first name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-800 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your best email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-800 shadow-xs"
                  />
                </div>
              </div>

              {/* What drink would you like? */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  If we met up in person, what's your go-to drink? ☕
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['☕ Pour-over Coffee', '🍵 Iced Matcha', '🫖 Earl Grey Tea', '✨ Sparkling Water'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setDrink(item)}
                      className={`p-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer text-center ${
                        drink === item
                          ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Tell us a bit about your idea or current website:
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.story}
                  onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                  placeholder="What are you creating? What's feeling stuck with your current online presence?"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-800 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Roughly when are you hoping to launch?
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-stone-200 text-stone-900 text-sm focus:outline-none focus:border-stone-800 shadow-xs"
                >
                  <option value="As soon as possible">As soon as possible</option>
                  <option value="In the next 2-3 months">In the next 2-3 months</option>
                  <option value="Later this year">Later this year</option>
                  <option value="Just exploring ideas right now">Just exploring ideas right now</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full btn-warm-primary py-3.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-md mt-2"
              >
                {sending ? (
                  <span>Sending your note over...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Note to the Studio Team</span>
                  </>
                )}
              </button>

              <p className="font-handwriting text-stone-500 text-center text-sm">
                No automated bot emails. A real human from our team will write back to you personally.
              </p>

            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto text-2xl">
              ☕
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-human font-bold text-stone-900">
                Note received with care!
              </h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto mt-2 leading-relaxed">
                Thank you so much, <span className="font-bold text-stone-900">{formData.name}</span>. We've poured the {drink} and will read through your note today. Expect a warm, personal reply from Maya or Julian shortly!
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-stone-900 text-white font-medium text-xs hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Back to the Website
            </button>
          </div>
        )}

      </motion.div>
    </div>
  );
}
