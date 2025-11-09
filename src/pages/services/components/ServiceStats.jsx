import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServiceStats = () => {
  const stats = [
    {
      icon: "TrendingUp",
      value: "240%",
      label: "Learner Engagement Increase",
      description: "Measured across all semiconductor courses and cohorts"
    },
    {
      icon: "CheckCircle",
      value: "90%+",
      label: "Project Completion Rate",
      description: "Students completing hands-on chip design projects"
    },
    {
      icon: "Users",
      value: "500+",
      label: "Trained Learners Worldwide",
      description: "From students to professionals in semiconductor industry"
    },
    {
      icon: "Award",
      value: "85%",
      label: "Job Interview Readiness",
      description: "Students prepared for semiconductor industry roles"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-concrete-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-3 sm:mb-4">
            Results That Matter
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            We measure outcomes, not attendance. Hands-on completion • Portfolio quality • Concept retention • Placement readiness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border-2 border-concrete p-4 sm:p-6 text-center group hover:border-accent transition-colors duration-300"
              style={{ boxShadow: '4px 4px 0px #000000' }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent border-2 border-primary mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                <Icon name={stat?.icon} size={20} className="sm:w-7 sm:h-7" color="#FFFFFF" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-primary mb-1 sm:mb-2">{stat?.value}</div>
              <h3 className="font-bold text-primary mb-1 sm:mb-2 text-xs sm:text-sm">{stat?.label}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{stat?.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStats;