import Logo from "./assets/icons/logo.svg";
import Resume from "./assets/resume.pdf";
import MyImage from "./assets/images/Obaseki_Noruwa.jpg";
import Haraka from "./assets/images/haraka.png";
import Ecolabz from "./assets/images/ecolabz.png";


function getImageUrl(name: string) {
  return new URL(`./assets/images/${name}`, import.meta.url).href;
}
import { useRef, useState, useEffect } from "react";

function App() {
  const menuBtn = useRef<HTMLDivElement | null>(null);
  const navItem = useRef<HTMLDivElement | null>(null);
  const changeBg = useRef<HTMLDivElement | null>(null);
  const themeMenu = useRef<HTMLDivElement | null>(null);

  const themeMenuHandler = () => {
    themeMenu.current?.classList.toggle("hidden");
  };

  const [theme, setTheme] = useState(
    window.localStorage.theme ? window.localStorage.theme : "dark"
  );

  const element = window.document.documentElement;
  const darkQuery = window.matchMedia("prefers-color-scheme: dark");

  const options = [
    {
      text: "light",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            className="stroke-slate-500"
          ></path>
          <path
            d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
            className="stroke-slate-500"
          ></path>
        </svg>
      ),
    },
    {
      text: "dark",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
            className="fill-transparent"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            className="fill-slate-500 dark:fill-slate-500"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            className="fill-slate-500 dark:fill-slate-500"
          ></path>
        </svg>
      ),
    },
    {
      text: "system",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-laptop fill-slate-500 w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
        </svg>
      ),
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        window.localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        window.localStorage.setItem("theme", "light");
        break;
      default:
        window.localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  });

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  const about = useRef<HTMLDivElement | null>(null);
  const experience = useRef<HTMLDivElement | null>(null);
  const work = useRef<HTMLDivElement | null>(null);
  const contact = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    menuBtn.current?.classList.toggle("toggleMenu");
    navItem.current?.classList.toggle("hidden");
  };

  const goToAbout = () => {
    setTimeout(() => {
      about.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }, 100);

    toggleMenu();
  };

  const goToExperience = () => {
    setTimeout(() => {
      experience.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    toggleMenu();
  };

  const goToWork = () => {
    setTimeout(() => {
      work.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    toggleMenu();
  };

  const goToContact = () => {
    setTimeout(() => {
      contact.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
    toggleMenu();
  };

  return (
    <>
      <main className="bg-white font-sans dark:bg-slate-900">
        <nav className="lg:px-14 sm:px-8 px-6 grid grid-cols-8 lg:h-[5.5rem] sm:h-[4rem] h-[4rem]  items-center sticky top-0 z-40 dark:backdrop-blur-md backdrop-blur-md">
          <a href="/" className="col-span-2  relative sm:top-0 sm:left-0">
            <img src={Logo} alt="Logo" className="lg:w-[3rem] w-[3rem]" />
          </a>
          <div
            className="col-span-6 lg:grid hidden lg:relative lg:top-0 lg:right-0 fixed top-0 right-0 lg:h-12 lg:w-full w-full  h-screen lg:items-center lg:bg-transparent bg-[#000000cc] z-30 lg:overflow-hidden overflow-y-auto transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none"
            ref={navItem}
          >
            <ul className="lg:place-content-end place-content-center lg:mt-0 mt-20 flex lg:flex-row flex-col flex-wrap items-center w-full lg:space-x-12 lg:space-y-0 space-y-8">
              <li>
                <h5
                  onClick={goToAbout}
                  className="lg:text-base text-2xl  lg:font-semibold font-extrabold lg:text-slate-900 text-white dark:text-gray-100 px-2 py-2 cursor-pointer hover:text-indigo-900 dark:hover:text-red-300"
                >
                  About
                </h5>
              </li>

              <li>
                <h5
                  onClick={goToExperience}
                  className="lg:text-base text-2xl  lg:font-semibold font-extrabold lg:text-slate-900 text-white dark:text-gray-100 px-2 py-2 cursor-pointer hover:text-indigo-900 dark:hover:text-red-300"
                >
                  Experience
                </h5>
              </li>
              <li>
                <h5
                  onClick={goToWork}
                  className="lg:text-base text-2xl  lg:font-semibold font-extrabold lg:text-slate-900 text-white dark:text-gray-100 px-2 py-2 cursor-pointer hover:text-indigo-900 dark:hover:text-red-300"
                >
                  Work
                </h5>
              </li>
              <li>
                <a
                  onClick={goToContact}
                  className="lg:text-base text-2xl  lg:font-semibold font-extrabold lg:text-slate-900 text-white dark:text-gray-100 px-2 py-2 cursor-pointer hover:text-indigo-900 dark:hover:text-red-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={Resume}
                  className="lg:text-base text-2xl  lg:font-semibold font-extrabold lg:text-indigo-800 text-white dark:text-gray-100 dark:border-gray-100 hover:dark:border-red-300  border-2 lg:border-indigo-700 border-white  lg:px-4 lg:py-2 px-10 py-4 block lg:mt-0 mt-5 lg:mb-0 mb-5 rounded-md dark:hover:text-red-300"
                  download
                >
                  Resume
                </a>
              </li>
              <li className="flex flex-row items-center">
                {theme === "dark" ? (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 cursor-pointer"
                    onClick={themeMenuHandler}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                      className="fill-transparent"
                    ></path>
                    <path
                      d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                      className="fill-slate-400 dark:fill-white"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                      className="fill-slate-400 dark:fill-white"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 cursor-pointer"
                    onClick={themeMenuHandler}
                  >
                    <path
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      className="stroke-yellow-400 dark:stroke-yellow-400"
                    ></path>
                    <path
                      d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                      className="stroke-yellow-400 dark:stroke-yellow-400"
                    ></path>
                  </svg>
                )}
              </li>
              <div
                ref={themeMenu}
                className="hidden lg:fixed lg:top-24 lg:right-7  lg:translate-x-0 lg:translate-y-0 fixed translate-x-[50%] translate-y-[50%] top-[50%] right-[50%]"
              >
                <div className="rounded-md bg-white dark:bg-slate-100 shadow shadow-gray-200 py-1  w-44 flex flex-col justify-center">
                  {options.map((data) => (
                    <div
                      key={data.text}
                      className={` font-bold [&>span]:text-base ${
                        theme === data.text && "[&>span]:text-indigo-400"
                      } flex flex-row items-center space-x-4 [&>svg]:my-2 cursor-pointer px-2 hover:bg-gray-50`}
                      onClick={() => {
                        setTheme(data.text);
                        themeMenu.current?.classList.toggle("hidden");
                      }}
                    >
                      {data.icon}{" "}
                      <span className="capitalize">{data.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ul>
          </div>
          <div
            onClick={toggleMenu}
            className="fixed top-7 bg-yellow-300 right-8 lg:hidden z-50"
            ref={menuBtn}
          >
            <div
              className="w-6 h-[2px] bg-[#f87171] rounded  before:absolute before:content-[''] before:w-8 before:h-[2px] before:bg-[#f87171] before:rounded before:-translate-y-2 before:transition-all before:duration-500 after:absolute after:content-[''] after:w-8 after:h-[2px] after:bg-[#f87171] after:rounded after:translate-y-2 after:transition-all after:duration-500 dark:bg-white dark:after:bg-white dark:before:bg-white"
              ref={changeBg}
            ></div>
          </div>
        </nav>
        <div className="hidden fixed top-0 lg:left-14 w-[4rem] h-screen lg:grid">
          <ul className="place-content-center flex flex-col space-y-12">
            <li>
              <a
                href="https://github.com/noruwa03"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 dark:stroke-slate-100 stroke-indigo-800 hover:stroke-red-400 dark:hover:stroke-red-300"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/obasekinoruwa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 dark:stroke-slate-100 stroke-indigo-800 hover:stroke-red-400 dark:hover:stroke-red-300"
                >
                  <title>Twitter</title>
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/obaseki-noruwa-184a4020b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 dark:stroke-slate-100 stroke-indigo-800 hover:stroke-red-400 dark:hover:stroke-red-300"
                >
                  <title>LinkedIn</title>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <section id="" className="lg:pt-16 pt-24 pb-16 lg:px-48 sm:px-8 px-6">
          <h1 className="lg:text-2xl text-lg  font-normal dark:font-medium dark:text-red-300 text-red-400 lg:mb-8 mb-2">
            Hi, my name is
          </h1>
          <h2 className="lg:text-7xl sm:text-5xl  text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-purple-600 dark:text-[#ccd6f6] font-extrabold lg:my-2 my-0">
            Obaseki Noruwa.
          </h2>
          <h3 className="lg:text-6xl sm:text-5xl text-3xl text-indigo-800 dark:text-[#8892b0] font-extrabold lg:my-0 my-0">
            Creative tech enthusiast.
          </h3>
          <p className="lg:w-3/5 w-5/5 mt-8 sm:mb-10  mb-14  lg:text-lg text-base text-slate-700 dark:text-gray-400 font-medium">
            I'm a creative web developer that design, build scaleable web
            applications. I help awesome people to build websites. I have great
            organizational and time utilization skill with a willingness to
            learn.
          </p>
          <a
            href="mailto:noruwaobaseki@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-bold text-slate-800 py-4 px-10 shadow-[0px_7px_0px_0px_#94a3b8] rounded-xl bg-red-100 uppercase hover:shadow-[0px_4px_0px_0px_#94a3b8] dark:shadow-[0px_7px_0px_0px_#94a3b8] dark:hover:shadow-[0px_4px_0px_0px_#94a3b8] transition-all duration-150 dark:bg-indigo-50 dark:text-slate-700"
          >
            Hire me
          </a>
        </section>

        <section
          id="about"
          ref={about}
          className="lg:py-24 py-20 lg:px-48 sm:px-8 px-6"
        >
          <h1 className="lg:text-3xl text-2xl  font-bold text-indigo-800 dark:text-[#ccd6f6] mb-8">
            About Me
          </h1>
          <div className="grid lg:grid-cols-8 grid-cols-4 gap-x-20 gap-y-8">
            <div className="lg:col-span-5 col-span-4">
              <p className="lg:text-lg  sm:text-base text-sm text-slate-600 dark:text-gray-400 font-medium mb-4">
                Hi there, My name is Noruwa. I am able to design, code and
                deploy web apps in an organized and efficient manner. I am an
                avid learner, quick to grasp new technologies to design
                effective and scalable products.
              </p>
              <p className="lg:text-lg  sm:text-base text-sm text-slate-600 dark:text-gray-400 font-medium mb-4">
                I have experience implementing links, tools and third party APIs
                into web designs and i can prepare documents and keep accurate
                daily reports. I have excellent verbal and written skills that
                make it easy to understand information and to articulate my
                ideas clearly, so others can understand.
              </p>
              <p className="lg:text-lg  sm:text-base text-sm text-slate-600 dark:text-gray-400 font-medium mb-4">
                Here is a list of languages and tools i use:
              </p>
              <div className="grid grid-cols-4 lg:gap-8 gap-2">
                <div className="col-span-2 space-y-1">
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      HTML, CSS, SCSS
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      JavaScript ES6+
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      Typescript
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      Vue Js
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      Nuxt Js
                    </h4>
                  </div>
                </div>

                <div className="col-span-2 space-y-1">
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      React Js
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      Next Js
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400 font-medium">
                      Figma
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400 font-medium">
                      Node
                    </h4>
                  </div>
                  <div className="flex flex-row items-center sm:space-x-3 space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-record stroke-indigo-800 dark:stroke-white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10z" />
                    </svg>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400  font-medium">
                      PHP & Laravel
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 col-span-4 lg:mt-0 mt-12">
              <img
                src={MyImage}
                alt="Obaseki Noruwa"
                className="rounded-md shadow shadow-gray-200 lg:w-full sm:w-3/5 w-4/5 mx-auto about-me-img"
              />
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={experience}
          className="lg:py-28 py-20 lg:px-48 sm:px-8 px-6"
        >
          <h1 className="lg:text-3xl text-2xl  font-bold text-indigo-800 dark:text-[#ccd6f6] mb-8">
            Where I’ve Worked
          </h1>
          <div className="grid lg:grid-cols-8 sm:grid-cols-6 grid-col-4 gap-8">
            <div className="lg:col-span-4 sm:col-span-3 col-span-4">
              <a
                href="https://ecolabz.io"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:text-2xl text-base  text-slate-700 dark:text-gray-300 font-bold"
              >
                Ecolabz
              </a>
              <p className="lg:text-lg text-base  text-slate-600 dark:text-gray-400 font-normal mt-2 mb-4">
                Frontend Engineer @ Ecolabz
                <span className="block lg:text-base text-sm font-semibold text-indigo-700 dark:text-[#ccd6f6]">
                  June 2022 - Present
                </span>
              </p>
              <div className="">
                <div className="space-y-2">
                  <div>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400 font-medium">
                      Collaborated with the ui/ux designer to build the website,
                      Write modern, maintainable code for ecolabz web projects
                      projects.
                    </h4>
                  </div>
                  <div>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400 font-medium">
                      Integrated third-party mailchimp API to improved product
                      accessibility and communication.
                    </h4>
                  </div>
                  <div>
                    <h4 className="lg:text-base text-sm  text-slate-600 dark:text-gray-400 font-medium">
                      Work with different tools, platforms, frameworks, and
                      backend as a service such as firebase.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          ref={work}
          className="lg:py-24 py-20 lg:px-48 sm:px-8 px-6"
        >
          <h1 className="lg:text-3xl text-2xl  font-bold text-indigo-800 dark:text-[#ccd6f6] mb-8">
            Work Development
          </h1>
          <div className="grid sm:grid-cols-8 grid-cols-4 gap-8 space-y-16">
            <div className="sm:col-span-4 col-span-4">
              <img src={Haraka} alt="Haraka" className="mb-4" />
              <a
                href="https://haraka.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:text-2xl text-lg  text-slate-800 dark:text-white font-bold underline decoration-wavy decoration-indigo-800 dark:decoration-white"
              >
                Haraka shop
              </a>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-6">
                Haraka is an online food and grocery order and delivery
                platform. Skip the confusing hours of searching and comparing
                vendors with all stores, reviews and delivery within your reach.
              </p>
            </div>
            <div className="sm:col-span-4 col-span-4">
              <img src={Ecolabz} alt="Ecolabz" className="mb-4" />
              <a
                href="https://ecolabz.io"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:text-2xl text-lg  text-slate-800 dark:text-white font-bold underline decoration-wavy decoration-indigo-800 dark:decoration-white"
              >
                Ecolabz
              </a>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-6">
                Ecolabz is a startup venture studio that focuses on ideating,
                creating, designing, developing and launching startups and
                companies.
              </p>
            </div>
            {/* <div className="sm:col-span-4 col-span-4">
              <img src={DripAda} alt="DripAda" className="mb-4" />
              <a
                href="https://dripada.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="lg:text-2xl text-lg  text-slate-800 dark:text-white font-bold underline decoration-wavy decoration-indigo-800 dark:decoration-white"
              >
                DripAda
              </a>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-6">
                Ecolabz is a startup venture studio that focuses on ideating,
                creating, designing, developing and launching startups and
                companies.
              </p>
            </div> */}
          </div>
        </section>

        <section ref={work} className="lg:py-24 py-20 lg:px-48 sm:px-8 px-6">
          <h1 className="lg:text-3xl text-2xl  font-bold text-indigo-800 dark:text-[#ccd6f6] mb-8">
            Things I've Built
          </h1>
          <div className="grid sm:grid-cols-8 grid-cols-4 gap-x-8 lg:gap-y-20 gap-y-8 items-center">
            <div className="sm:col-span-6 col-span-4">
              <img src={getImageUrl("ecommerce_app.PNG")} alt="ShopperCart" />
            </div>
            <div className="sm:col-span-2 col-span-4">
              <h2 className="lg:text-4xl text-2xl  text-slate-800 dark:text-white font-bold">
                shopperCart
              </h2>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-3">
                Ecommerce web app created with tailwindcss and firebase.
              </p>
              <div className="mt-4">
                <a
                  href="https://ecommerce-firebase-sigma.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-white"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="sm:col-span-6 col-span-4">
              <img src={getImageUrl("draft_blog.PNG")} alt="DraftBlog" />
            </div>
            <div className="sm:col-span-2 col-span-4">
              <h2 className="lg:text-4xl text-2xl  text-slate-800 dark:text-white font-bold">
                DraftBlog
              </h2>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-3">
                Personal blogging site created with nuxt js, tailwindcss and
                firebase.
              </p>
              <div className="mt-4">
                <a
                  href="https://draft-blog.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-white"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="sm:col-span-6 col-span-4">
              <img
                src={getImageUrl("dictionary_app.PNG")}
                alt="DictionaryApp"
              />
            </div>
            <div className="sm:col-span-2 col-span-4">
              <h2 className="lg:text-4xl text-2xl  text-slate-800 dark:text-white font-bold">
                Dictionary App
              </h2>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-3">
                Built with HTML, CSS, JavaScript.
              </p>
              <div className="mt-4">
                <a
                  href="https://dictionary-app-vert.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-white"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="sm:col-span-6 col-span-4">
              <img src={getImageUrl("todo_app.PNG")} alt="TodoApp" />
            </div>
            <div className="sm:col-span-2 col-span-4">
              <h2 className="lg:text-4xl text-2xl  text-slate-800 dark:text-white font-bold">
                TodoApp
              </h2>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-3">
                Basic TodoApp build with HTML, SCSS, JavaScript.
              </p>
              <div className="mt-4">
                <a
                  href="https://todo-app-noruwa03.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-white"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <div className="sm:col-span-6 col-span-4">
              <img src={getImageUrl("nft_site.png")} alt="NFT" />
            </div>
            <div className="sm:col-span-2 col-span-4">
              <h2 className="lg:text-4xl text-2xl  text-slate-800 dark:text-white font-bold">
                NFT
              </h2>
              <p className="lg:text-base text-sm  font-medium text-slate-800 dark:text-gray-400 mt-3">
                NFT collectibles gallery studio.
              </p>
              <div className="mt-4">
                <a
                  href="https://nordev-nft.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-white"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:py-32 py-20 lg:px-48 sm:px-8 px-6">
          <h1 className="lg:text-3xl text-2xl  text-center font-bold text-indigo-800 dark:text-[#ccd6f6] mb-8">
            Other activities
          </h1>
          <div className="grid lg:grid-cols-9 sm:grid-cols-6 grid-cols-4 gap-8">
            <div className="lg:col-span-3 sm:col-span-3 col-span-4 bg-gray-50 dark:bg-indigo-50 rounded-md hover:dark:shadow-[4px_4px_0px_0px_#94a3b8] cursor-default p-6 shadow-[7px_7px_0px_0px_#e5e7eb] dark:shadow-[7px_7px_0px_0px_#94a3b8] transition-all duration-150">
              <div className=" space-y-4">
                <a
                  href="https://dev.to/noruwa/animated-hamburger-menu-with-tailwindcss-1j0b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-slate-600"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>

                <h3 className="font-bold text-lg  text-slate-600">
                  Animated Hamburger Menu with Tailwindcss
                </h3>
                <p className="sm:text-base text-sm  text-slate-800">
                  Tutorial on how to create hamburger menu with tailwindcss
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 sm:col-span-3 col-span-4 bg-gray-50 dark:bg-indigo-50 rounded-md hover:dark:shadow-[4px_4px_0px_0px_#94a3b8] cursor-default p-6 shadow-[7px_7px_0px_0px_#e5e7eb] dark:shadow-[7px_7px_0px_0px_#94a3b8] transition-all duration-150">
              <div className=" space-y-4">
                <a
                  href="https://dev.to/noruwa/folder-structure-for-modern-web-applications-4d11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-slate-600"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>

                <h3 className="font-bold text-lg  text-slate-600">
                  Folder Structure for Modern Web Applications
                </h3>
                <p className="sm:text-base text-sm  text-slate-800">
                  A well-organized folder structure makes a developer appear
                  professional.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3 sm:col-span-3 col-span-4 bg-gray-50 dark:bg-indigo-50 rounded-md hover:dark:shadow-[4px_4px_0px_0px_#94a3b8] cursor-default p-6 shadow-[7px_7px_0px_0px_#e5e7eb] dark:shadow-[7px_7px_0px_0px_#94a3b8] transition-all duration-150">
              <div className=" space-y-4">
                <a
                  href="https://dev.to/noruwa/understanding-errors-in-javascript-error-objects-3db4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-external-link stroke-slate-600 dark:stroke-slate-600"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>

                <h3 className="font-bold text-lg  text-slate-600">
                  Understanding Errors In JavaScript: Error Objects
                </h3>
                <p className="sm:text-base text-sm  text-slate-800">
                  A basic tutorial on errors when executing JavaScript code.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          ref={contact}
          className="lg:py-28 py-20 lg:px-48 sm:px-8 px-6"
        >
          <h2 className="lg:text-5xl text-3xl  text-indigo-800 dark:text-[#ccd6f6] text-center font-bold">
            Get In Touch
          </h2>
          <div className="lg:w-3/5 w-5/5 mx-auto my-8">
            <p className="lg:text-lg sm:text-base text-sm font-medium  text-center text-slate-800 dark:text-gray-400 mb-14">
              I’m currently open for a new job opportunity, If you think i can
              add value to your company or team, my inbox is always open.
              Whether you have a question or just want to say hi, kindly click
              the button below and send me a message.
            </p>
            <div>
              <div className="flex flex-row justify-center">
                <a
                  href="mailto:noruwaobaseki@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-bold text-slate-800 py-4 px-10 shadow-[0px_7px_0px_0px_#94a3b8] rounded-xl bg-red-100 uppercase hover:shadow-[0px_4px_0px_0px_#94a3b8] dark:shadow-[0px_7px_0px_0px_#94a3b8] dark:hover:shadow-[0px_4px_0px_0px_#94a3b8] transition-all duration-150 dark:bg-indigo-50 dark:text-slate-700"
                >
                  Say Hi
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-20 pb-8 lg:px-48 sm:px-8 px-6">
          <div className="lg:hidden grid">
            <ul className="place-content-center flex flex-row space-x-10 my-8">
              <li>
                <a
                  href="https://github.com/noruwa03"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 dark:stroke-slate-100 stroke-indigo-800 hover:stroke-red-400 dark:hover:stroke-red-300"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/obasekinoruwa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 dark:stroke-slate-100 stroke-indigo-800 hover:stroke-red-400 dark:hover:stroke-red-300"
                  >
                    <title>Twitter</title>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/obaseki-noruwa-184a4020b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin transition ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none  hover:-translate-y-1 dark:stroke-slate-100 stroke-indigo-800 hover:stroke-red-400 dark:hover:stroke-red-300"
                  >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:grid">
            <div className="sm:flex sm:flex-row sm:place-content-center  text-sm text-slate-800 dark:text-gray-400 font-bold text-center">
              Design inspiration by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-800 dark:text-[#ccd6f6] font-bold lg:ml-2"
              >
                {" "}
                Brittany Chiang
              </a>
              . Developed by
              <span className="text-indigo-800 dark:text-[#ccd6f6] font-bold ml-2">
                Obaseki Noruwa
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
