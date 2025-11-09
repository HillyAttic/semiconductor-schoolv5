import React from 'react';
import Icon from '../../../components/AppIcon';

const RoleSelector = ({ value, onChange, error }) => {
  const roles = [
    {
      id: 'student',
      title: 'Student Enrollment',
      description: 'Join a cohort. Learn chip design & fabrication with real tools.',
      subtext: 'Beginner-friendly tracks available.',
      icon: 'GraduationCap',
      popular: true
    },
    {
      id: 'tutor',
      title: 'Tutor Onboarding',
      description: 'Teach VLSI, RTL, PD, Verification, or Cleanroom ops.',
      subtext: 'Industry experience preferred.',
      icon: 'Users',
      popular: false
    }
  ];

  const handleSelection = (roleId) => {
    onChange(roleId);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-primary">
          Choose your role
        </label>
        <p className="text-sm text-muted-foreground">
          Select whether you want to enroll as a student or apply to become a tutor.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {roles?.map((role) => {
          const isSelected = value === role?.id;

          return (
            <button
              key={role?.id}
              type="button"
              onClick={() => handleSelection(role?.id)}
              className={`relative p-6 text-left border-2 transition-all duration-300 group ${
                isSelected
                  ? 'border-accent bg-accent/10 text-primary' :'border-concrete bg-card hover:border-accent/50 text-card-foreground hover:bg-concrete-light/50'
              }`}
            >
              {/* Popular Badge */}
              {role?.popular && (
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-bold bg-accent text-accent-foreground">
                    POPULAR
                  </span>
                </div>
              )}
              {/* Selection Indicator */}
              <div className={`absolute top-4 left-4 w-6 h-6 border-2 transition-all duration-300 ${
                isSelected
                  ? 'border-accent bg-accent' :'border-concrete bg-transparent group-hover:border-accent/50'
              }`}>
                {isSelected && (
                  <Icon
                    name="Check"
                    size={16}
                    className="text-accent-foreground absolute top-0.5 left-0.5"
                  />
                )}
              </div>
              {/* Content */}
              <div className="ml-10">
                <div className="flex items-center space-x-3 mb-2">
                  <Icon
                    name={role?.icon}
                    size={20}
                    className={isSelected ? 'text-accent' : 'text-muted-foreground'}
                  />
                  <h3 className="font-semibold text-base">
                    {role?.title}
                  </h3>
                </div>
                <p className="text-sm opacity-80 mb-1">
                  {role?.description}
                </p>
                <p className="text-xs opacity-60">
                  {role?.subtext}
                </p>
              </div>
            </button>
          );
        })}
      </div>
      {/* Selected Summary */}
      {value && (
        <div className="p-4 bg-concrete-light border-2 border-concrete">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="CheckCircle" size={16} className="text-accent" />
            <span className="text-sm font-semibold text-primary">
              Selected Role
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground">
              {roles?.find(r => r?.id === value)?.title}
            </span>
          </div>
        </div>
      )}
      {error && (
        <div className="flex items-center space-x-2 text-error text-sm">
          <Icon name="AlertCircle" size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default RoleSelector;
