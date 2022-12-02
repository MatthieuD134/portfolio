import { MeshProps } from '@react-three/fiber';

const LightingBulb = (lightingBulbProps: MeshProps) => {
  return (
    <mesh {...lightingBulbProps}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={'orange'} />
    </mesh>
  );
};

export default LightingBulb;
