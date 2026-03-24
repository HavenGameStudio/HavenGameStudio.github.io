import { Link } from "wouter";
import { Ghost, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground p-6">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md relative z-10 glass-card p-12 rounded-3xl"
      >
        <div className="mb-8 flex justify-center">
          <div className="p-6 rounded-full bg-primary/10 border border-primary/20">
            <Ghost className="w-16 h-16 text-primary animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-4xl font-display font-bold mb-4">404</h1>
        <h2 className="text-xl text-white mb-4">Level Not Found</h2>
        <p className="text-muted-foreground mb-8">
          You've ventured beyond the known map. This area of the studio is still under construction or doesn't exist.
        </p>
        
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide transition-all shadow-lg hover:shadow-primary/25">
          <ArrowLeft className="w-4 h-4" />
          Return to Hub
        </Link>
      </motion.div>
    </div>
  );
}
