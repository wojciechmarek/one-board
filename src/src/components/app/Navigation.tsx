import brandLogo from 'src/src/assets/icons/certificate-svgrepo-com.svg';
import driveIcon from 'src/src/assets/icons/google-drive.png';

import {
  Bars3Icon,
  ChartBarIcon,
  CheckCircleIcon,
  CircleStackIcon,
  Cog6ToothIcon,
  EllipsisHorizontalIcon,
  PlusCircleIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { Button, Chip, Progress } from '@material-tailwind/react';

export const Navigation = () => {
  const mainMenuItems = [driveIcon, driveIcon, driveIcon, driveIcon];

  const secondaryMenuItems = [
    { name: 'Overview', icon: <Squares2X2Icon /> },
    { name: 'Overview', icon: <CircleStackIcon /> },
    { name: 'Overview', icon: <ChartBarIcon /> },
    { name: 'Overview', icon: <Cog6ToothIcon /> },
    { name: 'Overview', icon: <PlusCircleIcon /> },
  ];
  return (
    <header className="flex h-screen w-72 flex-col bg-[#1c1a25]">
      <div className="flex flex-grow flex-row">
        <div className="w-16 border-r-2 border-[#323232]">
          {mainMenuItems.map((item) => (
            <div className="grid h-16 border-b-2 border-[#323232] hover:cursor-pointer hover:bg-[#282631]">
              <img src={item} className="h-6 w-6 place-self-center" />
            </div>
          ))}
        </div>
        <div className="flex w-16 flex-grow flex-col">
          <div className="mx-4 flex h-16 flex-row content-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src={brandLogo} alt="brand logo" className="h-8" />
              <h1 className="text-md font-bold text-gray-50">AppWrite X</h1>
            </a>
            <Button variant="text" className="p-2">
              <div className="my-auto h-6 w-6">
                <Bars3Icon className="stroke-blue-gray-50" />
              </div>
            </Button>
          </div>
          <div className="mx-4 flex justify-between">
            <h2 className="text-xs font-bold text-white">Dashboard</h2>
            <div className="h-4 w-4">
              <EllipsisHorizontalIcon />
            </div>
          </div>
          <div className="mt-3 flex flex-grow flex-col gap-1 px-2">
            {secondaryMenuItems.map((item) => (
              <div className="flex flex-row justify-between rounded-lg px-3 py-2 hover:cursor-pointer hover:bg-[#282631]">
                <div className="flex flex-row items-center gap-2">
                  <div className="h-5 w-5">
                    <Squares2X2Icon className="stroke-blue-gray-100" />
                  </div>
                  <p className="text-xs font-bold text-blue-gray-100">Overview</p>
                </div>
                <Chip variant="gradient" size="sm" value="12" color="red" />
              </div>
            ))}
          </div>
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
        </div>
      </div>
    </header>
  );
};
