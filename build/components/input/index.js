"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var addIcon = require("../../assets/add.svg");
var useState = React.useState, useRef = React.useRef, useEffect = React.useEffect;
var cs = utils_1.createCs("component-chat-input");
var Input = function (props) {
    var inputRef = useRef();
    var onClickMore = props.onClickMore, chatData = props.chatData, onFocus = props.onFocus, onBlur = props.onBlur, onSendMessage = props.onSendMessage;
    var moreVisible = chatData.moreVisible;
    var _a = useState(""), inputValue = _a[0], setInputValue = _a[1];
    var onTestKeyDown = function (e) {
        if (e.key === "Enter") {
            onSendMessage(inputValue);
            setInputValue("");
        }
    };
    var onChangeInput = function (e) {
        setInputValue(e.target.value);
    };
    useEffect(function () {
        inputRef.current.addEventListener("touchmove", function (e) {
            e.preventDefault();
        }, false);
    }, []);
    return (React.createElement("div", { className: cs(), ref: inputRef },
        React.createElement("input", { type: "text", value: inputValue, onFocus: onFocus, onBlur: onBlur, onKeyDown: onTestKeyDown, onChange: onChangeInput }),
        React.createElement("div", { className: cs("more") },
            React.createElement("img", { src: addIcon.default ? addIcon.default : addIcon, alt: "", onClick: function () { return onClickMore(!moreVisible); } }))));
};
exports.default = Input;
