import {
  Canvas,
  Group,
  TextPath,
  Skia,
  vec,
  Fill,
  Text,
  Morphology,
} from '@shopify/react-native-skia';

const size = 33;
const path = Skia.Path.Make();
path.addCircle(size, size, size / 2);

export const TextExample = () => {
  const fontSize = 32;

  return (
    <>
      <Canvas style={{flex: 1}}>
        <Fill color="white" />
        <Group transform={[{rotate: Math.PI}]} origin={vec(size, size)}>
          <TextPath path={path} text="Soomgo" font={null} />
        </Group>
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Fill color="white" />
        <Text
          x={0}
          y={fontSize}
          text="Soomgo"
          transform={[{skewX: -0.7}, {translateX: 100}, {scale: 3}]}
        />
      </Canvas>
      <Canvas style={{flex: 1}}>
        <Fill color="white" />
        <Text
          x={0}
          y={fontSize}
          text="Soomgo"
          transform={[
            {skewX: -0.7},
            {translateX: 100},
            {scale: 3},
            {skewY: -0.5},
          ]}
        />
        <Text text="Soomgo" x={32} y={64}>
          <Morphology radius={1.1} />
        </Text>
      </Canvas>
    </>
  );
};
