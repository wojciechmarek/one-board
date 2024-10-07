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
import { Button, Progress } from '@material-tailwind/react';
import brandLogo from 'src/src/assets/icons/certificate-svgrepo-com.svg';

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
    <header className="flex h-screen w-64 flex-col bg-[#1c1a25]">
      <div className="flex h-16 flex-row content-center justify-between border-b-2 border-[#323232] p-2">
        <a href="/" className="flex items-center gap-2">
          <img src={brandLogo} alt="brand logo" className="h-8" />
          <h1 className="text-lg font-bold text-gray-50">AppWrite X</h1>
        </a>
        <Button variant="text" className="p-2">
          <div className="my-auto h-6 w-6">
            <Bars3Icon className="stroke-blue-gray-50" />
          </div>
        </Button>
      </div>
      <div className="flex flex-grow flex-row">
        <div className="h-full w-12 border-r-2 border-[#323232]">
          {mainMenuItems.map((item) => (
            <div className="grid h-12 border-b-2 border-[#323232] grayscale">
              <img src={item} className="h-6 w-6 place-self-center" />
            </div>
          ))}
        </div>
        <div className="flex flex-grow flex-col p-4">
          <div className="flex justify-between">
            <h2 className="text-xs font-bold text-white">Dashboard</h2>
            <div className="h-4 w-4">
              <EllipsisHorizontalIcon />
            </div>
          </div>
          <div className="mt-4 flex flex-grow flex-col gap-2">
            {secondaryMenuItems.map((item) => (
              <div className="flex flex-row items-center gap-2">
                <div className="h-6 w-6">
                  <Squares2X2Icon className="stroke-white" />
                </div>
                <p className="text-sm font-bold text-white">Overview</p>
              </div>
            ))}
          </div>
          <div className="h-32 rounded-2xl bg-gradient-to-tr from-blue-900 to-pink-500 p-3">
            <h6 className="text-xs font-bold text-white">Cloud storage</h6>
            <Progress value={50} color="amber" size="sm" className="mt-2" />
            <h6 className="mt-2 text-xs">2.4 GiB of 5 GiB used</h6>
            <div className="mt-2 flex flex-row items-center gap-2 rounded-xl bg-white p-2">
              <div className="h-6 w-6">
                <CheckCircleIcon />
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
