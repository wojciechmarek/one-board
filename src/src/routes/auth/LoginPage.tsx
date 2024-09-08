import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";
import { account } from "../../api/app-write";
import { useNavigate } from "react-router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type Props = {};

type LoginFormInputs = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email("wrong format").required("required"),
  password: yup.string().min(8).max(32).required("required"),
});

const LoginPage = (props: Props) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const [isSingInButtonLoading, setIsSingInButtonLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsSingInButtonLoading(true);

    let session = null;

    try {
      session = await account.createEmailPasswordSession(
        data.email,
        data.password
      );
    } catch (error) {
      setIsSingInButtonLoading(false);
      setValue("password", "");

      alert(JSON.stringify(error));
    }

    if (session) {
      setIsSingInButtonLoading(false);
      navigate("/dashboard");
      return;
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography
          placeholder={undefined}
          variant="h3"
          color="blue-gray"
          className="mb-2"
        >
          Sign In
        </Typography>
        <Typography
          placeholder={undefined}
          className="mb-16 text-gray-600 font-normal text-[18px]"
        >
          Enter your email and password to sign in
        </Typography>
        <form
          className="mx-auto max-w-[24rem] text-left"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                placeholder={undefined}
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              {...register("email")}
              error={!!errors.email?.message}
              crossOrigin={undefined}
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
            />
            <Typography
              placeholder={undefined}
              color="red"
              variant="small"
              className="font-medium"
            >
              {errors.email?.message}
            </Typography>
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                placeholder={undefined}
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              {...register("password")}
              error={!!errors.password?.message}
              crossOrigin={undefined}
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
            />
            <Typography
              placeholder={undefined}
              color="red"
              variant="small"
              className="font-medium"
            >
              {errors.password?.message}
            </Typography>
          </div>
          <Button
            loading={isSingInButtonLoading}
            type="submit"
            placeholder={undefined}
            color="gray"
            size="lg"
            className="mt-6"
            fullWidth
          >
            sign in
          </Button>
          <div className="!mt-4 flex justify-end">
            <Typography
              placeholder={undefined}
              as="a"
              href="#"
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              Forgot password
            </Typography>
          </div>
          <Button
            placeholder={undefined}
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>
          <Typography
            placeholder={undefined}
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            Not registered?{" "}
            <a href="#" className="font-medium text-gray-900">
              Create account
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
