import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CaseStudyHero from './components/CaseStudyHero';
import ProjectTimeline from './components/ProjectTimeline';
import ProcessDocumentation from './components/ProcessDocumentation';
import ResultsShowcase from './components/ResultsShowcase';
import TechnicalSpecs from './components/TechnicalSpecs';
import TeamCredits from './components/TeamCredits';
import RelatedCaseStudies from './components/RelatedCaseStudies';
import Button from '../../components/ui/Button';
import AppIcon from '../../components/AppIcon';

// Move mock data outside component to prevent re-creation on every render
const CASE_STUDIES = [
  {
    id: 1,
    slug: "techflow-rebrand",
    title: "From Sand to Silicon: Learning Transformation",
    category: "Semiconductor Education",
    year: "2025",
    description: "We rebuilt the semiconductor learning journey end-to-end — turning complex fabrication and VLSI fundamentals into an immersive, visual, mentor-guided experience. The result: more enrollments, deeper engagement, and higher course completion.",
    projectDuration: "16 Weeks",
    keyMetrics: [
      { value: "240%", label: "Qualified Enrollments" },
      { value: "89%", label: "Session Engagement" },
      { value: "2.3x", label: "Course Completion Rate" }
    ],
    client: {
      name: "Semiconductor School",
      industry: "EdTech – Semiconductor"
    }
  },
  {
    id: 2,
    slug: "chip-verification-sprint",
    title: "Chip Verification Sprint — Case Study",
    category: "Verification & Validation",
    year: "2025",
    description: "A 14-week redesign of our beginner-to-junior verification track turned hesitant learners into confident debug engineers. By shifting to assertion-first learning and real bug hunts, we improved inquiry-to-enrollment conversion by 163% and cut time-to-first-lab by 54%.",
    projectDuration: "14 Weeks",
    keyMetrics: [
      { value: "163%", label: "Inquiry-to-Enrollment" },
      { value: "54%", label: "Time-to-First-Lab Reduction" },
      { value: "96%", label: "Capstone Pass Rate" }
    ],
    client: {
      name: "Semiconductor School",
      industry: "EdTech – Verification"
    }
  },
  {
    id: 3,
    slug: "nanofab-explorer",
    title: "NanoFab Explorer — Case Study",
    category: "Process & Fabrication",
    year: "2025",
    description: "Virtual fabrication initiative that turned dense wafer theory into interactive cleanroom simulations. Learner comprehension scores rose by 178% and cleanroom safety training completion improved by 92%.",
    projectDuration: "16 Weeks",
    keyMetrics: [
      { value: "178%", label: "Comprehension Improvement" },
      { value: "92%", label: "Safety Training Completion" },
      { value: "1,200+", label: "Learners Onboarded" }
    ],
    client: {
      name: "Semiconductor School",
      industry: "EdTech – Process & Fabrication"
    }
  }
];

