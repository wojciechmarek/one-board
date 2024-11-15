import { Link } from 'react-router';
import { BrandLogo } from 'src/src/components/atoms';

export const Navigation = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center p-6">
      <BrandLogo />
      <nav className="flex-1">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/sign-up">Sign up</Link>
        <Link to="/sign-in">Sign in</Link>
      </div>
    </header>
  );
};
