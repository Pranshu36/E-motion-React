import { useTheme } from '../../../context/ThemeProvider';
import { FAQS, type FaqType } from '../constants/faq';

interface FaqCardProps {
  faq: FaqType;
}

function FaqCard({ faq }: FaqCardProps) {
  const { isDark } = useTheme();
  return (
    <div className='flex flex-col gap-3'>
      <h2
        className={`font-bold text-lg font-montserrat ${isDark ? 'text-white' : 'text-black'}`}
      >
        {faq.question}
      </h2>
      <p className='font-montserrat text-slate-400 font-medium'>{faq.answer}</p>
    </div>
  );
}

export default function FaqSection() {
  const { isDark } = useTheme();

  return (
    <div className='flex flex-col md:flex-row px-14 pt-4 pb-7 gap-7'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[#739e7b] font-montserrat font-semibold'>FAQ</h1>
        <h1
          className={`text-3xl leading-normal font-montserrat font-bold ${isDark ? 'text-white' : 'text-black'}`}
        >
          Common Questions
        </h1>
        <p className='font-montserrat text-slate-400 font-medium'>
          Here are some of the most common questions that we get.
        </p>
      </div>
      <div className='flex flex-col gap-5'>
        {FAQS.map((faq, index) => {
          return <FaqCard key={`${faq.question} ${index}`} faq={faq} />;
        })}
      </div>
    </div>
  );
}
