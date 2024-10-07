import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <body className="bg-[#242424] text-teal-200">
      <Outlet />
    </body>
  );
};
