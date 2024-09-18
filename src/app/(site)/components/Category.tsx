'use client';

import React from 'react';
import useUIState from '@/hooks/useUIState';
import { homeCategoryList } from '@/lib/dummyData';
import { cn } from '@/lib/utils';

const Category = () => {
  const { homeCategory, headerImageSrc, setHeaderImageSrc, setHomeCategory } = useUIState();

  const onClickCategory = (item: any) => {
    if (homeCategory === item.label) {
      setHeaderImageSrc('');
      setHomeCategory('');
    } else {
      setHeaderImageSrc(item.src);
      setHomeCategory(item.label);
    }
  };

  return (
    <ul className="max-w-full over-x-auto flex flex-row gap-4">
      {homeCategoryList.map((item) => {
        return (
          <li
            onClick={() => onClickCategory(item)}
            key={item.src}
            className={cn(
              'h-[38px] min-w-fit px-3 flex justify-center items-center border border-transparent rounded-xl bg-[rgba(144,144,144,0.2)] hover:bg-[rgba(144,144,144,0.45)] cursor-pointer',
              {
                'bg-white text-black hover:bg-white': item.label === homeCategory,
              }
            )}
          >
            {item.label}
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
