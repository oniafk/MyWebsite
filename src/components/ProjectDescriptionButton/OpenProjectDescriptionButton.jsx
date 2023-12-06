import React from "react";
import { useContext } from "react";
import { FilterContext } from "../../context";

function OpenProjectDescriptionButton({ data }) {
  const context = useContext(FilterContext);

  const handleClick = () => {
    context.setOpenModal((state) => !state);
    context.setCurrentProject(data);
    console.log(data);
    console.log(context.currentProject.img);
  };

  return (
    <button
      className="absolute right-3 bottom-3  rounded-full w-10 h-10 p-auto"
      onClick={handleClick}
    >
      <img src="./link.svg" alt="" className="w-full h-full" />
    </button>
  );
}

export { OpenProjectDescriptionButton };