const TIMELINE = [
  {
    title: "Process Mapping & Research",
    duration: "3 Weeks",
    icon: "Search",
    description: "Documented 10 industry-standard fab steps from raw silicon to packaged chip. Interviewed fab engineers at 3 partner institutions to understand real-world process flow and educational gaps.",
    deliverables: ["Process map", "Visual storyboards", "Simulation flowchart", "Interview synthesis"],
    teamMembers: ["Process Engineer", "Fab Industry Advisor", "Research Lead", "Educational Technologist"]
  },
  {
    title: "Simulation Design & Visual Pipeline",
    duration: "5 Weeks",
    icon: "Target",
    description: "Built real-time WebGL-based wafer modeling including oxidation, photoresist coating, exposure, and etch processes. Added contamination control training modules for comprehensive safety education.",
    deliverables: ["Wafer animation suite", "Contamination control visualizer", "Process variable dashboard", "3D simulation models"],
    teamMembers: ["3D Simulation Developer", "Process Expert", "WebGL Engineer", "Content Designer"]
  },
  {
    title: "Platform Integration",
    duration: "4 Weeks",
    icon: "Cpu",
    description: "Embedded simulations into Semiconductor School LMS with tracking for completion, yield score, and error logs. Implemented mentor dashboard for reviewing student process flow decisions.",
    deliverables: ["Integration API", "User analytics dashboard", "Progress reporting", "Mentor view interface"],
    teamMembers: ["LMS Integration Specialist", "Backend Developer", "Analytics Engineer", "UI/UX Developer"]
  },
  {
    title: "Cohort Launch & Optimization",
    duration: "4 Weeks",
    icon: "Rocket",
    description: "Pilot launched with 100 learners. Weekly feedback surveys improved simulation clarity and pacing. Generated optimization report with usability insights and batch performance summary.",
    deliverables: ["Optimization report", "Usability insights", "Batch performance summary", "Iteration roadmap"],
    teamMembers: ["Cohort Manager", "User Experience Researcher", "Data Analyst", "Quality Assurance"]
  }
];

const PROCESS_STEPS = [
  {
    title: "Process Research & Documentation",
    description: "We documented 10 industry-standard fab steps from raw silicon to packaged chip. Interviewed fab engineers at 3 partner institutions to understand real-world process flow and identify educational gaps in wafer science comprehension.",
    challenge: "Students struggled to visualize invisible micro-scale steps. High hardware cost made physical lab exposure impossible. Course engagement dropped after week 3 due to theory overload.",
    solution: "Replace slide-based lessons with simulation-first learning. Start with visualized process animations for oxide growth, masking, and ion implantation.",
    insight: "Visualization is not a luxury — it's the bridge between knowing and doing in semiconductor education.",
    tools: ["WebGL", "Three.js", "TCAD datasets", "Process documentation", "Interview analysis"],
    metrics: [
      { value: "10", label: "Fab Steps Documented" },
      { value: "3", label: "Partner Institutions" }
    ]
  },
  {
    title: "3D Simulation Development",
    description: "Built real-time WebGL-based wafer modeling including oxidation, photoresist coating, exposure, and etch processes. Created contamination control training modules for comprehensive safety education and hands-on exploration.",
    challenge: "Dense theory about lithography, etching, and doping was impossible to visualize. Students couldn't connect abstract concepts to real manufacturing steps.",
    solution: "Interactive virtual tools: oxidation furnace, photo-aligner, etcher. Each learner receives virtual wafer batch ID for ownership and progress tracking.",
    insight: "Make fabrication visible, safe, and scalable for students without lab access through immersive 3D environments.",
    tools: ["WebGL", "Three.js", "Blender", "Adobe Substance", "3D modeling"]
  },
  {
    title: "Platform Integration & Analytics",
    description: "Embedded simulations into Semiconductor School LMS with comprehensive tracking for completion, yield score, and error logs. Implemented mentor dashboard for reviewing student process flow decisions and performance analytics.",
    challenge: "Industry partners demanded measurable outcomes before internship onboarding. No way to track student comprehension and progress through fabrication steps.",
    solution: "Run step-by-step wafer builds with variable controls. Check layer integrity and yield using simulation reports and real-time progress tracking.",
    insight: "Every virtual wafer batch should tell a story of learning progress with measurable outcomes for mentors and institutions.",
    tools: ["Firebase", "LMS API", "Python analytics", "Progress tracking", "Performance heatmaps"],
    metrics: [
      { value: "100%", label: "LMS Integration" },
      { value: "Real-time", label: "Progress Tracking" }
    ]
  },
  {
    title: "Cohort Launch & Optimization",
    description: "Pilot launched with 100 learners across 7 partner colleges. Weekly feedback surveys improved simulation clarity and pacing. Achieved 4.9/5 average satisfaction and featured in TechEd India 2025.",
    challenge: "Ensuring consistent learning experience across diverse institutions while maintaining engagement and measurable outcomes for all learners.",
    solution: "Virtual wafer batch IDs create sense of ownership. Validate layer integrity and yield using simulation reports. Continuous feedback loops for improvement.",
    insight: "Great fabrication education makes invisible processes visible through simulation while maintaining the safety and scalability of virtual learning.",
    tools: ["Cohort management", "Feedback systems", "Partner coordination", "Quality assurance", "Performance monitoring"],
    metrics: [
      { value: "1,200+", label: "Learners Onboarded" },
      { value: "7", label: "Partner Colleges" }
    ]
  }
];

const CaseStudyPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

  // Use useMemo to find current study to prevent unnecessary re-calculations
  const currentStudy = useMemo(() => {
    if (!slug) return null;
    return CASE_STUDIES?.find((study) => study?.slug === slug) || null;
  }, [slug]);

  // Set current study index when slug changes
  useEffect(() => {
    if (slug && currentStudy) {
      const studyIndex = CASE_STUDIES?.findIndex((study) => study?.slug === slug);
      if (studyIndex !== -1) {
        setCurrentStudyIndex(studyIndex);
      }
    }
  }, [slug, currentStudy]);

  // Handle navigation between case studies
  const handleNavigation = (direction) => {
    if (direction === 'next') {
      const nextIndex = (currentStudyIndex + 1) % CASE_STUDIES?.length;
      const nextStudy = CASE_STUDIES?.[nextIndex];
      if (nextStudy) {
        navigate(`/case-study/${nextStudy?.slug}`);
      }
    } else {
      const prevIndex = (currentStudyIndex - 1 + CASE_STUDIES?.length) % CASE_STUDIES?.length;
      const prevStudy = CASE_STUDIES?.[prevIndex];
      if (prevStudy) {
        navigate(`/case-study/${prevStudy?.slug}`);
      }
    }
  };

  // Mock before/after and results data
  const beforeAfter = useMemo(() => ({
    before: {
      description: "Dense theory slides, abstract wafer processes, limited visualization, and high drop-off rates after week 3."
    },
    after: {
      description: "Interactive 3D simulations, virtual cleanroom environment, step-by-step wafer builds, and measurable yield tracking."
    }
  }), []);

  const businessMetrics = useMemo(() => [
    { icon: "TrendingUp", value: "178%", label: "Comprehension Improvement", timeframe: "Average score increase" },
    { icon: "CheckCircle", value: "92%", label: "Safety Training Completion", timeframe: "Module completion rate" },
    { icon: "Users", value: "1,200+", label: "Learners Onboarded", timeframe: "First 6 months" },
    { icon: "Award", value: "4.9/5", label: "Average Satisfaction", timeframe: "Student rating" }
  ], []);

  const testimonial = useMemo(() => ({
    quote: "I finally saw what ion implantation and photolithography mean. It felt like being inside a fab without the suit.",
    author: {
      name: "Ritika Sharma",
      title: "Process Track Graduate",
      company: "Semiconductor School",
      avatar: "https://images.unsplash.com/photo-1644335326474-544fbcf8855f",
      avatarAlt: "Professional headshot of Ritika Sharma, process engineer, smiling woman with shoulder-length brown hair in navy blazer"
    }
  }), []);

  // Mock technical specifications
  const technicalSpecs = useMemo(() => ({
    architecture: [
      {
        title: "Scalable Learning System",
        description: "Modular tracks and reusable lab components ensure consistency while allowing flexible pacing and deeper dives.",
        technologies: ["LMS modules", "Interactive labs", "Visual assets", "Project rubrics"]
      },
      {
        title: "Performance Optimization",
        description: "Progressive content loading, optimized media, and caching for smooth labs and low-latency sessions.",
        technologies: ["Progressive load", "Media optimization", "CDN", "Pre-rendered content"]
      }
    ],
    performance: [
      {
        title: "Learning Analytics",
        description: "Real-time tracking of learner progress, lab completion rates, and performance metrics to optimize educational outcomes.",
        technologies: ["Learning analytics", "Progress tracking", "Assessment tools", "Data visualization"]
      },
      {
        title: "Cross-Platform Access",
        description: "Responsive design ensuring consistent learning experience across desktop, tablet, and mobile devices.",
        technologies: ["Responsive design", "Progressive web app", "Offline access", "Cloud sync"]
      }
    ],
    security: [
      {
        title: "Learner Data Protection",
        description: "Secure learner data management with encryption, privacy controls, and compliance with educational data protection standards.",
        technologies: ["Data encryption", "Privacy controls", "Secure authentication", "GDPR compliance"]
      },
      {
        title: "Content Security",
        description: "Protection of intellectual property and learning materials through secure content delivery and access controls.",
        technologies: ["Secure content delivery", "Access controls", "License management", "Water marking"]
      }
    ],
    scalability: [
      {
        title: "Cloud-Based Learning",
        description: "Scalable cloud infrastructure supporting thousands of concurrent learners with automatic resource allocation.",
        technologies: ["Cloud hosting", "Auto-scaling", "Load balancing", "CDN"]
      },
      {
        title: "Multi-Track Support",
        description: "Architecture supporting multiple learning tracks, cohorts, and customization without technical dependencies.",
        technologies: ["Multi-tenant", "Track management", "Cohort tools", "Custom pathways"]
      }
    ]
  }), []);

  const technicalChallenges = useMemo(() => [
    {
      problem: "Students struggled to visualize invisible micro-scale wafer processes.",
      solution: "WebGL-based 3D modeling with real-time oxidation, etching, and doping simulations.",
      impact: "178% improvement in fabrication concept comprehension scores"
    },
    {
      problem: "High hardware cost made physical lab exposure impossible for most students.",
      solution: "Virtual cleanroom environment with step-by-step wafer builds and yield tracking.",
      impact: "1,200+ learners onboarded across 7 partner colleges"
    },
    {
      problem: "Industry partners demanded measurable outcomes before internship onboarding.",
      solution: "Real-time progress tracking with completion, yield score, and error log analytics.",
      impact: "92% improvement in cleanroom safety training completion"
    }
  ], []);

  // Mock team data
  const projectLead = useMemo(() => ({
    name: "Dr. Kavya Menon",
    role: "Program Director & Lead Mentor",
    avatar: "https://images.unsplash.com/photo-1698333338984-4dfef1bbcf23",
    avatarAlt: "Professional portrait of Dr. Kavya Menon, Asian woman with long black hair wearing modern black blazer",
    bio: "Guides curriculum and industry alignment across materials, wafer science, and VLSI design. With over 10 years in semiconductor education, she ensures every learner masters the journey from sand to silicon.",
    skills: ["Curriculum Design", "Industry Alignment", "Mentorship", "Outcomes"]
  }), []);

  const teamMembers = useMemo(() => [
    {
      name: "Rajesh Patel",
      role: "VLSI Mentor",
      roleIcon: "Cpu",
      avatar: "https://images.unsplash.com/photo-1734434570358-21badf4ba1c6",
      avatarAlt: "Professional headshot of Rajesh Patel, Indian man with short dark hair and friendly smile in blue shirt",
      contribution: "Coaches HDL/Verilog projects and timing closure basics, bringing 12 years of VLSI design experience to guide learners.",
      skills: ["HDL/Verilog", "VLSI Design", "Timing Analysis", "Mentorship"],
      contact: {
        linkedin: "https://linkedin.com/in/rajesh-patel-vlsi",
        email: "rajesh@semiconductorschools.com"
      }
    },
    {
      name: "Sarah Chen",
      role: "UX for Learning",
      roleIcon: "GraduationCap",
      avatar: "https://images.unsplash.com/photo-1615885596624-83fc55f98934",
      avatarAlt: "Professional photo of Sarah Chen, Asian woman with bright smile wearing white blouse in office setting",
      contribution: "Simplifies complex semiconductor flows into intuitive lab steps and learning experiences that drive understanding.",
      skills: ["Learning Design", "User Experience", "Educational Technology", "Curriculum"],
      contact: {
        linkedin: "https://linkedin.com/in/sarah-chen-learning",
        portfolio: "https://sarahchen.learning"
      }
    },
    {
      name: "Michael Torres",
      role: "Content & Assessments",
      roleIcon: "FileText",
      avatar: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
      avatarAlt: "Professional portrait of Michael Torres, Hispanic man with glasses and neat black hair wearing dark sweater",
      contribution: "Crafts explainers, rubrics, and interview-style tasks that prepare learners for real semiconductor industry challenges.",
      skills: ["Content Creation", "Assessment Design", "Interview Preparation", "Technical Writing"],
      contact: {
        linkedin: "https://linkedin.com/in/michael-torres-content",
        email: "michael@semiconductorschools.com"
      }
    },
    {
      name: "Dr. Emily Park",
      role: "Process Animation",
      roleIcon: "Play",
      avatar: "https://images.unsplash.com/photo-1612439289738-15a4cba74d9f",
      avatarAlt: "Professional headshot of Dr. Emily Park, Korean woman with curly red hair and warm smile in green blazer",
      contribution: "Builds wafer-to-chip animations and micro-interactions that make invisible semiconductor processes visible.",
      skills: ["3D Animation", "Process Visualization", "Scientific Visualization", "WebGL"],
      contact: {
        linkedin: "https://linkedin.com/in/emily-park-animation",
        portfolio: "https://emilypark.science"
      }
    },
    {
      name: "James Wilson",
      role: "Cohort Operations",
      roleIcon: "Users",
      avatar: "https://images.unsplash.com/photo-1571741146428-73c152544dad",
      avatarAlt: "Creative portrait of James Wilson, man with beard and casual style wearing denim jacket in studio setting",
      contribution: "Ensures smooth launches, live support, and quality assurance across all cohort operations and learner success.",
      skills: ["Cohort Management", "Operations", "Learner Success", "Quality Assurance"],
      contact: {
        linkedin: "https://linkedin.com/in/james-wilson-ops",
        email: "james@semiconductorschools.com"
      }
    }
  ], []);

  // Mock related case studies
  const relatedStudies = useMemo(() => [
    {
      slug: "wafer-science-essentials",
      title: "Wafer Science Essentials",
      category: "Materials Science",
      year: "2025",
      description: "Materials to polished wafers - Complete guide to silicon wafer manufacturing and quality control.",
      keyMetric: { value: "95%", label: "Lab Completion" }
    },
    {
      slug: "lithography-etch-labs",
      title: "Lithography & Etch Labs",
      category: "Process Technology",
      year: "2025",
      description: "Masks, exposure, and patterns - Hands-on experience with photolithography and etching processes.",
      keyMetric: { value: "88%", label: "Process Mastery" }
    },
    {
      slug: "vlsi-beginner-track",
      title: "VLSI Beginner Track",
      category: "Digital Design",
      year: "2025",
      description: "HDL, logic, and simple SoCs - Foundation course for VLSI design and verification.",
      keyMetric: { value: "92%", label: "Design Success" }
    }
  ], []);

  // Show case studies overview if no slug provided
  if (!slug) {
    return (
      <>
        <Helmet>
          <title>Case Studies - Brand Forge</title>
          <meta name="description" content="Explore our portfolio of transformative brand projects and digital solutions that drive measurable results." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          
          <main>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-primary text-primary-foreground">
              <div className="container mx-auto px-6 lg:px-8 text-center">
                <h1 className="text-4xl lg:text-6xl font-black mb-6">
                  Our Case Studies
                </h1>
                <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
                  Transformative brand projects that drive measurable results and create lasting impact.
                </p>
              </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-16">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {CASE_STUDIES?.map((study) => (
                    <div 
                      key={study?.id}
                      className="bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 brutalist-shadow cursor-pointer group"
                      onClick={() => navigate(`/case-study/${study?.slug}`)}
                    >
                      <div className="aspect-video bg-concrete-light overflow-hidden">
                        <img
                          src={study?.heroImage}
                          alt={study?.heroImageAlt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-bold border border-accent">
                            {study?.category}
                          </span>
                          <span className="text-muted-foreground text-sm font-medium">
                            {study?.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-black text-primary mb-3">
                          {study?.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          {study?.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            {study?.keyMetrics?.slice(0, 2)?.map((metric, index) => (
                              <div key={index} className="text-center">
                                <div className="text-lg font-black text-accent">
                                  {metric?.value}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {metric?.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          <AppIcon name="ArrowRight" size={20} className="text-accent" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-accent text-accent-foreground">
              <div className="container mx-auto px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-black mb-6">
                    Ready to Create Your Success Story?
                  </h2>
                  <p className="text-xl mb-8 opacity-90">
                    Let's discuss how we can transform your brand and drive exceptional results.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => navigate('/contact')}
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </>
    );
  }

  // Show not found if study doesn't exist
  if (slug && !currentStudy) {
    return (
      <>
        <Helmet>
          <title>Case Study Not Found - Brand Forge</title>
          <meta name="description" content="The case study you're looking for doesn't exist." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <div className="min-h-screen bg-background flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-primary mb-4">Case Study Not Found</h1>
              <Button onClick={() => navigate('/case-study')}>
                View All Case Studies
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Render individual case study
  return (
    <>
      <Helmet>
        <title>NanoFab Explorer – Case Study | Semiconductor School</title>
        <meta name="description" content="Virtual fabrication initiative that turned dense wafer theory into interactive cleanroom simulations. Learner comprehension scores rose by 178% and cleanroom safety training completion improved by 92%." />
        <meta property="og:title" content="NanoFab Explorer – Case Study | Semiconductor School" />
        <meta property="og:description" content="Hands-on virtual fabrication that made wafer science click through 3D WebGL simulations and virtual cleanroom environments." />
        <meta property="og:image" content={currentStudy?.heroImage} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <CaseStudyHero
            caseStudy={currentStudy}
            onNavigate={handleNavigation}
          />

          {/* Project Timeline */}
          <ProjectTimeline timeline={TIMELINE} />

          {/* Process Documentation */}
          <ProcessDocumentation processSteps={PROCESS_STEPS} />

          {/* Results Showcase */}
          <ResultsShowcase
            beforeAfter={beforeAfter}
            businessMetrics={businessMetrics}
            testimonial={testimonial} 
          />

          {/* Technical Specifications */}
          <TechnicalSpecs
            specifications={technicalSpecs}
            challenges={technicalChallenges}
          />

          {/* Team Credits */}
          <TeamCredits
            teamMembers={teamMembers}
            projectLead={projectLead}
          />

          {/* Related Case Studies */}
          <RelatedCaseStudies relatedStudies={relatedStudies} />

          {/* CTA Section */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-black mb-6">
                  Ready to Transform Your Career?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Join a mentor-guided path that makes semiconductors visible, practical, and industry-ready — from sand to silicon chip.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground border-2 border-accent brutalist-shadow"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => navigate('/contact')}>
                    Start Your Cohort
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    iconName="Phone"
                    iconPosition="left">
                    Schedule a Call
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground border-2 border-accent hover:bg-accent/90 transition-colors duration-300 brutalist-shadow z-50"
          aria-label="Scroll to top"
        >
          <AppIcon name="ArrowUp" size={20} className="mx-auto" />
        </button>
      </div>
    </>
  );
};

export default CaseStudyPage;