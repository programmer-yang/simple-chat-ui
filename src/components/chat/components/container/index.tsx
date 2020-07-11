import * as React from "react";
import "./index.less";
import { createCs } from "../../utils";

import { chatDataTypes } from "../../";
const { useRef, useLayoutEffect, useState } = React;

const cs = createCs("component-chat-container");

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
  containerRef?: React.MutableRefObject<HTMLInputElement>;
  chatData: chatDataTypes;
}

const Header: any = (props: ContainerProps) => {
  const { children, containerRef, chatData } = props;

  // const messageContainerRef = useRef<HTMLDivElement>();
  // const [containerStyle, setContainerStyle] = useState<Object>({});
  // const [containerHeight, setContainerHeight] = useState<number>(
  //   window.innerHeight
  // );

  // useEffect(() => {
  //   //   console.log(
  //   //     "messageContainerRef",
  //   //     messageContainerRef.current.clientHeight
  //   //   );
  //   //   console.log("containerRef", containerRef.current.clientHeight);
  //   //   if (
  //   //     messageContainerRef.current.clientHeight <
  //   //     containerRef.current.clientHeight
  //   //   ) {
  //   //     setContainerStyle({
  //   //       // height: `${messageContainerRef.current.clientHeight}px`,
  //   //     });
  //   //   }
  // setContainerStyle({
  //   height: `${window.innerHeight - window.innerWidth}px`,
  // });
  // });

  // useLayoutEffect(() => {
  //   setTimeout(() => {
  //     setContainerHeight(window.innerHeight);
  //     window.scrollTo(0, 0);
  //     containerRef.current.scrollTo({
  //       top: Date.now(),
  //       behavior: "smooth",
  //     });
  //   }, 100);
  // }, [chatData.inputFocus]);

  const contianerStyle: { height?: string } = {};

  const containerHeightDiff =
    chatData.defaultContainerHeight - chatData.containerHeight;

  contianerStyle.height = `calc(100vh - 54px - ${containerHeightDiff}px)`;
  if (chatData.inputFocus) {
  } else {
  }

  return (
    <div className={cs()} ref={containerRef} style={contianerStyle}>
      {children}
      {/* <div className={cs("message-container")} ref={messageContainerRef}>
      </div> */}
    </div>
  );
};

export default Header;
