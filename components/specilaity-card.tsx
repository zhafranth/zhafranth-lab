import Image from "next/image";
import React from "react";
import {
  AWSImg,
  BashImg,
  CSS3Img,
  ExpressImg,
  FigmaImg,
  FirebaseImg,
  GitImg,
  HTMLImg,
  JavascriptImg,
  MysqlImg,
  NextImg,
  NodeImg,
  ReactImg,
  ReduxImg,
  SupabaseImg,
  TailwindImg,
  TypescriptImg,
  ViteImg,
} from "@/asset/tools";

const SpecialityList = () => {
  const specility = [
    {
      id: 1,
      title: "AWS",
      img: AWSImg,
    },
    {
      id: 2,
      title: "Bash",
      img: BashImg,
    },
    {
      id: 3,
      title: "CSS3",
      img: CSS3Img,
    },
    {
      id: 4,
      title: "Express",
      img: ExpressImg,
    },
    {
      id: 5,
      title: "Figma",
      img: FigmaImg,
    },
    {
      id: 6,
      title: "Firebase",
      img: FirebaseImg,
    },
    {
      id: 7,
      title: "Git",
      img: GitImg,
    },
    {
      id: 8,
      title: "HTML",
      img: HTMLImg,
    },
    {
      id: 9,
      title: "Javascript",
      img: JavascriptImg,
    },
    {
      id: 10,
      title: "Mysql",
      img: MysqlImg,
    },
    {
      id: 11,
      title: "Next",
      img: NextImg,
    },
    {
      id: 12,
      title: "Node",
      img: NodeImg,
    },
    {
      id: 13,
      title: "React",
      img: ReactImg,
    },
    {
      id: 14,
      title: "Redux",
      img: ReduxImg,
    },
    {
      id: 15,
      title: "Supabase",
      img: SupabaseImg,
    },
    {
      id: 16,
      title: "Tailwind",
      img: TailwindImg,
    },
    {
      id: 17,
      title: "Typescript",
      img: TypescriptImg,
    },
    {
      id: 18,
      title: "Vite",
      img: ViteImg,
    },
  ];
  return (
    <div className="flex items-center mt-6">
      {specility.map((spec) => (
        <div
          key={`${spec.title}-${spec.id}`}
          className="flex gap-x-2 ml-4 items-center px-4 py-2 rounded-full bg-neutral-900"
        >
          <div className="flex items-center w-6 h-6 overflow-hidden">
            <Image
              src={spec.img}
              alt="aws"
              width="5"
              height="5"
              className="w-full object-cover"
            />
          </div>
          <p className="text-sm font-semibold hover:cursor-default">
            {spec.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SpecialityList;
