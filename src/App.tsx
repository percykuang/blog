import type { FC } from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';

import { NotFound, TopNav } from '@/components';
import { AboutMe, Detail, Home, TagDetail, Tags } from '@/pages';

const App: FC = () => {
  return (
    <HashRouter>
      <div className="max-w-192 mx-auto mb-0 mt-10 pb-20">
        <TopNav />
        <div className="max-md:mx-4 max-md:my-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<TagDetail />} />
            <Route path="/articles/:id" element={<Detail />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
