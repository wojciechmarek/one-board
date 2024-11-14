import barsIcon from 'src/src/assets/icons/bars-tile.svg';
import calendarIcon from 'src/src/assets/icons/calendar-tile.svg';
import cloudIcon from 'src/src/assets/icons/cloud-tile.svg';
import mailIcon from 'src/src/assets/icons/mail-tile.svg';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

const mainMenuItems = [
  {
    name: 'Mail',
    link: '/mail',
    imageUrl: mailIcon,
  },
  {
    name: 'Cloud',
    link: '/cloud',
    imageUrl: cloudIcon,
  },
  {
    name: 'Calendar',
    link: '/calendar',
    imageUrl: calendarIcon,
  },
  {
    name: 'Investments',
    link: '/investments',
    imageUrl: barsIcon,
  },
];

export const SideBarIconsNavigationList = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="mx-2 flex flex-row items-center justify-between bg-transparent px-2 normal-case hover:bg-[#252332]">
          <div className="flex flex-row items-center">
            <div className="h-8 w-8">
              <img className="h-8 w-8" src={calendarIcon} alt="user profile" />
            </div>
            <span className="ml-2 text-base font-bold">Calendar</span>
          </div>
          <div className="h-6 w-6">
            <ChevronUpDownIcon />
          </div>
        </Button>
      </MenuHandler>
      <MenuList>
        {mainMenuItems.map((item) => (
          <MenuItem>{item.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
