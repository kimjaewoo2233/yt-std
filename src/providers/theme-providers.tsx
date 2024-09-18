'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [isMount, setIsMount] = React.useState<boolean>(false);

  //app-index.js:33 Warning: Extra attributes from the server: class,style 에러 방지를위해 isMound state 를 활용함
  // next-themes를 사용하면 서버컴포넌트에서 theme가 어떤 값인지 알 수 없기 떄문에 그럼
  React.useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount) {
    return null;
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
