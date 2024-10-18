import { BrandLogo } from '../../atoms';
import { SideBarHamburgerButton } from '../../atoms/sidebar-hamburger-button/SideBarHamburgerButton';

export const SideBarBrandRow = () => {
  return (
    <div className="mx-4 flex h-16 flex-row justify-between">
      <BrandLogo />
      <SideBarHamburgerButton />
    </div>
  );
};
