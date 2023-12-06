import React from "react";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const activeStyle = "underline underline-offset-4 text-gray-900 font-bold ";

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");

    window.scrollTo({
      top: document.getElementById("home").offsetTop,
      behavior: "smooth",
    });
  };

  const handleProjectsClick = () => {
    navigate("/");

    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("projects").offsetTop,
        behavior: "smooth",
      });
    }, 200);
  };

  return (
    <nav className="flex w-full justify-between px-36 mx-auto py-5 h-auto z-10 bg-white bg-opacity-90 fixed">
      <section>
        <div className="flex">
          <div className="mr-2">
            <img src="../public/layout.svg" alt="" />
          </div>
          <p>
            <a href="/" className="text-lg text-gray-500">
              Manuel Arias
            </a>
          </p>
        </div>
      </section>
      <ul className="flex font-fontHeader">
        <li className="mx-3">
          <NavLink
            to="/"
            activeclassname="active"
            className={({ isActive }) =>
              isActive
                ? `navbar-link hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold ${activeStyle}`
                : "navbar-link"
            }
            onClick={handleHomeClick}
          >
            Home
          </NavLink>
        </li>
        <li className="mx-3">
          <ScrollLink
            to="projects"
            smooth
            onClick={handleProjectsClick}
            className={({ isActive }) =>
              isActive
                ? `navbar-link hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold ${activeStyle}`
                : "navbar-link"
            }
          >
            <p className="nav-link-text hover:cursor-pointer">Projects</p>
          </ScrollLink>
        </li>
        <li className="ml-3">
          <NavLink
            to="/about"
            activeclassname="active"
            className={({ isActive }) =>
              isActive
                ? `navbar-link hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold ${activeStyle}`
                : "navbar-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="ml-3">
          <NavLink
            to="/contact"
            activeclassname="active"
            className={({ isActive }) =>
              isActive
                ? `navbar-link hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold ${activeStyle}`
                : "navbar-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
