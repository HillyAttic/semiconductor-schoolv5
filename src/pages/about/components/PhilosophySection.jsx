import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPrinciples = [
    {
      icon: "Eye",
      title: "Visual-First Clarity",
      description: `If you can see it, you can master it. We use process animations, lab sims, and annotated waveforms to make invisible physics and flows intuitive.`
    },
    {
      icon: "Target",
      title: "Outcome > Outline",
      description: `Curricula map directly to roles: Materials & Wafer Science, Lithography & Etch, VLSI/HDL, and Test. Every module ends in a portfolio-grade project.`
    },
    {
      icon: "Users",
      title: "Mentorship That Matters",
      description: `Engineers, researchers, and educators review work, run mock interviews, and give practical feedback on timing, yield, and verification trade-offs.`
    },
    {
      icon: "Shield",
      title: "Ethics & Safety by Design",
      description: `Cleanroom norms, ESD & lab safety, data integrity, and academic honesty are embedded into every track.`
    }
  ];

  const manifestoPoints = [
    "Learning should reveal what textbooks hide",
    "Labs must teach why, not only how",
    "Portfolios beat promises. Evidence over hype",
    "Mentors exist to accelerate, not intimidate",
    "Education should track real fabs and design floors, not wishful syllabi"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-4 sm:mb-6 leading-none">
            Our Philosophy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Visual-first learning that transforms complex semiconductor science into clear, job-ready skills through simulations, mentors, and outcome-driven projects.
          </p>
        </motion.div>

        {/* Philosophy Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-20">
          {philosophyPrinciples?.map((principle, index) => (
            <motion.div
              key={principle?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background border-2 border-concrete p-6 sm:p-8 h-full hover:border-accent transition-colors duration-300">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:border-accent transition-colors duration-300">
                      <Icon
                        name={principle?.icon}
                        size={20}
                        className="sm:w-6 sm:h-6 text-white"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-2xl font-black text-primary mb-3 sm:mb-4 leading-tight">
                      {principle?.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {principle?.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manifesto Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary p-6 sm:p-8 lg:p-12 border-2 lg:border-4 border-primary brutalist-shadow"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-6 sm:mb-8 leading-tight">
              The Semiconductor School Manifesto
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {manifestoPoints?.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center justify-center space-x-3 sm:space-x-4"
                >
                  <div className="w-2 h-2 bg-accent flex-shrink-0"></div>
                  <p className="text-sm sm:text-base lg:text-lg text-white font-medium leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-accent"
            >
              <p className="text-lg sm:text-xl text-accent font-bold leading-relaxed">
                This isn't just what we believe—it's how we build every brand we touch.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;