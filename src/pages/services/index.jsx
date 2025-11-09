import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import ServiceStats from './components/ServiceStats';
import ProcessPreview from './components/ProcessPreview';
import IndustryFocus from './components/IndustryFocus';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const services = [
    {
      id: 1,
      icon: "Cpu",
      title: "Semiconductor Fundamentals & Material Science",
      description: "Learn how semiconductors work at the atomic level — from sand to silicon. Understand doping, crystal growth, wafer formation, and PN junction behavior.",
      priceRange: "4–6 weeks",
      timeline: "Beginners",
      industries: ["Students", "Professionals", "Institutions"],
      features: [
        {
          name: "Visual Modules",
          description: "Interactive learning materials covering atomic structure and electron behavior"
        },
        {
          name: "Interactive Labs",
          description: "Hands-on simulations of semiconductor physics and material properties"
        },
        {
          name: "Material Science Projects",
          description: "Practical exercises in crystal growth and wafer preparation"
        },
        {
          name: "PN Junction Theory",
          description: "Deep dive into diode behavior and junction physics"
        },
        {
          name: "Doping Techniques",
          description: "Understanding n-type and p-type semiconductor formation"
        }
      ],
      process: [
        {
          phase: "Atomic Foundation",
          duration: "1 week",
          description: "Electron configuration, bonding, and crystal structure basics"
        },
        {
          phase: "Semiconductor Physics",
          duration: "2 weeks",
          description: "Band theory, carrier dynamics, and junction behavior"
        },
        {
          phase: "Material Processing",
          duration: "2 weeks",
          description: "Crystal growth, wafer fabrication, and doping processes"
        },
        {
          phase: "Lab Integration",
          duration: "1 week",
          description: "Virtual lab exercises and real-world application projects"
        }
      ]
    },
    {
      id: 2,
      icon: "CircuitBoard",
      title: "VLSI & Digital IC Design",
      description: "Build digital circuits and systems using Verilog, SystemVerilog, and logic synthesis. Design your own digital blocks, simulate timing, and explore full RTL-to-GDSII workflows.",
      priceRange: "8–10 weeks",
      timeline: "Intermediate learners",
      industries: ["Students", "Aspiring Engineers", "Professionals"],
      features: [
        {
          name: "RTL Design Projects",
          description: "Hands-on Verilog/SystemVerilog coding with real design examples"
        },
        {
          name: "Logic Synthesis",
          description: "Complete flow from RTL to gate-level implementation"
        },
        {
          name: "Timing Analysis",
          description: "Static timing analysis and constraint management"
        },
        {
          name: "Digital Block Design",
          description: "ALUs, controllers, and complex digital system architectures"
        },
        {
          name: "Simulation Reports",
          description: "Functional verification and timing validation reports"
        }
      ],
      process: [
        {
          phase: "Digital Logic Fundamentals",
          duration: "2 weeks",
          description: "Boolean algebra, logic gates, and combinational circuit design"
        },
        {
          phase: "RTL Coding Mastery",
          duration: "3 weeks",
          description: "Verilog/SystemVerilog for synthesis and testbench development"
        },
        {
          phase: "Synthesis & Implementation",
          duration: "3 weeks",
          description: "Logic synthesis, place & route, and timing closure"
        },
        {
          phase: "Verification & Sign-off",
          duration: "2 weeks",
          description: "Functional verification, timing analysis, and design validation"
        }
      ]
    },
    {
      id: 3,
      icon: "Zap",
      title: "Analog IC Design & Simulation",
      description: "Master the art of transistor-level design — biasing, amplifiers, and stability analysis. Use open-source EDA tools like Ngspice and Xschem to simulate analog circuits.",
      priceRange: "10–12 weeks",
      timeline: "Advanced learners",
      industries: ["Analog Designers", "Graduate Students", "Professionals"],
      features: [
        {
          name: "Amplifier Design",
          description: "Op-amp design, feedback analysis, and compensation techniques"
        },
        {
          name: "Transistor-Level Analysis",
          description: "Deep submicron MOSFET behavior and modeling"
        },
        {
          name: "SPICE Simulations",
          description: "Ngspice-based circuit simulation and optimization"
        },
        {
          name: "Biasing Circuits",
          description: "Current mirrors, voltage references, and bias networks"
        },
        {
          name: "Stability Analysis",
          description: "Frequency response,极点位置, and compensation design"
        }
      ],
      process: [
        {
          phase: "Transistor Fundamentals",
          duration: "2 weeks",
          description: "MOSFET physics, small-signal modeling, and biasing principles"
        },
        {
          phase: "Basic Amplifier Design",
          duration: "3 weeks",
          description: "Single-stage and multi-stage amplifier topologies"
        },
        {
          phase: "Advanced Analog Circuits",
          duration: "4 weeks",
          description: "Op-amps, comparators, and precision analog design"
        },
        {
          phase: "Layout & Simulation",
          duration: "3 weeks",
          description: "Physical layout considerations and comprehensive SPICE verification"
        }
      ]
    },
    {
      id: 4,
      icon: "Layers",
      title: "Physical Design & Implementation (RTL → GDSII)",
      description: "Learn backend chip design steps — floorplanning, placement, routing, DRC/LVS, and sign-off. Practice with real tools like OpenROAD, KLayout, and Magic.",
      priceRange: "10–12 weeks",
      timeline: "Advanced learners",
      industries: ["PD Engineers", "Graduate Students", "Professionals"],
      features: [
        {
          name: "Full Physical Layout",
          description: "Complete chip layout from floorplanning to final output"
        },
        {
          name: "DRC/LVS Reports",
          description: "Design rule checking and layout vs. schematic verification"
        },
        {
          name: "Timing Sign-off",
          description: "Clock tree synthesis and timing closure verification"
        },
        {
          name: "OpenROAD Flow",
          description: "Hands-on experience with open-source physical design tools"
        },
        {
          name: "GDSII Generation",
          description: "Final mask data preparation and manufacturing output"
        }
      ],
      process: [
        {
          phase: "Floorplanning & Placement",
          duration: "3 weeks",
          description: "Die area planning, macro placement, and power grid design"
        },
        {
          phase: "Clock Tree & Routing",
          duration: "4 weeks",
          description: "CTS, global routing, and detailed routing optimization"
        },
        {
          phase: "Optimization & Sign-off",
          duration: "3 weeks",
          description: "Timing optimization, power analysis, and physical verification"
        },
        {
          phase: "Mask Preparation",
          duration: "2 weeks",
          description: "GDSII generation, process design rules, and manufacturing handoff"
        }
      ]
    },
    {
      id: 5,
      icon: "CheckCircle",
      title: "Design Verification (UVM & SystemVerilog)",
      description: "Understand verification methodology, write reusable testbenches, and analyze functional coverage. Get hands-on with SystemVerilog UVM frameworks and practical verification projects.",
      priceRange: "8–10 weeks",
      timeline: "Intermediate learners",
      industries: ["Verification Engineers", "Students", "Professionals"],
      features: [
        {
          name: "Verification Plan",
          description: "Systematic test planning and coverage-driven verification"
        },
        {
          name: "Reusable UVM Environment",
          description: "Complete UVM testbench framework with best practices"
        },
        {
          name: "Coverage Reports",
          description: "Functional and code coverage analysis and optimization"
        },
        {
          name: "SystemVerilog UVM",
          description: "Advanced verification techniques using industry-standard methodologies"
        },
        {
          name: "Constraint Random Testing",
          description: "Smart test generation and verification automation"
        }
      ],
      process: [
        {
          phase: "Verification Fundamentals",
          duration: "2 weeks",
          description: "Verification concepts, testbench architecture, and methodology overview"
        },
        {
          phase: "SystemVerilog Mastery",
          duration: "3 weeks",
          description: "SV language features, OOP, and testbench development"
        },
        {
          phase: "UVM Framework",
          duration: "3 weeks",
          description: "UVM components, sequences, and reusable verification environments"
        },
        {
          phase: "Coverage & Closure",
          duration: "2 weeks",
          description: "Coverage analysis, debugging techniques, and verification closure"
        }
      ]
    },
    {
      id: 6,
      icon: "Factory",
      title: "Fabrication & Cleanroom Training",
      description: "Experience the journey from raw silicon to fabricated chips through guided modules. Understand lithography, etching, doping, metallization, and wafer packaging.",
      priceRange: "4–6 weeks",
      timeline: "Beginners & professionals",
      industries: ["Students", "Process Engineers", "Professionals"],
      features: [
        {
          name: "Virtual Cleanroom Walkthroughs",
          description: "Immersive 3D tours of semiconductor fabrication facilities"
        },
        {
          name: "Wafer Process Simulation",
          description: "Step-by-step wafer processing with virtual lab exercises"
        },
        {
          name: "Lithography Process",
          description: "Photolithography principles, mask design, and pattern transfer"
        },
        {
          name: "Etching & Deposition",
          description: "Material removal and film deposition techniques"
        },
        {
          name: "Lab Reports",
          description: "Process documentation and analysis of fabrication outcomes"
        }
      ],
      process: [
        {
          phase: "Cleanroom Fundamentals",
          duration: "1 week",
          description: "Cleanroom environment, safety protocols, and contamination control"
        },
        {
          phase: "Wafer Preparation",
          duration: "1 week",
          description: "Silicon wafer handling, cleaning, and initial processing"
        },
        {
          phase: "Pattern Transfer",
          duration: "2 weeks",
          description: "Photolithography, etching, and pattern definition"
        },
        {
          phase: "Final Processing",
          duration: "2 weeks",
          description: "Doping, metallization, packaging, and testing procedures"
        }
      ]
    },
    {
      id: 7,
      icon: "Users",
      title: "Industry Projects & Mentorship",
      description: "Work on real-world design problems under expert supervision. Build a verified chip block, analog IP, or end-to-end design as your capstone project.",
      priceRange: "4–8 weeks",
      timeline: "Advanced cohorts",
      industries: ["Graduate Students", "Professionals", "Career Changers"],
      features: [
        {
          name: "Full Project Documentation",
          description: "Professional-quality technical documentation and design reports"
        },
        {
          name: "Demo Video",
          description: "Project presentation and demonstration materials"
        },
        {
          name: "Mentor Feedback",
          description: "One-on-one guidance from industry professionals"
        },
        {
          name: "Real-World Problems",
          description: "Industry-relevant design challenges and constraints"
        },
        {
          name: "Portfolio Development",
          description: "Silicon-ready projects for career advancement"
        }
      ],
      process: [
        {
          phase: "Project Definition",
          duration: "1 week",
          description: "Requirements gathering, scope definition, and team formation"
        },
        {
          phase: "Design & Development",
          duration: "3-4 weeks",
          description: "Active development with regular mentor check-ins and progress reviews"
        },
        {
          phase: "Verification & Testing",
          duration: "2-3 weeks",
          description: "Comprehensive verification, validation, and optimization"
        },
        {
          phase: "Presentation & Delivery",
          duration: "1 week",
          description: "Project presentation, documentation completion, and knowledge transfer"
        }
      ]
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <>
      <Helmet>
        <title>Semiconductor School — VLSI, Chip Design, and Fabrication Learning Services</title>
        <meta name="description" content="Discover Semiconductor School's industry-ready courses and services in semiconductor design, VLSI, verification, and fabrication. Hands-on labs, mentor-led training, and real-world projects." />
        <meta name="keywords" content="semiconductor education, VLSI training, chip design courses, physical design, verification, analog IC, fabrication, open-source EDA" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <ServiceHero />

        {/* Services Grid */}
        <section className="py-12 sm:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-3 sm:mb-4">
                Capabilities Matrix
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn, Design, Verify, Fabricate — All Under One Platform. Each service is a practical step toward mastering the semiconductor ecosystem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {services?.map((service) => (
                <ServiceCard
                  key={service?.id}
                  service={service}
                  isExpanded={expandedService === service?.id}
                  onToggle={() => handleServiceToggle(service?.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <ServiceStats />

        {/* Process Preview */}
        <ProcessPreview />

        {/* Industry Focus */}
        <IndustryFocus />

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
                Ready to Start Your
                <span className="block text-accent">Semiconductor Journey?</span>
              </h2>
              <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Semiconductor School offers complete pathways — from foundation learning to silicon-ready expertise.
                Choose your specialization, join a cohort, and become part of India's growing semiconductor ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  variant="default"
                  className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion w-full sm:w-auto"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Start Your Cohort
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t-2 border-concrete py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary border-2 border-primary">
                    <div className="w-full h-full bg-accent transform translate-x-1 translate-y-1"></div>
                  </div>
                  <span className="text-lg sm:text-xl font-black text-primary">Semiconductor School</span>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 max-w-md">
                  Empowering the next generation of chip engineers through structured, mentor-led, and visually engaging learning.
                </p>
                <div className="flex space-x-3 sm:space-x-4">
                  {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble']?.map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-concrete-light border-2 border-concrete flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-colors duration-300"
                    >
                      <Icon name={social} size={14} className="sm:w-4 sm:h-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Courses</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li><a className="hover:text-accent transition-colors cursor-default">Semiconductor Fundamentals</a></li>
                  <li><a className="hover:text-accent transition-colors cursor-default">VLSI Design</a></li>
                  <li><a className="hover:text-accent transition-colors cursor-default">Physical Design</a></li>
                  <li><a className="hover:text-accent transition-colors cursor-default">Verification</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                  <li><a href="/projects" className="hover:text-accent transition-colors">Student Projects</a></li>
                  <li><a href="/process" className="hover:text-accent transition-colors">Learning Process</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-concrete-light mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Semiconductor School. All rights reserved.
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <a href="/terms-conditions" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServicesPage;