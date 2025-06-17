import { BsBook, BsBoxArrowInDown, BsHouse, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header id="app-main-header" className="app-navbar-header">
      <nav id="app-main-navbar">
        <ul id="app-main-nav-list" className="app-navbar">
          <li className="group relative">
            <Link to="/" id="app-main-home" className="nav-link">
              <span id="app-nav-span-home" className="nav-span hover:text-blue-600">
                <BsHouse id="app-home-icon" />
              </span>
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Home
                </div>
              </div>
            </Link>
          </li>

          <li className="group relative">
            <Link to="/download" id="app-main-download" className="nav-link">
              <span id="app-nav-span-download" className="nav-span hover:text-blue-600">
                <BsBoxArrowInDown />
              </span>
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Downloads
                </div>
              </div>
            </Link>
          </li>

          <li className="group relative">
            <Link to="/docs" id="app-main-docs" className="nav-link">
              <span id="app-nav-span-docs" className="nav-span hover:text-blue-600">
                <BsBook />
              </span>
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Documentation
                </div>
              </div>
            </Link>
          </li>

          <li className="group relative">
            <Link to="/login" id="app-main-login" className="nav-link">
              <span id="app-nav-span-login" className="nav-span hover:text-blue-600">
                <BsPerson />
              </span>
              <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max">
                <div className="bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                  Login
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}