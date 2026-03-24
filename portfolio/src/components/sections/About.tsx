import { motion } from "framer-motion";

const skills = [
  {
    category: "Game Engine",
    items: ["Unity 2D/3D", "Physics", "Animation", "UI/UX", "VR/AR Development"],
  },
  {
    category: "Programming",
    items: ["C# Gameplay", "Editor Scripting", "Tools Dev", "REST API Integration"],
  },
  {
    category: "Networking",
    items: ["Unity NGO", "Photon", "Client-Server Architecture", "Cloud Save/Load"],
  },
  {
    category: "AI & Systems",
    items: ["NavMesh", "Behavior Trees", "FSM", "Animation Systems", "Mecanim"],
  },
  {
    category: "Platform & Tools",
    items: ["Firebase", "PlayFab SDK", "In-App Purchases", "Git", "Plastic SCM"],
  },
  {
    category: "Business",
    items: ["Team Leadership", "Code Reviews", "Project Management", "Digital Marketing"],
  },
];

export function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Crafting Games
              <br />
              <span className="text-primary">That Matter</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a dedicated Unity game developer with 6 years of combined professional and
                freelance experience, specializing in both 2D and 3D game development. I have a proven
                track record of creating engaging, immersive experiences for PC, mobile, and WebGL
                platforms.
              </p>
              <p>
                Driven by a passion for innovation and continuous learning, I consistently strive to
                deliver high-quality, captivating games that leave a lasting impact — from gameplay
                systems to multiplayer networking to full production pipelines.
              </p>
              <p>
                Beyond development, I currently serve as Head of IT and Creatives at Niterion, where
                I lead cross-functional teams and oversee content and digital strategy.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs text-muted-foreground tracking-widest uppercase mb-3">Education</p>
              <p className="font-display font-semibold text-foreground">
                BS Entertainment &amp; Multimedia Computing
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Major in Game Development · Bataan Peninsula State University · 2018–2022
              </p>
            </div>
          </motion.div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-card border border-card-border rounded-md p-5 card-glow transition-all duration-300"
                data-testid={`card-skill-${i}`}
              >
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">
                  {group.category}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/60 flex-none" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
