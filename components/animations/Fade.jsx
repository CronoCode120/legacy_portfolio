import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Fade = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start({
        opacity: 1
      });
    }
  }, [isInView]);

  return (
    <div ref={ref} className='relative w-fit overflow-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={mainControls}
        transition={{
            duration: 0.6,
            delay: 0
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Fade;