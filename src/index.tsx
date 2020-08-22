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
      "温馨提示：医生已接单，本次咨询时效为24小时，请及时追问。咨询过程中，医生可能会由于手术，出诊暂时离开，您可继续提出有效问题，医生会抽空为您解答，请多一点耐心。",
  },
  {
    type: "image",
    author: "guest",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
    text: "http://watcher.today:9010/data/yang/yimei/1-mini.jpg",
  },
  {
    type: "message",
    author: "master",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/master1.png",
    text:
      "您好，感谢信任，目前为抗击新冠病毒的特殊时期，我将在临床工作之余尽快回复，如有回复不及时，请您理解",
  },
  {
    type: "message",
    author: "guest",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
    text:
      "我最近的血糖值异常，空腹血糖正常值在9mmol/L，餐后两小时血糖的正常值在8mmol/L，请问这个是不是整形后的异常情况",
  },
  {
    type: "image",
    author: "master",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
    text: "http://watcher.today:9010/data/yang/yimei/1-mini.jpg",
  },
  {
    type: "audio",
    author: "master",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
    text: "http://watcher.today:9010/data/yang/yimei/1-mini.jpg",
    readStatus: true,
  },
  {
    type: "audio",
    author: "master",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
    text: "http://watcher.today:9010/data/yang/yimei/1-mini.jpg",
    readStatus: false,
  },
  {
    type: "audio",
    author: "guest",
    authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
    text: "http://watcher.today:9010/data/yang/yimei/1-mini.jpg",
  },
  {
    type: "custom",
    customData: {
      a: "a",
      b: "b",
    },
  },
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
      authorUrl: "http://watcher.today:9010/data/yang/yimei/master1.png",
      text: value,
    });
    newMessageList.push({
      type: "message",
      author: "master",
      authorUrl: "http://watcher.today:9010/data/yang/yimei/guest1.png",
      text: "稍等一下，测试中",
    });

    setMessageList(newMessageList);
  };

  const onClickPhoto = () => {
    console.log("on click photo");
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
