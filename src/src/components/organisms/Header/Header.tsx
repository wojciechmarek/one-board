import { HeaderButtons, HeaderSearch, HeaderUserButton } from '../../atoms';

export const Header = () => {
  return (
    <header className="flex h-16 w-full flex-row items-center justify-between gap-1 border-b-2 border-[#252332] bg-[#1c1a25] px-2">
      <HeaderSearch />
      <div className="flex justify-between gap-1">
        <HeaderButtons />
        <HeaderUserButton />
      </div>
    </header>
  );
};
