import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const timelineData = [
    {
      week: "Weeks 1–3",
      phase: "Discovery & Foundation",
      status: "Foundation",
      activities: [
        "Fundamentals of semiconductor materials",
        "Atomic structure and conductivity principles",
        "Visual simulations of sand refining and silicon extraction",
        "Foundation workbook and learning roadmap"
      ],
      milestone: "Fundamentals of Semiconductor Science",
      color: "bg-accent"
    },
    {
      week: "Weeks 4–7",
      phase: "Crystal Growth & Wafer Science",
      status: "Formation",
      activities: [
        "Silicon purification techniques",
        "Czochralski crystal growth process study",
        "Wafer slicing and polishing simulation",
        "Practical assessment & visual project"
      ],
      milestone: "Wafer Simulation and Analysis",
      color: "bg-primary"
    },
    {
      week: "Weeks 8–12",
      phase: "Fabrication & Chip Design",
      status: "Creation",
      activities: [
        "Chip architecture and circuit design basics",
        "Photolithography and etching tutorials",
        "Mask design and process simulation",
        "Mini-project: Design a basic logic gate circuit"
      ],
      milestone: "Functional Circuit Prototype",
      color: "bg-secondary"
    },
    {
      week: "Weeks 13–15",
      phase: "Testing & Optimization",
      status: "Development",
      activities: [
        "Electrical testing and measurement principles",
        "Yield optimization techniques",
        "Fault detection and analysis report",
        "Optimization toolkit documentation"
      ],
      milestone: "Performance Evaluation Completed",
      color: "bg-warning"
    },
    {
      week: "Weeks 16–18",
      phase: "Integration & Innovation",
      status: "Activation",
      activities: [
        "Capstone semiconductor project",
        "Presentation & documentation",
        "Mentor feedback and evaluation report",
        "Industry showcase opportunity"
      ],
      milestone: "Capstone Project Presentation",
      color: "bg-success"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-concrete text-primary text-sm font-bold uppercase tracking-wider border-2 border-primary transform rotate-1 mb-6">
            Learning Timeline
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
            Your Semiconductor Journey
            <br />
            <span className="text-accent">Week by Week</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent timeline with clear milestones, deliverables, and expectations.
            No surprises, no delays—just systematic progress toward semiconductor mastery.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-concrete hidden lg:block"></div>
          
          <div className="space-y-12">
            {timelineData?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-accent border-4 border-background rounded-full hidden lg:block"></div>
                
                <div className="lg:ml-20">
                  <div className="bg-card border-2 border-concrete p-8 brutalist-shadow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="mb-4 lg:mb-0">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 ${item?.color} text-white text-sm font-bold uppercase tracking-wider`}>
                            {item?.week}
                          </span>
                          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {item?.status}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-primary">
                          {item?.phase}
                        </h3>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-success">
                        <Icon name="Target" size={20} />
                        <span className="font-semibold">{item?.milestone}</span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-bold text-primary mb-4 flex items-center">
                          <Icon name="Activity" size={18} className="mr-2" />
                          Key Activities
                        </h4>
                        <ul className="space-y-3">
                          {item?.activities?.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start space-x-3">
                              <Icon name="ArrowRight" size={16} className="text-accent mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-muted border-l-4 border-accent p-6">
                        <h4 className="text-lg font-bold text-primary mb-3 flex items-center">
                          <Icon name="CheckCircle" size={18} className="mr-2" />
                          Phase Completion
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          This phase concludes when all learning objectives are met and the milestone is achieved.
                        </p>
                        <div className="flex items-center space-x-2 text-success font-semibold">
                          <Icon name="Flag" size={16} />
                          <span>{item?.milestone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid sm:grid-cols-3 gap-8"
        >
          <div className="text-center bg-card border-2 border-concrete p-8">
            <div className="text-4xl font-black text-accent mb-2">12–20</div>
            <div className="text-lg font-bold text-primary mb-1">Weeks Total</div>
            <div className="text-sm text-muted-foreground">Depending on learning pace</div>
          </div>

          <div className="text-center bg-card border-2 border-concrete p-8">
            <div className="text-4xl font-black text-accent mb-2">5</div>
            <div className="text-lg font-bold text-primary mb-1">Learning Phases</div>
            <div className="text-sm text-muted-foreground">Clear skill progression</div>
          </div>

          <div className="text-center bg-card border-2 border-concrete p-8">
            <div className="text-4xl font-black text-accent mb-2">100%</div>
            <div className="text-lg font-bold text-primary mb-1">Mentor Support</div>
            <div className="text-sm text-muted-foreground">Guided learning path</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;