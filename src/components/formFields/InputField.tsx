import type { ComponentProps } from 'react';

import { useTheme } from '../../context/ThemeProvider';

interface InputFieldProps extends ComponentProps<'input'> {
  label?: string;
  required?: boolean;
  error?: string;
}

export default function InputField({
  label,
  required,
  error,
  ...props
}: InputFieldProps) {
  const { isDark } = useTheme();

  return (
    <div className='w-full flex flex-col gap-2'>
      {label && (
        <p
          className={`${
            isDark ? 'text-white' : 'text-black'
          } font-semibold font-montserrat`}
        >
          {label} {required && <span className='text-red-500'>*</span>}
        </p>
      )}
      <input
        className={`bg-transparent border-2 w-full rounded-lg p-4 font-montserrat font-medium ${
          isDark ? 'text-white' : 'text-black'
        }`}
        {...props}
      />
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}
