import { motion } from "framer-motion";
import styled from "styled-components";

const pageVariants = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: 0 }
};

const pageTransition = {
  duration: 0.25,
  transition: "ease"
};

export default styled(({ className, children }) => {
  return (
    <motion.div
      className={className + " animated-frame"}
      transition={pageTransition}
      initial={pageVariants.initial}
      animate={pageVariants.animate}
      exit={pageVariants.exit}
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
