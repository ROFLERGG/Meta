import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import X from '../assets/x.png';
import Discord from '../assets/discord.png';
import YouTube from '../assets/youtube.png';
import Telegram from '../assets/telegram.png';

const Header = () => {
  return (
    <header className="py-4">
      <div className="container">
        <div className="flex justify-between items-center space-x-12 min-h-10 max-md:space-x-0">
          {/* left sides */}
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          {/* right side */}
          <div className="flex flex-1 justify-between items-center max-md:hidden">
            {/* navigation */}
            <nav>
              <ul className="flex items-center space-x-6">
                <li>
                  <Link to="" className="p-3 block leading-none">
                    Wave NFT's
                  </Link>
                </li>
                <li>
                  <Link to="" className="p-3 block leading-none">
                    Stories
                  </Link>
                </li>
                <li>
                  <Link to="" className="p-3 block leading-none">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            {/* links */}
            <div className="flex items-center space-x-3">
              <a target="#blank" href="https://x.com" className="p-2 bg-neutral-100">
                <img width={20} height={20} src={X} alt="x" />
              </a>
              <a target="#blank" href="https://discord.com" className="p-2 bg-neutral-100">
                <img width={20} height={20} src={Discord} alt="discord" />
              </a>
              <a target="#blank" href="https://youtube.com" className="p-2 bg-neutral-100">
                <img width={20} height={20} src={YouTube} alt="youtube" />
              </a>
              <a target="#blank" href="https://web.telegram.org/" className="p-2 bg-neutral-100">
                <img width={20} height={20} src={Telegram} alt="telegram" />
              </a>
            </div>
          </div>
          {/* menu */}
          <div className="p-2 hidden max-md:block">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 rounded-full bg-white"></div>
              <div className="w-full h-0.5 rounded-full bg-white"></div>
              <div className="w-full h-0.5 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
