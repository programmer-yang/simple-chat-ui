import * as React from "react";
import "./index.less";
import { createCs } from "../../utils";

import addIcon from "../../assets/add.svg";

import { chatDataTypes } from "../../";

const { useState, useRef, useEffect } = React;

const cs = createCs("component-chat-input");

interface InputProps {
  onClickMore: Function;
  chatData: chatDataTypes;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSendMessage: (value: String) => void;
}

const Input = (props: InputProps) => {
  const inputRef = useRef<HTMLDivElement>();

  const { onClickMore, chatData, onFocus, onBlur, onSendMessage } = props;
  const { moreVisible } = chatData;

  const [inputValue, setInputValue] = useState<string>("");

  const onTestKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
      },
      false
    );
  }, []);
  return (
    <div className={cs()} ref={inputRef}>
      <input
        type="text"
        value={inputValue}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onTestKeyDown}
        onChange={onChangeInput}
      />
      <div className={cs("more")}>
        <img src={addIcon} alt="" onClick={() => onClickMore(!moreVisible)} />
      </div>
    </div>
  );
};

export default Input;
