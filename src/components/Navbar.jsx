import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.png"

const Navbar = () => {
    const navLinks = (
        <>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
              isActive ? "font-semibold text-lg hover:underline text-white" : "font-semibold text-[#A1A2A3] text-lg hover:underline hover:text-white"
            }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
        
              to="/blog"
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg hover:underline text-white" : "font-semibold text-[#A1A2A3] text-lg hover:underline hover:text-white"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? "font-semibold text-lg hover:underline text-white" : "font-semibold text-[#A1A2A3] text-lg hover:underline hover:text-white"
              }
            >
             About 
            </NavLink>
          </li>
          <li>
            <NavLink
            to='/contact'
            className={({ isActive }) =>
              isActive ? "font-semibold text-lg hover:underline text-white" : "font-semibold text-[#A1A2A3] text-lg hover:underline hover:text-white"
            }
            >
             Contact
            </NavLink>
          </li>
        </>
      );
    return (
        
      <div className="navbar mb-6 max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex-1">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-full"
                src={logo}
                alt="logo"
                width="60"
                height="60"
              />
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6 text-sm">{navLinks}</ul>
          </div>
        </div>
      </div> 
    );
};

export default Navbar;