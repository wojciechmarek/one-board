import { SideBarMainContent } from '../organisms/sidebar-main-content/SideBarMainContent';

export const SideBar = () => {
  return (
    <aside className="flex h-screen w-60 flex-col bg-[#1c1a25]">
      <div className="flex flex-grow flex-row">
        <SideBarMainContent />
      </div>
    </aside>
  );
};
