import {
    Sequence,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import React, {useMemo} from 'react';
import {loadFont} from '@remotion/google-fonts/Roboto';
import {Animation} from  'remotion-animation';

const {fontFamily} = loadFont();

const title: React.CSSProperties = {
	fontFamily,
	fontSize: 80,
	fontWeight: 'bold',
};

const text: React.CSSProperties = {
	fontWeight: 'bold',
	fontFamily,
	fontSize: 40,
	color: '#4290F5',
};

const disappearBeforeEnd = 20;

export const Overlay: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const scale = spring({
		fps,
		frame,
		config: {
			mass: 0.5,
		},
	});

	const out = spring({
		fps,
		frame: frame - durationInFrames + disappearBeforeEnd,
		config: {
			damping: 200,
		},
		durationInFrames: disappearBeforeEnd,
	});

	const rotate = interpolate(out, [0, 1], [0, -Math.PI / 20]);
	const outY = interpolate(out, [0, 1], [0, -500]);

	const container: React.CSSProperties = useMemo(() => {
		return {
			position: 'absolute',
			backgroundColor: 'white',
			borderRadius: 25,
			right: 90,
			top: 90,
			scale: String(scale),
			translate: `0 ${outY}px`,
			rotate: `${rotate}rad`,
			padding: 40,
		};
	}, [scale, outY, rotate]);

	return (
        <>
          <Sequence>
			<div style={container} from={0}>
				<div style={text}>Now</div>
				<div style={title}>Silicon Valley</div>
			</div>
          </Sequence>
          <Sequence from={60}>
			<div style={container}>
				<div style={text}>Next</div>
				<div style={title}>Games of Thrones</div>
			</div>
          </Sequence>
          <Sequence from={120}>
			<div style={container}>
				<div style={text}>Later</div>
				<div style={title}>The Big Bang Theory</div>
			</div>
          </Sequence>
        </>
	);
};
