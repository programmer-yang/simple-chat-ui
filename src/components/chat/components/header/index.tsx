import * as React from "react";
import { createCs } from "../../utils";

import * as closeIcon from "../../assets/close.svg";
import * as moreIcon from "../../assets/more.svg";

const cs = createCs("component-chat-header");

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { name } = props;
  return (
    <div className={cs()}>
      <div className={cs("action")}>
        <img src={closeIcon.default ? closeIcon.default : closeIcon} alt="" />
      </div>
      <div className={cs("title")}>{name}</div>
      <div className={cs("more")}>
        <img src={moreIcon.default ? moreIcon.default : moreIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
