import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between gap-4 bg-[#1c1a25] px-2">
      <div className="flex h-10 flex-grow flex-row items-center gap-2 rounded-xl px-2 hover:bg-[#282631]">
        <div className="h-5 w-5">
          <MagnifyingGlassIcon />
        </div>
        <p className="text-sm">What are you searching for?</p>
      </div>
      <div className="flex flex-row gap-6">
        <div className="flex flex-row items-center gap-4">
          <div className="h-5 w-5">
            <ChatBubbleOvalLeftEllipsisIcon />
          </div>
          <div className="h-5 w-5">
            <BellIcon />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm">
            Hi, <span className="font-bold">Mike!</span>
          </p>
          <div className="h-8 w-8 rounded-full bg-deep-orange-500"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
