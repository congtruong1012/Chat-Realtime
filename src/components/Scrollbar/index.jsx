import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";
import PropTypes from "prop-types";
import React from "react";

// https://www.npmjs.com/package/overlayscrollbars-react
// https://kingsora.github.io/OverlayScrollbars/#!documentation/options
/* tạo thanh cuộn */
export default function Scrollbar(props) {
  const { children, className, disableTheme, optionsProps, ...otherProps } =
    props;
  return (
    <OverlayScrollbarsComponent
      options={{
        scrollbars: {
          autoHide: "leave",
          autoHideDelay: 0,
          clickScrolling: true,
        },
        overflowBehavior: {
          x: "hidden",
          y: "scroll",
        },
        paddingAbsolute: true,
        ...optionsProps,
      }}
      {...otherProps}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
Scrollbar.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any, // truyền chiều cao cho thanh cuộn
  disableTheme: PropTypes.bool, // có theme
  optionsProps: PropTypes.object, // các options khác
};
