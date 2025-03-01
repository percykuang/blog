import type { FC } from 'react';

interface LoadingProps {
  size?: number; // 尺寸大小，默认24px
  className?: string; // 额外的类名
}

const Loading: FC<LoadingProps> = ({ size = 24, className = '' }) => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-2 border-solid border-[#3370ff] border-r-transparent ${className}`}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Loading;
