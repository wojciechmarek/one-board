import { useState } from 'react';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { Button, Input, Typography } from '@material-tailwind/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { account } from '../../../api/app-write';

import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import * as yup from 'yup';

type LoginFormInputs = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email('E-mail has wrong format').required('E-mail address is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(128, 'Password must be at less than 128 characters')
    .required('Password is required'),
});

export const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);
  const [isSingInButtonLoading, setIsSingInButtonLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      email: 'test@user.com',
      password: 'TestUser',
    },
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsSingInButtonLoading(true);

    let session = null;

    try {
      session = await account.createEmailPasswordSession(data.email, data.password);
    } catch (error) {
      setIsSingInButtonLoading(false);
      setValue('password', '');

      toast.error('Login failed' + error);
    }

    if (session) {
      setIsSingInButtonLoading(false);
      navigate('/dashboard');
    }
  };

  return (
    <section className="grid h-screen">
      <div className="w-96 place-self-center rounded-xl bg-white p-8 text-teal-200">
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign In
        </Typography>
        <form className="mx-auto text-left" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6">
            <label htmlFor="email">
              <Typography className="block text-xs font-bold text-gray-900">
                E-mail <span className="text-red-500">*</span>
              </Typography>
            </label>
            <Input
              {...register('email')}
              error={!!errors.email?.message}
              type="email"
              placeholder="Email Address"
              className="mt-1 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden',
              }}
              containerProps={{ className: 'min-w-[100px]' }}
            />

            <Typography placeholder={undefined} color="red" variant="small" className="mt-2 text-xs text-red-500">
              {errors.email?.message}
            </Typography>
          </div>
          <div className="mt-4">
            <label htmlFor="password">
              <Typography className="block text-xs font-bold text-gray-900">
                Password <span className="text-red-500">*</span>
              </Typography>
            </label>

            <Input
              {...register('password')}
              error={!!errors.password?.message}
              type={passwordShown ? 'text' : 'password'}
              placeholder="Password"
              className="mt-1 !border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: 'hidden',
              }}
              containerProps={{ className: 'min-w-[100px]' }}
              icon={
                <i onClick={togglePasswordVisibility}>
                  {passwordShown ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
                </i>
              }
            />
            <Typography placeholder={undefined} variant="small" className="mt-2 text-xs text-red-500">
              {errors.password?.message}
            </Typography>
            <div className="mt-2 flex justify-start">
              <Link to={'/remember-password'} className="flex justify-start text-xs text-blue-600">
                Forgot password?
              </Link>
            </div>
          </div>
          <Button
            loading={isSingInButtonLoading}
            type="submit"
            placeholder={undefined}
            color="black"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign in
          </Button>

          <Button
            placeholder={undefined}
            variant="outlined"
            size="lg"
            className="mt-2 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img src={`https://www.material-tailwind.com/logos/logo-google.png`} alt="google" className="h-6 w-6" />{' '}
            sign in with google
          </Button>
          <Typography placeholder={undefined} variant="small" color="gray" className="mt-6 text-center text-xs">
            Not registered?{' '}
            <Link to={'/remember-password'} className="text-xs text-blue-600">
              Create account
            </Link>
          </Typography>
        </form>
      </div>
    </section>
  );
};
