'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import UserIcon from '@/components/UserIcon';
import PagePadding from '@/components/PagePadding';
import { FaChromecast } from 'react-icons/fa';
import useUIState from '@/hooks/useUIState';
import { FiSearch } from 'react-icons/fi';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Logo from './Logo';
import Navigator from './Navigator';

const HeaderDrawer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <DrawerTitle>Title</DrawerTitle>
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }) => {
  const { headerImageSrc } = useUIState();

  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      //scrollValue가 0이라면 최상단에 스크롤이 있다는것임
      setIsScrolled(scrollValue !== 0);
    };

    headRef?.current?.addEventListener('scroll', handleScroll);

    return () => {
      headRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative overflow-y-auto w-full h-full" ref={headRef}>
      <section className="absolute top-0 w-full">
        {/* relative 때문에 div 태그로감쌈  그러고나서 Image 태그에서 fill 하면 부모 요소만큼 참 헤더 백그라운드 영역임 */}
        <div className="relative w-full h-[400px]">
          <Image
            fill
            className="object-cover"
            src={headerImageSrc || 'https://images.unsplash.com/photo-1487956382158-bb926046304a'}
            alt="test"
          />

          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full"></div>
          <div className="absolute h-[400px] *:top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section>
      <section
        className={cn('sticky top-0 left-0 z-10', {
          'bg-black': isScrolled,
        })}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            {/* 검색바 pc 화면에서 등장 */}
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border-neutral-500 border
            "
            >
              <div>
                <FiSearch size={20} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
              />
            </article>
            {/* Drawer 메뉴바 모바일 화면에서만 나옴 로고 클릭시 등장 */}
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
