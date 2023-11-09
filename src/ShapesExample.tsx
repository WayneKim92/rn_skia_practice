import {Fill, Canvas, Path, Skia} from '@shopify/react-native-skia';

const star = () => {
  const R = 115.2;
  const C = 128.0;
  const path = Skia.Path.Make();
  path.moveTo(C + R, C);
  for (let i = 1; i < 8; ++i) {
    const a = 2.6927937 * i;
    path.lineTo(C + R * Math.cos(a), C + R * Math.sin(a));
  }
  return path;
};

export const ShapesExample = () => {
  const path = star();

  return (
    <>
      <Canvas style={{flex: 1}}>
        <Path
          path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
          color="lightblue"
        />
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Path
          path="M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z"
          color="lightblue"
          style="stroke"
          strokeJoin="round"
          strokeWidth={5}
          // We trim the first and last quarter of the path
          start={0.25}
          end={0.75}
        />
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Fill color="white" />
        <Path path={path} style="stroke" strokeWidth={4} color="#3EB489" />
        <Path path={path} color="lightblue" fillType="evenOdd" />
      </Canvas>
    </>
  );
};
