'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$maxAge = config.maxAge,
      maxAge = _config$maxAge === undefined ? 0 : _config$maxAge,
      _config$defaultState = config.defaultState,
      defaultState = _config$defaultState === undefined ? {} : _config$defaultState;


  var states = {},
      lastUnmounts = {};

  return function (Comp) {
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    var k = key || Comp;

    var Prisist = function (_Component) {
      (0, _inherits3.default)(Prisist, _Component);

      function Prisist(props) {
        (0, _classCallCheck3.default)(this, Prisist);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Prisist.__proto__ || (0, _getPrototypeOf2.default)(Prisist)).call(this, props));

        _this.state = defaultState;
        var lastUnmount = lastUnmounts[k];
        var lastState = states[k];
        if (lastUnmount && lastState) {
          if (maxAge === 0 || new Date() - lastUnmount < maxAge) {
            _this.state = lastState;
          }
        }
        return _this;
      }

      (0, _createClass3.default)(Prisist, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          lastUnmounts[k] = new Date();
          states[k] = this.state;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this2 = this;

          var setPrisist = function setPrisist(obj) {
            _this2.setState(obj);
            states[k] = _this2.state;
          };
          var props = (0, _extends3.default)({}, this.props, {
            setPrisist: setPrisist,
            prisisted: this.state
          });
          return _react2.default.createElement(Comp, props);
        }
      }]);
      return Prisist;
    }(_react.Component);

    return Prisist;
  };
};