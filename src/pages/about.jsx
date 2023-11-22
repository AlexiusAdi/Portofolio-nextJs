import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profilePict from "../../public/images/profile/profile-picture.png";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta name="about me" content="About me/Alexius Adi Nugroho"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light 2xl">
        <Layout className="pt-4">
          <AnimatedText text="About me" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 shadow-2xl lg:col-span-7 sm:col-span-5">
              <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light dark:rounded " />
              <Image
                className="w-full h-auto rounded-2xl"
                src={profilePict}
                alt="My Photo"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className="col-span-4 flex flex-col items-start justify-start lg:col-span-7 md:col-span-7 sm:col-span-7 xs:col-span-6">
              <p className="text-2xl font-semibold">
                Hello! My name is Alexius Adi Nugroho, but you can call me Adi.
                Im a Law graduate from Pancasila University who decided to
                embark on a new and exciting career path. After spending a few
                years in the law-related field, I realized that I was seeking a
                fresh challenge that aligned with my true passion.
              </p>
              <p className="text-2xl font-semibold pt-4">
                In 2022, I took the leap into the world of programming and began
                my journey by enrolling in the Program Fasilitas Bapekraf
                Digital Talent 2022. During this program, I gained basics
                knowledge of Android Development.
              </p>
              <p className="text-2xl font-semibold pt-4">
                As I continued to explore my passion for programming, I
                discovered my strong interest in Full Stack Web Development and
                I decided to pursue a scholarship at Purwadhika Digital
                Technology School. During my time at Purwadhika, I gained
                experience from both front-end and back-end technologies.
                Through hands-on project I acquired knowledge about implementing
                effecient server-side architecture, working with databases,
                handling authentication and security, integrate APIs , and a
                user-friendly interfaces.
              </p>
              <p className="text-2xl font-semibold pt-4">
                My journey has only just begun. As i continued to grow and
                develop my skills as a web development, Im ready to embrace new
                opportunities and explore new technologies with your team.
              </p>
            </div>
          </div>
          <AnimatedText text="My Experience" className="!text-6xl !pt-10" />
          <div className="grid w-full grid-cols-2 gap-16 lg:grid-cols-1 lg:gap-0">
            <div className="col-span-1 flex flex-col items-start justify-start">
              <div className="p-4">
                <h1 className="text-base flex items-center bg-dark text-light p-1 px-2 rounded-full font-semibold w-14 dark:bg-light dark:text-dark">
                  2023
                </h1>
                <h1 className="text-2xl underline">
                  Purwadhika Digital Technology School
                </h1>
                <p>
                  I gained experience front-end and back-end technologies
                  through hand-on project
                </p>
              </div>
              <div className="p-4">
                <h1 className="text-base flex items-center bg-dark text-light p-1 px-2 rounded-full font-semibold w-14 dark:bg-light dark:text-dark">
                  2023
                </h1>
                <h1 className="text-2xl underline">
                  Asean Data Science Explorers 2023
                </h1>
                <p>I learn about SAP Analytics Cloud</p>
              </div>
              <div className="p-4 ">
                <h1 className="text-base flex items-center bg-dark text-light p-1 px-2 rounded-full font-semibold w-14 dark:bg-light dark:text-dark">
                  2022
                </h1>
                <h1 className="text-2xl underline">
                  Program Fasilitasi Baparekraf Digital Talent 2022 - Tahap 2
                </h1>
                <p>
                  my starting journey, I gained basic knowledge of Android
                  Development using Kotlin
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col items-start justify-start">
              <div className="p-4">
                <h1 className="text-base flex items-center bg-dark text-light p-1 px-2 rounded-full font-semibold w-62 dark:bg-light dark:text-dark">
                  November 2020 - February 2023
                </h1>
                <h1 className="text-2xl underline">
                  Pt.Krom Bank Indonesia, Tbk
                </h1>
                <p>Staff Legal</p>
              </div>
              <div className="p-4">
                <h1 className="text-base flex items-center bg-dark text-light p-1 px-2 rounded-full font-semibold w-24 dark:bg-light dark:text-dark">
                  2014-2018
                </h1>
                <h1 className="text-2xl underline">
                  Bachelor of law - Pancasila University
                </h1>
                <p>Bachelor degree of Law from Pancasila University</p>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
