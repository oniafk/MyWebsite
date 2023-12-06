import { useContext } from "react";
import { FilterContext } from "../../context";
import { OpenProjectDescriptionButton } from "../ProjectDescriptionButton/OpenProjectDescriptionButton";

function Card(data) {
  const context = useContext(FilterContext);

  const cardStyle = {
    backgroundImage: `url(${data.img})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const renderSvg = () => {
    return data.svg.map((techObject) => {
      const techName = Object.keys(techObject)[0];
      const techImage = techObject[techName];
      return (
        <span
          key={techName}
          className="inline-block h-8 w-8 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${techImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></span>
      );
    });
  };

  return (
    <div
      className="relative w-2/6 h-72 group border-2 border-slate-400 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
      style={cardStyle}
    >
      <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-80 transition-opacity duration-300 "></div>
      <div className="absolute inset-0 flex flex-col justify-between items-center p-5 text-white ">
        <div className="flex flex-col w-full  ">
          <h2 className="text-xl font-semibold">{data.title}</h2>
          <p className="mt-2 text-sm max-w-sm max-h-5">{data.description}</p>
        </div>
        <div className="flex mt-2 justify-between w-full">
          <div className="flex justify-start gap-5 w-3/5 ">{renderSvg()}</div>
        </div>
      </div>
      <OpenProjectDescriptionButton data={data} />
    </div>
  );
}

export { Card };
