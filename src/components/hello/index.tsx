import * as React from "react";
import "./index.less";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const Hellp = (props: HelloProps) => {
  return (
    <h1 className="root">
      Hello from {props.compiler} and {props.framework}! 123
    </h1>
  );
};

export default Hellp;
