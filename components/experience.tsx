import React, { useMemo } from "react";
import { Timeline } from "./acernity-ui";
import ExperienceCard from "./experience-card";
import data from "@/data/experience.json";

const Experience = () => {
  const experiences = useMemo(
    () =>
      data?.map((item) => ({
        title: item.year,
        content: <ExperienceCard data={item} />,
      })),
    []
  );
  return (
    <div className="px-4 md:px-[14vw] py-12 relative z-10">
      <Timeline data={experiences} />
    </div>
  );
};

export default Experience;
