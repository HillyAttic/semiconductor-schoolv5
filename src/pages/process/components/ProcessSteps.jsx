import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Discovery & Foundation",
      subtitle: "Understanding the Building Blocks of Silicon",
      duration: "2–3 Weeks",
      involvement: "High – Daily live sessions and quizzes",
      description: `We begin by diving deep into the science behind semiconductors — exploring atoms, materials, and the physics that power modern chips.
This phase sets your foundation through structured lessons, live mentor discussions, and visual experiments explaining how sand becomes silicon.`,
      deliverables: [
        "Fundamentals of semiconductor materials",
        "Atomic structure and conductivity principles",
        "Visual simulations of sand refining and silicon extraction",
        "Foundation workbook and learning roadmap"
      ],
      transitionCriteria: [
        "Material fundamentals mastered",
        "Foundation quiz passed",
        "Instructor approval for advanced modules"
      ],
      icon: "Search",
      color: "bg-accent"
    },
    {
      id: 2,
      title: "Crystal Growth & Wafer Science",
      subtitle: "Formation Phase",
      duration: "3–4 Weeks",
      involvement: "Medium – Weekly lab reviews and assignments",
      description: `With a solid foundation, students now enter the crystal growth and wafer preparation stage — where theory meets visualization.
Through lab demonstrations and digital twins, you'll witness how pure silicon transforms into flawless wafers ready for chip design.`,
      deliverables: [
        "Silicon purification techniques",
        "Czochralski crystal growth process study",
        "Wafer slicing and polishing simulation",
        "Practical assessment & visual project"
      ],
      transitionCriteria: [
        "Wafer manufacturing concept approved",
        "Lab report submitted",
        "Mentor feedback completed"
      ],
      icon: "Wrench",
      color: "bg-primary"
    },
    {
      id: 3,
      title: "Fabrication & Chip Design",
      subtitle: "Creation Phase",
      duration: "3–5 Weeks",
      involvement: "Medium – Project-based learning with peer collaboration",
      description: `Now the real magic begins — turning polished wafers into intelligent chips.
Students design and simulate transistor layouts, explore photolithography, and apply VLSI design logic using real-world EDA tools.
This is where creativity meets precision.`,
      deliverables: [
        "Chip architecture and circuit design basics",
        "Photolithography and etching tutorials",
        "Mask design and process simulation",
        "Mini-project: Design a basic logic gate circuit"
      ],
      transitionCriteria: [
        "Fabrication workflow understood",
        "Circuit simulation results verified",
        "Mentor sign-off on project prototype"
      ],
      icon: "Cpu",
      color: "bg-secondary"
    },
    {
      id: 4,
      title: "Testing & Optimization",
      subtitle: "Development Phase",
      duration: "2–3 Weeks",
      involvement: "Moderate – Guided testing sessions",
      description: `A chip's success lies in its performance.
Students learn how semiconductor devices are tested, analyzed, and optimized for efficiency, power, and scalability.
You'll perform diagnostic studies and explore defect analysis techniques — preparing you for real fabrication challenges.`,
      deliverables: [
        "Electrical testing and measurement principles",
        "Yield optimization techniques",
        "Fault detection and analysis report",
        "Optimization toolkit documentation"
      ],
      transitionCriteria: [
        "Testing simulation completed",
        "Optimization strategies documented",
        "Peer review and mentor approval"
      ],
      icon: "Activity",
      color: "bg-warning"
    },
    {
      id: 5,
      title: "Integration & Innovation",
      subtitle: "Activation Phase",
      duration: "1–2 Weeks",
      involvement: "Low – Final project presentation & mentor evaluation",
      description: `Your learning now converges into a capstone innovation project.
You integrate everything learned — from sand to silicon — into a practical prototype or research presentation.
We don't just teach you; we prepare you to contribute to the semiconductor revolution.`,
      deliverables: [
        "Capstone semiconductor project",
        "Presentation & documentation",
        "Mentor feedback and evaluation report",
        "Industry showcase opportunity"
      ],
      transitionCriteria: [
        "Project successfully presented",
        "Evaluation criteria met",
        "Certificate of completion awarded"
      ],
      icon: "Rocket",
      color: "bg-success"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = processSteps?.map((_, index) => 
        document.getElementById(`step-${index}`)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections?.forEach((section, index) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {processSteps?.map((step, index) => (
          <div
            key={step?.id}
            id={`step-${index}`}
            className="mb-32 last:mb-0"
          >
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="mb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${step?.color} border-2 border-primary flex items-center justify-center`}>
                      <Icon name={step?.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                        Step {step?.id}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-black text-primary">
                        {step?.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-accent mb-2">
                    {step?.subtitle}
                  </p>
                </div>

                <div className="prose prose-lg max-w-none mb-8">
                  {step?.description?.split('\n\n')?.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Step Details Grid */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card border-2 border-concrete p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Clock" size={16} className="text-accent" />
                      <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                        Duration
                      </span>
                    </div>
                    <p className="font-semibold text-primary">{step?.duration}</p>
                  </div>
                  
                  <div className="bg-card border-2 border-concrete p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Icon name="Users" size={16} className="text-accent" />
                      <span className="font-bold text-sm uppercase tracking-wider text-muted-foreground">
                        Learner Involvement
                      </span>
                    </div>
                    <p className="font-semibold text-primary">{step?.involvement}</p>
                  </div>
                </div>
              </motion.div>

              {/* Deliverables & Criteria */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="bg-card border-2 border-concrete p-8 mb-6">
                  <h4 className="text-xl font-black text-primary mb-6 flex items-center">
                    <Icon name="Package" size={20} className="mr-2" />
                    Key Deliverables
                  </h4>
                  <ul className="space-y-3">
                    {step?.deliverables?.map((deliverable, dIndex) => (
                      <li key={dIndex} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/10 border-2 border-accent p-8">
                  <h4 className="text-xl font-black text-primary mb-6 flex items-center">
                    <Icon name="ArrowRight" size={20} className="mr-2" />
                    Next Phase Criteria
                  </h4>
                  <ul className="space-y-3">
                    {step?.transitionCriteria?.map((criteria, cIndex) => (
                      <li key={cIndex} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} className="text-accent mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{criteria}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;