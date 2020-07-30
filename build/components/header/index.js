"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var closeIcon = require("../../assets/close.svg");
var moreIcon = require("../../assets/more.svg");
var cs = utils_1.createCs("component-chat-header");
var Header = function (props) {
    var name = props.name;
    return (React.createElement("div", { className: cs() },
        React.createElement("div", { className: cs("action") },
            React.createElement("img", { src: closeIcon.default ? closeIcon.default : closeIcon, alt: "" })),
        React.createElement("div", { className: cs("title") }, name),
        React.createElement("div", { className: cs("more") },
            React.createElement("img", { src: moreIcon.default ? moreIcon.default : moreIcon, alt: "" }))));
};
exports.default = Header;
//# sourceMappingURL=index.js.map