import React from "react";
import { createPortal } from "react-dom";
import { FilterContext } from "../../context";

function Modal({ children }) {
  const context = React.useContext(FilterContext);

  const container = document.getElementById("modal-root");

  return createPortal(<div className="modal">{children}</div>, container);
}

export { Modal };
