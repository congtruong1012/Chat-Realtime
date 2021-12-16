import md5 from "md5";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import AxiosClient from "../../../api";
// import PropTypes from "prop-types";
import TemplateLogin from "../../../components/TemplateLogin";
import { setCookie } from "../../../utils/cookie";

function Register(props) {
  const nav = useNavigate();
  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      fullname: "",
    },
  });

  const handleRegister = async (data) => {
    try {
      setLoading((prev) => !prev);
      const resp = await AxiosClient.post("/api/users/create", {
        username: data?.username || "",
        password: md5(data?.password || ""),
        fullname: data?.fullname,
      });
      const { token } = resp;
      setCookie("token", token, 12 * 60 * 60 * 1000);
      setLoading((prev) => !prev);
      setError("");
      nav("/");
    } catch (error) {
      console.log("handleLogin ~ error", error.message);
      setLoading((prev) => !prev);
      setError("The account actually exists");
    }
  };
  return (
    <TemplateLogin title="Create new account">
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
      <div className="mb-3">
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
      <div className="mb-6">
        <label className="block text-gray-500 mb-2">Fullname</label>
        <input
          type="text"
          className="bg-gray-200 w-full p-4 rounded-2xl outline-none"
          {...register("fullname", { required: "Fullname is required" })}
          placeholder="Enter fullname"
        />
        {errors?.fullname && (
          <small className="text-red-500">
            {errors?.fullname?.message || ""}
          </small>
        )}
      </div>
      {error && (
        <div className="mb-4 py-3 pl-6 bg-red-400 font-semibold text-white rounded-md">
          {error}
        </div>
      )}
      <div className="mb-6">
        <button
          onClick={handleSubmit(handleRegister)}
          className={`w-full ${
            isLoading ? "bg-gray-400" : "bg-blue-600"
          } p-3 text-white rounded-2xl text-center`}
        >
          Register
        </button>
      </div>
      <div className="mb-4 font-bold text-center">
        <span>Do you already have an account? </span>
        <Link to="/login" className="text-blue-600 ">
          Login
        </Link>
      </div>
    </TemplateLogin>
  );
}

Register.propTypes = {};

export default Register;
