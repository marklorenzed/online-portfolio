import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Transition } from "react-transition-group";
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  defaultStyle,
  transitionStyles,
  contentDefaultStyle,
  contentTransitionStyles,
  buttonDefaultStyles,
  buttonTransitionStyles,
  mainDefaultStyle,
  mainTransitionStyles,
} from "./constants";

library.add(fab, faLongArrowAltRight, faLongArrowAltLeft);

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [
    containerTransitionStyle,
    setContainerTransitionStyle,
  ] = React.useState(transitionStyles);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setContainerTransitionStyle({
          entering: { width: "100vw" },
          entered: { width: "100vw" },
          exiting: { width: "0" },
          exited: { width: "0" },
        });
      } else {
        setContainerTransitionStyle(transitionStyles);
      }
    }

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-screen">
      <Transition in={!isOpen} timeout={500}>
        {(state) => (
          <div
            style={{
              ...mainDefaultStyle,
              ...mainTransitionStyles[state],
            }}
          >
            <div
              style={{
                ...defaultStyle,
                ...containerTransitionStyle[state],
              }}
              className="bg-black header flex items-center justify-center"
            >
              <div
                className="m-6 md:m-12 flex flex-col items-center"
                style={{
                  ...contentDefaultStyle,
                  ...contentTransitionStyles[state],
                }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-12xl text-center leading-none">
                  MARK DUMALAON
                </h1>
                <h2 className="text-xl lg:text-4xl text-gray-500 text-center">
                  fullstack developer
                </h2>
                <button
                  onClick={handleClick}
                  className="nav-button lg:text-3xl text-center mt-4 p-2 pr-4 text-sm flex items-center"
                >
                  <FontAwesomeIcon icon="long-arrow-alt-left" />
                  <span className="pl-6 leading-none">Learn more about me</span>
                </button>
              </div>
              <button
                style={{
                  ...buttonDefaultStyles,
                  ...buttonTransitionStyles[state],
                }}
                onClick={handleClick}
                className="absolute left-0 top-0 lg:text-3xl text-center mt-4 p-4 text-sm text-green-400"
              >
                <FontAwesomeIcon icon="long-arrow-alt-right" />
              </button>
            </div>
          </div>

          // add about me page
        )}
      </Transition>
    </div>
  );
}

export default App;
