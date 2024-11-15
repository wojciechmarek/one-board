import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Progress } from '@material-tailwind/react';

export const SidebarSummaryBox = () => {
  return (
    <div className="mx-6 mb-6 flex h-36 flex-col justify-between rounded-2xl bg-gradient-to-br from-[#F72585] to-[#4895EF] p-3">
      <div>
        <h6 className="text-sm font-bold text-white">Email messages</h6>
        <Progress value={50} color="amber" size="sm" className="mt-2" />
        <h6 className="mt-2 text-[0.6rem] font-bold text-white">213 read out of 345 total</h6>
      </div>
      <div className="mt-2 flex flex-row items-center gap-2 rounded-xl bg-white p-2">
        <div className="h-6 w-6">
          <CheckCircleIcon className="stroke-green-600" />
        </div>
        <div>
          <p className="text-xs font-bold text-black">Inbox synched</p>
          <p className="text-xs text-blue-gray-800">Up to date</p>
        </div>
      </div>
    </div>
  );
};
