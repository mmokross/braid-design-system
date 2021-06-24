import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconDesktopSvg } from './IconDesktopSvg';
export var IconDesktop = function IconDesktop(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconDesktopSvg
  }, iconProps));
};
IconDesktop.displayName = "IconDesktop";