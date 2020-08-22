"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var addIcon = require("../../assets/add.svg");
var topIcon = require("../../assets/top.svg");
var useState = React.useState, useRef = React.useRef, useEffect = React.useEffect;
var cs = utils_1.createCs("component-chat-input");
var Input = function (props) {
    var inputContainerRef = useRef();
    var inputRef = useRef();
    var onClickMore = props.onClickMore, chatData = props.chatData, onFocus = props.onFocus, onBlur = props.onBlur, onSendMessage = props.onSendMessage;
    var moreVisible = chatData.moreVisible;
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    var onClickSend = function () {
        onSendMessage(inputValue);
        setInputValue("");
        inputRef.current.innerHTML = "";
    };
    var onChangeInput = function (e) {
        // setInputValue(inputRef.current.innerHTML);
        setInputValue(e.currentTarget.textContent);
    };
    useEffect(function () {
        inputContainerRef.current.addEventListener("touchmove", function (e) {
            e.preventDefault();
        }, false);
    }, []);
    return (React.createElement("div", { className: cs(), ref: inputContainerRef },
        React.createElement("div", { className: cs("container") },
            React.createElement("pre", { ref: inputRef, contentEditable: true, className: cs("container-input"), onFocus: onFocus, onBlur: onBlur, onInput: onChangeInput }),
            React.createElement("i", { className: cs("container-send") + " " + (inputValue.length > 0 ? cs("container-send-show") : "") },
                React.createElement("img", { src: topIcon.default ? topIcon.default : topIcon, alt: "", onClick: onClickSend }))),
        React.createElement("div", { className: cs("more") },
            React.createElement("img", { src: addIcon.default ? addIcon.default : addIcon, alt: "", onClick: function () { return onClickMore(!moreVisible); } }))));
};
exports.default = Input;
