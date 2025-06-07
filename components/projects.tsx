import React from "react";
import { PinContainer } from "./acernity-ui";
import { ProjectCooperativeImg, ProjectMovieImg } from "@/asset";
import Image from "next/image";
import { GradientText } from "./react-bits";

const projects = () => {
  const projects_list = [
    {
      title: "Cooperative Dashboard",
      description:
        "The Cooperative Dashboard is a centralized interface designed to monitor and manage cooperative-related activities and data.",
      href: "https://koperasi-fe-wsxt.vercel.app/",
      img: ProjectCooperativeImg,
    },
    {
      title: "Movie Recommendation System",
      description:
        "The Movie Recommendation System is a personalized system that suggests movies based on user preferences and historical data.",
      href: "https://movie-list-six-coral.vercel.app/",
      img: ProjectMovieImg,
    },
  ];
  return (
    <div className="px-4 md:px-[14vw] py-12">
      <div className="mb-12">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={4}
          showBorder={false}
          className="text-4xl"
        >
          My Projects
        </GradientText>
      </div>
      <div className="flex gap-x-4 justify-center">
        {projects_list.map(({ description, href, title, img }, index) => {
          return (
            <PinContainer title={title} href={href} key={index}>
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[22rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  {title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{description}</span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <Image
                    src={img}
                    alt="project"
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </PinContainer>
          );
        })}
      </div>
    </div>
  );
};

export default projects;
