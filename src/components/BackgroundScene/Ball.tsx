import { MeshProps } from '@react-three/fiber';
import { THEMES } from '@src/common/constants';
import { useTheme } from '@src/modules/ThemeProvider';

const Ball = (meshProps: MeshProps) => {
  const theme = useTheme();

  return (
    <mesh {...meshProps} receiveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial
        color={theme === THEMES.LIGHT ? '#f823a0' : '#10a739'}
      />
    </mesh>
  );
};

export default Ball;
