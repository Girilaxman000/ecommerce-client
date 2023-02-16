import Link from "next/link";
import {
  BeakerIcon,
  LockClosedIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Login = () => {
  const [isUsernameActive, setIsUsernameActive] = useState<boolean>(false);
  const [isPasswordActive, setIsPasswordActive] = useState<boolean>(false);
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee]">
      <div className="bg-white p-8 rounded-xl w-[400px]">
        <h1 className="text-center text-3xl font-bold ">Login</h1>
        <div className="mt-3 flex flex-col gap-3">
          <div className="gap-5">
            <label
              htmlFor="name"
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
                id="name"
                name="name"
                onFocus={() => setIsUsernameActive(true)}
                onBlur={() => setIsUsernameActive(false)}
                placeholder="Enter Name"
                className={`w-full py-2 pr-2 pl-8 border-b-2  border-gray-300 focus:outline-none focus:border-indigo-500 `}
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="name"
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
                name="password"
                onFocus={() => setIsPasswordActive(true)}
                onBlur={() => setIsPasswordActive(false)}
                placeholder="Enter Name"
                className={`w-full py-2  pr-2 border-b-2 pl-8  border-gray-300 focus:outline-none  focus:border-indigo-500  `}
              />
            </div>
            <Link href="/change-password" className="block text-right mt-2">
              Forgot Password ?
            </Link>
          </div>
          <button className="w-full p-2 bg-gradient-to-r from-[#fbc2eb] to-[#a6c1ee] rounded-3xl">
            Login
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Login;
