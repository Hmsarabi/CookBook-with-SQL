import App from "../App";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import search from "../assets/icons/search-svgrepo-com.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import facebook from "../assets/icons/facebook.svg";
import pinterest from "../assets/icons/pinterest.svg";
import write from "../assets/icons/write.svg";
import profile from "../assets/icons/profile.svg";
import tiktok from "../assets/icons/tiktok.svg";
import youtube from "../assets/icons/youtube.svg";

function Layout() {
  return (
    <div>
      <nav
        className="navbar bg-white z-10 p-1 flex w-screen  border-b-2 border-slate-100 fixed"
        id="home"
      >
        <div className="w-1/3 flex pl-10 justify-start ml-24 mx-8">
          <p>
            <a href="#"><img src={logo} alt="" width="50px" height="50px" /></a>
          </p>
        </div>
        <div className="flex ml-80 gap-12 w-1/3">
          <button className="btn text-black font-bold hover:bg-green-300 p-2 rounded-md">
            <NavLink to="/">Home</NavLink>
          </button>
          <button className="btn text-black font-bold hover:bg-green-300  p-2 rounded-md">
            <NavLink to="/recipes">Recipes</NavLink>
          </button>
          <button className="btn text-black font-bold hover:bg-green-300  p-2 rounded-md">
            <NavLink to="/about">About us</NavLink>
          </button>
        </div>
        <div className="flex gap-12 text-xs justify-end mr-6 w-5/6 pr-10 pt-2">
          <div className="flex pr-6">
            <button>
              <img
                className=" icon icon-search"
                src={search}
                alt="Search"
                width="24px"
                height="24px"
              />
              <p>Search</p>
            </button>
          </div>
          <div className="">
            <img
              src={profile}
              alt="Profile"
              width="24px"
              height="24px"
              className="ml-1.5 icon icon-profile"
            />
            <p>Profile</p>
          </div>
          <div className="">
            <img
              src={write}
              alt="Write"
              width="24px"
              height="24px"
              className="ml-6 icon icon-write"
            />
            <p>Write a recipe</p>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer className="bg-white py-2 px-14">
        <div className="container mx-auto flex justify-between items-center mt-10 mb-10 ml-24 mr-24">
          <div className="flex items-center">
            <div className="mr-10">
              <img src={logo} alt="Logo" className="h-24 w-auto" />
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-col mr-40">
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                Recipes
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                Privacy Policy
              </a>
            </div>

            <div className="flex flex-col mr-20">
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                Career
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-green-300 mr-4 mb-2"
              >
                Search
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button className="btn bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md mt-6 mb-8 hover:bg-green-300">
              Follow Us
            </button>

            <div className="flex mb-6">
              <div className="mr-6">
                <img src={tiktok} alt="Tiktok" className="h-8 w-auto" />
              </div>
              <div className="mr-6">
                <img src={facebook} alt="Facebook" className="h-8 w-auto" />
              </div>
              <div>
                <img src={pinterest} alt="Pinterest" className="h-8 w-auto" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-6">
                <img src={youtube} alt="YouTube" className="h-8 w-auto" />
              </div>
              <div className="mr-6">
                <img src={instagram} alt="Instagram" className="h-8 w-auto" />
              </div>
              <div>
                <img src={linkedin} alt="LinkedIn" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
