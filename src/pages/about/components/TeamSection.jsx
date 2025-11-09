import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Kavya Menon",
      role: "Program Director",
      expertise: [" Design", "Industry Alignment", "Mentorship", "Outcomes"],
      philosophy: `"If you can see it, you can master it. We make the invisible world of semiconductors visible."`,
      experience: "10+ years",
      background: "Curriculum, industry alignment, and mentor development across materials."
    },
    {
      id: 2,
      name: "Rajesh Patel",
      role: "VLSI Mentor",
      expertise: ["HDL/Verilog", "VLSI Design", "Timing Analysis", "Mentorship"],
      philosophy: `"Great verification education is iterative and feedback-driven - like debugging itself."`,
      experience: "12 years",
      background: "HDL/Verilog coaching, timing closure basics, and project reviews"
    },
    {
      id: 3,
      name: "Sarah Chen",
      role: "Learning Experience",
      expertise: ["Learning Design", "User Experience", "Educational Technology", "Curriculum"],
      philosophy: `"Visualization is not a luxury — it's the bridge between knowing and doing in semiconductor education."`,
      experience: "8 years",
      background: "Transforms complex flows into intuitive, stepwise labs with clear checkpoints"
    },
    {
      id: 4,
      name: "Michael Torres",
      role: "Content & Assessment",
      expertise: ["Content Creation", "Assessment Design", "Interview Preparation", "Technical Writing"],
      philosophy: `"Every lesson answers: What is happening? Why now? How do we verify it?"`,
      experience: "9 years",
      background: "Explainers, rubrics, and interview-style tasks tied to real roles"
  }];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-20">

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-4 sm:mb-6 leading-none">
            The Forge Team
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just colleagues—we're co-conspirators in the mission to make brands impossible to ignore.
            Each team member brings a unique perspective to the creative process.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {teamMembers?.map((member, index) =>
          <motion.div
            key={member?.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group">

              <div className="bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 overflow-hidden">
                {/* Image Placeholder Section */}
                <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden flex items-center justify-center bg-concrete-light">
                  <div className="text-center">
                    <Icon name="User" size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-concrete-dark mx-auto mb-2 sm:mb-4" />
                    <div className="text-sm sm:text-base text-concrete-dark font-medium">Team Member</div>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-accent text-white px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold">
                    {member?.experience}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-primary mb-1 sm:mb-2 leading-tight">
                      {member?.name}
                    </h3>
                    <p className="text-accent font-semibold text-sm sm:text-base lg:text-lg">
                      {member?.role}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {member?.expertise?.map((skill, skillIndex) =>
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 bg-concrete-light text-primary text-xs sm:text-sm font-semibold border border-concrete">

                        {skill}
                      </span>
                  )}
                  </div>

                  {/* Philosophy Quote */}
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-4 sm:mb-6 border-l-4 border-accent pl-3 sm:pl-4 text-sm sm:text-base">
                    {member?.philosophy}
                  </blockquote>

                  {/* Background */}
                  <div className="pt-3 sm:pt-4 border-t border-concrete-light">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {member?.background}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Culture Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 lg:mt-20 text-center">

          <div className="bg-concrete-light border-2 border-concrete p-6 sm:p-8 lg:p-12">
            <Icon name="Users" size={32} className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent mx-auto mb-4 sm:mb-6" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              Culture of Creative Rebellion
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're united by a shared belief that brands should be bold, not bland. Our team culture celebrates
              creative rebellion, strategic thinking, and the relentless pursuit of work that makes a difference.
              We don't just work together—we challenge each other to push boundaries and create the impossible.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default TeamSection;