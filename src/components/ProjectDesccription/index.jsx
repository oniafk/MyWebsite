import React, { useContext } from "react";

import { FilterContext } from "../../context";
import { CloseModalButton } from "../CloseModalButton";
import { Layout } from "../Layout";

function ProjectDescription() {
  const context = useContext(FilterContext);

  const renderTextWithLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const renderSvg = () => {
    return context.currentProject.svgDescription.map((techObject) => {
      const techName = Object.keys(techObject)[0];
      const techImage = techObject[techName];

      return (
        <span
          key={techName}
          className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${techImage})` }}
        ></span>
      );
    });
  };

  return (
    <section className=" fixed top-16 left-0 right-0 bottom-0 flex flex-col justify-around w-full h-auto p-16 px-44 z-9  bg-white bg-opacity-95 ">
      <Layout>
        <CloseModalButton setOpenModal={context.setOpenModal} />
        <div className=" flex w-full  justify-between content-center h-auto">
          <div className="w-1/2">
            <h2 className="mb-4 font-semibold font-fontHeader text-3xl">
              {context.currentProject.title}
            </h2>
            <p className="text-lg text-gray-500">
              {renderTextWithLineBreaks(context.currentProject.longDescription)}
            </p>
            <div className="w-full mb-2">
              <h3 className="mt-32 mb-2 font-fontHeader text-xl font-semibold text-slate-700">
                Technology used:
              </h3>
              <div className="flex justify-start gap-5 w-3/5 ">
                {renderSvg()}
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full pt-10 pb-10 border-t-slate-800 border-b-slate-800 border-t-2 border-b-2 max-h-fit max-w-fit">
            <img
              src={context.currentProject.img}
              alt={context.currentProject.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-5 w-full h-1/4">
          <div className="flex w-full justify-between items-start">
            <div className="w-1/3 h-10 py-2 ">
              <h3 className="font-fontHeader text-xl- font-semibold text-slate-700">
                Role:{" "}
              </h3>
              <p className="text-lg text-gray-500 mt-3">
                👾 {`${context.currentProject.role}`}
              </p>
            </div>
            <div className="w-1/3 h-10 py-2 ">
              <h3 className="w-full font-fontHeader text-xl- font-semibold text-slate-700">
                Year:{" "}
              </h3>
              <p className="text-lg text-gray-500 mt-3">
                (⌐■_■) - {` ${context.currentProject.year}`}
              </p>
            </div>
            <div className="w-1/3 h-10 py-2 ">
              <h3 className="mb-2 font-fontHeader text-xl- font-semibold text-slate-700">
                Links:{" "}
              </h3>
              <a
                href={`${context.currentProject.link}`}
                className=" text-lg text-gray-500 rounded-full border-solid border-2 border-slate-700 py-2 px-5 transition duration-300 ease-in-out hover:text-slate-600 hover:bg-slate-300 inline-flex items-center"
                style={{ width: "fit-content" }}
              >
                Link to project{" "}
                <span
                  className="block h-8 w-8 bg-center bg-no-repeat bg-cover ml-2"
                  style={{ backgroundImage: "url(/linkB.svg)" }}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}

export { ProjectDescription };
