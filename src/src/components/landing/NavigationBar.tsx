import brandLogo from 'src/src/assets/brand/certificate-svgrepo-com.svg';

export const NavigationBar = () => {
  return (
    <header className="mx-auto flex max-w-7xl items-center p-6">
      <a href="/" className="flex items-center gap-2">
        <img src={brandLogo} alt="brand logo" className="h-10" />
        <h1 className="text-xl font-bold text-gray-50">AppWrite X</h1>
      </a>
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
        <a href="login">Sign up</a>
        <a href="login">Sign in</a>
      </div>
    </header>
  );
};