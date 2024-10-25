import { Button, Chip } from '@material-tailwind/react';
import { ReactNode } from 'react';
import { Link } from 'react-router';

export type SideBarNavigationLinkProps = {
  link: string;
  icon: ReactNode;
  name: string;
};

export const SideBarNavigationLink = (props: SideBarNavigationLinkProps) => {
  const { link, icon, name } = props;

  return (
    <Link to={link} className="flex flex-row justify-between rounded-lg hover:cursor-pointer hover:bg-[#252332]">
      <Button className="flex w-full flex-row items-center justify-between gap-3 bg-transparent p-0 px-3 py-2 normal-case">
        <div className="flex flex-row items-center gap-3">
          <div className="h-6 w-6">{icon}</div>
          <p className="text-sm font-bold text-blue-gray-100">{name}</p>
        </div>

        <Chip variant="gradient" size="sm" value="12" color="red" />
      </Button>
    </Link>

    // <Link to={link} className="grid h-16 border-b-2 border-[#252332] hover:cursor-pointer hover:bg-[#252332]">
    //   <Button variant="text" className="p-0">
    //     <img alt={'link to ' + link} src={imageUrl} className="h-8 w-8 place-self-center" />
    //   </Button>
    // </Link>
  );
};
