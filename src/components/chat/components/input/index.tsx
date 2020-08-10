import * as React from "react";
import { createCs } from "../../utils";

import * as addIcon from "../../assets/add.svg";
import * as topIcon from "../../assets/top.svg";

import { chatDataTypes } from "../../";

const { useState, useRef, useEffect } = React;

const cs = createCs("component-chat-input");

interface InputProps {
  onClickMore: (e: boolean) => void;
  chatData: chatDataTypes;
  onFocus: (e: React.FocusEvent<HTMLPreElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLPreElement>) => void;
  onSendMessage: (value: string) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const inputContainerRef = useRef<HTMLDivElement>();
  const inputRef = useRef<HTMLPreElement>();

  const { onClickMore, chatData, onFocus, onBlur, onSendMessage } = props;
  const { moreVisible } = chatData;

  const [inputValue, setInputValue] = useState<string>("");

  const onClickSend = () => {
    onSendMessage(inputValue);
    setInputValue("");
    inputRef.current.innerHTML = "";
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.textContent);
    // setInputValue(inputRef.current.innerHTML);
    setInputValue(e.currentTarget.textContent);
  };

  useEffect(() => {
    inputContainerRef.current.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
      },
      false
    );
  }, []);
  return (
    <div className={cs()} ref={inputContainerRef}>
      <div className={cs("container")}>
        <pre
          ref={inputRef}
          contentEditable
          className={cs("container-input")}
          onFocus={onFocus}
          onBlur={onBlur}
          onInput={onChangeInput}
        />
        <i
          className={`${cs("container-send")} ${
            inputValue.length > 0 ? cs("container-send-show") : ""
          }`}
        >
          <img
            src={topIcon.default ? topIcon.default : topIcon}
            alt=""
            onClick={onClickSend}
          />
        </i>
      </div>
      <div className={cs("more")}>
        <img
          src={addIcon.default ? addIcon.default : addIcon}
          alt=""
          onClick={() => onClickMore(!moreVisible)}
        />
      </div>
    </div>
  );
};

export default Input;
