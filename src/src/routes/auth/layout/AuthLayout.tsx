import { Outlet } from 'react-router';

export const AuthLayout = () => {
  return (
    <body className="bg-[#13121a] text-teal-200">
      <Outlet />
    </body>
  );
};
