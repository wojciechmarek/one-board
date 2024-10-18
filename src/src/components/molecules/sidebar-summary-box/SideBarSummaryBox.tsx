import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Progress } from '@material-tailwind/react';

export const SideBarSummaryBox = () => {
  return (
    <div className="mx-6 mb-6 h-36 rounded-2xl bg-gradient-to-tr from-[#6e4fe4] to-[#ac73ec] p-4">
      <h6 className="text-xs font-bold text-white">Cloud storage</h6>
      <Progress value={50} color="amber" size="sm" className="mt-2" />
      <h6 className="mt-2 text-[0.5rem] font-bold text-white">2.4 GiB of 5 GiB used</h6>
      <div className="mt-2 flex flex-row items-center gap-2 rounded-xl bg-white px-2 py-3">
        <div className="h-6 w-6">
          <CheckCircleIcon className="stroke-black" />
        </div>
        <div>
          <p className="text-xs font-bold text-black">File syncing</p>
          <p className="text-xs text-blue-gray-800">Up to date</p>
        </div>
      </div>
    </div>
  );
};
