import { MeshProps } from '@react-three/fiber';

const Ball = (meshProps: MeshProps) => {
  return (
    <mesh {...meshProps} receiveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial color="#f823a0" />
    </mesh>
  );
};

export default Ball;
