import { Button } from '@material-tailwind/react';
import clsx from 'clsx';
import { Link } from 'react-router';

export type SideBarIconLinkProps = {
  link: string;
  imageUrl: string;
  isActive?: boolean;
};

const SideBarIconLink = (props: SideBarIconLinkProps) => {
  const { link, imageUrl, isActive } = props;

  return (
    <Link
      to={link}
      className={`grid h-16 border-b-2 border-b-[#252332] hover:cursor-pointer hover:bg-[#252332] ${clsx(isActive && 'border-l-4 border-r-white')}`}
    >
      <Button className="rounded-none bg-transparent p-0">
        <img alt={'link to ' + link} src={imageUrl} className="h-6 w-6 place-self-center" />
      </Button>
    </Link>
  );
};

export default SideBarIconLink;
