import React, {createContext, useContext} from 'react';
import {Canvas, Fill} from '@shopify/react-native-skia';
import {useContextBridge, FiberProvider} from 'its-fine';

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
  const ContextBridge = useContextBridge();
  return (
    <Canvas style={{flex: 1}}>
      <ContextBridge>
        <Fill color="black" />
        <MyDrawing />
      </ContextBridge>
    </Canvas>
  );
};

export const CanvasItsFineContextExample = () => {
  return (
    <FiberProvider>
      <ThemeProvider primary="red">
        <Layer />
      </ThemeProvider>
    </FiberProvider>
  );
};
