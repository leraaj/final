import React, { useState } from "react";
// import { useAuth } from "../../../components/Authentication/auth";
import { useNavigate } from "react-router-dom";
// Components
import Loading from "../../others/Loading";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import ThemeButton from "../../../components/buttons/ThemeButton";
import InputField from "../../../components/forms/InputField";
import { toast } from "sonner";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleUserName = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleBack = (e) => {
    navigate("/");
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    if (username === "" || password === "") {
      return toast.message("All fields are required");
      // alert("All fields are required");
    } else {
      await fetch("http://localhost:3001/api/user/login", {
        method: "post",
        credentials: "include",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(async (response) => {
          const data = await response.json();
          // Validate empty fields
          if (response.ok) {
            setLoading(true);
            const user = data.user;
            const position = data.user.position;
            if (user && position) {
              if (position === 1) {
                navigate(data.redirectUrl);
              } else {
                navigate(data.redirectUrl);
              }
              toast.success("Logged-in successfully");
            }
          }
          // Validate Username and Password
          else {
            toast.error("Invalid username/password");
            // alert("Invalid username/password");
          }
        })
        .catch((error) => {
          // Validate Server Error
          toast.error(error.message);
          console.log({ error: error.message });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  if (loading) {
    return <Loading />;
  }
  // Styles
  const loginContent = {
    minHeight: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };

  const textHeading = "Sign in your account";
  return (
    <div
      className="px-5 d-flex align-items-center justify-content-center"
      style={loginContent}>
      <div className="row">
        <div className="col-12 ">
          <form method="post" action="" className="row" onSubmit={handleLogin}>
            <div className="col-12">
              <ThemeHeader title={textHeading} />
            </div>
            <div className="col-6">
              <InputField
                name="username"
                type="text"
                value={username}
                clickTrigger={handleUserName}
              />
            </div>
            <div className="col-6">
              <InputField
                name="password"
                type="password"
                value={password}
                clickTrigger={handlePassword}
              />
            </div>
            <div className="col-12 ">
              <div className="float-end">
                <ThemeButton textName="Sign in" type="submit" />
              </div>
            </div>
          </form>
        </div>
        <div className="col-2">
          <div className="float-start">
            <button
              onClick={handleBack}
              className="btn btn-transparent text-white text-uppercase rounded-0"
              style={{ fontFamily: "Agdasima-Bold" }}>
              <i className="ri-arrow-left-line "></i>
              back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;