import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';

export const SideBarHamburgerButton = () => {
  return (
    <Button size="sm" className="relative left-2 my-auto bg-transparent p-2 hover:bg-[#252332]">
      <div className="h-6 w-6">
        <Bars3Icon className="stroke-blue-gray-50" />
      </div>
    </Button>
  );
};
