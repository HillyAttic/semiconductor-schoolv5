import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProcessPreview = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      icon: "Search",
      title: "Discover & Learn",
      duration: "2-6 weeks",
      description: "Foundations, concepts, and guided exploration. Master semiconductor fundamentals, physics, and material science through interactive modules.",
      deliverables: ["Fundamental concepts", "Interactive labs", "Material science projects", "Atomic theory mastery"]
    },
    {
      icon: "CircuitBoard",
      title: "Design & Develop",
      duration: "3-8 weeks",
      description: "RTL or Analog design and practical simulations. Build digital circuits, create Verilog designs, and simulate analog circuits with industry tools.",
      deliverables: ["RTL modules", "Analog designs", "Simulation reports", "Design portfolios"]
    },
    {
      icon: "CheckCircle",
      title: "Verify & Implement",
      duration: "2-6 weeks",
      description: "Hands-on testing and layout generation. Learn verification methodology, UVM frameworks, and complete physical design workflows.",
      deliverables: ["UVM testbenches", "Physical layouts", "DRC/LVS reports", "Timing sign-off"]
    },
    {
      icon: "Rocket",
      title: "Launch & Showcase",
      duration: "1-4 weeks",
      description: "Capstone project and portfolio presentation. Work on real-world design problems and showcase your silicon-ready expertise.",
      deliverables: ["Capstone project", "Portfolio presentation", "Industry mentorship", "Job readiness"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
            Our Learning Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four structured phases that turn learners into professionals. Timeline: 8–24 weeks total depending on course track.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Process Steps */}
          <div className="space-y-6">
            {processSteps?.map((step, index) => (
              <motion.div
                key={index}
                className={`border-2 p-6 cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'border-accent bg-accent/5' :'border-concrete bg-card hover:border-accent/50'
                }`}
                style={{
                  boxShadow: activeStep === index ? '6px 6px 0px #FF6B35' : '3px 3px 0px #000000'
                }}
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 border-2 border-primary flex items-center justify-center transition-all duration-300 ${
                    activeStep === index ? 'bg-accent rotate-12' : 'bg-concrete-light'
                  }`}>
                    <Icon 
                      name={step?.icon} 
                      size={24} 
                      color={activeStep === index ? "#FFFFFF" : "#1A1A1A"} 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-bold text-primary">{step?.title}</h3>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1">
                        {step?.duration}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card border-2 border-concrete p-8"
            style={{ boxShadow: '8px 8px 0px #000000' }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-accent border-2 border-primary flex items-center justify-center rotate-12">
                <Icon name={processSteps?.[activeStep]?.icon} size={32} color="#FFFFFF" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-primary">
                  {processSteps?.[activeStep]?.title}
                </h3>
                <p className="text-accent font-semibold">
                  {processSteps?.[activeStep]?.duration}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {processSteps?.[activeStep]?.description}
            </p>

            <div className="mb-6">
              <h4 className="font-bold text-primary mb-4 flex items-center">
                <Icon name="CheckCircle" size={20} className="mr-2 text-accent" />
                Key Deliverables
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {processSteps?.[activeStep]?.deliverables?.map((deliverable, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 bg-concrete-light"
                  >
                    <div className="w-2 h-2 bg-accent"></div>
                    <span className="text-sm font-medium text-primary">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Join This Phase
              </Button>
              <Button
                variant="outline"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Full Curriculum
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;