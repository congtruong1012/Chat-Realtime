import React from "react";
import PropTypes from "prop-types";
import LeftLayout from "../LeftLayout";
import RightLayout from "../RightLayout";

const CommonLayout = function (props) {
  const { left, right, border, propsLeft, propsRight } = props;
  return (
    <div className="max-w-4xl h-screen mx-auto border rounded-xl shadow-sm">
      <div className="flex h-full p-4">
        <div
          className={`h-full w-1/2 px-4 ${
            border ? "border-r-2" : ""
          } ${propsLeft} `}
        >
          <LeftLayout>{left}</LeftLayout>
        </div>
        <div className={`h-full w-1/2 px-4 ${propsRight}`}>
          <RightLayout>{right}</RightLayout>
        </div>
      </div>
    </div>
  );
};

CommonLayout.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default CommonLayout;
