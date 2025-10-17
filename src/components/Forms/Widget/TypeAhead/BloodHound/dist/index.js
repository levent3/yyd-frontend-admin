"use strict";
exports.__esModule = true;
var CardHead_1 = require("CommonElements/CardHead");
var Widget_1 = require("Data/Forms/Widget");
var TypeAheadData_1 = require("Data/Forms/Widget/TypeAheadData");
var react_bootstrap_typeahead_1 = require("react-bootstrap-typeahead");
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("utils/Constant");
var BloodHound = function () {
    return (React.createElement(reactstrap_1.Col, { sm: 12, md: 6 },
        React.createElement(reactstrap_1.Card, null,
            React.createElement(CardHead_1["default"], { title: Constant_1.BloodHoundHeading, subTitle: Widget_1.bloodhoundTypeAheadData }),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement("div", { id: "bloodhound" },
                    React.createElement("form", { className: "theme-form main-typeahead" },
                        React.createElement("div", null,
                            React.createElement(react_bootstrap_typeahead_1.Typeahead, { options: TypeAheadData_1.statesOfUSA, placeholder: "States of USA" }))))))));
};
exports["default"] = BloodHound;
