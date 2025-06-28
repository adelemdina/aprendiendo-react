// ParticlesBackground.jsx
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = ({ id, className }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 100 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: 3 },
      move: { enable: true, speed: 1 },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 120,
        opacity: 0.4,
        width: 1,
      },
    },
  }), []);

  return (
       <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      {init && (
        <Particles
          id={id}
          options={options}
         style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      )}
    </div>
  );
};