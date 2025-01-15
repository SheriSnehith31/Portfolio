import React from "react";

function Education() {
  return (
    <section className="py-20 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <p className="text-lg mb-4">B.Tech from Sreenidhi Institute of Science and Technology</p>
      <h3 className="text-2xl font-semibold mb-2">Positions Held</h3>
      <p className="text-lg">
        President of{" "}
        <a
          href="https://www.instagram.com/techvisionclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Tech Vision Club
        </a>
      </p>
      <p className="text-lg font-semibold mt-4">Position: President of Tech Vision Club</p>
    </section>
  );
}

export default Education;
