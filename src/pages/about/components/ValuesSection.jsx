import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
  const coreValues = [
    {
      icon: "Target",
      title: "Job-Aligned Learning",
      description: "Everything maps to work you'll do in fabs, EDA, or test—no filler. Every module ends in a portfolio-grade project.",
      principle: "Outcome > Outline"
    },
    {
      icon: "Eye",
      title: "Relentless Clarity",
      description: "Every lesson answers: What is happening? Why now? How do we verify it? No confusing theory without practical application.",
      principle: "Clarity over complexity"
    },
    {
      icon: "BarChart3",
      title: "Evidence-Backed Progress",
      description: "Dashboards track lab completion, error patterns, and concept mastery so mentors can intervene early.",
      principle: "Data-driven learning"
    },
    {
      icon: "Users",
      title: "Inclusive On-Ramps",
      description: "Bridge modules for math, physics, and coding bring newcomers up to speed—fast.",
      principle: "Access for all"
    },
    {
      icon: "Shield",
      title: "Safety & Integrity",
      description: "Cleanroom etiquette, data ethics, and reproducible practice are non-negotiable.",
      principle: "Ethics by design"
    },
    {
      icon: "Bot",
      title: "Human x AI Mentorship",
      description: "Instant code/process guidance plus deep, human critique. AI accelerates, humans elevate.",
      principle: "Technology + touch"
    }
  ];

  const culturalElements = [
    {
      title: "Discover → Visualize → Practice → Prove",
      description: "We establish gaps, make concepts visible, build labs with feedback, and ship projects that stand up in interviews."
    },
    {
      title: "Continuous Improvement",
      description: "We ship updates weekly based on learner analytics and mentor notes. Education should evolve with industry needs."
    },
    {
      title: "Visual-First Methodology",
      description: "Process animations, lab sims, and annotated waveforms make invisible physics and flows intuitive."
    },
    {
      title: "Mentor-Driven Success",
      description: "Our success is measured by learner success. We celebrate placements and learn from every feedback session."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-none">
            What We Stand For
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our values drive every decision we make, every relationship we build, and every learner we mentor
            on their journey from sand to silicon.
          </p>
        </motion.div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {coreValues?.map((value, index) => (
            <motion.div
              key={value?.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border-2 border-concrete p-8 h-full hover:border-accent transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:border-accent transition-colors duration-300">
                    <Icon 
                      name={value?.icon} 
                      size={28} 
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-primary leading-tight">
                    {value?.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value?.description}
                  </p>
                  
                  <div className="pt-4 border-t border-concrete-light">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                      {value?.principle}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-concrete-light border-2 border-concrete p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-black text-primary mb-6 leading-tight">
              How We Work
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our culture is built on visual-first learning, mentor excellence, and the shared mission
              to make semiconductor education clear, practical, and job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {culturalElements?.map((element, index) => (
              <motion.div
                key={element?.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border-2 border-concrete p-6 hover:border-accent transition-colors duration-300"
              >
                <h4 className="text-lg font-black text-primary mb-3 leading-tight">
                  {element?.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {element?.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-primary p-12 border-4 border-primary brutalist-shadow">
            <h3 className="text-3xl lg:text-4xl font-black text-white mb-6 leading-tight">
              Ready to Begin?
            </h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed">
              Join a mentor-guided path that makes semiconductors visible, practical, and industry-ready —
              from sand to silicon chip.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-white font-bold border-2 border-accent transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Cohort
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;