import * as React from "react";
import { createCs } from "../../utils";

import { chatDataTypes } from "../../";

const cs = createCs("component-chat-container");

interface ContainerProps {
  children: JSX.Element[] | JSX.Element;
  containerRef?: React.MutableRefObject<HTMLDivElement>;
  chatData: chatDataTypes;
  disable?: boolean;
}

const Header: React.FC<ContainerProps> = (props: ContainerProps) => {
  const { children, containerRef, chatData, disable } = props;

  const contianerStyle: { height?: string } = {};

  const { defaultContainerHeight, containerHeight, moreHeight = 0 } = chatData;

  const containerHeightDiff =
    defaultContainerHeight - containerHeight + moreHeight;

  contianerStyle.height = `calc(100vh - ${
    disable ? 0 : 54
  }px - ${containerHeightDiff}px)`;
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
