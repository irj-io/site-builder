import * as motion from 'motion/react-client';
export function HeroSvg() {
    const orbitDuration = 80;
    const orbitAnimation = {
        rotate: -360,
        transition: { repeat: Infinity, duration: orbitDuration, ease: 'linear' },
    };
    const orbitCounterAnimation = {
        rotate: 360,
        transition: { repeat: Infinity, duration: orbitDuration, ease: 'linear' },
    };
    const popInAnimation = (index) => ({
        initial: {
            scale: 0.3,
            opacity: 0,
        },
        animate: {
            scale: [0.3, 1, 1, 0.3],
            opacity: [0, 1, 1, 0],
            transition: {
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 5,
                duration: 4,
                times: [0, 0.1, 0.9, 1],
                delay: index * (Math.random() * 0.5 + 1),
            },
        },
    });
    const viewSize = 800;
    const radius = 200;
    const pointOnCircle = (degrees = 0) => `translate(${viewSize / 2 + radius * Math.cos((degrees * Math.PI) / 180)}, ${viewSize / 2 + radius * Math.sin((degrees * Math.PI) / 180)})`;
    return (<svg preserveAspectRatio="none" viewBox={`0 0 ${viewSize} ${viewSize}`}>
			<motion.g animate={orbitAnimation}>
				<circle cx={viewSize / 2} cy={viewSize / 2} r={radius} fill="#ECA3A3" fillOpacity="0.28"/>
				<motion.g animate={orbitCounterAnimation}>
					<motion.g {...popInAnimation(0)}>
						<g transform={pointOnCircle(135)}>
							<g transform={`translate(-70.5, -30)`}>
								<rect width="141" height="60" rx="30" fill="white"/>
								<text x="30" y="37" style={{ fill: 'black', fontSize: 20, fontWeight: 600 }}>
									30 online
								</text>
								<circle cx="20" cy="30" r="4" fill="#EF4F4F"/>
							</g>
						</g>
					</motion.g>
				</motion.g>
				<motion.g animate={orbitCounterAnimation}>
					<motion.g {...popInAnimation(1)}>
						<g transform={pointOnCircle(35)}>
							<g transform={`translate(-102, -30)`}>
								<rect width="204" height="60" rx="30" fill="white"/>
								<text x="108" y="38" style={{ fill: 'black', fontSize: 20, fontWeight: 600 }}>
									12 busy
								</text>
								<circle cx="30" cy="30" r="15" fill="url(#pattern0_49_62)" 
    //fill="red"
    stroke="white" strokeWidth="3"/>
								<circle cx="46" cy="30" r="15" fill="url(#pattern1_49_62)" 
    //fill="yellow"
    stroke="white" strokeWidth="3"/>
								<circle cx="62" cy="30" r="15" fill="url(#pattern2_49_62)" 
    //fill="pink"
    stroke="white" strokeWidth="3"/>
								<circle cx="78" cy="30" r="15" fill="url(#pattern3_49_62)" 
    //fill="orange"
    stroke="white" strokeWidth="3"/>
							</g>
						</g>
					</motion.g>
				</motion.g>
				<motion.g animate={orbitCounterAnimation}>
					<motion.g {...popInAnimation(2)}>
						<g transform={pointOnCircle(310)}>
							<g transform={`translate(-147, -40)`}>
								<rect width="288" height="80" rx="16" fill="#D75E5E"/>
								<text x="22" y="34" textLength="233" style={{ fill: '#FFEBEB', fontSize: 24, fontWeight: 600 }}>
									Make 2025 the year
								</text>
								<text x="22" y="64" textLength="247" style={{ fill: '#FFEBEB', fontSize: 24, fontWeight: 600 }}>
									your team kicks butt!
								</text>
							</g>
						</g>
					</motion.g>
				</motion.g>
			</motion.g>
			<defs>
				<pattern id="pattern0_49_62" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use transform="translate(-0.25) scale(0.00285714)"/>
				</pattern>
				<pattern id="pattern1_49_62" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use transform="scale(0.0025)"/>
				</pattern>
				<pattern id="pattern2_49_62" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use transform="translate(-0.257576) scale(0.00757576)"/>
				</pattern>
				<pattern id="pattern3_49_62" patternContentUnits="objectBoundingBox" width="1" height="1">
					<use transform="translate(0 -0.244186) scale(0.00581395)"/>
				</pattern>
			</defs>
		</svg>);
}
//# sourceMappingURL=hero-svg.jsx.map