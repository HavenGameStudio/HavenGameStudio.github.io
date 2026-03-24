import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

const projects = [
  {
    id: "iquiz",
    title: "IQuiz",
    tags: ["Unity", "Mobile", "Educational"],
    description:
      "The ultimate knowledge-enhancing experience. Four exciting game modes challenge and expand understanding across various topics. Compete, learn, and dominate the leaderboard.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/Iquiz%20Image.jpg",
    demoUrl: null,
    featured: true,
  },
  {
    id: "cards-and-magic",
    title: "Cards and Magic",
    tags: ["Unity", "Multiplayer", "Strategy", "Photon", "IAP"],
    description:
      "A multiplayer turn-based strategy game inspired by Axie. Players use cards to attack, defend, and strategize. Features card shuffling, account system, in-app purchases, shop, inventory, and vs-AI mode.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/Cards%20and%20magic.jpg",
    demoUrl: null,
    featured: true,
  },
  {
    id: "digifight",
    title: "Digifight",
    tags: ["Unity", "Web3", "Multiplayer", "Mobile"],
    description:
      "The ultimate cockfighting game powered by Web3. Raise, train, and battle unique roosters in intense online matches with strategic gameplay and blockchain integration.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/Digifight.jpg",
    demoUrl: null,
    featured: false,
  },
  {
    id: "rags-to-riches",
    title: "Rags to Riches",
    tags: ["Unity", "3D", "Simulation", "PC"],
    description:
      "An immersive 3D simulation game where players journey to financial success through strategic investments, job applications, and life management decisions.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/Rags%20to%20Riches.jpg",
    demoUrl: null,
    featured: false,
  },
  {
    id: "the-horde",
    title: "The Horde",
    tags: ["Unity", "2D", "Pixel Art", "Tower Defense", "WebGL"],
    description:
      "A 2D top-down pixel art defense game. Protect your keep from relentless enemy waves, spawn allies (warriors, archers, knights), manage gold mines, and level up your defenses.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/The%20horde.jpg",
    demoUrl:
      "https://play.unity.com/en/games/0a425ba0-9f35-407a-a486-73ff1d3dda06/last-keep-v011",
    featured: false,
  },
  {
    id: "emperors-gambit",
    title: "Emperor's Gambit",
    tags: ["Unity", "Mobile", "Board Game", "Strategy", "WebGL"],
    description:
      "A strategic hidden-information board game for mobile. Outsmart your opponent by eliminating their Emperor, escorting yours to victory, or running down their timer.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/Emperor's%20Gambit.jpg",
    demoUrl: "https://havengamestudio.github.io/Emperor's%20gambit%20tutorial/emperorsgambit.html",
    featured: false,
  },
  {
    id: "bubbly-typing",
    title: "Bubbly Typing",
    tags: ["Unity", "Mobile", "Educational", "Mini-Game"],
    description:
      "Enhance typing skills with fun and interactive gameplay across four dynamic modes. Perfect for typists of all levels, turning learning into a bubbly adventure.",
    image:
      "https://raw.githubusercontent.com/HavenGameStudio/HavenGameStudio.github.io/Master/images/Bubbly%20Typing.jpg",
    demoUrl: null,
    featured: false,
  },
];

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Portfolio</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Selected Projects
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs">
              A selection of games and interactive experiences shipped across multiple platforms.
            </p>
          </div>
        </motion.div>

        {/* Featured projects — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Rest — smaller grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-md overflow-hidden border border-card-border bg-card card-glow transition-all duration-300"
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 bg-primary/10 text-primary rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
            data-testid={`link-demo-${project.id}`}
          >
            <Play className="w-3 h-3" />
            Play Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-md overflow-hidden border border-card-border bg-card card-glow transition-all duration-300 flex flex-col"
      data-testid={`card-project-${project.id}`}
    >
      <div className="relative h-44 overflow-hidden flex-none">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            data-testid={`link-demo-icon-${project.id}`}
          >
            <ExternalLink className="w-3.5 h-3.5 text-primary-foreground" />
          </a>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 bg-secondary text-muted-foreground rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg font-bold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground text-xs leading-relaxed flex-1">{project.description}</p>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <Play className="w-3 h-3" />
            Play Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
