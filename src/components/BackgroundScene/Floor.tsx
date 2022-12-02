import { MeshProps } from '@react-three/fiber';

const Floor = (floorProps: MeshProps) => {
  return (
    <mesh {...floorProps} receiveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
};

export default Floor;
