import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  initial: { opacity: 1, y: "100%" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 }
};

const transition = {
  duration: 0.3,
  transition: "ease"
};

export default styled(({ className, children }) => {
  return (
    <motion.div
      className={"animated-frame " + className}
      transition={transition}
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
    >
      {children}
    </motion.div>
  );
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;
