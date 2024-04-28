"use client";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AnimatedBackground = ({ value }: { value: number }) => {
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setIsInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  return (
    <>
      {isInit && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          className="z-[-1]"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#969696",
              },
              links: {
                color: "#969696",
                distance: 150,
                enable: true,
                opacity: 0.75,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: value || 175,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default AnimatedBackground;
