'use client';
import React from 'react';
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/elements/IconButton';
import { IoCloseOutline } from 'react-icons/io5';

/**
 * @param isInDrawer Drawer 컴포넌트에서 호출한건지
 */
const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();
  const onClickLogo = () => {
    push('/');
  };

  const onClickMenu = () => {};
  // const onClickClose = () => {};
  return (
    <section className="flex flex-row gap-3 items-center">
      {isInDrawer ? (
        <IconButton icon={<IoCloseOutline size={30} />} onClickIcon={onClickMenu} />
      ) : (
        <IconButton icon={<RxHamburgerMenu size={24} />} onClickIcon={onClickMenu} />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image width={100} height={30} src={'/main-logo.svg'} alt="mainLogo" />
      </div>
    </section>
  );
};

export default Logo;
