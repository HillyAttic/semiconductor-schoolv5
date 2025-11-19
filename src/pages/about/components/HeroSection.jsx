import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 concrete-texture opacity-30"></div>
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1">

            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-primary leading-none tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}>

                We Make Semiconductors
                <span className="block text-accent">Visible. Practical.</span>
                <span className="block">Job-Ready.</span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}>

                At the intersection of rigorous science and hands-on practice, we design learning experiences that turn the wafer-to-chip journey into confidence, portfolios, and placements.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 border-t-2 border-concrete"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}>

              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-primary">2,300+</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">Learners Trained</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-primary">40+</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">Industry Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-primary">92%</div>
                <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wide">Completion Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2">

            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden border-2 lg:border-4 border-primary brutalist-shadow flex items-center justify-center bg-concrete-light">
                <img src="/assets/image-assets/_img2.png" alt="Semiconductor Laboratory" className="w-full h-full object-contain scale-100" />
              </div>

              {/* Floating Element */}
              <motion.div
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-accent border-2 lg:border-4 border-primary"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;