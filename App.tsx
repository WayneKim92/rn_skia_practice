import React from 'react';
import {CanvasItsFineContextExample} from './src/CanvaseItsFineContextExample';

/*
  Note
  - 번들 사이즈 4MB ~ 6MB 증가
  - 자체 React 렌더러를 사용 중이라, React 렌더러와 자동으로 공유하는 것이 불가능
    - 공유가 불가능하여 React context 변화가 있어도 Skia Canvas에 렌더링 요청 불가
    - React context의 변경으로 재렌더링이 필요한 경우, Skia Canvas 내에서 React Context를 사용해야함. (다른 방법도 있음)
    -
 */

const App = () => {
  return <CanvasItsFineContextExample />;
};

export default App;
