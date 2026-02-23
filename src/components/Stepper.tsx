import { useTheme } from '../context/ThemeProvider';

interface StepperProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
  variant?: 'primary' | 'secondary';
}

export default function Stepper({
  steps,
  currentStep,
  onStepClick,
  variant = 'primary',
}: StepperProps) {
  const { isDark } = useTheme();

  const isCompleted = (stepIndex: number) => stepIndex < currentStep - 1;
  const isActive = (stepIndex: number) => stepIndex === currentStep - 1;

  const getStepStyles = (stepIndex: number) => {
    const baseClasses =
      'w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300';

    if (variant === 'primary') {
      if (isCompleted(stepIndex)) {
        return `${baseClasses} ${
          isDark ? 'bg-[#01796f] text-white' : 'bg-[#01796f] text-white'
        }`;
      } else if (isActive(stepIndex)) {
        return `${baseClasses} ${
          isDark
            ? 'bg-[#01796f] text-white ring-4 ring-[#01796f]/30'
            : 'bg-[#01796f] text-white ring-4 ring-[#01796f]/30'
        }`;
      } else {
        return `${baseClasses} ${
          isDark
            ? 'bg-gray-700 text-gray-400 border border-gray-600'
            : 'bg-gray-200 text-gray-500 border border-gray-300'
        }`;
      }
    }

    // Secondary variant (alternative colors)
    if (isCompleted(stepIndex)) {
      return `${baseClasses} ${
        isDark ? 'bg-teal-600 text-white' : 'bg-teal-500 text-white'
      }`;
    } else if (isActive(stepIndex)) {
      return `${baseClasses} ${
        isDark
          ? 'bg-teal-600 text-white ring-4 ring-teal-600/30'
          : 'bg-teal-500 text-white ring-4 ring-teal-500/30'
      }`;
    } else {
      return `${baseClasses} ${
        isDark
          ? 'bg-gray-700 text-gray-400 border border-gray-600'
          : 'bg-gray-200 text-gray-500 border border-gray-300'
      }`;
    }
  };

  const getLineStyles = (stepIndex: number) => {
    const isStepCompleted = stepIndex < currentStep - 1;
    return `h-1 flex-1 mx-2 transition-all duration-300 ${
      isStepCompleted
        ? variant === 'primary'
          ? isDark
            ? 'bg-[#01796f]'
            : 'bg-[#01796f]'
          : isDark
            ? 'bg-teal-600'
            : 'bg-teal-500'
        : isDark
          ? 'bg-gray-700'
          : 'bg-gray-300'
    }`;
  };

  return (
    <div className='w-full py-8'>
      <div className='flex items-center justify-between max-w-4xl mx-auto px-4'>
        {steps.map((step, index) => (
          <div key={index} className='flex items-center flex-1'>
            {/* Step Circle */}
            <button
              onClick={() => onStepClick?.(index)}
              disabled={!onStepClick}
              className={`${getStepStyles(index)} ${
                onStepClick ? 'cursor-pointer hover:scale-110' : ''
              } flex-shrink-0`}
              title={step}
            >
              {isCompleted(index) ? (
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              ) : (
                <span>{index + 1}</span>
              )}
            </button>

            {/* Step Label */}
            <div className='ml-2 min-w-max'>
              <p
                className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                  isActive(index) || isCompleted(index)
                    ? variant === 'primary'
                      ? isDark
                        ? 'text-[#01796f]'
                        : 'text-[#01796f]'
                      : isDark
                        ? 'text-teal-500'
                        : 'text-teal-600'
                    : isDark
                      ? 'text-gray-400'
                      : 'text-gray-600'
                }`}
              >
                {step}
              </p>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className={getLineStyles(index)} />
            )}
          </div>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className='mt-6 max-w-4xl mx-auto px-4'>
        <div
          className={`h-1 rounded-full overflow-hidden ${
            isDark ? 'bg-gray-700' : 'bg-gray-200'
          }`}
        >
          <div
            className={`h-full transition-all duration-500 ${
              variant === 'primary'
                ? 'bg-gradient-to-r from-[#01796f] to-teal-400'
                : 'bg-gradient-to-r from-teal-500 to-cyan-400'
            }`}
            style={{
              width: `${(currentStep / steps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
