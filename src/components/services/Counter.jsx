import { useState, useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const Counter = ({ from, to, text }) => {
      const [count, setCount] = useState(from);
      const ref = useRef(null);
      const isInView = useInView(ref);

      useEffect(() => {
            if (isInView) {
                  const animation = animate(from, to, {
                        duration: 4,
                        ease: "easeInOut",
                        onUpdate: (prev) => {
                              setCount(Math.floor(prev));
                        }
                  });

                  return () => animation.cancel();
            }
      }, [isInView, from, to]);

      return (
            <div className="counter" ref={ref}>
                  <h1>{count}+</h1>
                  <p>{text}</p>
            </div>
      );
};

export default Counter;
