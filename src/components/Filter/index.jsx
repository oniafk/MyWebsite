import { useContext } from "react";
import { FilterContext } from "../../context";

function Filter() {
  const context = useContext(FilterContext);
  const { currentCategory } = context;
  const activeStyle = "underline underline-offset-4 text-gray-900 font-bold ";

  return (
    <nav className="flex w-full justify-center items-center px-10 py-5 text-lg font-fontHeader mt-10">
      <p className="mx-5">Filter: </p>
      <ul className="flex items-center gap-5 text-gray-500">
        <li>
          <button
            className={`${
              currentCategory === "all" ? activeStyle : ""
            } hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold`}
            onClick={() => context.handleCategoryChange("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`${
              currentCategory === "product" ? activeStyle : ""
            } hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold`}
            onClick={() => context.handleCategoryChange("product")}
          >
            Recent Projects
          </button>
        </li>
        <li>
          <button
            className={`${
              currentCategory === "code" ? activeStyle : ""
            } hover:underline hover:underline-offset-4 hover:text-gray-900 hover:font-bold`}
            onClick={() => context.handleCategoryChange("code")}
          >
            Learning Projects
          </button>
        </li>
      </ul>
    </nav>
  );
}

export { Filter };
