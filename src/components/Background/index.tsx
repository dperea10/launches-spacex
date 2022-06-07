import { Parallax } from 'react-parallax';

export const ContainerBackground = () => (
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../../UI/background.jpg')}
        bgImageAlt="the space"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '200px' }} />
    </Parallax>
);