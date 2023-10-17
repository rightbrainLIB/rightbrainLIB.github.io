import React from 'react';
import { motion } from 'framer-motion';
import { pageEffect } from '../styles/animation.js';


const Wrapper = ({ children, ...rest }) => {

  return (
    <motion.div
      key={location.key}
      animate="in"
      exit="out"
      transition={{ duration: 0.25 }}
      variants={pageEffect}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;