import { useContext } from "react";
import { FilterContext } from "../../context";
import { Layout } from "../../components/Layout";

import { Card } from "../../components/Card";

function Projects() {
  const context = useContext(FilterContext);

  const viewProjects = () => {
    return context.filterItems?.map((item) => {
      return (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          img={item.imageUrl}
          category={item.category}
          svg={item.svgImages}
          longDescription={item.longDescription}
          svgDescription={item.svgImagesDescription}
          year={item.year}
          role={item.role}
          link={item.link}
        />
      );
    });
  };

  return (
    <section className="flex flex-col items-center justify-center w-full h-auto">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-4xl font-semibold font-fontHeader">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-5 w-full h-full mb-5">
        {viewProjects()}
      </div>
    </section>
  );
}

export { Projects };
