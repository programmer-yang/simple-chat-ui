import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./index.less";
import "./components/chat/index.less";

import Chat, { messageTypes } from "./components/chat";

const { useState } = React;

const messageListDefault = [
  {
    type: "info",
    text: "2020/01/20  15:30",
  },
  {
    type: "info",
    text:
      "温馨提示：这是一个提醒消息，可以用于提醒用户聊天注意事项、时间提醒、撤回提醒等。",
  },
  {
    type: "image",
    author: "guest",
    authorUrl:
      "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G8.jpg",
    text: "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G3.jpg",
  },
  {
    type: "message",
    author: "master",
    authorUrl:
      "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G4.jpg",
    text: "早上好",
  },
  {
    type: "message",
    author: "guest",
    authorUrl:
      "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G8.jpg",
    text: "我昨天做梦我们去了北极。",
  },
  {
    type: "audio",
    author: "master",
    authorUrl:
      "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G4.jpg",
    text: "哇噢...，北极好玩吗？",
    readStatus: true,
  },
  {
    type: "audio",
    author: "master",
    authorUrl:
      "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G4.jpg",
    text: "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G4.jpg",
    readStatus: false,
  },
  {
    type: "audio",
    author: "guest",
    authorUrl:
      "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G8.jpg",
    text: "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G4.jpg",
  },
  // {
  //   type: "custom",
  //   customData: {
  //     a: "a",
  //     b: "b",
  //   },
  // },
];

const App = () => {
  const [messageList, setMessageList] = useState<messageTypes[]>(
    messageListDefault
  );

  const onSendMessage = (value: string) => {
    if (!value || value.trim() === "") {
      return;
    }
    const newMessageList = [...messageList];
    newMessageList.push({
      type: "message",
      author: "guest",
      authorUrl: "http://39.108.94.69:9010/data/yang/yimei/master1.png",
      text: value,
    });
    newMessageList.push({
      type: "message",
      author: "master",
      authorUrl: "http://39.108.94.69:9010/data/yang/yimei/guest1.png",
      text: "稍等一下，测试中",
    });

    setMessageList(newMessageList);
  };

  const onClickPhoto = () => {
    console.log("on click photo");
    const newMessageList = [...messageList];
    newMessageList.push({
      type: "image",
      author: "master",
      authorUrl: "http://39.108.94.69:9010/data/yang/yimei/master1.png",
      text:
        "http://www.520touxiang.com/uploads/allimg/161013/3-161013225G4.jpg",
    });

    setMessageList(newMessageList);
  };
  const onMoveToTop = () => {
    console.log("the top");
  };

  const renderCustomMessage = (item: messageTypes, itemKey: string) => {
    console.log(item);
    return (
      <div className="message-custom" key={itemKey}>
        这是一个自定义消息
      </div>
    );
  };
  return (
    <div>
      <Chat
        messageList={messageList}
        onSendMessage={onSendMessage}
        // moreHeight={100}
        onClickPhoto={onClickPhoto}
        onMoveToTop={onMoveToTop}
        renderCustomMessage={renderCustomMessage}
        // disable={}
      />
    </div>
  );
};

const Home = () => {
  return (
    <ul>
      <li>
        <Link to="/demo1">demo1</Link>
      </li>
      <li>
        <Link to="/demo2">demo2</Link>
      </li>
    </ul>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/demo1" exact component={App} />
        <Route path="/demo2" exact component={App} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));
