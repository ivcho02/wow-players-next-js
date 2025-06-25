'use client'

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Particles, { initParticlesEngine} from "@tsparticles/react";
import { Container, IOptions, RecursivePartial } from "@tsparticles/engine";
import particles from "@/components/particles.json";
import { tsParticles } from "@tsparticles/engine";
import { loadFirePreset } from "@tsparticles/preset-fire";

function FireParticles() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async () => {
			await loadFirePreset(tsParticles);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = useCallback((container: Container | undefined) => {}, []);

	return (
		<div>
			{
            init && 
            <Particles 
                id="tsparticles" 
                particlesLoaded={particlesLoaded as (container?: Container | undefined) => Promise<void>} 
                options={particles as RecursivePartial<IOptions>} 
            />} 
		</div>
	);
}

export default React.memo(FireParticles);