import * as React from "react";
import { createCs } from "../../utils";

import * as addIcon from "../../assets/add.svg";

import { chatDataTypes } from "../../";

const { useState, useRef, useEffect } = React;

const cs = createCs("component-chat-input");

interface InputProps {
  onClickMore: (e: boolean) => void;
  chatData: chatDataTypes;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onSendMessage: (value: string) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const inputRef = useRef<HTMLDivElement>();

  const { onClickMore, chatData, onFocus, onBlur, onSendMessage } = props;
  const { moreVisible } = chatData;

  const [inputValue, setInputValue] = useState<string>("");

  const onTestKeyDown = (e: React.KeyboardEvent) => {
    console.log("e.key", e.key);
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
