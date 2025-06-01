import React from "react";
import { AnimatedContent, ScrollVelocity, SpotlightCard } from "./react-bits";
import { IconBrandFigma } from "@tabler/icons-react";
import { Code2, Waypoints } from "lucide-react";
import ShinyText from "./react-bits/shiny-text";
import SpecialityList from "./specilaity-card";

const Speciality = () => {
  const specialities = [
    {
      title: "Fullstack",
      description: "Building seamless web applications, frontend to backend.",
      icon: <Code2 width={42} height={42} />,
    },
    {
      title: "Devops",
      description:
        "Automating deployment and infrastructure for efficient development.",
      icon: <Waypoints width={42} height={42} />,
    },
    {
      title: "UI/UX Designer",
      description:
        "Crafting intuitive and visually appealing user experiences.",
      icon: <IconBrandFigma width={42} height={42} />,
    },
  ];
  return (
    <div className="px-4 md:px-[14vw] py-12">
      <ShinyText
        text={`Specialities`}
        disabled={false}
        speed={3}
        className="text-xl md:text-2xl text-blue-300"
      />
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-6">
        {specialities.map((item, index) => (
          <div className="flex-1" key={index}>
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.5 * (index + 1)}
            >
              <SpotlightCard
                key={index}
                className="w-full h-[220px]"
                spotlightColor="rgba(100, 125, 128, 0.328)"
              >
                {/* <span className="text-4xl font-bold">{}</span> */}
                <p className="font-bold">{item.icon}</p>
                <h2 className="font-semibold text-xl my-3">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </SpotlightCard>
            </AnimatedContent>
          </div>
        ))}
      </div>
      <ScrollVelocity
        items={[<SpecialityList key="sample" />]}
        velocity={50}
        className="custom-scroll-text"
      />
    </div>
  );
};

export default Speciality;
