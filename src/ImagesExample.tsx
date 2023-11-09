import React from 'react';
import {Canvas, ImageSVG, useSVG} from '@shopify/react-native-skia';
import {rect, fitbox, Group, Paint, Blur} from '@shopify/react-native-skia';

const width = 256;
const height = 256;

export const ImageSVGExample = () => {
  const svg = useSVG(require('../assets/soomgo.svg'));
  const src = rect(0, 0, 200, 300);
  const dst = rect(0, 0, width, height);
  return (
    <>
      <Canvas style={{flex: 1}}>
        <Group
          transform={fitbox('contain', src, dst)}
          layer={
            <Paint>
              <Blur blur={10} />
            </Paint>
          }>
          {svg && <ImageSVG svg={svg} x={0} y={0} width={290} height={500} />}
        </Group>
      </Canvas>
    </>
  );
};
