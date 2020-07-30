"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var types_1 = require("../../types");
var audiomasterSvg = require("../../assets/audiomaster.svg");
var audioguestSvg = require("../../assets/audioguest.svg");
var audiomaster = audiomasterSvg.default
    ? audiomasterSvg.default
    : audiomasterSvg;
var audioguest = audioguestSvg.default
    ? audioguestSvg.default
    : audioguestSvg;
var cs = utils_1.createCs("component-chat-audio");
var Image = function (props) {
    var type = props.type, text = props.text, avatarUrl = props.avatarUrl, readStatus = props.readStatus;
    return (React.createElement("div", { className: cs() + " " + (type === types_1.AuthorTypes.master ? cs("master") : cs("guest")) },
        type === types_1.AuthorTypes.master ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "avatar" },
                React.createElement("img", { src: avatarUrl, alt: "" })),
            React.createElement("div", { className: "audio " + (readStatus ? "" : "audio-unread") },
                React.createElement("img", { src: audiomaster, alt: "" })))) : null,
        type === types_1.AuthorTypes.guest ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "audio" },
                React.createElement("img", { src: audioguest, alt: "" })),
            React.createElement("div", { className: "avatar" },
                React.createElement("img", { src: avatarUrl, alt: "" })))) : null));
};
exports.default = Image;
//# sourceMappingURL=index.js.map