import React from "react";
import { Meteors } from "./acernity-ui";
import DotPulse from "./dot-pulse";

interface Props {
  data: {
    year: string;
    company: string;
    join_date: string;
    position: string;
    description: string[];
  };
}

const ExperienceCard: React.FC<Props> = ({ data }) => {
  const { company, description, join_date, position } = data;
  return (
    <div>
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
        <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="relative z-50  text-xl font-bold text-white">
            {company}
          </h1>
          <h1 className="relative z-50  text-xl font-medium text-white">
            {join_date}
          </h1>
          <h4 className="mb-4">{position}</h4>

          {description.map((item, index) => (
            <div className="flex items-center gap-x-4" key={index}>
              <DotPulse color="#1c45b6" size={6} />
              <p className="relative z-50 text-base font-normal text-slate-500">
                {item}
              </p>
            </div>
          ))}

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
