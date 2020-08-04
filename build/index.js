"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("./utils");
// import Header from "./components/header";
var container_1 = require("./components/container");
var info_1 = require("./components/info");
var message_1 = require("./components/message");
var image_1 = require("./components/image");
var audio_1 = require("./components/audio");
var input_1 = require("./components/input");
var more_1 = require("./components/more");
var types_1 = require("./types");
var useReducer = React.useReducer, useRef = React.useRef, useEffect = React.useEffect;
var cs = utils_1.createCs("component-chat");
var initReducerData = {
    moreVisible: false,
    inputFocus: false,
    // messageList: messageListDefault,
    defaultContainerHeight: window.outerHeight,
    containerHeight: window.outerHeight,
};
var reducer = function (state, action) {
    switch (action.type) {
        case "changeMoreVisible":
            return __assign(__assign({}, state), { moreVisible: Boolean(action.value) });
        case "inputFocusStatus":
            return __assign(__assign({}, state), { inputFocus: Boolean(action.value) });
        // case "sendMessage":
        //   const newMessageList = [...state.messageList];
        //   newMessageList.push(action.value);
        //   return {
        //     ...state,
        //     messageList: newMessageList,
        //   };
        case "changeDefaultContainerHeight":
            return __assign(__assign({}, state), { defaultContainerHeight: Number(action.value) });
        case "changeContainerHeight":
            return __assign(__assign({}, state), { containerHeight: Number(action.value) });
        default:
            throw new Error("no action type");
    }
};
var Chat = function (props) {
    var messageList = props.messageList, onSendMessageProp = props.onSendMessage, moreHeight = props.moreHeight, onClickPhoto = props.onClickPhoto, onMoveToTop = props.onMoveToTop, renderCustomMessage = props.renderCustomMessage;
    var containerRef = useRef();
    var touchStartRef = useRef();
    var _a = useReducer(reducer, __assign(__assign({}, initReducerData), { moreHeight: moreHeight })), chatData = _a[0], dispatch = _a[1];
    var changeMoreVisible = function (type) {
        dispatch({ type: "changeMoreVisible", value: type });
    };
    var onInputFocus = function () {
        dispatch({ type: "inputFocusStatus", value: true });
    };
    var onInputBlur = function () {
        dispatch({ type: "inputFocusStatus", value: false });
    };
    var scrollGoContainerBottom = function () {
        containerRef.current.scrollTo({
            top: Date.now(),
            behavior: "smooth",
        });
    };
    var scrollGoWindowBottom = function () {
        window.scrollTo(0, 0);
    };
    var onSendMessage = function (value) {
        onSendMessageProp(value);
    };
    // 当输入框焦点发生改编（弹出键盘和隐藏键盘）的时候，更新容器高度
    useEffect(function () {
        setTimeout(function () {
            dispatch({ type: "changeContainerHeight", value: window.innerHeight });
            if (chatData.inputFocus) {
                scrollGoContainerBottom();
                if (chatData.moreVisible) {
                    dispatch({ type: "changeMoreVisible", value: false });
                }
            }
            scrollGoWindowBottom();
        }, 150);
    }, [chatData.inputFocus]);
    // 当输入框焦点发生改编（弹出键盘和隐藏键盘）的时候，更新容器高度
    useEffect(function () {
        dispatch({
            type: "changeDefaultContainerHeight",
            value: window.outerHeight,
        });
    }, [window.outerHeight]);
    useEffect(function () {
        containerRef.current.addEventListener("touchmove", function (e) {
            var yDiff = touchStartRef.current.clientY - e.touches[0].clientY;
            if (containerRef.current.scrollHeight -
                containerRef.current.scrollTop -
                containerRef.current.clientHeight <=
                0 &&
                yDiff > 0) {
                // containerRef.current.style.touchAction = "none";
                e.preventDefault();
            }
            else {
                // containerRef.current.style.touchAction = "auto";
            }
        }, false);
        containerRef.current.addEventListener("touchstart", function (e) {
            touchStartRef.current = e.touches[0];
        }, false);
        containerRef.current.addEventListener("touchend", function () {
            if (containerRef.current.scrollTop <= 0 &&
                typeof onMoveToTop === "function") {
                onMoveToTop();
            }
        }, false);
    }, []);
    useEffect(function () {
        scrollGoContainerBottom();
        setTimeout(function () {
            if (!chatData.inputFocus) {
                scrollGoWindowBottom();
            }
        }, 150);
    }, [messageList.length]);
    useEffect(function () {
        if (chatData.moreVisible) {
            setTimeout(function () { return scrollGoContainerBottom(); }, 150);
        }
    }, [chatData.moreVisible]);
    return (React.createElement("div", { className: cs("root") },
        React.createElement(container_1.default, { containerRef: containerRef, chatData: chatData }, messageList.map(function (item, index) {
            var itemKey = "message.item." + index;
            if (item.type === "info") {
                return React.createElement(info_1.default, { key: itemKey, text: item.text });
            }
            else if (item.type === "message") {
                return (React.createElement(message_1.default, { key: itemKey, type: item.author === "master"
                        ? types_1.AuthorTypes.master
                        : types_1.AuthorTypes.guest, text: item.text, avatarUrl: item.authorUrl }));
            }
            else if (item.type === "image") {
                return (React.createElement(image_1.default, { key: itemKey, type: item.author === "master"
                        ? types_1.AuthorTypes.master
                        : types_1.AuthorTypes.guest, text: item.text, avatarUrl: item.authorUrl }));
            }
            else if (item.type === "audio") {
                return (React.createElement(audio_1.default, { key: itemKey, type: item.author === "master"
                        ? types_1.AuthorTypes.master
                        : types_1.AuthorTypes.guest, text: item.text, avatarUrl: item.authorUrl, readStatus: item.readStatus }));
            }
            else if (item.type === "custom") {
                return renderCustomMessage(item, itemKey);
            }
        })),
        React.createElement(input_1.default, { chatData: chatData, onClickMore: changeMoreVisible, onFocus: onInputFocus, onBlur: onInputBlur, onSendMessage: onSendMessage }),
        React.createElement(more_1.default, { moreVisible: chatData.moreVisible, onClickPhoto: onClickPhoto })));
};
exports.default = Chat;
