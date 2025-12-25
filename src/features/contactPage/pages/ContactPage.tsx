import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import InputField from '../../../components/formFields/InputField';
import TextAreaField from '../../../components/formFields/TextAreaField';
import { useTheme } from '../../../context/ThemeProvider';
import {
  contactFormSchem,
  type ContactFormType,
} from '../schema/contact.schema';

export default function ContactPage() {
  const { isDark } = useTheme();

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchem),
    defaultValues: {
      email: '',
      name: '',
      subject: '',
      description: '',
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    register,
    formState: { isDirty, errors },
  } = form;

  const onSubmit = () => {};

  return (
    <div className='flex flex-col items-center my-8 px-7 gap-5'>
      <h1
        className={`${
          isDark ? 'text-white' : 'text-black'
        } font-montserrat font-bold text-2xl drop-shadow-sm`}
      >
        Contact Us
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadow-3xl lg:w-[50vw] rounded-xl py-8 px-7 flex flex-col gap-7'
      >
        <div className='flex flex-col gap-1'>
          <h1
            className={`${
              isDark ? 'text-white' : 'text-black'
            } text-3xl font-montserrat  font-bold`}
          >
            Contact our Team
          </h1>
          <p className='text-slate-400 text-lg font-montserrat font-medium'>
            Fill up the Details given below and click on the submit
          </p>
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <div className='flex flex-row w-full gap-5'>
            <InputField
              {...register('email')}
              required
              label='Email'
              id='email'
              name='email'
              placeholder='Enter Your Email'
              error={errors.email?.message}
            />
            <InputField
              {...register('name')}
              required
              label='Name'
              id='name'
              name='name'
              placeholder='Enter Your Name'
              error={errors.name?.message}
            />
          </div>
          <InputField
            {...register('subject')}
            required
            label='Subject'
            id='subject'
            name='subject'
            placeholder='Enter subject'
            error={errors.subject?.message}
          />
          <TextAreaField
            {...register('description')}
            required
            label='Description'
            id='description'
            name='description'
            placeholder='Enter Your Query'
          />
          <button
            type='submit'
            className={`${
              isDark ? 'text-white' : 'text-black'
            } self-start shadow-3xl rounded-lg p-4 font-montserrat font-semibold hover:bg-[#01796f] hover:scale-105 transition-transform`}
            disabled={!isDirty}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
