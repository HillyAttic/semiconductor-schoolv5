import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProgramDetails = ({ role, formData, onChange, error }) => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleInputChange = (field, value) => {
    onChange({ [field]: value });
  };

  const handleArrayChange = (field, value, isArray = true) => {
    if (isArray) {
      const currentArray = formData?.[field] || [];
      if (currentArray?.includes(value)) {
        onChange({ [field]: currentArray?.filter(item => item !== value) });
      } else {
        onChange({ [field]: [...currentArray, value] });
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e?.target?.files?.[0];
    if (file && file.type === 'application/pdf') {
      setResumeFile(file);
      onChange({ resume: file });
    }
  };

  const currentYear = new Date().getFullYear();
  const gradYears = Array.from({ length: 5 }, (_, i) => currentYear + i);

  // Common options
  const availabilityOptions = [
    { value: 'weekday-evening', label: 'Weekday Evening' },
    { value: 'weekend', label: 'Weekend' },
    { value: 'intensive-bootcamp', label: 'Intensive Bootcamp' }
  ];

  // Student-specific options
  const trackOptions = [
    'Digital VLSI (RTL/Verilog)',
    'Physical Design (PnR)',
    'Verification (UVM)',
    'FPGA Prototyping',
    'Embedded Systems',
    'Analog IC Design',
    'Wafer Fab & Photolithography',
    'DFT & Testing',
    'Packaging & Reliability'
  ];

  const levelOptions = [
    { value: '12th', label: '12th Grade' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'ug', label: 'Undergraduate' },
    { value: 'pg', label: 'Postgraduate' },
    { value: 'working', label: 'Working Professional' }
  ];

  const prerequisiteOptions = [
    'C/C++ basics',
    'Python basics',
    'Digital Electronics',
    'Signals & Systems'
  ];

  const toolOptions = [
    'Verilog/SystemVerilog',
    'VHDL',
    'Cadence/Innovus',
    'Synopsys/DC/PT',
    'Mentor/Calibre',
    'Vivado/Quartus',
    'KiCad/Altium'
  ];

  const hardwareOptions = [
    { value: 'personal-laptop', label: 'Personal Laptop' },
    { value: 'external-gpu', label: 'External GPU' },
    { value: 'university-lab', label: 'University Lab Access' }
  ];

  // Tutor-specific options
  const expertiseOptions = [
    'RTL Design',
    'Verification (UVM)',
    'Synthesis/STA',
    'Physical Design',
    'DFT',
    'Analog/Mixed-Signal',
    'FPGA',
    'Embedded',
    'Cleanroom/Wafer Fab',
    'Photolithography',
    'Packaging & Reliability'
  ];

  const experienceOptions = [
    { value: '1-3', label: '1-3 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const deliveryModeOptions = [
    'Online Live',
    'On-Campus (Delhi-NCR)',
    'Hybrid'
  ];

  const compensationOptions = [
    { value: '1000-2000', label: '₹1,000 - ₹2,000/hour' },
    { value: '2000-3000', label: '₹2,000 - ₹3,000/hour' },
    { value: '3000+', label: '₹3,000+/hour' },
    { value: 'discuss', label: 'Discuss' }
  ];

  const complianceOptions = [
    'Eligible to work/contract',
    'Background verification consent'
  ];

  const ChipSelector = ({ options, selected = [], field, label }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-primary">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options?.map((option) => {
          const isSelected = selected?.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleArrayChange(field, option)}
              className={`px-3 py-2 text-sm border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-accent bg-accent text-accent-foreground'
                  : 'border-concrete bg-card text-card-foreground hover:border-accent/50'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );

  const RadioSelector = ({ options, selected, field, label }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-primary">
        {label}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options?.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => handleInputChange(field, option.value)}
            className={`p-3 text-left border-2 transition-all duration-300 ${
              selected === option.value
                ? 'border-accent bg-accent/10 text-primary'
                : 'border-concrete bg-card text-card-foreground hover:border-accent/50'
            }`}
          >
            <div className="font-medium text-sm">{option.label}</div>
          </button>
        ))}
      </div>
    </div>
  );

  const CheckboxSelector = ({ options, selected = [], field, label }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-primary">
        {label}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options?.map((option) => {
          const isSelected = selected?.includes(option);
          return (
            <button
              key={option}
              type="button"
              onClick={() => handleArrayChange(field, option)}
              className={`p-3 text-left border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-accent bg-accent/10 text-primary'
                  : 'border-concrete bg-card text-card-foreground hover:border-accent/50'
              }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 border-2 ${
                  isSelected ? 'border-accent bg-accent' : 'border-concrete'
                }`}>
                  {isSelected && (
                    <Icon name="Check" size={12} className="text-accent-foreground" />
                  )}
                </div>
                <span className="text-sm font-medium">{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (!role) {
    return (
      <div className="text-center p-8">
        <Icon name="User" size={48} className="text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Please select a role first to continue.</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-primary">
          {role === 'student' ? 'Student Program Details' : 'Tutor Application Details'}
        </h2>
        <p className="text-muted-foreground">
          {role === 'student'
            ? 'Tell us about your background and learning goals'
            : 'Share your expertise and teaching experience'
          }
        </p>
      </div>

      {role === 'student' ? (
        // Student Form
        <div className="space-y-6">
          <ChipSelector
            label="Select Tracks (Choose all that interest you)"
            options={trackOptions}
            selected={formData?.tracks || []}
            field="tracks"
          />
          {error?.tracks && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.tracks}</span>
            </div>
          )}

          <RadioSelector
            label="Current Level"
            options={levelOptions}
            selected={formData?.currentLevel}
            field="currentLevel"
          />
          {error?.currentLevel && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.currentLevel}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Graduation/Pass-out Year
            </label>
            <select
              value={formData?.gradYear || ''}
              onChange={(e) => handleInputChange('gradYear', e.target.value)}
              className="w-full p-3 border-2 border-concrete bg-background text-foreground focus:border-accent focus:outline-none"
            >
              <option value="">Select year</option>
              {gradYears?.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {error?.gradYear && (
              <div className="flex items-center space-x-2 text-error text-sm">
                <Icon name="AlertCircle" size={16} />
                <span>{error.gradYear}</span>
              </div>
            )}
          </div>

          <CheckboxSelector
            label="Prerequisites (What do you know?)"
            options={prerequisiteOptions}
            selected={formData?.prerequisites || []}
            field="prerequisites"
          />

          <ChipSelector
            label="Tools Exposure (Select tools you know)"
            options={toolOptions}
            selected={formData?.tools || []}
            field="tools"
          />

          <RadioSelector
            label="Hardware Access"
            options={hardwareOptions}
            selected={formData?.hardwareAccess}
            field="hardwareAccess"
          />

          <RadioSelector
            label="Availability"
            options={availabilityOptions}
            selected={formData?.availability}
            field="availability"
          />
          {error?.availability && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.availability}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Preferred Cohort Start Date
            </label>
            <input
              type="date"
              value={formData?.cohortStart || ''}
              onChange={(e) => handleInputChange('cohortStart', e.target.value)}
              className="w-full p-3 border-2 border-concrete bg-background text-foreground focus:border-accent focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData?.scholarship || false}
                onChange={(e) => handleInputChange('scholarship', e.target.checked)}
                className="w-4 h-4 border-2 border-concrete bg-background text-accent focus:ring-accent"
              />
              <span className="text-sm font-semibold text-primary">
                I need scholarship/financial aid
              </span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Portfolio/Project Links (Optional)
            </label>
            <textarea
              value={formData?.portfolioLinks || ''}
              onChange={(e) => handleInputChange('portfolioLinks', e.target.value)}
              placeholder="GitHub, LinkedIn, project links, etc."
              rows={3}
              className="w-full p-3 border-2 border-concrete bg-background text-foreground focus:border-accent focus:outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Upload Resume (PDF)
            </label>
            <div className="border-2 border-dashed border-concrete p-6 text-center">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <Icon name="Upload" size={24} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">PDF files only</p>
              </label>
            </div>
          </div>
        </div>
      ) : (
        // Tutor Form
        <div className="space-y-6">
          <ChipSelector
            label="Areas of Expertise"
            options={expertiseOptions}
            selected={formData?.expertise || []}
            field="expertise"
          />
          {error?.expertise && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.expertise}</span>
            </div>
          )}

          <RadioSelector
            label="Years of Industry Experience"
            options={experienceOptions}
            selected={formData?.experience}
            field="experience"
          />
          {error?.experience && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.experience}</span>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Teaching Experience/Institutions
            </label>
            <textarea
              value={formData?.teachingHistory || ''}
              onChange={(e) => handleInputChange('teachingHistory', e.target.value)}
              placeholder="Previous teaching experience, institutions, courses taught..."
              rows={3}
              className="w-full p-3 border-2 border-concrete bg-background text-foreground focus:border-accent focus:outline-none resize-none"
            />
          </div>

          <ChipSelector
            label="Tool Proficiency"
            options={toolOptions}
            selected={formData?.toolProficiency || []}
            field="toolProficiency"
          />

          <RadioSelector
            label="Availability"
            options={availabilityOptions}
            selected={formData?.availability}
            field="availability"
          />
          {error?.availability && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.availability}</span>
            </div>
          )}

          <CheckboxSelector
            label="Preferred Delivery Mode"
            options={deliveryModeOptions}
            selected={formData?.deliveryMode || []}
            field="deliveryMode"
          />

          <RadioSelector
            label="Expected Compensation"
            options={compensationOptions}
            selected={formData?.compensation}
            field="compensation"
          />

          <CheckboxSelector
            label="Legal & Compliance"
            options={complianceOptions}
            selected={formData?.compliance || []}
            field="compliance"
          />

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Portfolio/Professional Links
            </label>
            <textarea
              value={formData?.links || ''}
              onChange={(e) => handleInputChange('links', e.target.value)}
              placeholder="LinkedIn, Google Scholar, GitHub, portfolio..."
              rows={3}
              className="w-full p-3 border-2 border-concrete bg-background text-foreground focus:border-accent focus:outline-none resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary">
              Upload Resume/Certifications (PDF)
            </label>
            <div className="border-2 border-dashed border-concrete p-6 text-center">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
                id="resume-upload"
              />
              <label htmlFor="resume-upload" className="cursor-pointer">
                <Icon name="Upload" size={24} className="text-muted-foreground mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">
                  {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-muted-foreground mt-1">PDF files only</p>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Info Note Card */}
      <div className="p-4 bg-concrete-light border-2 border-concrete">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-accent mt-0.5 flex-shrink-0" />
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-primary mb-1">Industry Tools & Labs</p>
            <p>
              Select tools you know or want to learn. Access to university labs or cleanroom is a plus but not mandatory for enrollment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
