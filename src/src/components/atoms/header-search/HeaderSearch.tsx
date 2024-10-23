import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';

export const HeaderSearch = () => {
  return (
    <Button className="h-10 w-full flex-grow rounded-xl bg-transparent px-2 py-0 text-sm normal-case text-white hover:bg-[#252332]">
      <div className="flex flex-row items-center gap-2">
        <div className="mx-1 h-5 w-5">
          <MagnifyingGlassIcon />
        </div>
        <p className="text-sm font-normal text-blue-gray-200">Search for a message</p>
      </div>
    </Button>
  );
};
