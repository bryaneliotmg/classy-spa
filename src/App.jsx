import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  Wind, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Instagram, 
  Facebook,
  Menu,
  X
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

const NoiseOverlay = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-[9999]" style={{ mixBlendMode: 'multiply' }}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      ref={navRef}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[1000] px-8 py-4 rounded-full transition-all duration-700 w-[90%] max-w-5xl flex items-center justify-between border ${
        scrolled 
          ? 'bg-cream/60 backdrop-blur-2xl border-moss/10 shadow-lg' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className={`transition-all duration-500 overflow-hidden ${scrolled ? 'h-8' : 'h-10'}`}>
        <img src="/logo.png" alt="CLASSY SPA" className="h-full w-auto" />
      </div>
      
      <div className={`hidden md:flex gap-10 font-sans text-xs font-semibold tracking-widest transition-colors duration-500 ${scrolled ? 'text-moss/70' : 'text-white/70'}`}>
        <a href="#salon" className="hover:text-clay transition-colors">SALON</a>
        <a href="#treatments" className="hover:text-clay transition-colors">TREATMENTS</a>
        <a href="#contact" className="hover:text-clay transition-colors">CONTACT</a>
      </div>

      <button className="bg-clay text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-clay/20">
        BOOK NOW
      </button>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(contentRef.current.children, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        delay: 0.5
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden bg-charcoal">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75 scale-110"
        style={{ 
          backgroundImage: "url('/hero.png')",
          backgroundPositionY: "center"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
      
      <div className="container h-full flex flex-col justify-end pb-24 px-12 relative z-10">
        <div ref={contentRef} className="max-w-4xl text-white">
          <div className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] tracking-[0.3em] font-semibold mb-8 uppercase bg-white/5 backdrop-blur-md">
            Ridgeland • Boutique • Sanctuary
          </div>
          <h1 className="font-outfit font-bold text-6xl md:text-[8rem] leading-[0.8] mb-4 tracking-tighter">
            Precision is the
          </h1>
          <h2 className="font-drama italic text-8xl md:text-[14rem] leading-[0.6] text-clay/90 mb-12">
            Sanctuary.
          </h2>
          <div className="flex gap-6 items-center">
            <button className="bg-white text-moss px-10 py-5 rounded-full font-bold tracking-widest hover:bg-clay hover:text-white transition-all transform hover:scale-105">
              EXPLORE THE EXPERIENCE
            </button>
            <div className="hidden md:flex flex-col items-center">
              <div className="w-[1px] h-12 bg-white/30 mb-4 animate-pulse" />
              <span className="text-[10px] tracking-[0.4em] font-semibold text-white/40 rotate-90 origin-left mt-6">SCROLL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="treatments" className="py-32 px-12 bg-cream text-moss">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h3 className="font-outfit font-bold text-5xl mb-4 tracking-tight">Interactive Protocol</h3>
          <p className="font-sans text-moss/60 max-w-lg">We don't just treat. We engineer the perfect state of rejuvenation through clinical precision and organic luxury.</p>
        </div>

        <div className="grid md:grid-columns-3 grid-cols-1 md:grid-cols-3 gap-8">
          {/* Diagnostic Shuffler Card */}
          <div className="bg-white p-10 rounded-3xl border border-moss/5 shadow-sm group hover:border-clay/20 transition-all flex flex-col h-[500px]">
            <div className="mb-auto">
              <Sparkles className="text-clay mb-6" size={32} />
              <h4 className="font-outfit font-bold text-2xl mb-4">Precision Artistry</h4>
              <p className="text-sm opacity-60">Architectural nail design. Structured manicures that don't just last—they perform.</p>
            </div>
            <div className="relative h-48 w-full mt-8 overflow-hidden">
               <div className="absolute inset-0 flex flex-col gap-4">
                  <div className="bg-moss/5 p-4 rounded-xl border border-moss/10 animate-bounce transition-all">Structured Gel Protocol</div>
                  <div className="bg-clay/5 p-4 rounded-xl border border-clay/10 translate-x-4">Silk Protein Sculpt</div>
                  <div className="bg-moss/5 p-4 rounded-xl border border-moss/10 -translate-x-4">Botanical Infusion</div>
               </div>
            </div>
          </div>

          {/* Telemetry Typewriter Card */}
          <div className="bg-white p-10 rounded-3xl border border-moss/5 shadow-sm group hover:border-clay/20 transition-all flex flex-col h-[500px]">
             <div className="mb-auto">
              <Wind className="text-moss mb-6" size={32} />
              <h4 className="font-outfit font-bold text-2xl mb-4">Boutique Sanctuary</h4>
              <p className="text-sm opacity-60">A private members-level atmosphere. Zero noise. Pure atmospheric control.</p>
            </div>
            <div className="bg-charcoal p-6 rounded-2xl h-48 mt-8 family-mono text-[10px] text-moss/40 overflow-hidden relative">
               <div className="flex items-center gap-2 mb-4">
                 <div className="w-2 h-2 bg-clay rounded-full animate-pulse" />
                 <span className="font-mono text-clay/60 uppercase tracking-widest text-[8px]">Live Environment Protocol</span>
               </div>
               <div className="font-mono space-y-2">
                 <p className="text-clay">STATUS: REJUVENATION_ENGAGED</p>
                 <p className="text-white/40">FLOW: 4.2L/min</p>
                 <p className="text-white/40">TEMP: 72.4°F</p>
                 <p className="text-white/40">CALIBRATING_LUXURY_INDEX...</p>
                 <p className="text-white/20 animate-pulse">_</p>
               </div>
            </div>
          </div>

          {/* Cursor Protocol Scheduler Card */}
          <div className="bg-white p-10 rounded-3xl border border-moss/5 shadow-sm group hover:border-clay/20 transition-all flex flex-col h-[500px]">
            <div className="mb-auto">
              <Calendar className="text-clay mb-6" size={32} />
              <h4 className="font-outfit font-bold text-2xl mb-4">Clinical Grade</h4>
              <p className="text-sm opacity-60">Certified Barbicide standard hygiene combined with premium botanical chemistry.</p>
            </div>
            <div className="bg-cream p-4 rounded-2xl h-48 mt-8 flex flex-col justify-center gap-2">
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(28)].map((_, i) => (
                    <div key={i} className={`h-4 rounded-sm ${i % 7 === 0 ? 'bg-clay/60 scale-110' : 'bg-moss/10'}`} />
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-[8px] font-bold tracking-widest text-moss/30 uppercase">Calibration Schedule</span>
                  <div className="px-3 py-1 bg-moss text-white text-[8px] rounded-full">ACTIVE</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="salon" ref={containerRef} className="py-48 px-12 bg-charcoal text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center grayscale mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-436cefb5403e?q=80&w=2070&auto=format&fit=crop')" }}
      />
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="reveal-item text-clay font-bold tracking-[0.4em] uppercase text-xs mb-12">The Manifesto</p>
        <h3 className="reveal-item font-sans text-2xl mb-8 text-white/40">Most spas focus on the trend.</h3>
        <h4 className="reveal-item font-drama italic text-7xl md:text-[9rem] leading-none mb-16">
          We focus on the <span className="text-clay">Architecture</span> of the Nail.
        </h4>
        <div className="reveal-item w-[1px] h-24 bg-clay/30 mx-auto" />
      </div>
    </section>
  );
};

