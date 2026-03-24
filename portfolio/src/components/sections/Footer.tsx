import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, ExternalLink, Facebook } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I had the pleasure of working with Adrian on our latest game project, and the experience was nothing short of fantastic. Their expertise in both 2D and 3D Unity development was evident from the start, and they brought a high level of creativity and professionalism to the table. They consistently met deadlines and exceeded our expectations with their innovative solutions and attention to detail.",
    name: "Christian Mar Llarina",
    title: "Game Designer, CPL Game Studio",
  },
  {
    id: 2,
    quote:
      "Adrian's technical skills and creative vision elevated our project beyond expectations. He is a reliable and talented developer who always delivers on time.",
    name: "Dominic Lim",
    title: "CEO, Niterion Designs",
  },
];

export function Footer() {
  return (
    <>
      {/* Testimonials */}
      <section id="testimonials" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="section-label">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              What People Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-card border border-card-border rounded-md p-8 card-glow transition-all duration-300 flex flex-col"
                data-testid={`card-testimonial-${t.id}`}
              >
                <div className="text-primary text-4xl font-display leading-none mb-5 select-none">"</div>
                <p className="text-muted-foreground leading-relaxed text-sm flex-1">{t.quote}</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 bg-secondary/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="section-label">Get in Touch</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Build
                <br />
                <span className="text-primary">Something Great</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                I'm open to freelance projects, full-time opportunities, and collaborations. Feel
                free to reach out — I'd love to hear what you're working on.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href="mailto:adriancaamino.ac@gmail.com"
                  className="flex items-center gap-4 group"
                  data-testid="link-contact-email"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      adriancaamino.ac@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="tel:+639165562182"
                  className="flex items-center gap-4 group"
                  data-testid="link-contact-phone"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      +63 916 556 2182
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-3 mt-10">
                {[
                  {
                    icon: <Github className="w-4 h-4" />,
                    href: "https://github.com/HavenGameStudio",
                    label: "GitHub",
                  },
                  {
                    icon: <Linkedin className="w-4 h-4" />,
                    href: "https://www.linkedin.com/in/adrian-caamino-06b465233/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Facebook className="w-4 h-4" />,
                    href: "https://www.facebook.com/profile.php?id=61573022082103",
                    label: "Facebook",
                  },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    data-testid={`link-social-${label.toLowerCase()}`}
                    title={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="bg-card border border-card-border rounded-md p-8"
            >
              <h3 className="font-display text-xl font-bold mb-6">Send a Message</h3>
              <form className="flex flex-col gap-4" data-testid="form-contact">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    placeholder="Project inquiry, collaboration..."
                    className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-secondary border border-border rounded-md px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
                    data-testid="input-message"
                  />
                </div>
                <a
                  href="mailto:adriancaamino.ac@gmail.com"
                  className="w-full text-center py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-opacity"
                  data-testid="button-send-message"
                >
                  Send Message
                </a>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display font-bold text-foreground">
            AC<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Adrian Caamino. All rights reserved.
          </p>
          <a
            href="https://drive.google.com/file/d/1Iike4bA2xejxIjM9-_I9n4iLsYCbq3FK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-resume"
          >
            <ExternalLink className="w-3 h-3" />
            View Resume
          </a>
        </div>
      </footer>
    </>
  );
}
