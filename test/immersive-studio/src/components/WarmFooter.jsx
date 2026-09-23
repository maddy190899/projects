import { Coffee, Heart, ArrowUp, Smile } from 'lucide-react';

export default function WarmFooter({ onOpenChat }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-stone-200/80 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Warm Studio Invitation Banner */}
        <div className="clay-card rounded-3xl p-8 sm:p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-xl text-center md:text-left">
            <span className="font-handwriting text-amber-800 text-xl block mb-1">
              Ready to start something new?
            </span>
            <h3 className="text-2xl sm:text-4xl font-human font-bold text-stone-900 tracking-tight mb-2">
              Let's make something we're both <br />
              <span className="italic font-normal text-[#E05A47] font-human">genuinely proud of.</span>
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Drop us a friendly note, tell us about what you're working on, or just say hello. We'd truly love to hear from you.
            </p>
          </div>

          <button
            onClick={onOpenChat}
            className="btn-warm-primary px-8 py-4 rounded-full font-semibold text-sm flex items-center gap-2.5 cursor-pointer shadow-md shrink-0"
          >
            <Coffee className="w-4 h-4" />
            <span>Start a Friendly Chat ☕</span>
          </button>
        </div>

        {/* Footer Navigation & Warm Notes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-stone-200 text-sm text-stone-600">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-base text-amber-700">☼</span>
              <span className="font-human font-bold text-base text-stone-900">
                Immersive Studio
              </span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              A warm, independent digital craft studio. We design and code responsive websites for thoughtful people and businesses.
            </p>
          </div>

          <div>
            <h4 className="font-human font-bold text-stone-900 text-xs uppercase tracking-wider mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#work" className="hover:text-amber-800 transition-colors">Our Real Work</a></li>
              <li><a href="#humans" className="hover:text-amber-800 transition-colors">Meet the Team</a></li>
              <li><a href="#how-it-feels" className="hover:text-amber-800 transition-colors">How We Work</a></li>
              <li><a href="#scrapbook" className="hover:text-amber-800 transition-colors">Studio Scrapbook</a></li>
              <li><a href="#kind-words" className="hover:text-amber-800 transition-colors">Kind Words</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-human font-bold text-stone-900 text-xs uppercase tracking-wider mb-3">
              Studio Home
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              We work from a sunny, plant-filled studio space in Portland, Oregon and collaborate with kind clients worldwide.
            </p>
            <p className="font-handwriting text-stone-500 text-base mt-2">
              The kettle is always on 🫖
            </p>
          </div>

          <div>
            <h4 className="font-human font-bold text-stone-900 text-xs uppercase tracking-wider mb-3">
              Direct Mail
            </h4>
            <a 
              href="mailto:hello@immersivestudio.com" 
              className="text-xs text-stone-800 font-semibold hover:text-amber-800 underline block"
            >
              hello@immersivestudio.com
            </a>
            <span className="text-[11px] text-stone-400 block mt-1">
              Guaranteed friendly, human reply.
            </span>
          </div>

        </div>

        {/* Bottom Sign-off */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-1.5 font-handwriting text-base text-stone-600">
            <span>Made with patience, care, and lots of Earl Grey tea</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Immersive Studio</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
