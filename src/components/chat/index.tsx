import * as React from "react";
import { createCs } from "./utils";

// import Header from "./components/header";
import Container from "./components/container";
import Info from "./components/info";
import Message from "./components/message";
import Image from "./components/image";
import Audio from "./components/audio";
import Input from "./components/input";
import More from "./components/more";

import { AuthorTypes } from "./types";

const { useReducer, useRef, useEffect } = React;

const cs = createCs("component-chat");

interface reducerActionTypes {
  type: string;
  value: string | number | boolean;
}

export interface messageTypes {
  type: string;
  text?: string;
  author?: string;
  authorUrl?: string;
  readStatus?: boolean;
  // eslint-disable-next-line
  customData?: any;
}

export interface chatDataTypes {
  moreVisible: boolean;
  inputFocus: boolean;
  // messageList: Array<messageTypes>;
  defaultContainerHeight: number;
  containerHeight: number;
  // 补全高度 用于不同平台的兼容
  moreHeight?: number;
}

export interface chatPropsTypes {
  messageList: Array<messageTypes>;
  onSendMessage: (value: string) => void;
  // 补全高度 用于不同平台的兼容
  moreHeight?: number;
  onClickPhoto?: () => void;
  onClickImage?: (url: string) => void;
  onMoveToTop?: () => void;
  renderCustomMessage?: (item: messageTypes, key: string) => JSX.Element;
}

const initReducerData = {
  moreVisible: false, // 控制更多内容是否展示
  inputFocus: false,
  // messageList: messageListDefault,
  defaultContainerHeight: window.outerHeight,
  containerHeight: window.outerHeight,
  // moreHeight: 100,
};

const reducer = (state: chatDataTypes, action: reducerActionTypes) => {
  switch (action.type) {
    case "changeMoreVisible":
      return {
        ...state,
        moreVisible: Boolean(action.value),
      };
    case "inputFocusStatus":
      return {
        ...state,
        inputFocus: Boolean(action.value),
      };
    // case "sendMessage":
    //   const newMessageList = [...state.messageList];
    //   newMessageList.push(action.value);
    //   return {
    //     ...state,
    //     messageList: newMessageList,
    //   };
    case "changeDefaultContainerHeight":
      return {
        ...state,
        defaultContainerHeight: Number(action.value),
      };
    case "changeContainerHeight":
      return {
        ...state,
        containerHeight: Number(action.value),
      };
    default:
      throw new Error("no action type");
  }
};

const Chat: React.FC<chatPropsTypes> = (props: chatPropsTypes) => {
  const {
    messageList,
    onSendMessage: onSendMessageProp,
    moreHeight,
    onClickPhoto,
    onMoveToTop,
    renderCustomMessage,
    onClickImage,
  } = props;

  const containerRef = useRef<HTMLDivElement>();
  const touchStartRef = useRef<{ clientY: number }>();
  const [chatData, dispatch] = useReducer(reducer, {
    ...initReducerData,
    moreHeight,
  });

  const changeMoreVisible = (type: boolean) => {
    dispatch({ type: "changeMoreVisible", value: type });
  };

  const onInputFocus = () => {
    dispatch({ type: "inputFocusStatus", value: true });
  };
  const onInputBlur = () => {
    dispatch({ type: "inputFocusStatus", value: false });
  };

  const scrollGoContainerBottom = () => {
    containerRef.current.scrollTo({
      top: Date.now(),
      behavior: "smooth",
    });
  };
  const scrollGoWindowBottom = () => {
    window.scrollTo(0, 0);
  };

  const onSendMessage = (value: string) => {
    onSendMessageProp(value);
  };

  // 当输入框焦点发生改编（弹出键盘和隐藏键盘）的时候，更新容器高度
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "changeContainerHeight", value: window.innerHeight });
      if (chatData.inputFocus) {
        scrollGoContainerBottom();
        if (chatData.moreVisible) {
          dispatch({ type: "changeMoreVisible", value: false });
        }
      }
      scrollGoWindowBottom();
    }, 150);
  }, [chatData.inputFocus]);

  // 当输入框焦点发生改编（弹出键盘和隐藏键盘）的时候，更新容器高度
  useEffect(() => {
    dispatch({
      type: "changeDefaultContainerHeight",
      value: window.outerHeight,
    });
  }, [window.outerHeight]);

  useEffect(() => {
    containerRef.current.addEventListener(
      "touchmove",
      (e) => {
        const yDiff = touchStartRef.current.clientY - e.touches[0].clientY;
        if (
          containerRef.current.scrollHeight -
            containerRef.current.scrollTop -
            containerRef.current.clientHeight <=
            0 &&
          yDiff > 0
        ) {
          // containerRef.current.style.touchAction = "none";
          e.preventDefault();
        } else {
          // containerRef.current.style.touchAction = "auto";
        }
      },
      false
    );

    containerRef.current.addEventListener(
      "touchstart",
      (e) => {
        touchStartRef.current = e.touches[0];
      },
      false
    );

    containerRef.current.addEventListener(
      "touchend",
      () => {
        if (
          containerRef.current.scrollTop <= 0 &&
          typeof onMoveToTop === "function"
        ) {
          onMoveToTop();
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    scrollGoContainerBottom();
    setTimeout(() => {
      if (!chatData.inputFocus) {
        scrollGoWindowBottom();
      }
    }, 150);
  }, [messageList.length]);

  useEffect(() => {
    if (chatData.moreVisible) {
      setTimeout(() => scrollGoContainerBottom(), 150);
    }
  }, [chatData.moreVisible]);

  return (
    <div className={cs("root")}>
      {/* <Header name="李冰医生" /> */}
      <Container containerRef={containerRef} chatData={chatData}>
        {messageList.map((item: messageTypes, index: number) => {
          const itemKey = `message.item.${index}`;
          if (item.type === "info") {
            return <Info key={itemKey} text={item.text} />;
          } else if (item.type === "message") {
            return (
              <Message
                key={itemKey}
                type={
                  item.author === "master"
                    ? AuthorTypes.master
                    : AuthorTypes.guest
                }
                text={item.text}
                avatarUrl={item.authorUrl}
              />
            );
          } else if (item.type === "image") {
            return (
              <Image
                key={itemKey}
                type={
                  item.author === "master"
                    ? AuthorTypes.master
                    : AuthorTypes.guest
                }
                text={item.text}
                avatarUrl={item.authorUrl}
                onClick={onClickImage}
              />
            );
          } else if (item.type === "audio") {
            return (
              <Audio
                key={itemKey}
                type={
                  item.author === "master"
                    ? AuthorTypes.master
                    : AuthorTypes.guest
                }
                text={item.text}
                avatarUrl={item.authorUrl}
                readStatus={item.readStatus}
              />
            );
          } else if (item.type === "custom") {
            return renderCustomMessage(item, itemKey);
          }
        })}
      </Container>
      <Input
        chatData={chatData}
        onClickMore={changeMoreVisible}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        onSendMessage={onSendMessage}
      />
      <More moreVisible={chatData.moreVisible} onClickPhoto={onClickPhoto} />
    </div>
  );
};

export default Chat;
