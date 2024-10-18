import { BellIcon, StarIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';

export const HeaderButtons = () => {
  return (
    <div className="flex flex-row items-center gap-1">
      <Button size="sm" className="my-auto h-10 w-10 bg-transparent p-2 hover:bg-[#252332]">
        <div className="mx-auto h-5 w-5">
          <StarIcon className="stroke-blue-gray-50" />
        </div>
      </Button>
      <Button size="sm" className="my-auto h-10 w-10 bg-transparent p-2 hover:bg-[#252332]">
        <div className="mx-auto h-5 w-5">
          <BellIcon className="stroke-blue-gray-50" />
        </div>
      </Button>
    </div>
  );
};
