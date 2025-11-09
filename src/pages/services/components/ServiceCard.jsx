import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <motion.div
      layout
      className={`bg-card border-2 border-concrete transition-all duration-300 ${
        isExpanded ? 'col-span-full' : 'hover:border-accent'
      }`}
      style={{
        boxShadow: isExpanded ? '12px 12px 0px #000000' : '4px 4px 0px #000000'
      }}
    >
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div
          className="flex items-start justify-between cursor-pointer group"
          onClick={onToggle}
        >
          <div className="flex items-start space-x-3 sm:space-x-4 flex-1">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-accent border-2 border-primary flex items-center justify-center transition-transform duration-300 ${
              isExpanded ? 'rotate-12' : 'group-hover:rotate-6'
            }`}>
              <Icon name={service?.icon} size={20} className="sm:w-6 sm:h-6" color="#FFFFFF" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-black text-primary mb-1 sm:mb-2 leading-tight">{service?.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{service?.description}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-primary hover:text-accent transition-colors duration-300 ml-2"
          >
            <Icon name="Plus" size={20} className="sm:w-6 sm:h-6" />
          </motion.div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-concrete-light">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  {/* Features & Deliverables */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-primary mb-3 sm:mb-4 flex items-center">
                      <Icon name="CheckCircle" size={16} className="sm:w-5 sm:h-5 mr-2 text-accent" />
                      What's Included
                    </h4>
                    <div className="space-y-2 sm:space-y-3">
                      {service?.features?.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-concrete-light hover:bg-accent/10 transition-colors duration-300 cursor-pointer"
                          onMouseEnter={() => setHoveredFeature(index)}
                          onMouseLeave={() => setHoveredFeature(null)}
                        >
                          <div className={`w-2 h-2 bg-accent mt-1.5 sm:mt-2 transition-transform duration-300 ${
                            hoveredFeature === index ? 'scale-150' : ''
                          }`}></div>
                          <div>
                            <p className="font-semibold text-primary text-xs sm:text-sm">{feature?.name}</p>
                            <p className="text-muted-foreground text-xs mt-0.5 sm:mt-1">{feature?.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process & Timeline */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-primary mb-3 sm:mb-4 flex items-center">
                      <Icon name="Clock" size={16} className="sm:w-5 sm:h-5 mr-2 text-accent" />
                      Process & Timeline
                    </h4>
                    <div className="space-y-3 sm:space-y-4">
                      {service?.process?.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold text-primary text-xs sm:text-sm">{step?.phase}</p>
                            <p className="text-muted-foreground text-xs mt-0.5 sm:mt-1">{step?.duration}</p>
                            <p className="text-muted-foreground text-xs mt-0.5 sm:mt-1 hidden sm:block">{step?.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Investment & Case Studies */}
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-concrete-light">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {/* Duration & Level */}
                    <div className="bg-background p-3 sm:p-4 border-2 border-concrete">
                      <h5 className="font-bold text-primary mb-2 flex items-center">
                        <Icon name="Clock" size={14} className="sm:w-4 sm:h-4 mr-2 text-accent" />
                        Duration
                      </h5>
                      <p className="text-lg sm:text-2xl font-black text-accent">{service?.priceRange}</p>
                      <p className="text-xs text-muted-foreground mt-1">{service?.timeline}</p>
                    </div>

                    {/* Target Audience */}
                    <div className="bg-background p-3 sm:p-4 border-2 border-concrete">
                      <h5 className="font-bold text-primary mb-2 flex items-center">
                        <Icon name="Target" size={14} className="sm:w-4 sm:h-4 mr-2 text-accent" />
                        Best For
                      </h5>
                      <div className="flex flex-wrap gap-1">
                        {service?.industries?.map((industry, index) => (
                          <span
                            key={index}
                            className="text-xs bg-concrete-light text-primary px-2 py-1 font-medium"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Student Projects */}
                    <div className="bg-background p-3 sm:p-4 border-2 border-concrete sm:col-span-2 lg:col-span-1">
                      <h5 className="font-bold text-primary mb-2 flex items-center">
                        <Icon name="ExternalLink" size={14} className="sm:w-4 sm:h-4 mr-2 text-accent" />
                        Student Work
                      </h5>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        View Projects
                      </Button>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    variant="default"
                    className="bg-conversion hover:bg-conversion/90 text-white font-bold border-2 border-conversion w-full sm:w-auto"
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Enroll Now
                  </Button>
                  <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                    className="w-full sm:w-auto"
                  >
                    View Curriculum
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;