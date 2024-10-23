import { Outlet } from 'react-router';
import Header from 'src/src/components/app/Header';
import { SideBar } from 'src/src/components/app/SideBar';

export const AppLayout = () => {
  return (
    <body className="flex flex-row bg-[#323232] text-teal-200">
      <SideBar />
      <main className="flex-grow">
        <Header />
        <Outlet />
      </main>
    </body>
  );
};
