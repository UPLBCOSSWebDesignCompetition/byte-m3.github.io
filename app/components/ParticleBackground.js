"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import particleData from "../data/particles";

function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async(engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const handleParticlesLoaded = (container) => {
    };
    
    if (init) {
        return (
            <Particles
                id="tsparticles"
                particlesLoaded={handleParticlesLoaded}
                options={particleData}
            />
        );
    }

    return <></>;
}

export default ParticleBackground;
