import { motion } from "framer-motion";
import styled from "styled-components";

const variants = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: 0 }
};

const transition = {
  duration: 0.25,
  transition: "ease"
};

export default styled(({ className, children }) => {
  return (
    <motion.div
      className={className}
      transition={transition}
      initial={variants.initial}
      animate={variants.animate}
      exit={variants.exit}
    >
      {children}
    </motion.div>
  );
})`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
