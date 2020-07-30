"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("../../utils");
var photoIcon = require("../../assets/photo.svg");
var phraseIcon = require("../../assets/phrase.svg");
var cs = utils_1.createCs("component-chat-more");
var More = function (props) {
    var moreVisible = props.moreVisible, onClickPhoto = props.onClickPhoto, onClickPhrase = props.onClickPhrase;
    return (React.createElement("div", { className: cs() + " " + (moreVisible ? cs("show") : cs("close")) },
        React.createElement("div", { className: cs("item"), onClick: onClickPhoto },
            React.createElement("img", { src: photoIcon.default ? photoIcon.default : photoIcon, alt: "" })),
        React.createElement("div", { className: cs("item"), onClick: onClickPhrase },
            React.createElement("img", { src: phraseIcon.default ? phraseIcon.default : phraseIcon, alt: "" }))));
};
exports.default = More;
//# sourceMappingURL=index.js.map