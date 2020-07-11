import * as React from "react";
import "./index.less";
import { createCs } from "../../utils";

import photoIcon from "../../assets/photo.svg";
import phraseIcon from "../../assets/phrase.svg";

const cs = createCs("component-chat-more");

interface MoreProps {
  moreVisible: boolean;
}

const More = (props: MoreProps) => {
  const { moreVisible } = props;
  return (
    <div className={`${cs()} ${moreVisible ? cs("show") : cs("close")}`}>
      <div className={cs("item")}>
        <img src={photoIcon} alt="" />
      </div>
      <div className={cs("item")}>
        <img src={phraseIcon} alt="" />
      </div>
    </div>
  );
};

export default More;
