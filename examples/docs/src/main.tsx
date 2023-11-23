import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { useDarkMode } from 'usehooks-ts';
import { ConfigProvider, theme as AntdTheme } from 'antd';

import { MarktionV2App } from './marktion';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MarktionV2App />
    {/* <StyleProvider> */}
    {/* <App /> */}
    {/* </StyleProvider> */}
  </React.StrictMode>
);

function StyleProvider({ children }: React.PropsWithChildren) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? AntdTheme.darkAlgorithm : AntdTheme.defaultAlgorithm
      }}
    >
      {children}
    </ConfigProvider>
  );
}
