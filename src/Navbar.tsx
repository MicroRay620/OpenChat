import { BsBook, BsBoxArrowInDown, BsHouse, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header id={ "cl-main-header" } className={ "cl-navbar-header" }>
        <nav id={ "cl-main-navbar" }>
          <ul id={ "cl-main-nav-list" } className={ "cl-navbar justify-center text-3xl flex list-none p-0 m-0 gap-1" }>
            <li className={ "group relative" }>
              <Link to={ "/" } id={ "cl-main-home" } className={ "nav-link" }>
                <span id={ "cl-nav-span-home" } className={ "nav-span hover:text-blue-400" }>
                  <BsHouse id={ "cl-home-icon" } />
                </span>
                <div className={ "absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max" }>
                  <div className={ "bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap" }>
                    Home
                  </div>
                </div>
              </Link>
            </li>

            <li className={ "group relative" }>
              <Link to={ "/download" } id={ "cl-main-download" } className={ "nav-link" }>
                <span id={ "cl-nav-span-download" } className={ "nav-span hover:text-blue-400" }>
                  <BsBoxArrowInDown />
                </span>
                <div className={ "absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max" }>
                  <div className={ "bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap" }>
                    Downloads
                  </div>
                </div>
              </Link>
            </li>

            <li className={ "group relative" }>
              <Link to={ "/docs" } id={ "cl-main-docs" } className={ "nav-link" }>
                <span id={ "cl-nav-span-docs" } className={ "nav-span hover:text-blue-400" }>
                  <BsBook />
                </span>
                <div className={ "absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max" }>
                  <div className={ "bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap" }>
                    Documentation
                  </div>
                </div>
              </Link>
            </li>

            <li className={ "group relative" }>
              <Link to={ "/login" } id={ "cl-main-login" } className={ "nav-link" }>
                <span id={ "cl-nav-span-login" } className={ "nav-span hover:text-blue-400" }>
                  <BsPerson />
                </span>
                <div className={ "absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-2 left-1/2 transform -translate-x-1/2 w-max" }>
                  <div className={ "bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap" }>
                    Login
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <br/>
      <br/>
    </>
  );
}