import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.less";

import Chat from "./components/chat";

const App = () => {
  return (
    <div>
      <Chat />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
