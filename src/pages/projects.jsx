import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GalaxyStore from "../../public/images/projects/galaxyStore.png";
import TransitionEffect from "@/components/TransitionEffect";
import mcInvest from "../../public/images/projects/mcInvest.png";
import hilink from "../../public/images/projects/hilink.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xsL-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg dark:text-light lg:w-full "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-black font-medium text-xl  dark:text-light xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-6xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10 bg-light rounded-full dark:bg-light"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:border-light hover:dark:bg-dark dark:text-dark hover:bg-light hover:text-black border hover:border-dark hover:dark:text-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectOne = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark">
      <div className="absolute -top-0 -right-3 -left-1 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xsL-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg dark:text-light lg:w-full "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 lg:w-full lg:pl-0 lg:mt-6">
        <span className="text-black font-medium text-xl dark:text-light xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl 2xl:text-2xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-small text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:border-light hover:dark:bg-dark dark:text-dark hover:bg-light hover:text-black border hover:border-dark hover:dark:text-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const ProjectTwo = ({ type, title, summary, img, link }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative flex-col dark:bg-dark">
      <div className="absolute -top-0 -right-3 -left-1 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xsL-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg dark:text-light lg:w-full "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 lg:w-full lg:pl-0 lg:mt-6">
        <span className="text-black font-medium text-xl dark:text-light xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline dark:text-light"
        >
          <h2 className="my-2 w-full text-left text-4xl 2xl:text-2xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-small text-dark dark:text-light">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:border-light hover:dark:bg-dark dark:text-dark hover:bg-light hover:text-black border hover:border-dark hover:dark:text-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>My Project</title>
        <meta name="description" content="Alexius Adi Nugroho" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Here some of my work"
            className="mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-10 sm:gap-x-0 md:grid-rows-3">
            <div className="col-span-12">
              <FeaturedProject
                title="Galaxy Store"
                summary="The Galaxy Store is a marketplace specifically designed for Samsung devices, Users can find and buy various type samsung device from smartphone,tablet,watch from the Galaxy Store."
                link="https://jcwdol-0904-galaxystore.vercel.app/"
                type="Featured Project"
                github="https://github.com/circle29/JCWDOL0904-forked"
                img={GalaxyStore}
                className="dark:text-light"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectOne
                title="McInvest"
                summary="McInvest is a web app designed to provide users with a platform to 
                invest in various projects. Users can view a list of available investment 
                projects, monitor their investments through a dashboard, and access 
                reports on their investment history."
                link="https://mcinvest.app/"
                type="Project McInvest"
                img={mcInvest}
                className="dark:text-light"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <ProjectTwo
                title="Hilink"
                summary="Hilink is a web modern UI/UX Website exclusively for my personal training journey, with a specific focus on improving my skills in responsive web development, this website is base from javascript Mastery video content."
                link="https://hilink-responsive.vercel.app/"
                type="Project Hilink"
                img={hilink}
                className="dark:text-light"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
