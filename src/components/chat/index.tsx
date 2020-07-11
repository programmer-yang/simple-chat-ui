import * as React from "react";
import "./index.less";
import { createCs } from "./utils";

// import Header from "./components/header";
import Container from "./components/container";
import Info from "./components/info";
import Message, { Types } from "./components/message";
import Input from "./components/input";
import More from "./components/more";

const messageListDefault = [
  {
    type: "info",
    text: "2020/01/20  15:30",
  },
  {
    type: "info",
    text:
      "温馨提示：医生已接单，本次咨询时效为24小时，请及时追问。咨询过程中，医生可能会由于手术，出诊暂时离开，您可继续提出有效问题，医生会抽空为您解答，请多一点耐心。",
  },
  {
    type: "message",
    author: "master",
    authorUrl: "",
    text:
      "您好，感谢信任，目前为抗击新冠病毒的特殊时期，我将在临床工作之余尽快回复，如有回复不及时，请您理解",
  },
  {
    type: "message",
    author: "guest",
    authorUrl: "",
    text:
      "我最近的血糖值异常，空腹血糖正常值在9mmol/L，餐后两小时血糖的正常值在8mmol/L，请问这个是不是整形后的异常情况",
  },
  {
    type: "message",
    author: "master",
    authorUrl: "",
    text:
      "您好，感谢信任，目前为抗击新冠病毒的特殊时期，我将在临床工作之余尽快回复，如有回复不及时，请您理解",
  },
  {
    type: "message",
    author: "guest",
    authorUrl: "",
    text:
      "我最近的血糖值异常，空腹血糖正常值在9mmol/L，餐后两小时血糖的正常值在8mmol/L，请问这个是不是整形后的异常情况",
  },
  {
    type: "message",
    author: "master",
    authorUrl: "",
    text:
      "您好，感谢信任，目前为抗击新冠病毒的特殊时期，我将在临床工作之余尽快回复，如有回复不及时，请您理解",
  },
  {
    type: "message",
    author: "guest",
    authorUrl: "",
    text:
      "我最近的血糖值异常，空腹血糖正常值在9mmol/L，餐后两小时血糖的正常值在8mmol/L，请问这个是不是整形后的异常情况",
  },
];

const { useState, useReducer, useRef, useEffect } = React;

const cs = createCs("component-chat");

interface reducerActionTypes {
  type: string;
  value: any;
}

interface messageTypes {
  type: string;
  text: string;
  author?: string;
  authorUrl?: string;
}

export interface chatDataTypes {
  moreVisible: boolean;
  inputFocus: boolean;
  messageList: Array<messageTypes>;
  defaultContainerHeight: number;
  containerHeight: number;
}

const initReducerData = {
  moreVisible: false, // 控制更多内容是否展示
  inputFocus: false,
  messageList: messageListDefault,
  defaultContainerHeight: window.innerHeight,
  containerHeight: window.innerHeight,
};

const reducer = (state: chatDataTypes, action: reducerActionTypes) => {
  switch (action.type) {
    case "changeMoreVisible":
      return {
        ...state,
        moreVisible: action.value,
      };
    case "inputFocusStatus":
      return {
        ...state,
        inputFocus: action.value,
      };
    case "sendMessage":
      const newMessageList = [...state.messageList];
      newMessageList.push(action.value);
      return {
        ...state,
        messageList: newMessageList,
      };
    case "changeContainerHeight":
      return {
        ...state,
        containerHeight: action.value,
      };
    default:
      throw new Error("no action type");
  }
};

const Chat: any = () => {
  const containerRef = useRef<HTMLDivElement>();
  const touchStartRef = useRef<{ clientY: number }>();
  const [chatData, dispatch] = useReducer(reducer, initReducerData);

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
    dispatch({
      type: "sendMessage",
      value: {
        type: "message",
        author: "master",
        authorUrl: "",
        text: value,
      },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "changeContainerHeight", value: window.innerHeight });
      if (!chatData.inputFocus) {
        scrollGoWindowBottom();
      }
      scrollGoContainerBottom();
      scrollGoWindowBottom();
    }, 150);
  }, [chatData.inputFocus]);

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
          containerRef.current.style.touchAction = "none";
          e.preventDefault();
        } else {
          containerRef.current.style.touchAction = "auto";
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
  }, []);

  useEffect(() => {
    scrollGoContainerBottom();
    setTimeout(() => {
      if (!chatData.inputFocus) {
        scrollGoWindowBottom();
      }
    }, 150);
  }, [chatData.messageList.length]);

  useEffect(() => {
    if (chatData.moreVisible) {
      setTimeout(() => scrollGoContainerBottom(), 150);
    }
  }, [chatData.moreVisible]);

  return (
    <div className={cs("root")}>
      {/* <Header name="李冰医生" /> */}
      <Container containerRef={containerRef} chatData={chatData}>
        {chatData.messageList.map((item: messageTypes, index: number) => {
          const itemKey = `message.item.${index}`;
          if (item.type === "info") {
            return <Info key={itemKey} text={item.text} />;
          } else if (item.type === "message") {
            if (item.author === "master") {
              return (
                <Message key={itemKey} type={Types.master} text={item.text} />
              );
            } else if (item.author === "guest") {
              return (
                <Message key={itemKey} type={Types.guest} text={item.text} />
              );
            }
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
      <More moreVisible={chatData.moreVisible} />
    </div>
  );
};

export default Chat;
