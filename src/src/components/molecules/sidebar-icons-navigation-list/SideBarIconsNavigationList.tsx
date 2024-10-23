import barsIcon from 'src/src/assets/icons/bars-tile.svg';
import calendarIcon from 'src/src/assets/icons/calendar-tile.svg';
import cloudIcon from 'src/src/assets/icons/cloud-tile.svg';
import mailIcon from 'src/src/assets/icons/mail-tile.svg';
import SideBarIconLink from '../../atoms/sidebar-icon-link/SideBarIconLink';

const mainMenuItems = [
  {
    link: '/mail',
    imageUrl: mailIcon,
  },
  {
    link: '/cloud',
    imageUrl: cloudIcon,
    isActive: true,
  },
  {
    link: '/calendar',
    imageUrl: calendarIcon,
  },
  {
    link: '/investments',
    imageUrl: barsIcon,
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
