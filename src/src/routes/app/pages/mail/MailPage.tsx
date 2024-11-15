import { Outlet } from 'react-router';

export const MailPage = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <Outlet />
    </div>
  );
};
