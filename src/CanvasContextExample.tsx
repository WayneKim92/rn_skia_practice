import React, {createContext, useContext} from 'react';
import {Canvas, Fill} from '@shopify/react-native-skia';

import type {ReactNode} from 'react';

interface Theme {
  primary: string;
}

export const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({
  primary,
  children,
}: {
  primary: string;
  children: ReactNode;
}) => (
  <ThemeContext.Provider value={{primary}}>{children}</ThemeContext.Provider>
);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === null) {
    throw new Error('Theme provider not found');
  }
  return theme;
};

const MyDrawing = () => {
  const {primary} = useTheme();
  return <Fill color={primary} />;
};

export const Layer = () => {
  const theme = useTheme();

  // 불가능 케이스
  // return (
  //   <ThemeProvider primary={theme.primary}>
  //     <Canvas style={{flex: 1}}>
  //       <MyDrawing />
  //     </Canvas>
  //   </ThemeProvider>
  // );

  return (
    <Canvas style={{flex: 1}}>
      {/* We need to re-inject the context provider here.  */}
      <ThemeProvider primary={theme.primary}>
        <MyDrawing />
      </ThemeProvider>
    </Canvas>
  );
};

export const CanvasContextExample = () => {
  return (
    <ThemeProvider primary="red">
      <Layer />
    </ThemeProvider>
  );
};
