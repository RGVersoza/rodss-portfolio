import React from "react";

const About = React.memo(() => (
  <section
    id="about"
    className="min-h-screen flex flex-col justify-center items-center bg-[#1e293b] text-white px-4 py-12"
  >
    <h2 className="text-3xl font-bold">About Me</h2>
    <p className="mt-4 text-lg text-gray-300 max-w-xl text-center">
      I'm a passionate frontend developer focused on building responsive and
      engaging user experiences using modern web technologies.
    </p>
  </section>
));

export default About;
