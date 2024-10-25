import { ArrowPathIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';
import { Outlet } from 'react-router';

export const MailPage = () => {
  return (
    <div className="h-full rounded-tl-3xl border-l-2 border-t-2 border-[#252332]">
      <div className="flex h-20 items-center justify-between border-b-2 border-[#252332] px-5">
        <div className="flex-ro flex items-center gap-2">
          <Button size="sm" className="my-auto h-10 w-10 bg-transparent p-2 hover:bg-[#252332]">
            <div className="mx-auto h-5 w-5">
              <ChevronLeftIcon className="stroke-blue-gray-50" />
            </div>
          </Button>
          <Button size="sm" className="my-auto h-10 w-10 bg-transparent p-2 hover:bg-[#252332]">
            <div className="mx-auto h-5 w-5">
              <ChevronRightIcon className="stroke-blue-gray-50" />
            </div>
          </Button>
          <Button size="sm" className="my-auto h-10 w-10 bg-transparent p-2 hover:bg-[#252332]">
            <div className="mx-auto h-5 w-5">
              <ArrowPathIcon className="stroke-blue-gray-50" />
            </div>
          </Button>
          <h4 className="ml-2 text-sm">1-100 of of 2133</h4>
        </div>
        <Button className="py3 flex items-center gap-1 bg-[#4895EF] px-3 normal-case">
          <div className="mx-auto h-4 w-4">
            <PlusIcon className="stroke-blue-gray-50" />
          </div>
          <p className="relative top-[1px]">Compose</p>
        </Button>
      </div>
      <Outlet />
    </div>
  );
};
