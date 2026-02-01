'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) {
    return (
      <div className='icon_hover'>
        <div className="w-4 h-4" /> {/* Placeholder */}
      </div>
    )
  }
  return (
    <div className='icon_hover'
      onClick={() => { 
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      <Moon size={17} className="dark:hidden" />
      <Sun size={17} className="hidden dark:block" />
    </div>
  )
};
