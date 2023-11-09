import {Canvas, Circle, Group} from '@shopify/react-native-skia';

const width = 256;
const height = 256;

export default function PaintingExample() {
  const r = width / 6;
  return (
    <Canvas style={{width, height}}>
      <Group color="lightblue">
        <Circle cx={r} cy={r} r={r} />

        <Group style="stroke" strokeWidth={10}>
          <Circle cx={3 * r} cy={3 * r} r={r} />
        </Group>
      </Group>
    </Canvas>
  );
}
