import { useTheme } from '../../../context/ThemeProvider';
import { FEATURES, type FeatureType } from '../constants/feature';

interface FeatureCardProps {
  feature: FeatureType;
}

function FeatureCard({ feature }: FeatureCardProps) {
  const { isDark } = useTheme();
  return (
    <div className='flex flex-col md:flex-row shadow-3xl gap-5 p-5 rounded-xl w-full items-center md:items-start'>
      <div className='md:w-[20vw]'>
        <img
          className='h-[8vh] z-10 md:h-[10vh] p-2 bg-black rounded-md'
          src={feature.imgUrl}
          alt={feature.lable}
        />
      </div>
      <div className=' flex text-center md:text-left flex-col gap-1'>
        <h1
          className={`${isDark ? 'text-white' : 'text-black'} font-montserrat font-semibold text-xl`}
        >
          {feature.lable}
        </h1>
        <p className='text-gray-400 font-montserrat'>{feature.description}</p>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  const { isDark } = useTheme();
  return (
    <div>
      <div className=' px-14 py-10 flex flex-col gap-7'>
        <div className='flex flex-col text-center gap-7'>
          <h1 className='text-[#739e7b] font-montserrat font-semibold'>
            FEATURES
          </h1>
          <h1
            className={`${isDark ? 'text-white' : 'text-black'} font-montserrat font-bold text-4xl`}
          >
            Discover the Features
          </h1>
          <p
            className={`${isDark ? 'text-slate-400' : 'text-black'} font-montserrat font-medium`}
          >
            Experience a seamless e-waste management system with our website.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-7'>
          {FEATURES.map((feature, index) => {
            return (
              <FeatureCard
                key={`${feature.lable} ${index}`}
                feature={feature}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
