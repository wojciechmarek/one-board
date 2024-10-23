import { Link } from 'react-router';
import oneBoardLogo from 'src/src/assets/icons/one-board-logo.svg';

export const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={oneBoardLogo} alt="brand logo" className="h-5" />
      <h1 className="text-xl font-bold text-gray-50">One board</h1>
    </Link>
  );
};
