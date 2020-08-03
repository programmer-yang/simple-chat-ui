"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var cs = utils_1.createCs("component-chat-container");
var Header = function (props) {
    var children = props.children, containerRef = props.containerRef, chatData = props.chatData;
    var contianerStyle = {};
    var defaultContainerHeight = chatData.defaultContainerHeight, containerHeight = chatData.containerHeight, _a = chatData.moreHeight, moreHeight = _a === void 0 ? 0 : _a;
    var containerHeightDiff = defaultContainerHeight - containerHeight + moreHeight;
    contianerStyle.height = "calc(100vh - 54px - " + containerHeightDiff + "px)";
    if (chatData.inputFocus) {
    }
    else {
    }
    return (React.createElement("div", { className: cs(), ref: containerRef, style: contianerStyle }, children));
};
exports.default = Header;
