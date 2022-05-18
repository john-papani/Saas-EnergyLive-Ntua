import React, { isValidElement, useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import "../css/loginpage.css";
import axios from "axios";

const LoginPage = ({}) => {
  const [username, setusername] = useState();
  const [userfamilyname, setUserfamilyname] = useState();
  const [userEmail, setUserEmail] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [validlogin, setValidlogin] = useState(true);

  const [timelogin, setTimelogin] = useState();

  const handleFailure = (result) => {
    console.log(result);
    //  alert(result.details)
  };

  useEffect(() => {
    // async function checkvalidconnection() {
    //   //edo me to axios tha blepo an exo valid pedio akoma gia na sunexiso sto sait
    //   const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    //   if (res.data.__pedio_me_meres_mexri_thn_lixi > 0) {
    //     //or something like that
    //     return true;
    //   }
    //   return false;
    // }
    // let x1 = checkvalidconnection();
    let x1 = true;
    setValidlogin(x1);
  }, [isLoggedIn]);

  const handleLogin = (googleData) => {
    //console.log(googleData);
    const googleData1 = jwt_decode(googleData.credential);
    //console.log(googleData1);
    let unix_timestamp = googleData1.iat;
    let formattedTime = unixtoday(unix_timestamp);
    //console.log(formattedTime);

    setusername(googleData1.given_name);
    setUserfamilyname(googleData1.family_name);
    setUserEmail(googleData1.email);
    setIsLoggedIn(true);
    setTimelogin(formattedTime);
  };
  useEffect(() => {
    if (isLoggedIn) {
      sessionStorage.setItem("userEmail", userEmail);
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("userfamilyname", userfamilyname);
      sessionStorage.setItem("timelogin", timelogin);
      sessionStorage.setItem("validlogin", validlogin);

      if (!validlogin) {
        alert("NO MORE DAYS PLEASE EXTEND FIRST");
        window.location.replace("/validlogin");
      } else if (validlogin) {
        // if loggedin redirect to main
        //redirect to main page
        alert("PAO");
        window.location.replace("/main");
      }
    }
  }, [isLoggedIn]);

  return (
    <div className="LoginPage">
      <h1>react login with google</h1>
      <h2 style={{ color: "red", letterSpacing: "30px" }}>
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
  var month = date.getMonth() + 1;
  var day = date.getDate();
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
