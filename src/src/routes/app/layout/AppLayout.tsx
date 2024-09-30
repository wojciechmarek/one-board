import { Button, Collapse, IconButton, Navbar, Typography } from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router';
import { account } from '../../../api/app-write';

type Props = {};

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography placeholder={undefined} as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link to={'/dashboard'} className="flex items-center hover:text-blue-500 transition-colors">
          Dashboard
        </Link>
      </Typography>
      <Typography placeholder={undefined} as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link to={'/crud-list'} className="flex items-center hover:text-blue-500 transition-colors">
          Crud list
        </Link>
      </Typography>
      <Typography placeholder={undefined} as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <Link to={'/functions'} className="flex items-center hover:text-blue-500 transition-colors">
          Functions
        </Link>
      </Typography>
    </ul>
  );
}

export const AppLayout = (props: Props) => {
  const [openNav, setOpenNav] = useState(false);

  const navigate = useNavigate();

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleOnAccountClick = () => {
    navigate('/profile');
  };

  const handleOnLogOutClick = async () => {
    await account.deleteSession('current');
    navigate('/login');
  };
  return (
    <>
      <Navbar placeholder={undefined} className="mx-auto max-w-screen-xl px-6 py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to={'/'}>
            <Typography placeholder={undefined} as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5">
              App Write Demo
            </Typography>
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="flex items-center gap-x-1">
            <Button
              placeholder={undefined}
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
              onClick={handleOnAccountClick}
            >
              <span>Account</span>
            </Button>
            <Button
              placeholder={undefined}
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={handleOnLogOutClick}
            >
              <span>Log out</span>
            </Button>
          </div>
          <IconButton
            placeholder={undefined}
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>
      <main className="mx-auto max-w-screen-xl px-6 py-3">
        <Outlet />
      </main>
    </>
  );
};
