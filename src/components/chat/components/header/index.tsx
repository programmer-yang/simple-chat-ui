import * as React from "react";
import "./index.less";
import { createCs } from "../../utils";

import closeIcon from "../../assets/close.svg";
import moreIcon from "../../assets/more.svg";

const cs = createCs("component-chat-header");

interface HeaderProps {
  name: string;
}

const Header = (props: HeaderProps) => {
  const { name } = props;
  return (
    <div className={cs()}>
      <div className={cs("action")}>
        <img src={closeIcon} alt="" />
      </div>
      <div className={cs("title")}>{name}</div>
      <div className={cs("more")}>
        <img src={moreIcon} alt="" />
      </div>
    </div>
  );
};

export default Header;
