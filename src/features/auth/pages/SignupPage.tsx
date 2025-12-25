import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import InputField from '../../../components/formFields/InputField';
import { useTheme } from '../../../context/ThemeProvider';
import { ROUTE } from '../../../routes/route';
import { signupSchema, type SignupDataType } from '../schemas/signup.schema';

export default function SignupPage() {
  const { isDark } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDataType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const onSubmit = () => {};

  const handleGoogleSignup = () => {};

  return (
    <div className='shadow-3xl w-full max-w-[600px] h-fit rounded-xl'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center px-20 py-7 gap-10'
      >
        <div
          className={`${isDark ? 'text-white' : 'text-black'} mt-7 text-center`}
        >
          <h1 className='font-montserrat font-bold text-2xl md:text-3xl'>
            Register with E-Motion
          </h1>
          <p className='font-montserrat text-center'>
            Please fill your details to register
          </p>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <InputField
            {...register('name')}
            required
            type='text'
            placeholder='Name'
            id='name'
            name='name'
            className={`bg-transparent w-full font-medium placeholder:font-medium ${
              isDark ? 'text-white' : 'text-black'
            } outline-none border-b-2 py-4 font-montserrat`}
            error={errors.name?.message}
          />
          <InputField
            {...register('email')}
            required
            type='email'
            placeholder='Email'
            id='email'
            name='email'
            className={`bg-transparent w-full font-medium placeholder:font-medium ${
              isDark ? 'text-white' : 'text-black'
            } outline-none border-b-2 py-4 font-montserrat`}
            error={errors.email?.message}
          />
          <InputField
            {...register('password')}
            required
            type='password'
            placeholder='Password'
            id='password'
            name='password'
            className={`bg-transparent w-full font-medium placeholder:font-medium ${
              isDark ? 'text-white' : 'text-black'
            } outline-none border-b-2 py-4 font-montserrat`}
            error={errors.password?.message}
          />
          <InputField
            {...register('confirmPassword')}
            required
            type='password'
            placeholder='Confirm Password'
            id='confirmPassword'
            name='confirmPassword'
            className={`bg-transparent w-full font-medium placeholder:font-medium ${
              isDark ? 'text-white' : 'text-black'
            } outline-none border-b-2 py-4 font-montserrat`}
            error={errors.confirmPassword?.message}
          />
          <div className='flex gap-5'>
            <Link
              to={ROUTE.AUTH.LOGIN}
              className='font-montserrat font-medium text-gray-600  hover:text-[#01796f] hover:scale-105 transition-transform'
            >
              Already a User?
            </Link>
          </div>
        </div>
        <div
          className={`${isDark ? 'text-white' : 'text-black'} flex flex-col gap-3`}
        >
          <button
            type='submit'
            className='shadow-3xl font-medium font-montserrat text-center rounded-xl py-3 px-[85px] hover:bg-[#01796f] hover:scale-105 transition-transform'
          >
            Sign up
          </button>
          <button
            onClick={handleGoogleSignup}
            className='flex items-center font-medium font-montserrat justify-center gap-3 shadow-3xl rounded-xl py-3 hover:bg-red-400 hover:scale-105 transition-transform '
          >
            <FcGoogle />
            Sign up with Google
          </button>
        </div>
      </form>
    </div>
  );
}
