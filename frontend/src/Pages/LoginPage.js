import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import "../css/loginpage.css";

const LoginPage = ({}) => {
  const [username, setusername] = useState();
  const [userfamilyname, setUserfamilyname] = useState();
  const [userEmail, setUserEmail] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timelogin, setTimelogin] = useState();

  const handleFailure = (result) => {
    console.log(result);
    //  alert(result.details)
  };
  const handleLogin = (googleData) => {
    //console.log(googleData);
    const googleData1 = jwt_decode(googleData.credential);
    console.log(googleData1);
    setusername(googleData1.given_name);
    let unix_timestamp = googleData1.iat;
    let formattedTime = unixtoday(unix_timestamp);
    console.log(formattedTime);

    setUserfamilyname(googleData1.family_name);
    setUserEmail(googleData1.email);
    setIsLoggedIn(true);
    setTimelogin(formattedTime);
  };
  useEffect(() => {
    if (isLoggedIn) {
      // if loggedin redirect to main
      sessionStorage.setItem("userEmail", userEmail);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("userfamilyname", userfamilyname);
      sessionStorage.setItem("timelogin", timelogin);
      //redirect to main page
      window.location.replace("/main");
    }
  }, [isLoggedIn]);

  return (
    <div className="LoginPage">
      <h1>react login with google</h1>
      <h2 style={{ color: "red", letterSpacing: "30px" }}>
        {" "}
        DISCLAIMER : TESTING YET
      </h2>
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
      <h4>{userfamilyname}</h4>
      <h3>{userEmail}</h3>
      <h2>{timelogin}</h2>
    </div>
  );
};
export default LoginPage;

const unixtoday = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  var month = date.getMonth();
  var day = date.getDay();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();

  // Will display time in 01/01/2022 10:30:23 format
  var formattedTime =
    day +
    "/" +
    month +
    "/" +
    year +
    " " +
    hours +
    ":" +
    minutes.substr(-2) +
    ":" +
    seconds.substr(-2);
  return formattedTime;
};
