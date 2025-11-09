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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20">

          <h2 className="text-4xl lg:text-6xl font-black text-primary mb-6 leading-none">
            The Forge Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just colleagues—we're co-conspirators in the mission to make brands impossible to ignore. 
            Each team member brings a unique perspective to the creative process.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12">
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
                <div className="relative h-80 overflow-hidden flex items-center justify-center bg-concrete-light">
                  <div className="text-center">
                    <Icon name="User" size={48} className="text-concrete-dark mx-auto mb-4" />
                    <div className="text-concrete-dark font-medium">Team Member</div>
                  </div>

                  {/* Floating Stats */}
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 text-sm font-bold">
                    {member?.experience}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-primary mb-2 leading-tight">
                      {member?.name}
                    </h3>
                    <p className="text-accent font-semibold text-lg">
                      {member?.role}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member?.expertise?.map((skill, skillIndex) =>
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-concrete-light text-primary text-sm font-semibold border border-concrete">

                        {skill}
                      </span>
                  )}
                  </div>

                  {/* Philosophy Quote */}
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6 border-l-4 border-accent pl-4">
                    {member?.philosophy}
                  </blockquote>

                  {/* Background */}
                  <div className="pt-4 border-t border-concrete-light">
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
          className="mt-20 text-center">

          <div className="bg-concrete-light border-2 border-concrete p-12">
            <Icon name="Users" size={48} className="text-accent mx-auto mb-6" />
            <h3 className="text-3xl font-black text-primary mb-6 leading-tight">
              Culture of Creative Rebellion
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
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