const ProtocolStack = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".protocol-panel");
      panels.forEach((panel, i) => {
        if (i < panels.length - 1) {
          gsap.to(panel, {
            scale: 0.85,
            opacity: 0.5,
            filter: "blur(20px)",
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              end: "bottom top",
              scrub: true,
              pin: true,
              pinSpacing: false
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-charcoal">
       <div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-moss text-cream p-12">
          <div className="max-w-2xl text-center">
            <span className="font-mono text-[10px] tracking-[0.6em] mb-4 block opacity-40">STEP_01</span>
            <h5 className="font-outfit font-bold text-6xl mb-6">Structural Integrity</h5>
            <p className="opacity-60 italic font-drama text-2xl">The foundation must be mathematically perfect. We use organic builder gels to reinforce your unique nail architecture.</p>
          </div>
       </div>
       <div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-clay text-cream p-12">
          <div className="max-w-2xl text-center">
            <span className="font-mono text-[10px] tracking-[0.6em] mb-4 block opacity-40">STEP_02</span>
            <h5 className="font-outfit font-bold text-6xl mb-6">Chromatic Engineering</h5>
            <p className="opacity-60 italic font-drama text-2xl">Color isn't just applied; it's curated. We mix custom pigments to create depth that standard bottles cannot achieve.</p>
          </div>
       </div>
       <div className="protocol-panel h-screen w-full flex items-center justify-center sticky top-0 bg-[#F2F0E9] text-moss p-12">
          <div className="max-w-2xl text-center">
            <span className="font-mono text-[10px] tracking-[0.6em] mb-4 block opacity-40">STEP_03</span>
            <h5 className="font-outfit font-bold text-6xl mb-6">Atmospheric Finish</h5>
            <p className="opacity-60 italic font-drama text-2xl">The final high-gloss or tactical matte finish seal the protocol. The nails are jewels, not tools.</p>
          </div>
       </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white/50 pt-32 pb-12 px-12 rounded-t-[4rem]">
      <div className="container max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-white font-outfit font-bold text-4xl mb-6 tracking-tighter">CLASSY SPA</h2>
            <p className="max-w-xs italic font-drama text-xl mb-12">Your nails are jewels, not tools. Engineering luxury in Ridgeland.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest uppercase text-white/30">SYSTEM OPERATIONAL: ONLINE</span>
            </div>
          </div>
          <div>
            <h6 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">Navigation</h6>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-clay">The Salon</a></li>
              <li><a href="#" className="hover:text-clay">Protocols</a></li>
              <li><a href="#" className="hover:text-clay">Bespoke Design</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">Social</h6>
            <div className="flex gap-4">
               <Instagram className="hover:text-clay cursor-pointer" />
               <Facebook className="hover:text-clay cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 text-[10px] flex justify-between tracking-[0.2em] font-bold uppercase">
          <span>&copy; 2026 CLASSY SPA LLC</span>
          <span>DESIGN_SYSTEM: ORGANIC_TECH_V1</span>
        </div>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────

function App() {
  return (
    <main className="relative bg-cream">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <ProtocolStack />
      <section className="h-[50vh] flex items-center justify-center bg-cream">
        <div className="text-center">
           <p className="font-drama italic text-3xl mb-8 text-moss/60">Ready to engage the protocol?</p>
           <button className="bg-moss text-white px-12 py-6 rounded-full font-bold tracking-[0.3em] uppercase hover:bg-clay transition-all transform hover:scale-110 shadow-2xl">
             Book Your Session
           </button>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;
