import Link from "next/link";
import {
  BeakerIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

const Register = () => {
  const [isUsernameActive, setIsUsernameActive] = useState<boolean>(false);
  const [isPasswordActive, setIsPasswordActive] = useState<boolean>(false);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required()
      .matches(
        /^[a-zA-Z0-9]+$/, //match nahuda samma error falirakhxa
        "Username should only contain letters and numbers"
      ),
    password: Yup.string()
      .required()
      .min(8, "Password should be at least 8 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Password should contain at least one capital letter, one special character, and one number"
      ),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: validationSchema,
    });

  return (
    <div className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee]">
      <div className="bg-white p-8 rounded-xl w-[400px]">
        <h1 className="text-center text-3xl font-bold ">Register</h1>

        <form className="mt-3 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="gap-5">
            <label
              htmlFor="username"
              className={` left-4 transition-all duration-300 pointer-events-none`}
            >
              Username
            </label>
            <div className="relative">
              <UserCircleIcon
                className={`h-6 w-6  ${
                  isUsernameActive ? "text-blue-500" : ""
                } absolute top-[8px] left-1`}
              />
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={(e) => {
                  handleBlur(e);
                  setIsUsernameActive(false);
                }}
                onFocus={() => setIsUsernameActive(true)}
                placeholder="Enter Name"
                className={`w-full py-2 pr-2 pl-8 border-b-2 ${
                  errors.username && touched.username ? "border-red-500" : ""
                } border-gray-300 focus:outline-none focus:border-indigo-500 `}
              />
              {errors.username && touched.username && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.username}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <label
              htmlFor="password"
              className={` left-4 transition-all duration-300 pointer-events-none`}
            >
              Password
            </label>
            <div className="relative">
              <LockClosedIcon
                className={`h-6 w-6  ${
                  isPasswordActive ? "text-blue-500" : ""
                } absolute top-[8px] left-1`}
              />
              <input
                type="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                name="password"
                onBlur={(e) => {
                  handleBlur(e);
                  setIsPasswordActive(false);
                }}
                onFocus={() => setIsPasswordActive(true)}
                placeholder="Enter Name"
                className={`w-full py-2  pr-2 border-b-2 pl-8 
                    ${
                      errors.password && touched.password
                        ? "border-red-500"
                        : ""
                    }
                    border-gray-300 focus:outline-none  focus:border-indigo-500  `}
              />
              {errors.password && touched.password && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.password}
                </span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] rounded-3xl"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
