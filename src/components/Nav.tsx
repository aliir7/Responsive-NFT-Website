import {
  RiDiscordLine,
  RiWalletLine,
  RiMenuLine,
  RiCloseLine,
} from "react-icons/ri";
import { navbarMenu } from "../constants";
import { useState } from "react";
import Button from "./UI/Button";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-9999 flex w-full items-center justify-between bg-stone-950/80 px-4 py-3 backdrop-blur-md lg:h-[90px] lg:px-[10%]">
      {/* Logo */}
      <h1>
        <a
          href="#"
          className="text-2xl whitespace-nowrap text-white capitalize lg:text-3xl"
        >
          nox star
        </a>
      </h1>

      {/* Links */}
      <ul
        className={`absolute top-full flex w-full flex-col items-start border-t border-stone-800 bg-stone-950/95 transition-all duration-600 ${
          isOpen ? "left-0" : "-left-full"
        } lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-4 lg:border-none lg:bg-transparent`}
      >
        {navbarMenu.map((item) => (
          <li
            key={item.id}
            className="hover:border-primary hover:text-primary w-full border-b border-stone-800 px-6 py-4 text-white transition-colors duration-600 last:border-none lg:w-auto lg:border-none lg:p-0"
          >
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* Buttons + Menu Icon */}
      <div className="flex items-center gap-2">
        {/* دکمه‌ها در موبایل سایز sm */}
        <Button
          size="sm"
          variant="primary"
          icon={<RiDiscordLine />}
          className="hidden! lg:flex!"
        >
          Discord
        </Button>
        <Button
          size="sm"
          variant="outline"
          icon={<RiWalletLine />}
          className="hidden! lg:flex!"
        >
          Contacts
        </Button>

        {/* آیکن منو */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:text-primary flex h-10 w-10 items-center justify-center rounded-md text-stone-900 transition-all duration-300 hover:bg-stone-900 lg:hidden"
        >
          {isOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
