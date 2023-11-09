import {
  Canvas,
  Circle,
  Group,
  Fill,
  RoundedRect,
  Image,
  useImage,
  rect,
  rrect,
} from '@shopify/react-native-skia';

const r = 50;
const size = 256;
const padding = 32;
const roundedRect = rrect(
  rect(padding, padding, size - padding * 2, size - padding * 2),
  r,
  r,
);

export const GroupExample = () => {
  const image = useImage(require('../assets/nb.png'));

  return (
    <>
      <Canvas style={{flex: 1}}>
        <Circle cx={r} cy={r} r={r} color="#51AFED" />
        {/* The paint is inherited by the following sibling and descendants. */}
        <Group color="lightblue" style="stroke" strokeWidth={10}>
          <Circle cx={r} cy={r} r={r / 2} />
          <Circle cx={r} cy={r} r={r / 3} color="white" />
        </Group>
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Fill color="#e8f4f8" />
        <Group color="lightblue" transform={[{skewX: Math.PI / 6}]}>
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Fill color="#e8f4f8" />
        <Group
          color="lightblue"
          origin={{x: 128, y: 128}}
          transform={[{skewX: Math.PI / 6}]}>
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Fill color="lightblue" />
        <Group clip={roundedRect}>
          <Image
            image={image}
            x={0}
            y={0}
            width={size}
            height={size}
            fit="cover"
          />
        </Group>
      </Canvas>
    </>
  );
};
