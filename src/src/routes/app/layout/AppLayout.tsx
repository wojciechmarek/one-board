import { Outlet } from 'react-router';
import { Header, Sidebar } from 'src/src/components/organisms';

export const AppLayout = () => {
  return (
    <body className="flex flex-row bg-[#1c1a25] text-teal-200">
      <Sidebar />
      <main className="flex-grow">
        <Header />
        <Outlet />
      </main>
    </body>
  );
};
