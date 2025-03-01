import type { FC } from 'react';
import { Suspense, lazy } from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';

import { NotFound, TopNav } from '@/components';

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home'));
const Tags = lazy(() => import('@/pages/Tags'));
const TagDetail = lazy(() => import('@/pages/TagDetail'));
const Detail = lazy(() => import('@/pages/Detail'));
const AboutMe = lazy(() => import('@/pages/AboutMe'));

const App: FC = () => {
  return (
    <HashRouter>
      <div className="max-w-192 mx-auto mb-0 mt-10 pb-20">
        <TopNav />
        <div className="max-md:mx-4 max-md:my-0">
          <Suspense fallback={<div className="mt-10 text-center">Loading...</div>}>
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
