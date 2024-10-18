import { SideBarBrandRow } from '../../molecules/sidebar-brand-row/SideBarBrandRow';
import { SideBarDetailRow } from '../../molecules/sidebar-detail-row/SideBarDetailRow';
import { SideBarNavigationList } from '../../molecules/sidebar-navigation-list/SideBarNavigationList';
import { SideBarSummaryBox } from '../../molecules/sidebar-summary-box/SideBarSummaryBox';

export const SideBarMainContent = () => {
  return (
    <div className="flex w-16 flex-grow flex-col">
      <SideBarBrandRow />
      <SideBarDetailRow />
      <SideBarNavigationList />
      <SideBarSummaryBox />
    </div>
  );
};
