import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import "../css/loginpage.css";

const LoginPage = () => {
  const [username, setusername] = useState();
  const [userEmail, setUserEmail] = useState();

  const handleFailure = (result) => {
    console.log(result);
    //  alert(result.details)
  };
  const handleLogin = (googleData) => {
    console.log(googleData);
    const googleData1 = jwt_decode(googleData.credential);
    console.log(googleData1);
    setusername(googleData1.name);
    setUserEmail(googleData1.email);
  };

  return (
    <div className="LoginPage">
      <h1>react login with google</h1>
      <h2 style={{color:"red",letterSpacing:"30px"}}> DISCLAIMER : TESTING YET</h2>
      <div className="google-btn">
        <GoogleOAuthProvider clientId="672456745496-5e53h43l3cpr541h8v8ac7apptcslh80.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleLogin}
            onError={handleFailure}
            shape="pill"
            login_uri="/main"
            width="900"
          />
        </GoogleOAuthProvider>
      </div>
      <h3>{username}</h3>
      <h3>{userEmail}</h3>
    </div>
  );
};
export default LoginPage;
