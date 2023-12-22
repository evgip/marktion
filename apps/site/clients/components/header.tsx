'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Tag, Tooltip } from 'antd';
import { UserCard } from './user-card';
import { Icon } from './icon';
import { UpgradeToPro } from './upgrade-to-pro';

export function Header() {
  const { theme, setTheme } = useTheme();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
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
            {/* <GithubIcon size={18} /> */}
            <Icon name="github" size={18} />
          </a>
        </Tooltip>

        <div className="flex items-center rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg- hover:text-base sm:bottom-auto sm:top-5">
          <Tag color="magenta" onClick={() => setUpgradeModalOpen(true)}>
            Upgrade to Pro
          </Tag>

          <UserCard>
            <button className="rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg-stone-100 hover:dark:bg-stone-700 sm:bottom-auto sm:top-5">
              <Icon name="user" size={18} />
            </button>
          </UserCard>

          <button
            onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
            className="rounded-lg cursor-pointer p-2 transition-colors duration-200 hover:bg-stone-100 hover:dark:bg-stone-700 sm:bottom-auto sm:top-5"
          >
            {isDarkMode ? <Icon name="moon" size={18} /> : <Icon name="sun" size={18} />}
          </button>
        </div>
      </div>

      <UpgradeToPro
        open={upgradeModalOpen}
        onOk={() => setUpgradeModalOpen(false)}
        onCancel={() => setUpgradeModalOpen(false)}
      />
    </header>
  );
}
