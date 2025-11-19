import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-3 h-3 bg-accent"></div>
              <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
                Capabilities Matrix
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary mb-4 sm:mb-6 leading-tight">
              Semiconductor School <span className="text-accent">Courses</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Empowering the Next Generation of Chip Engineers. We simplify the complex world of semiconductors through structured,
              mentor-led, and visually engaging learning for students, institutions, and organizations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
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
                iconName="Play"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                See Learning Process
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t-2 border-concrete-light">
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-black text-accent">500+</div>
                <div className="text-xs text-muted-foreground">Learners Trained</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-black text-accent">8-24</div>
                <div className="text-xs text-muted-foreground">Weeks Duration</div>
              </div>
              <div className="text-center">
                <div className="text-lg sm:text-2xl font-black text-accent">90%+</div>
                <div className="text-xs text-muted-foreground">Project Completion</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Block */}
              <div className="w-full h-48 sm:h-64 lg:h-96 bg-primary border-2 border-primary relative overflow-hidden">
                <div className="absolute inset-2 sm:inset-4 bg-accent border-2 border-primary flex items-center justify-center">
                  <img src="/assets/image-assets/ABOUT-- .svg" alt="Service Layers" className="w-full h-full object-contain" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 bg-conversion border-2 border-primary flex items-center justify-center"
                >
                  <Icon name="Zap" size={12} className="sm:w-6 sm:h-6" color="#FFFFFF" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-12 sm:h-12 bg-background border-2 border-primary flex items-center justify-center"
                >
                  <Icon name="Target" size={8} className="sm:w-4 sm:h-4" color="#1A1A1A" />
                </motion.div>
              </div>

              {/* Shadow */}
              <div className="absolute inset-0 bg-primary transform translate-x-2 translate-y-2 sm:translate-x-4 sm:translate-y-4 -z-10"></div>
            </div>

            {/* Service Icons Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 sm:mt-8">
              {[
                { icon: "Cpu", label: "VLSI Design" },
                { icon: "CircuitBoard", label: "Digital Design" },
                { icon: "Zap", label: "Analog Design" },
                { icon: "Layers", label: "Physical Design" },
                { icon: "CheckCircle", label: "Verification" },
                { icon: "Factory", label: "Fabrication" }
              ]?.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-card border-2 border-concrete p-2 sm:p-4 text-center hover:border-accent transition-colors duration-300 group"
                  style={{ boxShadow: '2px 2px 0px #000000' }}
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-concrete-light border border-concrete mx-auto mb-1 sm:mb-2 flex items-center justify-center group-hover:bg-acc
                  ent group-hover:border-accent transition-colors duration-300">
                    <Icon name={service?.icon} size={10} className="sm:w-4 sm:h-4 group-hover:text-white" />
                  </div>
                  <div className="text-xs font-semibold text-primary hidden xs:block">{service?.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;