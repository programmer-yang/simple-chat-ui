"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var types_1 = require("../../types");
var cs = utils_1.createCs("component-chat-image");
var Image = function (props) {
    var type = props.type, text = props.text, avatarUrl = props.avatarUrl, onClick = props.onClick;
    var onClickImg = function (url) {
        if (typeof onClick === "function") {
            onClick(url);
        }
    };
    return (React.createElement("div", { className: cs() + " " + (type === types_1.AuthorTypes.master ? cs("master") : cs("guest")) },
        type === types_1.AuthorTypes.master ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "avatar" },
                React.createElement("img", { src: avatarUrl, alt: "" })),
            React.createElement("div", { className: "image", onClick: function () { return onClickImg(text); } },
                React.createElement("img", { src: text, alt: "" })))) : null,
        type === types_1.AuthorTypes.guest ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "image", onClick: function () { return onClickImg(text); } },
                React.createElement("img", { src: text, alt: "" })),
            React.createElement("div", { className: "avatar" },
                React.createElement("img", { src: avatarUrl, alt: "" })))) : null));
};
exports.default = Image;
