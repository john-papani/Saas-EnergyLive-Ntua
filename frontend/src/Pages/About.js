import React from "react";
import "../css/home_page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import alex from "../img/alex.jpg";
import giannis from "../img/giannis.jpg";
import leuteris from "../img/leuteris.jpg";

const About = () => {
  return (
    <div className="About">
      <h1 className="title-about"> About Page </h1>
      <hr className="line-about" />
      <div className="container">
        <p className="about-paragraph">
          <div className="q-about"> Who are we? </div>
          <div className="ans-about">
            We are 3 undergraduate students at the School Electrical and Computer
            Engineering of NTUA. We have constructed the present project,
            titled 'EnergyLive2022' as part of our 'Software as a Service' course.
          </div>
          <div className="q-about"> What is EnergyLive2022? </div>
          <div className="ans-about">
            'EnergyLive2022' is a Software as a Service application, where the user can see various charts
            related to Energy consumption and generation in European countries.
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
                <Card.Text> contact: el18064@maill.ntua.gr </Card.Text>
                <Button variant="info" href="https://github.com/john-papani">
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
                <Card.Text> contact: el18004@mail.ntua.gr </Card.Text>
                <Button variant="info" href="https://github.com/el18004">
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
                <Card.Text> contact: el18144@mail.ntua.gr </Card.Text>
                <Button variant="info" href="https://github.com/AlexandrosKoulakos/">
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
