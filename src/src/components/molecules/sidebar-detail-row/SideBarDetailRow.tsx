import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export const SideBarDetailRow = () => {
  return (
    <div className="mx-4 flex justify-between">
      <h2 className="text-xs font-bold text-white">Portfolio</h2>
      <div className="h-4 w-4">
        <EllipsisHorizontalIcon />
      </div>
    </div>
  );
};
