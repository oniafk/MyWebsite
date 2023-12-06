import React from "react";

function CloseModalButton({ setOpenModal }) {
  const handleClick = () => {
    setOpenModal((state) => !state);
  };

  return (
    <button
      className="absolute right-3 top-12  rounded-full w-10 h-10 p-auto"
      onClick={handleClick}
    >
      <img src="./Xicon.svg" alt="" className="w-full h-full" />
    </button>
  );
}

export { CloseModalButton };
