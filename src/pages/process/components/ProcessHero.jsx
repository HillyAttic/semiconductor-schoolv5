import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessHero = () => {
  return (
    <section className="relative bg-background pt-24 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 concrete-texture opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-bold uppercase tracking-wider border-2 border-primary mb-6">
              Our Methodology
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary mb-6 leading-none">
              From Sand to Silicon Chip
              <br />
              <span className="text-accent">Our Methodology</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
              The Semiconductor Learning Forge
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Five proven steps that transform curious learners into industry-ready semiconductor professionals.
              No jargon, no confusion—just a systematic, research-driven framework that takes you from fundamentals to fabrication.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Clock" size={20} />
              <span className="font-medium">12–20 Week Learning Journey</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-concrete"></div>

            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Users" size={20} />
              <span className="font-medium">Collaborative, Mentor-Guided</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-concrete"></div>

            <div className="flex items-center space-x-2 text-muted-foreground">
              <Icon name="Target" size={20} />
              <span className="font-medium">Practical Skills · Research Insight</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;