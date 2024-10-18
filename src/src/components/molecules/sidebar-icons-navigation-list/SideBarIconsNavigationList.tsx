import aiIcon from 'src/src/assets/icons/icons8-ai-64.png';
import calendarIcon from 'src/src/assets/icons/icons8-calendar-64.png';
import chartIcon from 'src/src/assets/icons/icons8-chart-64.png';
import cryptoIcon from 'src/src/assets/icons/icons8-crypto-64.png';
import moneyIcon from 'src/src/assets/icons/icons8-money-64.png';
import SideBarIconLink from '../../atoms/sidebar-icon-link/SideBarIconLink';

const mainMenuItems = [
  {
    link: '/portfolio',
    imageUrl: moneyIcon,
  },
  {
    link: '/dashboard',
    imageUrl: aiIcon,
    isActive: true,
  },
  {
    link: '/dashboard',
    imageUrl: calendarIcon,
  },
  {
    link: '/dashboard',
    imageUrl: chartIcon,
  },
  {
    link: '/dashboard',
    imageUrl: cryptoIcon,
  },
];

export const SideBarIconsNavigationList = () => {
  return (
    <nav className="w-16 border-r-2 border-[#252332]">
      {mainMenuItems.map((item) => (
        <SideBarIconLink {...item} />
      ))}
    </nav>
  );
};
