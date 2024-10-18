import { CircleStackIcon, ClockIcon, Cog6ToothIcon, ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { SideBarNavigationLink } from '../../atoms/sidebar-navigation-link/SideBarNavigationLink';

const secondaryMenuItems = [
  { name: 'Overview', icon: <Squares2X2Icon className="stroke-white" />, link: '/portfolio' },
  { name: 'Assets', icon: <CircleStackIcon className="stroke-white" />, link: 'portfolio/assets' },
  { name: 'Transactions', icon: <ListBulletIcon className="stroke-white" />, link: 'portfolio/transactions' },
  { name: 'History', icon: <ClockIcon className="stroke-white" />, link: 'portfolio/history' },
  { name: 'Settings', icon: <Cog6ToothIcon className="stroke-white" />, link: 'portfolio/settings' },
];

export const SideBarNavigationList = () => {
  return (
    <nav className="mt-3 flex flex-grow flex-col gap-1 px-2">
      {secondaryMenuItems.map((item) => (
        <SideBarNavigationLink {...item} />
      ))}
    </nav>
  );
};
