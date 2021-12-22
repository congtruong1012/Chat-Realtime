import React from "react";
import PropTypes from "prop-types";
import screen from "../../images/image1.jpg";
import CommonLayout from "../CommonLayout";

const TemplateLogin = function (props) {
  const { title, children } = props;
  return (
    <CommonLayout
      left={
        <div className="h-full">
          <img src={screen} alt="alt" className="object-cover h-full w-full" />
        </div>
      }
      right={
        <div className="h-full pt-20">
          <h2 className="text-3xl text-center text-gray-500 font-bold mb-4">
            {title}
          </h2>
          <div>{children}</div>
        </div>
      }
    />
  );
};
TemplateLogin.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default TemplateLogin;
