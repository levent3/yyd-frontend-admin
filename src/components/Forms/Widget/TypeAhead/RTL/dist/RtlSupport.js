"use strict";
exports.__esModule = true;
var CardHead_1 = require("CommonElements/CardHead");
var Widget_1 = require("Data/Forms/Widget");
var TypeAheadData_1 = require("Data/Forms/Widget/TypeAheadData");
var react_bootstrap_typeahead_1 = require("react-bootstrap-typeahead");
var reactstrap_1 = require("reactstrap");
var Constant_1 = require("utils/Constant");
var RtlSupport = function () {
    return (React.createElement(reactstrap_1.Col, { sm: "12", md: "6" },
        React.createElement(reactstrap_1.Card, null,
            React.createElement(CardHead_1["default"], { title: Constant_1.RTLSupport, subTitle: Widget_1.RTLDropDownData }),
            React.createElement(reactstrap_1.CardBody, null,
                React.createElement("div", { id: "scrollable-dropdown-menu" },
                    React.createElement(reactstrap_1.Form, { className: "theme-form" },
                        React.createElement("div", { className: "w-50" },
                            React.createElement(react_bootstrap_typeahead_1.Typeahead, { align: "right", options: TypeAheadData_1.countryList, placeholder: "Countries", id: "RTL Support" }))))))));
};
exports["default"] = RtlSupport;
