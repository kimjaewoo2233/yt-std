'use client';
import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/elements/IconButton';

const Logo = () => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push('/');
  };

  const onClickMenu = () => {};
  return (
    <section className="flex flex-row gap-3 items-center">
      <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={'/main-logo.svg'} alt="mainLogo" />
      </div>
    </section>
  );
};

export default Logo;
