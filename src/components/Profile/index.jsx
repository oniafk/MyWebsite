import React, { useState, useEffect } from "react";

const UnderlinedText = ({ children }) => (
  <span className="relative inline-block">
    <span
      className="absolute inset-x-0 bottom-0 h-2 bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/664131/underline.svg")',
      }}
    ></span>
    {children}
  </span>
);

function Profile() {
  const name = (
    <>
      My name is <UnderlinedText>Manuel</UnderlinedText>
    </>
  );
  const profile = (
    <>
      I'm <UnderlinedText>frontend</UnderlinedText> developer
    </>
  );

  const [title, setTitle] = useState(name);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitle(toggle ? profile : name);
      setToggle((prevToggle) => !prevToggle);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [toggle, profile, name]);

  return (
    <>
      <main className="w-full h-screen">
        <section className="w-4/5 h-full mx-auto px-8 flex flex-col justify-center">
          <h1 className="text-7xl mb-8 font-fontHeader">
            Hi! <br />
            {title}
          </h1>
          <p className="text-lg max-w-3xl">
            Frontend developer pushing boundaries to create distinctive and
            visually compelling digital experiences for a diverse audience.
          </p>
        </section>
      </main>
    </>
  );
}

export { Profile };
