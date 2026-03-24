import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(172 70% 48%) 1px, transparent 1px), linear-gradient(to bottom, hsl(172 70% 48%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="section-label mb-0">Available for Work</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[1.05] tracking-tight mb-6"
        >
          Adrian
          <br />
          <span className="text-primary accent-glow">Caamino</span>
          <span className="text-muted-foreground">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-4 max-w-2xl leading-relaxed"
        >
          Senior Lead Unity Developer &amp; Game Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          6 years of experience crafting immersive 2D/3D games for PC, mobile, and WebGL.
          Passionate about bringing ideas to life through clean code and innovative gameplay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
            data-testid="button-view-projects"
          >
            View Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1Iike4bA2xejxIjM9-_I9n4iLsYCbq3FK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded-md hover:border-primary/50 transition-colors"
            data-testid="button-download-resume"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-6"
        >
          {[
            {
              icon: <Github className="w-5 h-5" />,
              href: "https://github.com/HavenGameStudio",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="w-5 h-5" />,
              href: "https://www.linkedin.com/in/adrian-caamino-06b465233/",
              label: "LinkedIn",
            },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              data-testid={`link-social-${label.toLowerCase()}`}
            >
              {icon}
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto w-full border-t border-border pb-10"
      >
        <div className="flex flex-wrap gap-10 pt-8">
          {[
            { val: "6+", label: "Years Experience" },
            { val: "7+", label: "Projects Shipped" },
            { val: "3", label: "Companies Served" },
            { val: "2D/3D", label: "Unity Specialist" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="font-display text-2xl font-bold text-foreground">{val}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        data-testid="button-scroll-down"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </a>
    </section>
  );
}
