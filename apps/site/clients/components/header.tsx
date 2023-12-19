'use client';

import React, { useEffect, useState } from 'react';
import { GithubIcon, SunIcon, MoonIcon, UserIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Tooltip } from 'antd';
import { UserCard } from './user-card';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    setTimeout(() => {
      setTooltipOpen(true);
    }, 2000);
  }, []);

  return (
    <header className="container dark:text-gray-100">
      <div className="flex justify-between items-center h-16 mx-auto">
        <Tooltip open={tooltipOpen} title="Star on Github" placement="right" color="purple">
          <a
            href="https://github.com/microvoid/marktion"
            className="rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg-stone-100 hover:dark:bg-stone-700 sm:bottom-auto sm:top-5"
          >
            <GithubIcon size={18} />
          </a>
        </Tooltip>

        <div className="rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg- hover:text-base sm:bottom-auto sm:top-5">
          <UserCard>
            <button className="rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg-stone-100 hover:dark:bg-stone-700 sm:bottom-auto sm:top-5">
              <UserIcon size={18} />
            </button>
          </UserCard>

          <button
            onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
            className="rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg-stone-100 hover:dark:bg-stone-700 sm:bottom-auto sm:top-5"
          >
            {isDarkMode ? <MoonIcon size={18} /> : <SunIcon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}
