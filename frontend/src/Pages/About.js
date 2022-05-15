import React from "react";
import "../css/home_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import alex from "../img/alex.jpg";
import giannis from "../img/giannis.jpg";
import leuteris from "../img/leuteris.png";

const About = () => {
  return (
    <div className="About">
      <h1 className="title-about"> About Page </h1>
      <hr className="line-about" />
      <div className="container">
        <p className="about-paragraph">
          <div className="q-about"> Who we are ? </div>
          <div className="ans-about">
            We are three undergraduate student in 8 semester Electrical and
            Computer Engineering
          </div>
          <div className="q-about"> What is EnergyLive2022 ? </div>
          <div className="ans-about">
            EnergyLive2022 is a Software as a Service, where you can see a chart
            with data about Energy per Country.
          </div>
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-3 card">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="logo-profile" variant="top" src={giannis} />
              <Card.Body>
                <Card.Title> Papanikolaou Ioannis </Card.Title>
                <Card.Text> contact : el18064 @maill.ntua.gr </Card.Text>
                <Button variant="info" href="https://google.com">
                  Github
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-3 card">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="logo-profile" variant="top" src={leuteris} />
              <Card.Body>
                <Card.Title> Tsonis Eleutherios </Card.Title>
                <Card.Text> Contact : el18xxx @mail.ntua.gr </Card.Text>
                <Button variant="info" href="https://google.com">
                  Github
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div class="col-sm-3 card">
            <Card style={{ width: "18rem" }}>
              <Card.Img className="logo-profile" variant="top" src={alex} />
              <Card.Body>
                <Card.Title> Koulakos Alexandros </Card.Title>
                <Card.Text> Contact: el18xxx @mail.ntua.gr </Card.Text>
                <Button variant="info" href="https://google.com">
                  Github
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
