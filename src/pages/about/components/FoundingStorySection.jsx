import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FoundingStorySection = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Spark",
      description: "Pilot cohorts prove that visual labs + mentor reviews double concept mastery for wafer science basics.",
      icon: "Lightbulb"
    },
    {
      year: "2024",
      title: "Tracks Launched",
      description: "Materials & Wafer Science, Lithography & Etch, VLSI/HDL Beginner; 75+ labs published.",
      icon: "Cpu"
    },
    {
      year: "2025",
      title: "AI Co-Mentor",
      description: "Real-time HDL feedback and waveform hints cut debug time by 72% and lift project completions 2.8×.",
      icon: "Zap"
    },
    {
      year: "2025",
      title: "Industry Alignment",
      description: "Hiring-task rubrics and interview-style assessments adopted across all capstones.",
      icon: "Target"
    }
  ];


  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">

          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-none">
            Our Origin Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learners could recite steps—clean → grow → dope → pattern—but couldn't connect them to actual tools,
            constraints, and hiring tasks. We built an outcomes-driven school where every concept is paired with simulation and feedback.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">

            <div className="bg-background border-2 border-concrete p-8">
              <h3 className="text-2xl font-black text-primary mb-6 leading-tight">
                The Problem We Saw
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Learners could recite steps—clean → grow → dope → pattern—but couldn't connect them to actual tools,
                  constraints, and hiring tasks.
                </p>
                <p>
                  Traditional semiconductor education was all theory and slides, with no hands-on practice or real-world
                  application. Students graduated without understanding how silicon actually becomes chips.
                </p>
                <p>
                  The gap between textbook knowledge and industry expectations was widening, leaving graduates unprepared
                  for careers in fabs, EDA, and test environments.
                </p>
              </div>
            </div>

            <div className="bg-primary p-8 border-4 border-primary brutalist-shadow">
              <h3 className="text-2xl font-black text-white mb-6 leading-tight">
                What We Built
              </h3>
              <div className="space-y-4 text-white leading-relaxed">
                <p>
                  An outcomes-driven school where every concept is paired with a simulation, dataset, or HDL bench,
                  and every milestone receives human feedback backed by AI-assist.
                </p>
                <p className="text-accent font-semibold">
                  "If you can see it, you can master it. We make the invisible world of semiconductors visible."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8">

            <h3 className="text-2xl font-black text-primary mb-8 leading-tight">
              Key Milestones
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-concrete"></div>
              
              {milestones?.map((milestone, index) =>
              <motion.div
                key={milestone?.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start space-x-6 pb-8">

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-12 h-12 bg-accent border-4 border-primary flex items-center justify-center">
                    <Icon name={milestone?.icon} size={20} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-background border-2 border-concrete p-6 hover:border-accent transition-colors duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-2xl font-black text-accent">{milestone?.year}</span>
                      <h4 className="text-lg font-black text-primary">{milestone?.title}</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {milestone?.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Founding Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20">

          <div className="relative h-96 overflow-hidden border-4 border-primary brutalist-shadow">
            <Image
              src="https://images.unsplash.com/photo-1581091870622-7c71c7f5c730"
              alt="Semiconductor laboratory and educational environment with wafer processing equipment and student learning spaces"
              className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-8">
                <h3 className="text-3xl lg:text-4xl font-black mb-4 leading-tight">
                  From Problem to Progress
                </h3>
                <p className="text-lg leading-relaxed">
                  What started as frustration with traditional semiconductor education became a visual-first learning approach that's transforming how students master wafer-to-chip processes.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default FoundingStorySection;