import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Lead Unity Developer",
    company: "Buko Studio",
    period: "2025 – Present",
    type: "Full-time",
    highlights: [
      "Led the development of a flagship Unity project for one of the Philippines' largest oil and energy companies, overseeing technical direction and delivery from planning to deployment.",
      "Created reusable internal development tools and systems to support the studio's future projects, improving development speed and consistency for incoming teams.",
      "Managed and broke down weekly development tasks for junior developers, wrote clean, well-documented, optimized and maintainable code, and provided hands-on mentorship to support team growth.",
      "Assisted with QA testing and technical reviews for both client and internal studio projects, helping ensure stability, performance, and production-ready quality across multiple titles.",
    ],
  },
  {
    id: 2,
    role: "Senior Unity Developer",
    company: "Niterion",
    period: "2023 – 2025",
    type: "Full-time",
    highlights: [
      "Led the design and development of high-performance games and interactive applications using Unity and C#.",
      "Architected scalable systems, optimized gameplay mechanics, and ensured smooth cross-platform deployment across mobile and PC.",
      "Collaborated closely with artists, designers, and clients to translate creative visions into polished, commercial-grade products.",
      "Mentored junior developers, managed project timelines, and maintained clear communication with stakeholders to deliver results that meet both technical and business goals.",
    ],
  },
  {
    id: 3,
    role: "Senior Developer",
    company: "Niterion",
    period: "2022 – 2023",
    type: "Full-time",
    highlights: [
      "Mentored junior developers and led code reviews",
      "Implemented complex game systems and architecture",
      "Managed project timelines and client deliverables",
    ],
  },
  {
    id: 4,
    role: "Junior Game Programmer",
    company: "Max Games Ltd.",
    period: "2020 – 2022",
    type: "Full-time",
    highlights: [
      "Implemented bug fixes and performance optimizations",
      "Reduced game crash rates by 5% through stability improvements",
      "Enhanced player retention by 15% via gameplay feature work",
      "Contributed to code reviews and technical documentation",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label">Career</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[180px] top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 pb-12 last:pb-0"
                data-testid={`card-experience-${exp.id}`}
              >
                {/* Date column */}
                <div className="md:w-[180px] md:text-right flex-none pt-1">
                  <p className="text-xs text-muted-foreground font-medium pl-5 md:pl-0">{exp.period}</p>
                  <span className="text-[10px] text-primary/70 font-semibold tracking-widest uppercase pl-5 md:pl-0">
                    {exp.type}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute left-[-4px] md:left-[176px] top-1.5 w-2 h-2 rounded-full bg-primary border-2 border-background" />

                {/* Content */}
                <div className="pl-5 md:pl-10 flex-1 pb-2">
                  <h3 className="font-display text-xl font-bold text-foreground mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary/60 flex-none mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
