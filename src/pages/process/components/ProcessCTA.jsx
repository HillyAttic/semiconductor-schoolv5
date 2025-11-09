import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ProcessCTA = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none">
            Ready to Begin Your
            <br />
            <span className="text-accent">Semiconductor Journey?</span>
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Every great engineer starts with curiosity — and transforms it into innovation.
            Let's take you from sand to silicon chip through hands-on, visual, and industry-ready education.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button
              asChild
              variant="default"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow hover:shadow-none transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link to="/contact">
                Start Learning
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-bold px-8 py-4 text-lg"
            >
              <Link to="/about">
                Learn More
                <Icon name="ExternalLink" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>

          {/* Process Confidence Builders */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 border-2 border-primary-foreground/20 p-6"
            >
              <Icon name="Shield" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Industry-Aligned Learning</h3>
              <p className="text-primary-foreground/80">
                Our methodology has trained 2,300+ learners across semiconductor roles.
                Every step is mapped to real fab and design floor requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 border-2 border-primary-foreground/20 p-6"
            >
              <Icon name="Users" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Mentor-Guided Success</h3>
              <p className="text-primary-foreground/80">
                We're not just educators—we're industry mentors invested in your career.
                Your growth is our mission, your success is our measure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-primary-foreground/10 border-2 border-primary-foreground/20 p-6"
            >
              <Icon name="Target" size={32} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Career-Ready Outcomes</h3>
              <p className="text-primary-foreground/80">
                Every cohort includes placement tracking and performance analytics.
                We measure job readiness, not just course completion.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessCTA;