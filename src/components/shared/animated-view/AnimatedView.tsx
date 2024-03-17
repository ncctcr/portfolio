import React from 'react';
import { motion } from 'framer-motion';
import useScreenSize from "../../../hooks/useScreenSize";
import {TABLET_WIDTH} from "../../../constants";

interface PageProps {
  children: React.ReactNode;
  isBackward: boolean;
  isFirstRender: boolean
}

const transition = {  ease: [0.10, 0.90, 0.95, 1], duration: 0.4 };

const AnimatedView: React.FC<PageProps> = ({ children, isBackward, isFirstRender }) => {
  const screenSize = useScreenSize()
  const isMobile = screenSize.width <= TABLET_WIDTH

  let variants: { [key: string]: any } = {
    animate: {
      opacity: 1,
      duration: 0,
    },
    initial: {
      opacity: 0,
      duration: 0,
    },
    exit: {
      opacity: 0,
      duration: 0,
    }
  }

  if (isMobile) {
    variants = {
      animate: {
        x: 0,
        transition,
        transitionEnd: {
          position: 'static',
          top: 0,
          overflow: 'auto'
        }
      },
      initial: {
        x: isFirstRender ? 0 : isBackward ? '-30%' : '100%',
        boxShadow: isBackward ? null : '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        zIndex: 2,
        transition
      },
      exit: {
        x: isFirstRender ? 0 : isBackward ? '100%' : '-30%',
        boxShadow: isBackward ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' : null,
        zIndex: isBackward ? 3 : 1,
        transition
      }
    };
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={
        isMobile ?
          {
            position: 'fixed',
            top: 64,
            width: '-webkit-fill-available',
            background: 'var(--content-background)',
            height: '100vh'
          } :
          {
            overflow: 'auto'
          }
      }
    >
      {children}
    </motion.div>
  );
};

export default AnimatedView;