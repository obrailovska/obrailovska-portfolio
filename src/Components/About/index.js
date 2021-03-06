import React from "react";
import Avatar from "../../Assests/avatar/avatar.jpg";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Card } from "react-bootstrap";

function About() {
  return (
    <section className="section">
      <h1 id="about">About Me</h1>
      <MDBContainer className="about-card ">
        <MDBRow>
          <MDBCol>
            <img
              src={Avatar}
              className="card-img"
              // style={{ width: "25%" }}
              alt="Olha Brailovska"
            />
          </MDBCol>

          <MDBCol className="about-text">
            <p id="about-text">
              Front-end developer leveraging background in Music Art to create
              great user experiences on the web and provide best design
              solutions. Currently earning a certificate in full stack
              development from University of Central Florida and developing
              skills in HTML, Javascript, CSS, Bootstrap, React.js, NoSQL,
              MySQL, jQuery, and responsive web design. Passionate about
              developing apps with mobile-first design. Known as a self-driven,
              committed and always excited to learn person. Looking forward to
              leverage all learned skills in the future as a part of a
              quality-driven team to build better experiences for the users.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Card id="small">
        <Card.Img src={Avatar}></Card.Img>
        <Card.Body>
          <Card.Title>Front-End Developer</Card.Title>
          <Card.Text>
            leveraging background in Music Art to create great user experiences
            on the web and provide best design solutions.
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}

export default About;
