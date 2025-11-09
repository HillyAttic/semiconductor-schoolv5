import React from 'react';
import Icon from '../../../components/AppIcon';

const ResultsShowcase = ({ beforeAfter, businessMetrics, testimonial }) => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-primary mb-4">
              Learning Impact
            </h2>
            <p className="text-xl text-muted-foreground">
              Measurable results that transform careers and industry readiness
            </p>
          </div>

          {/* Before & After */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Visual Transformation
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Icon name="ArrowLeft" size={20} className="text-muted-foreground" />
                  <span className="font-bold text-muted-foreground uppercase tracking-wide">
                    Before
                  </span>
                </div>
                <div className="aspect-video bg-concrete-light border-2 border-concrete flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Image" size={32} className="text-concrete-dark mx-auto mb-2" />
                    <div className="text-concrete-dark text-sm">Before Visualization</div>
                  </div>
                </div>
                <div className="p-4 bg-background border-2 border-concrete">
                  <p className="text-muted-foreground text-sm">
                    {beforeAfter?.before?.description}
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="font-bold text-accent uppercase tracking-wide">
                    After
                  </span>
                  <Icon name="ArrowRight" size={20} className="text-accent" />
                </div>
                <div className="aspect-video bg-concrete-light border-2 border-accent brutalist-shadow flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Image" size={32} className="text-concrete-dark mx-auto mb-2" />
                    <div className="text-concrete-dark text-sm">After Visualization</div>
                  </div>
                </div>
                <div className="p-4 bg-accent/10 border-2 border-accent">
                  <p className="text-primary text-sm font-medium">
                    {beforeAfter?.after?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Metrics */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">
              Business Impact
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessMetrics?.map((metric, index) => (
                <div key={index} className="text-center p-6 bg-background border-2 border-concrete brutalist-shadow">
                  <div className="w-12 h-12 bg-accent border-2 border-accent mx-auto mb-4 flex items-center justify-center">
                    <Icon name={metric?.icon} size={24} color="white" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">
                    {metric?.value}
                  </div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {metric?.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {metric?.timeframe}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="bg-primary text-primary-foreground p-6 sm:p-8 lg:p-12 border-2 lg:border-4 border-primary brutalist-shadow">
            <div className="max-w-4xl mx-auto text-center">
              <Icon name="Quote" size={32} className="mx-auto mb-4 sm:mb-6 opacity-50" />
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed mb-6 sm:mb-8">
                "{testimonial?.quote}"
              </blockquote>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-primary-foreground bg-accent flex items-center justify-center">
                  <Icon name="User" size={20} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" color="white" />
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-bold text-base sm:text-lg">{testimonial?.author?.name}</div>
                  <div className="text-sm opacity-80">{testimonial?.author?.title}</div>
                  <div className="text-xs sm:text-sm opacity-60">{testimonial?.author?.company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;