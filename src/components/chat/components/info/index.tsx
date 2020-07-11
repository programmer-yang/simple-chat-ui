import * as React from "react";
import "./index.less";
import { createCs } from "../../utils";

const cs = createCs("component-chat-info");

interface InfoProps {
  text: string;
}

const Info: any = (props: InfoProps) => {
  const { text } = props;
  return <div className={cs()}>{text}</div>;
};

export default Info;
