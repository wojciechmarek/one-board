import { SideBarBrandRow } from '../../molecules/sidebar-brand-row/SideBarBrandRow';
import { SideBarIconsNavigationList } from '../../molecules/sidebar-icons-navigation-list/SideBarIconsNavigationList';
import { SideBarNavigationList } from '../../molecules/sidebar-navigation-list/SideBarNavigationList';
import { SideBarSummaryBox } from '../../molecules/sidebar-summary-box/SideBarSummaryBox';

export const SideBarMainContent = () => {
  return (
    <div className="flex w-16 flex-grow flex-col">
      <SideBarBrandRow />
      <SideBarIconsNavigationList />
      <SideBarNavigationList />
      <SideBarSummaryBox />
    </div>
  );
};
