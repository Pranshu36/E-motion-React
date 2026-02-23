import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import InputField from '../../../components/formFields/InputField';
import { useTheme } from '../../../context/ThemeProvider';
import { ROUTE } from '../../../routes/route';
import { loginSchema, type LoginDataType } from '../schemas/login.schema';

export default function LoginPage() {
  const { isDark } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = () => {};

  const handleGoogleLogin = () => {};

  return (
    <div className='shadow-3xl w-full max-w-[600px] h-fit rounded-xl'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-center px-20 py-7 gap-10'
      >
        <div
          className={`${isDark ? 'text-white' : 'text-black'} mt-7 text-center`}
        >
          <h1 className='font-montserrat font-bold text-3xl'>Welcome back!</h1>
          <p className='font-montserrat text-center'>
            Please enter your details
          </p>
        </div>

        <div className='flex flex-col gap-4 w-full'>
          <InputField
            {...register('email')}
            required
            id='email'
            name='email'
            className={`bg-transparent w-full font-medium placeholder:font-medium ${
              isDark ? 'text-white' : 'text-black'
            } outline-none text-lg placeholder:text-lg border-t-0 border-x-0 px-0 border-b-2 py-6 font-montserrat rounded-none focus-visible:ring-0`}
            type='email'
            placeholder='Email'
            error={errors.email?.message}
          />
          <InputField
            {...register('password')}
            required
            id='password'
            name='password'
            className={`bg-transparent w-full font-medium placeholder:font-medium ${
              isDark ? 'text-white' : 'text-black'
            } outline-none text-lg placeholder:text-lg border-t-0 border-x-0 px-0 border-b-2 py-6 font-montserrat rounded-none focus-visible:ring-0`}
            type='password'
            placeholder='Password'
            error={errors.password?.message}
          />
          <div className='flex gap-5 justify-between'>
            <Link
              to={'/'}
              className='font-montserrat text-sm md:text-base font-medium text-gray-600  hover:text-[#01796f] hover:scale-105 transition-transform'
            >
              Forgot Password?
            </Link>
            <Link
              to={ROUTE.AUTH.SIGNUP}
              className='font-montserrat text-sm md:text-base font-medium text-gray-600  hover:text-[#01796f] hover:scale-105 transition-transform'
            >
              Not a User? Register
            </Link>
          </div>
        </div>
        <div className='text-white flex flex-col gap-3'>
          <button
            type='submit'
            className={`shadow-3xl ${
              isDark ? 'text-white' : 'text-black'
            } font-medium font-montserrat text-center rounded-xl py-3 px-[85px] hover:bg-[#01796f] hover:scale-105 transition-transform`}
          >
            Log in
          </button>
          <button
            onClick={handleGoogleLogin}
            className={`flex ${
              isDark ? 'text-white' : 'text-black'
            } items-center font-medium font-montserrat justify-center gap-3 shadow-3xl rounded-xl py-3 hover:bg-red-400 hover:scale-105 transition-transform `}
          >
            <FcGoogle />
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
