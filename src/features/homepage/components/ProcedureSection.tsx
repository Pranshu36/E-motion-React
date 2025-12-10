import image3 from '../../../assets/dark-t.png';
import image5 from '../../../assets/procedure/buildings.png';
import image2 from '../../../assets/procedure/laptop.png';
import image1 from '../../../assets/procedure/programmer.png';
import image4 from '../../../assets/procedure/recycling.png';
import { useTheme } from '../../../context/ThemeProvider';

export default function ProcedureSection() {
  const { isDark } = useTheme();
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-14 px-16 py-10'>
        <div>
          <h1
            className={`${
              isDark ? 'text-white' : 'text-black'
            } font-bold text-4xl font-montserrat`}
          >
            How we Work
          </h1>
        </div>
        <div className='relative w-full'>
          <div className='flex flex-col md:flex-row gap-5 w-full justify-between items-center'>
            <div className='shadow-3xl z-10 bg-[#01796f] w-[35vw] md:w-[16vw] h-fit py-4 flex justify-center rounded-xl'>
              <img className='h-[10vh]' src={image1} alt='starting point' />
            </div>
            <div className='h-fit p-4 z-10'>
              <img className='h-[10vh] z-10' src={image2} alt='link between' />
            </div>
            <div className='shadow-3xl z-10 bg-[#739e7b] w-[35vw] md:w-[16vw] h-fit px-7 py-5 flex justify-center rounded-xl'>
              <img className='h-[5vh] z-10' src={image3} alt='logo' />
            </div>
            <div className='h-fit p-4 z-10'>
              <img
                className='h-[10vh] z-10'
                src={image4}
                alt='recycle symbol'
              />
            </div>
            <div className='shadow-3xl z-10 bg-[#01796f] w-[35vw] md:w-[16vw] h-fit p-4 flex justify-center rounded-xl'>
              <img className='h-[10vh]' src={image5} alt='buildings' />
            </div>
          </div>
          <div className='hidden md:block w-full h-1 bg-[#01796f] my-8 md:my-12 absolute top-0'></div>
          <div className='md:hidden w-1 h-full bg-[#01796f] my-8 md:my-12 absolute -top-8 left-1/2 transform '></div>
        </div>
        <div className='flex justify-center items-center w-[60vw] text-center'>
          <p
            className={`text-slate-400 font-semibold font-montserrat flex justify-center`}
          >
            We're the link between e-waste recycling companies and eco-conscious
            consumers. Our platform connects clients with trusted recycling
            partners, streamlining the recycling process and offering rewards
            for sustainable choices.
          </p>
        </div>
      </div>
    </div>
  );
}
