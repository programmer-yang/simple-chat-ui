import * as React from "react";
import "./index.less";
import { createCs } from "../../utils";

import masterImg from "../../assets/master1.png";

const cs = createCs("component-chat-message");

export enum Types {
  master = "master",
  guest = "guest",
}

interface HeaderProps {
  type: Types;
  avatarUrl?: String;
  text: String;
}

const Message = (props: HeaderProps) => {
  const { type, text } = props;
  return (
    <div
      className={`${cs()} ${
        type === Types.master ? cs("master") : cs("guest")
      }`}
    >
      {type === Types.master ? (
        <>
          <div className="avatar">
            <img src={masterImg} alt="" />
          </div>
          <div className={"text"}>{text}</div>
        </>
      ) : null}
      {type === Types.guest ? (
        <>
          <div className="text">{text}</div>
          <div className="avatar">
            <img src={masterImg} alt="" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Message;
