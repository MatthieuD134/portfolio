import { Canvas } from '@react-three/fiber';
import Ball from './Ball';
import Floor from './Floor';
import styles from './index.module.scss';
import LightingBulb from './LightingBulb';

const BackgroundScene = () => {
  return (
    <div className={styles.scene}>
      <Canvas
        shadows={true}
        className={styles.canvas}
        camera={{ position: [0, 3, 7] }}
      >
        <ambientLight color={'white'} intensity={0.2} />
        <Floor position={[0, -1, 0]} />
        <Ball />
        <LightingBulb position={[0, 3, 0]} />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
