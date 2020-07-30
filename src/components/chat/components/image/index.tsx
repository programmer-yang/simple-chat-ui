import * as React from "react";
import { createCs } from "../../utils";
import { AuthorTypes } from "../../types";

const cs = createCs("component-chat-image");

interface ImageProps {
  type: AuthorTypes;
  avatarUrl?: string;
  text: string;
}

const Image: React.FC<ImageProps> = (props: ImageProps) => {
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
          <div className={"image"}>
            <img src={text} alt="" />
          </div>
        </>
      ) : null}
      {type === AuthorTypes.guest ? (
        <>
          <div className={"image"}>
            <img src={text} alt="" />
          </div>
          <div className="avatar">
            <img src={avatarUrl} alt="" />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Image;
