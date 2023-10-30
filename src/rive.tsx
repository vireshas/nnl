import { staticFile } from 'remotion';
import { RemotionRiveCanvas } from "@remotion/rive";

const myImage = staticFile(`login_screen_character.riv`);

export const Overlay: React.FC = () => {
    return <RemotionRiveCanvas src="https://cdn.rive.app/animations/vehicles.riv" />;
};
