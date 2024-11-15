import { SidebarBoardSelector, SidebarBrandRow, SidebarNavigationList, SidebarSummaryBox } from '../../molecules';

export const Sidebar = () => {
  return (
    <aside className="flex h-screen w-60 flex-col border-r-2 border-[#252332] bg-[#1c1a25]">
      <div className="flex flex-grow flex-row">
        <div className="flex w-16 flex-grow flex-col">
          <SidebarBrandRow />
          <SidebarBoardSelector />
          <SidebarNavigationList />
          <SidebarSummaryBox />
        </div>
      </div>
    </aside>
  );
};
