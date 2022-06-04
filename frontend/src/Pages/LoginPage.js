import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import "bootstrap/dist/css/bootstrap.min.css";
import jwt_decode from "jwt-decode";
import "../css/loginpage.css";
import axios from "axios";
import moment from "moment";

const LoginPage = ({}) => {
  const [username, setusername] = useState("");
  const [userfamilyname, setUserfamilyname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [validlogin, setValidlogin] = useState(true);

  const [timelogin, setTimelogin] = useState();

  const handleFailure = (result) => {
    console.log(result);
    //  alert(result.details)
  };

  const compareDate = (shmera, second) => {
    // return true when second is bigger than shmera
    if (shmera <= second) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    async function checkvalidconnection() {
      //  !edo me to axios tha blepo an exo valid pedio akoma gia na sunexiso sto sait

      const res = await axios.get(
        `http://localhost:3002/users/find/${userEmail}`
      );
      if (res.data.length != "0") {
        const now = Date.now();
        let x2 = moment(now).format("YYYY-MM-DD");
        let x3 = moment(res.data.valid_until).format("YYYY-MM-DD");
        return compareDate(x2, x3);
      } else if (res.data.length == 0) {
        const res = await axios.post(
          `http://localhost:3002/users/add/${username}/${userfamilyname}/${userEmail}`
        );
        return true;
      } else {
        console.log("Den tha eprepe na emfanistei auto");
        alert("WE HAVE BIG PROBLEM");
        return false;
      }
    }
    let x1 = checkvalidconnection();
    setValidlogin(x1);
  }, [isLoggedIn]);

  const handleLogin = (googleData) => {
    const googleData1 = jwt_decode(googleData.credential);
    let unix_timestamp = googleData1.iat;
    let formattedTime = moment
      .unix(unix_timestamp)
      .format("DD/MM/YYYY HH:mm:ss");
    setusername(googleData1.given_name);
    setUserfamilyname(googleData1.family_name);
    setUserEmail(googleData1.email);
    setIsLoggedIn(true);
    setTimelogin(formattedTime);
  };

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("timelogin", timelogin);
      localStorage.setItem("userEmail",userEmail)
      localStorage.setItem("validlogin", validlogin);

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
      <h1>Login Page</h1>
      <br />
      <h2>Please press below and sign in with your Google account </h2>
      {/* <h2 style={{ color: "red", letterSpacing: "30px" }}>
        DISCLAIMER : TESTING YET
      </h2> */}
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
