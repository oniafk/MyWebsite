function About() {
  const cardStyle = {
    backgroundImage: `url(https://www.freecodecamp.org/news/content/images/2021/07/Screenshot-2021-07-20-at-9.10.06-PM.png)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className="flex flex-col justify-between w-5/6 h-auto mt-28 p-16 z-9  bg-white bg-opacity-90">
      <div className=" flex w-full  justify-between content-center">
        <div className="w-1/2">
          <h2 className="mb-5 font-semibold font-fontHeader text-4xl">About</h2>
          <p className="text-base text-gray-500">
            Hello, I'm Manuel, an enthusiastic web developer with a special
            focus on UX/UI design. <br /> My fascination with new technologies
            fuels my continuous learning, and I'm excited to contribute
            creativity and enthusiasm to innovative projects. My approach
            revolves around collaboration and adaptability, key elements that I
            believe are fundamental in the ever-evolving world of technology.
            <br />
            Ready to tackle new challenges and transform ideas into impactful
            digital experiences, I am committed to learning and growing with
            each opportunity. My curiosity extends beyond the screen, exploring
            both programming and aesthetics. I believe in the importance of
            simplicity and usability to create experiences that resonate with
            users.
            <br /> Let's talk about how I can bring my passion and energy to
            your team and take our projects to the next level!
          </p>
        </div>
        <div className="w-1/3 h-full pt-10 pb-10 border-t-slate-800 border-b-slate-800 border-t-2 border-b-2">
          <figure style={cardStyle}>
            <div className="w-full h-0 pb-[100%] relative">
              <iframe
                src="https://giphy.com/embed/scZPhLqaVOM1qG4lT9"
                className="w-full h-full absolute"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>
              <a href="https://giphy.com/gifs/scaler-official-monday-computer-laptop-scZPhLqaVOM1qG4lT9">
                via GIPHY
              </a>
            </p>
          </figure>
        </div>
      </div>
      <div className="mt-5">
        <div className="w-full mb-4">
          <h3 className="mb-2 font-fontHeader text-xl font-semibold text-slate-700">
            Skills:
          </h3>
          <div className=" flex gap-2">
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/tailwind.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/github.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/chatgpt.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/typescript.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/react.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/html.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/javascript.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/css.svg)" }}
            ></span>
            <span
              className="inline-block h-8 w-8 bg-center bg-no-repeat bg-cover"
              style={{ backgroundImage: "url(/figma.svg)" }}
            ></span>
          </div>
        </div>
        <div className="flex w-full justify-between items-start">
          <div className="w-1/3 h-10 py-2 ">
            <h3 className="font-fontHeader text-xl font-semibold text-slate-700">
              Studies:{" "}
            </h3>
            <p className="text-lg text-gray-500 mt-3">
              AA Poly - Melbourne - Australia (2023)
            </p>
            <p className="text-lg text-gray-500 mt-3">
              Platzi - Bogota - Colombia(2020 - 2023)
            </p>
          </div>

          <div className="w-1/3 h-10 py-2 ">
            <h3 className=" font-fontHeader text-xl font-semibold text-slate-700 mb-5">
              Hire me:{" "}
            </h3>
            <a
              href="/Contact"
              className="text-lg text-gray-500 rounded-full border-solid border-2 border-slate-700 py-2 px-5 transition duration-300 ease-in-out hover:text-slate-600 hover:bg-slate-300 inline-flex items-center"
              style={{ width: "fit-content" }}
            >
              Contact{" "}
              <span
                className="block h-8 w-8 bg-center bg-no-repeat bg-cover ml-2"
                style={{ backgroundImage: "url(/linkB.svg)" }}
              ></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
