import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../../components/Signin/SigninForm";

const SignInPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-xl bg-cyan-500">
      <div>
        <div className="text-center">
          <SigninForm />
        </div>
        <div className="items-start justify-start">
          <Link
            to='/admin'
            className="mx-2 text-black font-bold hover:text-blue-800 text-lg underline"
          >
            Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
