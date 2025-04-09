import React from "react";
import Particles from "./react-bits/particles";

const Hero = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20 px-[14vw] flex flex-col justify-center">
        <div className="flex md:flex-row flex-col items-end justify-between gap-6">
          <div className="">
            <p className="text-2xl md:text-xl">Hi, I&apos;m Zhafran Tharif</p>
            <h2 className="text-6xl md:text-7xl font-semibold">
              Software Developer
            </h2>
          </div>
          <div className="">
            <p className="text-2xl md:text-3xl">
              Transforming ideas into interactive and seamless digital
              experiences with cutting-edge frontend development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
