import React, {useRef, useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

const FadeIn = ({children}) => {
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({threshold: 0.24});
  const prevInView = useRef(false);
  useEffect(() => {
    prevInView.current = inView;
  });
  useEffect(() => {
    setLoaded(true);
  }, []);
  const hasBeenViewed = prevInView.current || inView;
  const shouldBeOpaque = loaded && hasBeenViewed;

  return (
    <div className={`fade-in ${shouldBeOpaque ? 'viewed' : ''}`} ref={ref}>
      {children}
      <style jsx>{`
        .fade-in {
          transition: opacity 1.2s ease, transform 1.2s ease;
          opacity: 0;
          transform: translateY(12px);
        }

        .fade-in.viewed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default FadeIn;
