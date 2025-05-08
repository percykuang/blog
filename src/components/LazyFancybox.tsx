import { useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';

import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface LazyFancyboxProps {
  onInit?: () => void;
  onCleanup?: () => void;
}

const LazyFancybox: FC<PropsWithChildren<LazyFancyboxProps>> = ({ children, onInit, onCleanup }) => {
  useEffect(() => {
    // 初始化 Fancybox
    Fancybox.destroy();

    Fancybox.bind(document.body, '[data-fancybox="gallery"]', {
      compact: false,
      idle: false,
      wheel: 'zoom',
      dragToClose: false,
      contentClick: 'iterateZoom',
      Hash: false,
      Images: {
        zoom: true,
        Panzoom: {
          maxScale: 5,
        },
      },
      Toolbar: {
        enabled: true,
        display: {
          left: ['infobar'],
          middle: ['zoomIn', 'zoomOut', 'toggle1to1', 'rotateCCW', 'rotateCW', 'flipX', 'flipY'],
          right: ['slideshow', 'thumbs', 'close'],
        },
      },
    });

    // 如果提供了 onInit 回调，则调用它
    if (onInit) {
      onInit();
    }

    // 清理函数
    return () => {
      Fancybox.destroy();
      if (onCleanup) {
        onCleanup();
      }
    };
  }, [onInit, onCleanup]);

  return <>{children}</>;
};

export default LazyFancybox;
