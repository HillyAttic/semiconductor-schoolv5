import React from 'react';
import Icon from '../../../components/AppIcon';

const CaseStudyHero = ({ caseStudy, onNavigate }) => {
  return (
    <section className="relative min-h-screen bg-background pt-16">
      {/* Navigation Controls */}
      <div className="absolute top-20 left-4 right-4 lg:left-8 lg:right-auto lg:w-auto z-10 flex justify-between lg:block">
        <button
          onClick={() => onNavigate('prev')}
          className="flex items-center space-x-1 lg:space-x-2 px-3 lg:px-4 py-2 bg-card border-2 border-concrete text-card-foreground hover:bg-concrete-light transition-colors duration-300 brutalist-shadow text-sm lg:text-base"
        >
          <Icon name="ChevronLeft" size={16} />
          <span className="font-semibold hidden sm:inline">Previous</span>
        </button>
        <button
          onClick={() => onNavigate('next')}
          className="flex items-center space-x-1 lg:space-x-2 px-3 lg:px-4 py-2 bg-card border-2 border-concrete text-card-foreground hover:bg-concrete-light transition-colors duration-300 brutalist-shadow text-sm lg:text-base"
        >
          <span className="font-semibold hidden sm:inline">Next</span>
          <Icon name="ChevronRight" size={16} />
        </button>
      </div>
      <div className="container mx-auto px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold border-2 border-accent">
                  {caseStudy?.category}
                </span>
                <span className="text-muted-foreground font-medium">
                  {caseStudy?.year}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-primary leading-tight">
                {caseStudy?.title}
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                {caseStudy?.description}
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {caseStudy?.keyMetrics?.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-black text-accent">
                    {metric?.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    {metric?.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center space-x-4 p-4 bg-concrete-light border-2 border-concrete">
              <div className="w-12 h-12 bg-accent border-2 border-accent flex items-center justify-center">
                <Icon name="Building" size={24} color="white" />
              </div>
              <div>
                <div className="font-bold text-primary">{caseStudy?.client?.name}</div>
                <div className="text-sm text-muted-foreground">{caseStudy?.client?.industry}</div>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="aspect-square bg-concrete-light border-4 border-concrete flex items-center justify-center brutalist-shadow">
              <div className="text-center">
                <Icon name="Image" size={48} className="text-concrete-dark mx-auto mb-4" />
                <div className="text-concrete-dark font-bold">Project Visualization</div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-conversion text-white p-6 border-4 border-conversion brutalist-shadow">
              <div className="text-center">
                <div className="text-2xl font-black">{caseStudy?.projectDuration}</div>
                <div className="text-sm font-semibold uppercase">Duration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;