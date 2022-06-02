import React from "react";
import runBuddy from "../../Assests/projects/run-buddy.jpg";
import IMS from "../../Assests/projects/ims.jpg";
import budget from "../../Assests/projects/budget-tracker.jpg";
import ProPet from "../../Assests/projects/petstore.png";
import { CardGroup, Card } from "react-bootstrap";

function Projects() {
  return (
    <section>
      <h2 id="projects">My Projects</h2>
      <CardGroup className="CardGroup">
        <Card className="card">
          <a href="https://obrailovska.github.io/run-buddy/">
            <Card.Img variant="top" src={runBuddy} />
          </a>
          <Card.Body>
            <Card.Title>Run Buddy</Card.Title>
            <Card.Text>
              Application for people looking to connect with trainers to work
              out more.
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <a href="https://ims-inventory-s.herokuapp.com/">
            <Card.Img variant="top" src={IMS} />
          </a>
          <Card.Body>
            <Card.Title>Inventory Managing System</Card.Title>
            <Card.Text>
              This Inventory Management System application will allow a company
              with large amount of products to manage their inventory. It will
              allow employees to add, update, delete and view Categories,
              Supplier, Products and Inventory.
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <a href="https://ims-inventory-s.herokuapp.com/">
            <Card.Img variant="top" src={budget} />
          </a>
          <Card.Body>
            <Card.Title>Budget-Tracker</Card.Title>
            <Card.Text>
              Budget Tracker is an app that allows you to track your expenses
              and income. Budget Tracker is a PWA application which allows user
              to use it offline.
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
        <Card>
          <a href="https://afternoon-spire-43659.herokuapp.com/">
            <Card.Img variant="top" src={ProPet} />
          </a>
          <Card.Body>
            <Card.Title>ProPet</Card.Title>
            <Card.Text>
              ProPet is an online store that allows buyers to log in, browse
              through multiple categories of pets, pick out products, select
              favorite products, and them to card and complete the purchase.
            </Card.Text>
          </Card.Body>
          <Card.Footer></Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
}

export default Projects;
