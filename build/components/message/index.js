"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var types_1 = require("../../types");
var cs = utils_1.createCs("component-chat-message");
var Message = function (props) {
    var type = props.type, text = props.text, avatarUrl = props.avatarUrl;
    return (React.createElement("div", { className: cs() + " " + (type === types_1.AuthorTypes.master ? cs("master") : cs("guest")) },
        type === types_1.AuthorTypes.master ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "avatar" },
                React.createElement("img", { src: avatarUrl, alt: "" })),
            React.createElement("div", { className: "text" }, text))) : null,
        type === types_1.AuthorTypes.guest ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "text" }, text),
            React.createElement("div", { className: "avatar" },
                React.createElement("img", { src: avatarUrl, alt: "" })))) : null));
};
exports.default = Message;
//# sourceMappingURL=index.js.map