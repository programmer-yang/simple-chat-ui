import * as React from "react";
import { createCs } from "../../utils";
import { AuthorTypes } from "../../types";

import * as audiomasterSvg from "../../assets/audiomaster.svg";
import * as audioguestSvg from "../../assets/audioguest.svg";

const audiomaster = audiomasterSvg.default
  ? audiomasterSvg.default
  : audiomasterSvg;

const audioguest = audioguestSvg.default
  ? audioguestSvg.default
  : audioguestSvg;

const cs = createCs("component-chat-audio");

interface AudioProps {
  type: AuthorTypes;
  avatarUrl?: string;
  text: string;
  readStatus?: boolean;
}

const Image: React.FC<AudioProps> = (props: AudioProps) => {
  const { type, text, avatarUrl, readStatus } = props;
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
          <div className={`audio ${readStatus ? "" : "audio-unread"}`}>
            <img src={audiomaster} alt="" />
          </div>
        </>
      ) : null}
      {type === AuthorTypes.guest ? (
        <>
          <div className={"audio"}>
            <img src={audioguest} alt="" />
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
