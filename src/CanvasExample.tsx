import React, {useEffect} from 'react';
import {Canvas, Circle, Group, useCanvasRef} from '@shopify/react-native-skia';

export default function CanvasExample() {
  const width = 256;
  const height = 256;
  const r = width * 0.33;

  const ref = useCanvasRef();
  useEffect(() => {
    setTimeout(() => {
      // you can pass an optional rectangle
      // to only save part of the image
      const image = ref.current?.makeImageSnapshot();
      if (image) {
        // you can use image in an <Image> component
        // Or save to file using encodeToBytes -> Uint8Array
        const bytes = image.encodeToBase64();
        console.log('🐞bytes', bytes);
      }
    }, 1000);
  });

  return (
    <Canvas style={{width, height}} ref={ref}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
  );
}
