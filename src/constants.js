export const defaultStyle = {
  transition: `width ${500}ms ease-in-out`,
  transitionTimingFunction: "cubic-bezier(1,.33,.11,.92)",
  width: 0,
  position: "relative",
};

export const transitionStyles = {
  entering: { width: "100vw" },
  entered: { width: "100vw" },
  exiting: { width: "100px" },
  exited: { width: "100px" },
};

export const contentDefaultStyle = {
  transition: `opacity 100ms ease-in-out`,
  opacity: 0,
};

export const contentTransitionStyles = {
  entering: { opacity: 1, transitionDelay: "400ms" },
  entered: { opacity: 1, transitionDelay: "400ms" },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

export const buttonDefaultStyles = {
  transition: `opacity 500ms ease-in-out`,
  transitionDelay: "300ms",
  opacity: 1,
};

export const buttonTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0, display: "none" },
  exiting: { opacity: 1 },
  exited: { opacity: 1, display: "true" },
};

export const mainDefaultStyle = {
  padding: 0,
  transition: `padding 500ms ease-in-out`,
  height: "100%",
};

export const mainTransitionStyles = {
  entering: { padding: 0 },
  entered: { padding: 0 },
  exiting: { padding: "24px" },
  exited: { padding: "24px" },
};
