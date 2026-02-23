import { useTheme } from '../context/ThemeProvider';

interface LoaderProps {
  isPartial?: boolean;
}

export default function Loader({ isPartial = false }: LoaderProps) {
  const { isDark } = useTheme();

  return (
    <div
      className={`${isPartial ? 'w-full h-full' : 'fixed'} inset-0 flex items-center justify-center backdrop-blur-sm z-50 ${
        isDark ? 'bg-black/20' : 'bg-white/20'
      }`}
    >
      <div className='flex flex-col items-center gap-6'>
        {/* Animated Spinner */}
        <div className='relative w-16 h-16'>
          <div
            className={`absolute inset-0 rounded-full border-4 border-transparent border-t-[#01796f] border-r-[#01796f] animate-spin`}
          ></div>
          <div
            className={`absolute inset-2 rounded-full border-2 border-transparent border-b-[#01796f] animate-spin`}
            style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
