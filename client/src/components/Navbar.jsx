import React from "react";
//from daisy ui
import logo from "../assets/logo.png";
import { FaBars, FaSearch } from "react-icons/fa";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTwitch,
} from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";

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
        {/* -----------------------Navbar------------------------ */}
        <div className="navbar lg:px-[12vw] pr-4 bg-violet-900 w-full flex justify-between">
          {/**fricking nav button */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn hover:bg-slate-500/15 btn-ghost"
            >
              <FaBars className="scale-150" />
            </label>
          </div>

          <div>
            <img
              src={logo}
              className="
            h-[60px]
            "
              alt=""
            />
          </div>
          {/**------Do not show while nav bar showing--------- */}

          <div className="flex justify-center gap-8 items-center">
            <div className="hidden flex-none lg:block">
              <ul className="menu gap-4 menu-horizontal">
                {/* menu content here */}

                <div
                  className="pt-1
                font-black text-[1.2rem] hover:text-warning
                transition duration-200 cursor-pointer
                "
                >
                  Home
                </div>

                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="pt-1
                font-black text-[1.2rem] hover:text-warning
                transition duration-200 cursor-pointer"
                  >
                    Services
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-warning 
                    font-black text-[1.05rem] rounded-box z-1 
                    duration-200
                    w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>Therapy</a>
                    </li>
                    <li>
                      <a>Store</a>
                    </li>
                    <li>
                      <a>Programme</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-hover">
                  <div
                    tabIndex={0}
                    role="button"
                    className="pt-1
                font-black text-[1.2rem] hover:text-warning
                transition duration-200 cursor-pointer"
                  >
                    About Us
                  </div>

                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-warning 
                    font-black text-[1.05rem] rounded-box z-1 
                    duration-200
                    w-52 p-2 shadow-sm"
                  >
                    <li>
                      <a>About</a>
                    </li>
                    <li>
                      <a>Resource</a>
                    </li>
                    <li>
                      <a>FAQ</a>
                    </li>
                    <li>
                      <a>Blog</a>
                    </li>
                  </ul>
                </div>
                <div
                  className=" pt-1
                font-black text-[1.2rem] hover:text-warning
                transition duration-200 cursor-pointer
                "
                >
                  contact
                </div>
                <hr className="border-r pb-2 border-gray-500 h-10 mx-2 " />

                <div>
                  <button className="btn rounded-lg  text-gray-200 font-black btn-warning w-[100%] ">
                    Start Here
                  </button>
                </div>
                <div>
                  <button className="btn text-gray-200  rounded-lg font-black  btn-error  w-[100%]">
                    Login
                  </button>
                </div>
              </ul>
            </div>

            <GiShoppingBag
              className="scale-[250%]  bg-secondary rounded-full p-1 
          cursor-pointer hover:bg-secondar hover:bg-pink-600"
            />
          </div>
        </div>
        {/* navtop ends and  Page content here */}
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

          <div className="join mt-8 mb-6 px-2">
            <div>
              <label className="input text-black bg-white validator join-item">
                <input
                  type="email"
                  placeholder="Search ..."
                  className="text-[1.08rem] 
                "
                  required
                />
              </label>
            </div>

            <button className="btn btn-warning join-item">
              <FaSearch className="scale-125  " />
            </button>
          </div>

          {/**search box end here */}
          <div
            className="border-t border-gray-500
           py-4 px-2 hover:bg-slate-200/15 rounded-md w-full
          cursor-pointer font-black
          "
          >
            <p className="mx-2">Home</p>
          </div>
          <div
            className="border-t border-gray-500
          py-4 px-2 hover:bg-slate-200/15 rounded-md w-full
          cursor-pointer font-black
          "
          >
            <p className="mx-2">Contact</p>
          </div>
          {/**Accordian shits */}
          <div className="collapse border-t border-gray-500 ">
            <input type="checkbox" className="peer " />
            <div
              className="collapse-title  bg-violet-950 text-primary-content 
              peer-checked:bg-primary peer-checked:text-secondary-content
              font-black "
            >
              Services
            </div>
            <div
              className="collapse-content bg-primary text-primary-content 
              font-mono
              peer-checked:bg-primary "
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing
            </div>
          </div>
          {/**Accordian shits */}
          <div
            className="border-t border-gray-500 box-border
           py-4  px-2 hover:bg-slate-200/15 rounded-md w-full
          cursor-pointer font-black 
          "
          >
            <p className="mx-2">Sign Up</p>
          </div>
          <div
            className="border-t border-gray-500 box-border
           py-5  px-2 hover:bg-slate-200/15 rounded-md w-full
          cursor-pointer font-black 
          "
          >
            <div className="flex justify-around">
              <FaGithub
                className="scale-[170%] hover:text-primary
              "
              />
              <FaTwitch
                className="scale-[170%] hover:text-primary
              "
              />
              <FaTwitter
                className="scale-[170%] hover:text-primary
              "
              />
              <FaInstagram
                className="scale-[170%] hover:text-primary
              "
              />
              <FaLinkedin
                className="scale-[170%] hover:text-primary
              "
              />
            </div>
          </div>

          <hr className="border-t pb-2  border-gray-500 w-full" />
          <button
            className="btn mb-4 text-gray-200 font-black btn-warning w-[100%] 
          my-2 "
          >
            Start Here
          </button>
          <hr className="border-t pt-2 border-gray-500 w-full" />
          <button className="btn text-gray-200 font-black mb-4 btn-error my-2 w-[100%]">
            Login
          </button>
          <hr className="border-t pt-2 border-gray-500 w-full" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
