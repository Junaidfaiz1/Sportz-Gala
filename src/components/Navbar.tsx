import React, { useState } from "react";
import SportsIcon from "@mui/icons-material/Sports";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar: React.FC = () => {
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isPressOpen, setIsPressOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-950 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <SportsIcon
              className="text-yellow-400 transition-transform duration-300 hover:scale-110"
              style={{ fontSize: "2.5rem" }}
            />
            <span className="ml-2 text-xl font-bold text-white">CHAMPIONS</span>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <div className="hidden items-center space-x-8 lg:flex">
            <button className="text-lg text-white transition-colors hover:text-yellow-400">
              Home
            </button>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-lg text-white transition-colors hover:text-yellow-400">
                <span>Pages</span>
                <KeyboardArrowDownIcon className="transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <ul className="invisible absolute left-0 mt-2 w-48 rounded-lg bg-neutral-900 py-2 shadow-xl transition-all group-hover:visible">
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  About Us
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Our Team
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  FAQs
                </li>
              </ul>
            </div>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-lg text-white transition-colors hover:text-yellow-400">
                <span>Blogs</span>
                <KeyboardArrowDownIcon className="transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <ul className="invisible absolute left-0 mt-2 w-48 rounded-lg bg-neutral-900 py-2 shadow-xl transition-all group-hover:visible">
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Latest News
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Tournament Updates
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Player Stories
                </li>
              </ul>
            </div>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-lg text-white transition-colors hover:text-yellow-400">
                <span>Shops</span>
                <KeyboardArrowDownIcon className="transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <ul className="invisible absolute left-0 mt-2 w-48 rounded-lg bg-neutral-900 py-2 shadow-xl transition-all group-hover:visible">
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Equipment
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Clothing
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Accessories
                </li>
              </ul>
            </div>

            <div className="group relative">
              <button className="flex items-center space-x-1 text-lg text-white transition-colors hover:text-yellow-400">
                <span>Sports Press</span>
                <KeyboardArrowDownIcon className="transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <ul className="invisible absolute left-0 mt-2 w-48 rounded-lg bg-neutral-900 py-2 shadow-xl transition-all group-hover:visible">
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Press Releases
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Media Coverage
                </li>
                <li className="cursor-pointer px-4 py-2 text-white transition-colors hover:bg-neutral-800 hover:text-yellow-400">
                  Interviews
                </li>
              </ul>
            </div>

            <button className="text-lg text-white transition-colors hover:text-yellow-400">
              Contact Us
            </button>
          </div>

          {/* Right Section - Hidden on Mobile */}
          <div className="hidden items-center space-x-8 lg:flex">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-400 p-2">
                <PermPhoneMsgIcon className="text-2xl text-neutral-900" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-400">Call 24/7</p>
                <p className="text-sm font-bold text-white">+92 123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="text-white transition-colors hover:text-yellow-400">
                <SearchIcon className="text-2xl" />
              </button>
              <button className="text-white transition-colors hover:text-yellow-400">
                <PersonIcon className="text-2xl" />
              </button>
              <button className="relative text-white transition-colors hover:text-yellow-400">
                <LocalMallIcon className="text-2xl" />
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-neutral-900">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="h-8 w-8" />
            ) : (
              <MenuIcon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-neutral-800 lg:hidden">
            <div className="space-y-1 px-4 py-4">
              <button className="w-full py-2 text-left text-white hover:text-yellow-400">
                Home
              </button>

              <div className="border-t border-neutral-800">
                <button
                  className="flex w-full items-center justify-between py-2 text-white hover:text-yellow-400"
                  onClick={() => setIsPageOpen(!isPageOpen)}
                >
                  <span>Pages</span>
                  <KeyboardArrowDownIcon
                    className={`transform transition-transform duration-300 ${isPageOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isPageOpen && (
                  <div className="ml-4 space-y-2 border-l border-neutral-800 pl-4">
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      About Us
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Our Team
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      FAQs
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-800">
                <button
                  className="flex w-full items-center justify-between py-2 text-white hover:text-yellow-400"
                  onClick={() => setIsBlogOpen(!isBlogOpen)}
                >
                  <span>Blogs</span>
                  <KeyboardArrowDownIcon
                    className={`transform transition-transform duration-300 ${isBlogOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isBlogOpen && (
                  <div className="ml-4 space-y-2 border-l border-neutral-800 pl-4">
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Latest News
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Tournament Updates
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Player Stories
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-800">
                <button
                  className="flex w-full items-center justify-between py-2 text-white hover:text-yellow-400"
                  onClick={() => setIsShopOpen(!isShopOpen)}
                >
                  <span>Shops</span>
                  <KeyboardArrowDownIcon
                    className={`transform transition-transform duration-300 ${isShopOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isShopOpen && (
                  <div className="ml-4 space-y-2 border-l border-neutral-800 pl-4">
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Equipment
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Clothing
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Accessories
                    </button>
                  </div>
                )}
              </div>

              <div className="border-t border-neutral-800">
                <button
                  className="flex w-full items-center justify-between py-2 text-white hover:text-yellow-400"
                  onClick={() => setIsPressOpen(!isPressOpen)}
                >
                  <span>Sports Press</span>
                  <KeyboardArrowDownIcon
                    className={`transform transition-transform duration-300 ${isPressOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isPressOpen && (
                  <div className="ml-4 space-y-2 border-l border-neutral-800 pl-4">
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Press Releases
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Media Coverage
                    </button>
                    <button className="w-full py-2 text-left text-gray-400 hover:text-yellow-400">
                      Interviews
                    </button>
                  </div>
                )}
              </div>

              <button className="w-full border-t border-neutral-800 py-2 text-left text-white hover:text-yellow-400">
                Contact Us
              </button>
            </div>

            {/* Mobile Contact Info */}
            <div className="flex items-center border-t border-neutral-800 px-4 py-4">
              <PermPhoneMsgIcon className="text-xl text-yellow-400" />
              <span className="ml-3 text-white">+92 123 456 7890</span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
