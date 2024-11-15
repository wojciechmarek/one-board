import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  ShieldExclamationIcon,
  StarIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { SideBarNavigationLink } from '../../atoms/sidebar-navigation-link/SideBarNavigationLink';

const secondaryMenuItems = [
  { name: 'Inbox', icon: <EnvelopeIcon className="stroke-white" />, link: 'mail/inbox' },
  { name: 'Starred', icon: <StarIcon className="stroke-white" />, link: 'mail/starred' },
  { name: 'Spam', icon: <ShieldExclamationIcon className="stroke-white" />, link: 'mail/starred' },
  { name: 'Sent', icon: <PaperAirplaneIcon className="stroke-white" />, link: 'mail/sent' },
  { name: 'Trash', icon: <TrashIcon className="stroke-white" />, link: 'mail/trash' },
];

export const SidebarNavigationList = () => {
  return (
    <nav className="mt-3 flex flex-grow flex-col gap-1 px-2">
      {secondaryMenuItems.map((item) => (
        <SideBarNavigationLink {...item} />
      ))}
    </nav>
  );
};
