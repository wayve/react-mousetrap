'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.mouseTrap = mouseTrap;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mouseTrap(Base) {

    return function (_React$Component) {
        _inherits(_class, _React$Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this.__mousetrapBindings = [];
            _this.Mousetrap = require('mousetrap');

            var Mousetrap = _this.Mousetrap;
            require('mousetrap-global-bind');
            return _this;
        }

        _createClass(_class, [{
            key: 'bindShortcut',
            value: function bindShortcut(key, callback) {
                this.Mousetrap.bind(key, callback);
                this.__mousetrapBindings.push(key);
            }
        }, {
            key: 'bindGlobalShortcut',
            value: function bindGlobalShortcut(key, callback) {
                this.Mousetrap.bindGlobal(key, callback);
                this.__mousetrapBindings.push(key);
            }
        }, {
            key: 'unbindShortcut',
            value: function unbindShortcut(key) {
                var index = this.__mousetrapBindings.indexOf(key);

                if (index > -1) {
                    this.__mousetrapBindings.splice(index, 1);
                }

                this.Mousetrap.unbind(key);
            }
        }, {
            key: 'unbindAllShortcuts',
            value: function unbindAllShortcuts() {
                var _this2 = this;

                if (this.__mousetrapBindings.length < 1) {
                    return;
                }

                this.__mousetrapBindings.forEach(function (binding) {
                    _this2.Mousetrap.unbind(binding);
                });
                this.__mousetrapBindings = [];
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                this.unbindAllShortcuts();
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(Base, _extends({}, this.props, {
                    bindShortcut: this.bindShortcut.bind(this),
                    bindGlobalShortcut: this.bindGlobalShortcut.bind(this),
                    unbindShortcut: this.unbindShortcut.bind(this) }));
            }
        }]);

        return _class;
    }(_react2.default.Component);
}