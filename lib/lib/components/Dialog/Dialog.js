import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["width"],
    _excluded2 = ["width"];
import React from 'react';
import { Modal } from '../private/Modal/Modal';
import { ModalContent } from '../private/Modal/ModalContent';
export { AllowCloseContext } from '../private/Modal/Modal';
var defaultWidth = 'small';
var modalStyle = {
  position: 'center',
  headingLevel: '3'
};
export var Dialog = function Dialog(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? defaultWidth : _ref$width,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Modal, _extends({
    width: width
  }, restProps, modalStyle));
};
Dialog.displayName = "Dialog";
export var DialogContent = function DialogContent(_ref2) {
  var _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? defaultWidth : _ref2$width,
      restProps = _objectWithoutProperties(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement(ModalContent, _extends({
    width: width
  }, restProps, modalStyle));
};
DialogContent.displayName = "DialogContent";