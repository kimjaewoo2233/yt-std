import React from 'react';

/**
 *
 * 모바일 pc 다른 패딩값을 가지니 이러헤갛ㅁ 1024면 피시임
 */
const PagePadding = ({ children }) => {
  return <div className="mx-auto px-[10px] py-2 lg:px-[100px]">{children}</div>;
};

export default PagePadding;
