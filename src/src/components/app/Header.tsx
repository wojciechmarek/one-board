import { HeaderButtons } from '../atoms/header-buttons/HeaderButtons';
import { HeaderSearch } from '../atoms/header-search/HeaderSearch';
import { HeaderUserButton } from '../atoms/header-user-button/HeaderUserButton';

const Header = () => {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between gap-1 bg-[#1c1a25] px-2">
      <HeaderSearch />
      <div className="flex justify-between gap-1">
        <HeaderButtons />
        <HeaderUserButton />
      </div>
    </header>
  );
};

export default Header;
