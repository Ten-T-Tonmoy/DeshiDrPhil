import React from "react";
//from daisy ui
import logo from "../assets/logo.png";
import { FaBars, FaSearch } from "react-icons/fa";

/**
 * Home
 * services
 * about us
 * ||
 * contact redish
 * login yellosh
 */

/**
 * search box
 *
 * home
 * services
 * about us
 * contact
 * login
 * icons
 *
 * start here yelloish
 * login redish
 */

const Navbar = () => {
  return (
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-primary w-full ">
          {/**fricking nav button */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <FaBars className="scale-150" />
            </label>
          </div>

          <img
            src={logo}
            className="
            h-[60px]
            "
            alt=""
          />
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        Content
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-violet-950 min-h-full w-[60vw] sm:w-64 items-center ">
          {/* Sidebar content here */}
          <li>
            <div className="join mt-8 mb-2">
              <label className="input text-black bg-white validator join-item">
                <input
                  type="email"
                  placeholder="Search ..."
                  className="text-[1.08rem] 
                "
                  required
                />
              </label>
              <button className="btn btn-warning join-item">
                <FaSearch className="scale-125  " />
              </button>
            </div>
          </li>
          <hr className="w-full bg-gray-500 " />

          {/**search box goes here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          {/**Accordian shits */}
          <li>
            <div className="collapse p-0 ">
              <input type="checkbox" className="peer " />
              <div
                className="collapse-title bg-violet-950 text-primary-content 
              peer-checked:bg-secondary peer-checked:text-secondary-content text-center"
              >
                Services
              </div>
              <div
                className="collapse-content bg-primary text-primary-content 
              peer-checked:bg-secondary "
              >
                Click the "Sign Up" button in the top right corner and follow
                the registration process.
              </div>
            </div>
          </li>
          <li></li>
          {/**Accordian shits */}
          <li>
            <button className="btn btn-warning w-[100%] ">Start Here</button>
          </li>
          <li>
            <button className="btn btn-error ">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
