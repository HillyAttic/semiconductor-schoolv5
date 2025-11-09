import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const IndustryFocus = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  const industries = [
    {
      icon: "Cpu",
      name: "Chip Design",
      description: "RTL design, synthesis, timing, and architecture",
      challenges: ["Complex system integration", "Timing closure issues", "Power optimization"],
      solutions: ["SystemVerilog expertise", "Static timing analysis", "Low-power design techniques"],
      caseStudy: "Chip Verification Sprint: +163% inquiry conversion, -54% time-to-first-lab, 96% capstone pass rate",
      clients: ["Students", "Aspiring Engineers", "Professionals"]
    },
    {
      icon: "Layers",
      name: "VLSI Physical Design",
      description: "Place & route, CTS, routing, and sign-off",
      challenges: ["Area optimization", "Clock tree synthesis", "Signal integrity"],
      solutions: ["OpenROAD flow mastery", "DRC/LVS verification", "Timing sign-off expertise"],
      caseStudy: "Graduate student achieved 12% area reduction in final layout",
      clients: ["PD Engineers", "Graduate Students", "Professionals"]
    },
    {
      icon: "CheckCircle",
      name: "Verification",
      description: "SystemVerilog, UVM, and coverage analysis",
      challenges: ["Functional coverage goals", "Testbench reusability", "Verification closure"],
      solutions: ["UVM methodology", "Coverage-driven verification", "Constraint random testing"],
      caseStudy: "Team achieved 98% code coverage in complex processor verification",
      clients: ["Verification Engineers", "Students", "Professionals"]
    },
    {
      icon: "Zap",
      name: "Analog Design",
      description: "Transistors, op-amps, and layout techniques",
      challenges: ["Mismatch compensation", "Noise analysis", "Process variation"],
      solutions: ["Advanced transistor modeling", "SPICE simulation", "Layout best practices"],
      caseStudy: "Student designed low-noise amplifier with 1.2µV/√Hz noise",
      clients: ["Analog Designers", "Graduate Students", "Professionals"]
    },
    {
      icon: "Factory",
      name: "Fabrication",
      description: "Cleanroom process and wafer technology",
      challenges: ["Yield optimization", "Process control", "Defect reduction"],
      solutions: ["Virtual cleanroom training", "Process simulation", "Quality control methods"],
      caseStudy: "Virtual wafer processing reduced learning curve by 60%",
      clients: ["Process Engineers", "Students", "Professionals"]
    },
    {
      icon: "Users",
      name: "Who We Work With",
      description: "Students, institutions, and organizations",
      challenges: ["Skill gap in semiconductor", "Limited practical experience", "Industry readiness"],
      solutions: ["Hands-on training", "Mentor-led learning", "Real-world projects"],
      caseStudy: "500+ learners trained across 15+ countries worldwide",
      clients: ["Students", "Colleges", "Professionals", "Organizations"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-concrete-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-3 sm:mb-4">
            Industry Expertise
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our courses and mentorship align with the key verticals of the semiconductor industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Industry Tabs */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-3">
              {industries?.map((industry, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndustry(index)}
                  className={`w-full text-left p-3 sm:p-4 border-2 transition-all duration-300 ${
                    activeIndustry === index
                      ? 'border-accent bg-accent text-white' :'border-concrete bg-card text-primary hover:border-accent/50'
                  }`}
                  style={{
                    boxShadow: activeIndustry === index ? '4px 4px 0px #000000' : '2px 2px 0px #000000'
                  }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center ${
                      activeIndustry === index
                        ? 'border-white bg-white' :'border-primary bg-concrete-light'
                    }`}>
                      <Icon
                        name={industry?.icon}
                        size={16}
                        className="sm:w-5 sm:h-5"
                        color={activeIndustry === index ? "#FF6B35" : "#1A1A1A"}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xs sm:text-sm">{industry?.name}</h3>
                      <p className={`text-xs mt-1 hidden sm:block ${
                        activeIndustry === index ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        {industry?.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <motion.div
              key={activeIndustry}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-card border-2 border-concrete p-4 sm:p-8"
              style={{ boxShadow: '8px 8px 0px #000000' }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent border-2 border-primary flex items-center justify-center rotate-12">
                  <Icon name={industries?.[activeIndustry]?.icon} size={24} className="sm:w-8 sm:h-8" color="#FFFFFF" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-primary">
                    {industries?.[activeIndustry]?.name}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base hidden sm:block">
                    {industries?.[activeIndustry]?.description}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                {/* Challenges */}
                <div>
                  <h4 className="font-bold text-primary mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Icon name="AlertTriangle" size={14} className="sm:w-4 sm:h-4 mr-2 text-conversion" />
                    Key Challenges
                  </h4>
                  <div className="space-y-2">
                    {industries?.[activeIndustry]?.challenges?.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-conversion mt-1.5 sm:mt-2"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-bold text-primary mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                    <Icon name="CheckCircle" size={14} className="sm:w-4 sm:h-4 mr-2 text-accent" />
                    Our Solutions
                  </h4>
                  <div className="space-y-2">
                    {industries?.[activeIndustry]?.solutions?.map((solution, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-accent mt-1.5 sm:mt-2"></div>
                        <span className="text-xs sm:text-sm text-muted-foreground">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Study & Clients */}
              <div className="pt-4 sm:pt-6 border-t-2 border-concrete-light">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-2 flex items-center text-sm sm:text-base">
                      <Icon name="ExternalLink" size={14} className="sm:w-4 sm:h-4 mr-2 text-accent" />
                      Student Success
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">
                      {industries?.[activeIndustry]?.caseStudy}
                    </p>
                    <button className="text-accent font-semibold text-xs sm:text-sm hover:underline">
                      View Student Projects →
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2 flex items-center text-sm sm:text-base">
                      <Icon name="Users" size={14} className="sm:w-4 sm:h-4 mr-2 text-accent" />
                      Target Audience
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {industries?.[activeIndustry]?.clients?.map((client, index) => (
                        <span
                          key={index}
                          className="text-xs bg-concrete-light text-primary px-2 py-1 font-medium"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;