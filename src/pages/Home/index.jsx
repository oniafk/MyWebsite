import { Profile } from "../../components/Profile";
import { Filter } from "../../components/Filter";
import { Layout } from "../../components/Layout";

import { ProjectDescription } from "../../components/ProjectDesccription";
import { Projects } from "../Projects";
import { Modal } from "../../components/Modal";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleLinkClick = (event) => {
      console.log("handle click");
      const targetId = event.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll(".internal-link");
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);

  return (
    <>
      <div id="home"></div>
      <Profile />
      <div id="projects"></div>
      <Filter />
      <Projects />
    </>
  );
}

export { Home };
