import {Composition} from 'remotion';
// import {Overlay} from './NowNextSeq';
import {Overlay} from './Html5';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="html5"
				component={Overlay}
				durationInFrames={200}
				fps={25}
				width={1920}
				height={1080}
                defaultProps={{
                    transparent: true,
                }}
            />
		</>
	);
};
