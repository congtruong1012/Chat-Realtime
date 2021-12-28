import React from "react";
import PropTypes from "prop-types";
import LeftLayout from "../LeftLayout";
import RightLayout from "../RightLayout";

const CommonLayout = function (props) {
  const { left, right, border } = props;
  return (
    <div className="max-w-4xl py-32 h-screen mx-auto">
      <div className="flex h-full p-2 border rounded-xl shadow-sm">
        <div className={`h-full w-1/2 px-4 ${border ? "border-r-2" : ""} `}>
          <LeftLayout>{left}</LeftLayout>
        </div>
        <div className={`h-full w-1/2 px-4`}>
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
