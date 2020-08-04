import * as React from "react";
import { createCs } from "../../utils";

import * as photoIcon from "../../assets/photo.svg";
// import * as phraseIcon from "../../assets/phrase.svg";

const cs = createCs("component-chat-more");

interface MoreProps {
  moreVisible: boolean;
  onClickPhoto?: () => void;
  onClickPhrase?: () => void;
}

const More: React.FC<MoreProps> = (props: MoreProps) => {
  const { moreVisible, onClickPhoto } = props;
  return (
    <div className={`${cs()} ${moreVisible ? cs("show") : cs("close")}`}>
      <div className={cs("item")} onClick={onClickPhoto}>
        <img src={photoIcon.default ? photoIcon.default : photoIcon} alt="" />
      </div>
      {/* <div className={cs("item")} onClick={onClickPhrase}>
        <img
          src={phraseIcon.default ? phraseIcon.default : phraseIcon}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default More;
