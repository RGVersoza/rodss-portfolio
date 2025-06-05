import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const OtherPage = () => {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("easterEggUnlocked") === "true") {
      setUnlocked(true);
      // Optionally clear the flag so it must be unlocked again next time:
      // localStorage.removeItem("easterEggUnlocked");
    } else {
      // Redirect or show nothing
      navigate("/");
    }
  }, [navigate]);

  const handleGoBack = () => {
    navigate("/"); // back to main portfolio page
  };

  if (!unlocked) return null; // or a loading spinner

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/20 dark:bg-gray-800/20 backdrop-blur-lg border-b border-white/10 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div
            className="text-xl font-semibold text-gray-900 dark:text-white cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            John Doe
          </div>
          <button
            onClick={handleGoBack}
            className="bg-transparent hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded border border-blue-500 hover:border-transparent rounded"
            title="Back to main"
          >
            Go Back
          </button>
        </div>
      </nav>

      <main className=" min-h-screen flex flex-row">
        {/* Full-height Aside */}
        <aside className="w-full md:w-1/3 bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-10 border-r border-gray-200 dark:border-gray-800 min-h-screen">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-blue-500"
          />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            John Doessss
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Frontend Developer
          </p>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
            johndoe@email.com
            <br />
            +1 234 567 8901
          </div>
          <div className="flex gap-6 mb-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              <FaLinkedin size={32} />
            </a>
          </div>
        </aside>

        {/* Right Section */}
        <section className="flex-1 flex flex-col gap-12 justify-center px-8 py-16 bg-gray-50 dark:bg-gray-950 min-h-screen">
          {/* About */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              About Me
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Passionate frontend developer with experience in React, Tailwind
              CSS, and building responsive web applications. I enjoy creating
              beautiful, user-friendly interfaces and collaborating with teams
              to deliver high-quality products.
            </p>
          </div>
          {/* Experience */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Experience
            </h3>
            <ul className="list-disc pl-8 text-xl text-gray-700 dark:text-gray-300 space-y-4">
              <li>
                <strong>Frontend Developer</strong> - ABC Company (2022–Present)
                <br />
                Developed and maintained web applications using React and
                Tailwind CSS.
              </li>
              <li>
                <strong>Web Developer Intern</strong> - XYZ Solutions
                (2021–2022)
                <br />
                Assisted in building landing pages and UI components.
              </li>
            </ul>
          </div>
          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h3>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              B.S. in Computer Science, University Name, 2018–2022
            </p>
          </div>
          {/* Skills */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Skills
            </h3>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg">
                React
              </span>
              <span className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg">
                JavaScript
              </span>
              <span className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg">
                Tailwind CSS
              </span>
              <span className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg">
                HTML
              </span>
              <span className="bg-blue-100 text-blue-800 px-5 py-2 rounded-full text-lg">
                CSS
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OtherPage;
