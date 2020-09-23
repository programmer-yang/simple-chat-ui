## simple-chat-ui

是一个用于移动端 IM 的轻量级 UI，它很小。目前支持文本、图片、语音、自定义信息。

![alt demo](http://39.108.94.69:9010/data/yang/blogs/simplechatuidemo001.jpg)

## 使用

```bash
yanr add simple-chat-ui
```

```js
import ChatUI from "simple-chat-ui";

const render = () => {
  // ...
  return (
    <Chat
      messageList={messageList}
      onSendMessage={onSendMessage}
      onClickPhoto={onClickPhoto}
      onMoveToTop={onMoveToTop}
      renderCustomMessage={renderCustomMessage}
    />
  );
};
```

### API

| 参数                | 说明                                         | 类型                        | 默认值 |
| :------------------ | :------------------------------------------- | :-------------------------- | :----- |
| messageList         | 信息集合                                     | messageTypes[]              | -      |
| onSendMessage       | 发送信息                                     | function(message)           | -      |
| moreHeight          | 容器高度补全(解决特定场景的键盘高度异常问题) | number                      | -      |
| onClickPhoto        | 单击相册                                     | function()                  | -      |
| onClickImage        | 单击图片信息                                 | function(url)               | -      |
| onMoveToTop         | 滚动到顶部                                   | function()                  | -      |
| renderCustomMessage | 渲染自定义消息                               | function(messageTypes, key) | -      |
| disable             | 只读模式                                     | boolean                     | -      |

### messageTypes

| 参数       | 说明                                                                      | 类型              | 默认值 |
| :--------- | :------------------------------------------------------------------------ | :---------------- | :----- |
| type       | 信息类型(info:提醒信息,message: 文本,image:图片,audio:语音,custom:自定义) | messageTypes[]    | -      |
| text       | 信息内容                                                                  | function(message) | -      |
| author     | 信息所属(mater、guest)                                                    | string            | -      |
| authorUrl  | 头像链接                                                                  | function()        | -      |
| readStatus | 是否已读(目前只支持 type=audio)                                           | function(url)     | -      |
| customData | 自定义内容                                                                | object            | -      |

### 开发

```
npm start
```
