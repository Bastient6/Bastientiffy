import React, { useMemo } from "react";

function Star() {
  	const stars = useMemo(() => {
    	const result = [];

    	for (let i = 0; i < 1000; i++) {
			const size = Math.random() * 3 + 1;
			const orbitRadius = Math.random() * 800 + 50;
			const rotationSpeed = Math.random() * 60 + 20;
			const startRotation = Math.random() * 360;
			const delay = Math.random() * 5;
			result.push(
				<div
					key={i}
					className="star"
					style={{
						width: `${size}px`,
						height: `${size}px`,
						"--orbit-radius": `${orbitRadius}px`,
						"--start-rotation": `${startRotation}deg`,
						animationDuration: `${rotationSpeed}s`,
						animationDelay: `${delay}s`,
					}}
        		/>
      		);
    	}
    	return result;
  	}, []);

  return <div className="stars absoluted top-0 left-0 w-full h-full z-0 pointer-events-none">{stars}</div>;
}

export default React.memo(Star);