export const rockingVariants = {
  start: { rotate: [0, -45, 45, 0] },
  end: { rotate: 0 },
};
export const resultVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1, display: "block" },
};
export const resultTitleVariants = {
  hidden: { opacity: 0, display: "none" },
  visible: {
    opacity: 1,
    display: "block",
    transition: { duration: 1 },
  },
};
export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};
