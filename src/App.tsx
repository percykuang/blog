import type { FC } from 'react';
import { Suspense, lazy } from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';

import { Loading, NotFound, TopNav } from '@/components';
import { AboutMe, Home, TagDetail, Tags } from '@/pages';

// 只对文章详情页进行懒加载
const Detail = lazy(() => import('@/pages/Detail'));

const App: FC = () => {
  return (
    <HashRouter>
      <div className="max-w-192 mx-auto mb-0 mt-10 pb-20">
        <TopNav />
        <div className="max-md:mx-4 max-md:my-0">
          <Suspense
            fallback={
              <div className="mt-32 flex items-center justify-center">
                <Loading size={32} />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/tags/:tag" element={<TagDetail />} />
              <Route path="/articles/:id" element={<Detail />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
