import { SideBarIconsNavigationList } from '../molecules/sidebar-icons-navigation-list/SideBarIconsNavigationList';
import { SideBarMainContent } from '../organisms/sidebar-main-content/SideBarMainContent';

export const SideBar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col bg-[#1c1a25]">
      <div className="flex flex-grow flex-row">
        <SideBarIconsNavigationList />
        <SideBarMainContent />
      </div>
    </aside>
  );
};
