import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative lg:px-12 md:px-8 sm:px-2">
      <div className="w-full flex justify-between items-center ">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 lg:mr-2" />
          <CustomLink href="/about" title="About me" className="mx-4 lg:mx-2" />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4 lg:mx-2"
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap ">
          <motion.a
            href="https://www.linkedin.com/in/alexiusadi/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-7 mr-3 lg:w-5 lg:mr-2"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://github.com/AlexiusAdi"
            target={"_blank"}
            whileHover={{ y: -2 }}
            className="w-7 mr-3 lg:w-5 lg:mr-2"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1  ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
