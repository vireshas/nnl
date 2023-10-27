import { IFrame } from 'remotion';

export const Overlay: React.FC = () => {
	return (
        <IFrame
          // src="https://app.singular.live/output/73h4tE2NNCWFW3vB2QZj7p?aspect=16x9"
          src="http://www.fastamagi.com.s3-website.ca-central-1.amazonaws.com/"
          width="1920"
          height="1080"
          title="Rendering in sequence"
        />
	);
};
