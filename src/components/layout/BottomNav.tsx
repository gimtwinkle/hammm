'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface BottomNavProps {
  onVisibleChange?: (isVisible: boolean) => void;
}

export default function BottomNav({ onVisibleChange }: BottomNavProps) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setVisible(false);
        onVisibleChange?.(false);
      } else {
        setVisible(true);
        onVisibleChange?.(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onVisibleChange]);

  return (
    <footer
      className={`w-full flex items-center h-16 bg-gray-100 dark:bg-gray-800 fixed bottom-0 left-0 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <ul className="flex gap-4 text-gray-600 dark:text-gray-300 w-full justify-between">
        <li className="font-bold w-full h-full text-center">대시보드</li>
        <li className="font-bold w-full text-center">
          <Link href="/upload" className="block w-full h-full">
            업로드
          </Link>
        </li>
        <li className="font-bold w-full text-center">고정지출</li>
        <li className="font-bold w-full text-center">저축</li>
        <li className="font-bold w-full text-center">소비</li>
      </ul>
    </footer>
  );
}
