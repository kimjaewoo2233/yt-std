'use client';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import { GoHome } from 'react-icons/go';
import { FiCompass, FiMusic, FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { dummyPlaylistArray } from '@/lib/dummyData';
import PlayListNav from '@/components/elements/PlayListNav';

const Navigator = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: '홈',
        isActive: pathname === '/',
        href: '',
      },
      {
        icon: <FiCompass size={24} />,
        label: '둘러보기',
        isActive: pathname === '/explore',
        href: '',
      },
      {
        icon: <FiMusic size={20} />,
        label: '보관함',
        isActive: pathname === '/library',
        href: '',
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section className="flex flex-col gap-2 p-4">
        {routes.map((route) => {
          return (
            <Link href={route.href} key={route.label}>
              <div
                className={cn(
                  'text-[16px] flex flex-row items-center gap-4 hover:bg-neutral-700 rounded-xl p-2',
                  route.isActive && 'bg-neutral-800'
                )}
              >
                {route.icon}
                <span>{route.label}</span>
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6">
        <div className="w-full h-[1px] bg-neutral-700"></div>
      </section>

      <section className="px-6">
        <div className="hover:bg-neutral-700 flex flex-row items-center bg-neutral-700 my-6 rounded-3xl p-2 font-[200] justify-center gap-4 cursor-pointer">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>

      <section>
        <ul className="flex flex-col">
          {dummyPlaylistArray.map((playList, index) => {
            return <PlayListNav playList={playList} key={index} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
