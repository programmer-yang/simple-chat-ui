import * as React from "react";
import { createCs } from "../../utils";
import { AuthorTypes } from "../../types";

const cs = createCs("component-chat-message");

interface MessageProps {
  type: AuthorTypes;
  avatarUrl?: string;
  text: string;
}

const Message: React.FC<MessageProps> = (props: MessageProps) => {
  const { type, text, avatarUrl } = props;
  return (
    <div
      className={`${cs()} ${
        type === AuthorTypes.master ? cs("master") : cs("guest")
      }`}
    >
      {type === AuthorTypes.master ? (
        <>
          <div className="avatar">
            <img src={avatarUrl} alt="" />
          </div>
          <div className={"text"}>{text}</div>
        </>
      ) : null}
      {type === AuthorTypes.guest ? (
        <>
          <div className="text">{text}</div>
          <div className="avatar">
            <img src={avatarUrl} alt="" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Message;
