import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

export const HeaderUserButton = () => {
  return (
    <Menu>
      <MenuHandler>
        <Button className="mr-2 h-10 w-fit bg-transparent p-0 px-2 hover:bg-[#252332]">
          <div className="h-7 w-7">
            <img className="rounded-full" src={'https://ui-avatars.com/api/?name=John+Doe'} alt="user profile" />
          </div>
        </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>My profile</MenuItem>
        <MenuItem>Get help</MenuItem>
        <MenuItem>Report a bug</MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>
  );
};
