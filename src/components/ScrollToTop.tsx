import React, { useEffect, useState } from 'react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`bottom-15 right-15 fixed flex h-10 w-10 items-center justify-center rounded-full border border-[#3370FF] bg-transparent text-[#3370FF] transition-opacity duration-300 hover:cursor-pointer max-md:bottom-5 max-md:right-5 ${isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      onClick={scrollToTop}
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
