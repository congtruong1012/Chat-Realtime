import md5 from "md5";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import TemplateLogin from "../../../components/TemplateLogin";
import { loginRequest } from "./loginSlice";

function Login(props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.login.isLoading);
  const error = useSelector((state) => state.login.error);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (data) => {
    dispatch(
      loginRequest({
        username: data.username,
        password: md5(data.password),
      })
    );
  };
  return (
    <TemplateLogin title="Welcome to system chat">
      <div className="mb-3">
        <label className="block text-gray-500 mb-2">Username</label>
        <input
          type="text"
          className="bg-gray-200 w-full p-4 rounded-2xl outline-none"
          {...register("username", { required: "Username is required" })}
          placeholder="Enter username"
        />
        {errors?.username && (
          <small className="text-red-500">
            {errors?.username?.message || ""}
          </small>
        )}
      </div>
      <div className="mb-6">
        <label className="block text-gray-500 mb-2">Password</label>
        <input
          type="password"
          className="bg-gray-200 w-full p-4 rounded-2xl outline-none"
          {...register("password", { required: "Password is required" })}
          placeholder="Enter password"
        />
        {errors?.password && (
          <small className="text-red-500">
            {errors?.password?.message || ""}
          </small>
        )}
      </div>
      {error && (
        <div className="mb-4 py-3 pl-6 bg-red-400 font-semibold text-white rounded-md">
          {error}
        </div>
      )}
      <div className="mb-6 text-right">
        <Link to="#" className=" text-gray-800 font-bold">
          Forgot password?
        </Link>
      </div>
      <div className="mb-6">
        <button
          onClick={handleSubmit(handleLogin)}
          className={`w-full ${
            isLoading ? "bg-gray-400" : "bg-blue-600"
          } p-3 text-white rounded-2xl text-center`}
          disabled={isLoading}
        >
          Login
        </button>
      </div>
      <div className="mb-4 font-bold text-center">
        <span>You don't have an account? </span>
        <Link to="/register" className="text-blue-600 ">
          Register
        </Link>
      </div>
    </TemplateLogin>
  );
}

Login.propTypes = {};

export default Login;
