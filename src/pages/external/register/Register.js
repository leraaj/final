import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeHeader from "../../../components/textHeaders/ThemeHeader";
import InputField from "../../../components/forms/InputField";
import ThemeButton from "../../../components/buttons/ThemeButton";
import { toast } from "sonner";
const Index = () => {
  const apiEndpoint = "http://localhost:3001/api";
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const registerContent = {
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    padding: "0% 10%",
    position: "relative",
    backgroundColor: "black",
  };
  const handleClientName = (event) => {
    setNameValue(event.target.value);
  };
  const handleContact = (event) => {
    setContactValue(event.target.value);
  };
  const handleEmail = (event) => {
    setEmailValue(event.target.value);
  };
  const handleUserName = (event) => {
    setUsernameValue(event.target.value);
  };
  const handlePassword = (event) => {
    setPasswordValue(event.target.value);
  };
  const handleBack = (e) => {
    navigate(-1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = JSON.stringify({
      fullName: nameValue,
      contact: contactValue,
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
      position: 3,
      applicationStatus: 2,
    });
    await fetch(apiEndpoint + "/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: formData,
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(true);
        navigate("/login");
        toast.success("Client was registered successfully");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
        alert(formData);
      });
  };
  const textHeading = "Create new account";
  return (
    <div
      className="py-5 d-flex align-items-center justify-content-center"
      style={registerContent}>
      <form
        method="post"
        className="row mx-0 needs-validation"
        onSubmit={handleSubmit}>
        <ThemeHeader title={textHeading} />
        <div className="row mx-0">
          <InputField
            name="client name"
            type="text"
            value={nameValue}
            clickTrigger={handleClientName}
          />
          <div className="col-lg-6">
            <InputField
              name="contact number"
              type="text"
              value={contactValue}
              clickTrigger={handleContact}
            />
          </div>
          <div className="col-lg-6">
            <InputField
              name="email"
              type="email"
              value={emailValue}
              clickTrigger={handleEmail}
            />
          </div>
          <div className="col-lg-6">
            <InputField
              name="username"
              type="text"
              value={usernameValue}
              clickTrigger={handleUserName}
            />
          </div>
          <div className="col-lg-6">
            <InputField
              name="password"
              type="password"
              value={passwordValue}
              clickTrigger={handlePassword}
            />
          </div>
        </div>
        <div className="col-12 row mx-0">
          <div className="col-12border">
            <ThemeButton
              textName="Register"
              type="submit"
              className={" float-end "}
            />
          </div>
          <div className="col  ">
            <button
              onClick={handleBack}
              className="btn btn-transparent text-white text-uppercase rounded-0"
              style={{ fontFamily: "Agdasima-Bold" }}>
              <i className="ri-arrow-left-line "></i>
              back
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
