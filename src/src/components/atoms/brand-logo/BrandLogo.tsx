import { Link } from 'react-router';
import stockyLogo from 'src/src/assets/icons/stock-y.svg';

export const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={stockyLogo} alt="brand logo" className="h-5" />
      <h1 className="text-xl font-bold text-gray-50">Stock-y</h1>
    </Link>
  );
};
