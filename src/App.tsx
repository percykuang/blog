import type { FC } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TopNav } from '@/components';
import { AboutMe, Detail, Home, TagDetail, Tags } from '@/pages';

const App: FC = () => {
  return (
    <div className="max-w-192 mx-auto mb-0 mt-10 pb-20">
      <TopNav />
      <div className="max-md:mx-4 max-md:my-0">
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<TagDetail />} />
            <Route path="/articles/:id" element={<Detail />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
