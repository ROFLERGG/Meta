import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import X from '../assets/x.png';
import Discord from '../assets/discord.png';
import YouTube from '../assets/youtube.png';
import Telegram from '../assets/telegram.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    const body = document.body;
    if (menuIsOpen) {
      body.style.overflow = 'hidden';
      body.style.width = '100%';
    } else {
      body.style.overflow = 'visible';
      body.style.width = 'auto';
    }
  }, [menuIsOpen]);

  return (
    <div>
      <header className="fixed z-20 w-full py-4">
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
            {/* menu toggle */}
            <button onClick={toggleMenu} className="p-2 hidden max-md:block">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 rounded-full bg-white"></div>
                <div className="w-full h-0.5 rounded-full bg-white"></div>
                <div className="w-full h-0.5 rounded-full bg-white"></div>
              </div>
            </button>
          </div>
        </div>
      </header>
      {/* menu */}
      <nav className={`fixed z-10 h-[100dvh] w-full bg-neutral-950 flex justify-center duration-300 ${menuIsOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col justify-center">
          <ul className="flex flex-1 flex-col space-y-6 justify-center text-center">
            <li>
              <Link to="/nft" className="p-3 block leading-none">
                Wave NFT's
              </Link>
            </li>
            <li>
              <Link to="/stories" className="p-3 block leading-none">
                Stories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="p-3 block leading-none">
                Contact
              </Link>
            </li>
          </ul>
          {/* links */}
          <div className="flex items-center space-x-3 mb-6">
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
      </nav>
    </div>
  );
};

export default Header;
