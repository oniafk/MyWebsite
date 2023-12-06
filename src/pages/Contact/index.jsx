import React from "react";

const UnderlinedTitle = ({ children, underlineSvg }) => (
  <span className="relative inline-block">
    <span
      className="absolute inset-x-0 bottom-0 h-3 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("${underlineSvg}")`,
      }}
    ></span>
    {children}
  </span>
);

const UnderlinedText = ({ children, underlineSvg }) => (
  <span className="relative inline-block">
    <span
      className="absolute inset-x-0 bottom-0 h-2 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url("${underlineSvg}")`,
        bottom: "-6px",
      }}
    ></span>
    {children}
  </span>
);

function Contact() {
  const underlineSvgUrl =
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg";

  return (
    <>
      <main className="w-full h-screen">
        <section className="w-4/5 h-full mx-auto px-8 flex flex-col justify-center">
          <h1 className="text-7xl mb-8 font-fontHeader">
            Get in{" "}
            <UnderlinedTitle underlineSvg={underlineSvgUrl}>
              touch
            </UnderlinedTitle>
            !
          </h1>
          <p className="text-lg max-w-3xl mb-12">
            As an adaptable UX/UI designer and resourceful developer, I
            specialize in crafting user-centric designs and implementing
            inventive coding solutions. I am committed to seamlessly integrating
            design aesthetics with practical development, ensuring the success
            of each digital venture. I am eager to contribute to the team and
            discuss how my skills align with the goals of your projects.
          </p>

          <h3 className="mt-5 mb-2 text-3xl font-fontHeader ">
            Send an Email:
          </h3>

          <p className="text-xl mb-1">
            <UnderlinedText underlineSvg={underlineSvgUrl}>
              manufelipearias@gmail.com
            </UnderlinedText>
          </p>

          <h3 className="mt-8 mb-4 font-fontHeader text-xl">Or take a look:</h3>
          <div className="flex gap-2">
            <a
              className="text-lg text-slate-600 rounded-full border-solid border-2 border-slate-700 py-1 px-5 flex items-center transition duration-300 ease-in-out hover:text-slate-600 hover:bg-slate-300"
              href=""
            >
              LinkedIn{" "}
              <span
                className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover ml-2"
                style={{ backgroundImage: "url(/linkB.svg)" }}
              ></span>
            </a>
            <a
              className="text-lg text-slate-600 rounded-full border-solid border-2 border-slate-700 py-1 px-5 flex items-center transition duration-300 ease-in-out hover:text-slate-600 hover:bg-slate-300"
              href=""
            >
              GitHub{" "}
              <span
                className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover ml-2"
                style={{ backgroundImage: "url(/linkB.svg)" }}
              ></span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export { Contact };
