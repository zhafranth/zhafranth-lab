import React from "react";
import Particles from "./react-bits/particles";
import BlurText from "./react-bits/blur-text";
import DecryptedText from "./react-bits/decrypted-text";
import ShinyText from "./react-bits/shiny-text";

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
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20 px-4 md:px-[14vw] flex flex-col justify-center">
        <ShinyText
          text={`Hi, I'm Zhafran Tharif`}
          disabled={false}
          speed={3}
          className="text-xl md:text-2xl text-gray-300"
        />
        <div className="flex flex-col md:flex-row gap-x-12 gap-y-4 mt-6">
          <BlurText
            text="Software Developer"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-6xl md:text-7xl font-bold"
          />
          <div>
            <DecryptedText
              text="Empowering digital products with fullstack engineering — clean code,
            "
              className="text-xl md:text-3xl leading-12 md:leading-9"
              animateOn="view"
              speed={60}
              maxIterations={15}
            />
            <DecryptedText
              text="scalable systems, and intuitive interfaces."
              className="text-xl md:text-3xl leading-12 md:leading-9"
              animateOn="view"
              speed={80}
              maxIterations={25}
            />
          </div>
          {/* <p className="text-3xl md:text-3xl leading-12 md:leading-9">
            Empowering digital products with fullstack engineering — clean code,
            scalable systems, and intuitive interfaces.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
