import React from "react";
import runBuddy from "../../Assests/projects/run-buddy.jpg";
import IMS from "../../Assests/projects/ims.jpg";
import budget from "../../Assests/projects/budget-tracker.jpg";
// import { MDBContainer, MDBRow, MDBCol } from "mdbrea ct";
import { CardGroup, Card } from "react-bootstrap";

function Projects() {
  return (
    <CardGroup className="CardGroup">
      <Card className="card">
        <a href="https://obrailovska.github.io/run-buddy/">
          <Card.Img variant="top" src={runBuddy} />
        </a>
        <Card.Body>
          <Card.Title>Run Buddy</Card.Title>
          <Card.Text>
            Application for people looking to connect with trainers to work out
            more.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small href="https://obrailovska.github.io/run-buddy/" />
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={IMS} />
        <Card.Body>
          <Card.Title>Inventory Managing System</Card.Title>
          <Card.Text>
            This Inventory Management System application will allow a company
            with large amount of products to manage their inventory. It will
            allow employees to add, update, delete and view Categories,
            Supplier, Products and Inventory.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small href="https://ims-inventory-s.herokuapp.com/" />
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={budget} />
        <Card.Body>
          <Card.Title>Budget-Tracker</Card.Title>
          <Card.Text>
            Budget Tracker is an app that allows you to track your expenses and
            income. Budget Tracker is a PWA application which allows user to use
            it offline.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small href="https://ims-inventory-s.herokuapp.com/" />
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

// function Projects() {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="4">
//           <h1>Run-Buddy</h1>
//           <p>Running App</p>
//           <div className="flex-row">
//             <a href="https://obrailovska.github.io/run-buddy/">
//               <img
//                 src={runBuddy}
//                 alt="Run Buddy"
//                 className="img-thumbnail mx-1"
//               />
//             </a>
//           </div>
//         </MDBCol>

//         <MDBCol md="4">
//           <h1>IMS</h1>
//           <p>
//             This Inventory Management System application will allow a company
//             with large amount of products to manage their inventory. It will
//             allow employees to add, update, delete and view Categories,
//             Supplier, Products and Inventory.
//           </p>

//           <div className="flex-row">
//             <a href="https://ims-inventory-s.herokuapp.com/">
//               <img src={IMS} alt="IMS" className="img-thumbnail mx-1" />
//             </a>
//           </div>
//         </MDBCol>

//         <MDBCol md="4">
//           <h1>Budget-Tracker</h1>
//           <p>
//             Budget Tracker is an app that allows you to track your expenses and
//             income. Budget Tracker is a PWA application which allows user to use
//             it offline.
//           </p>

//           <div className="flex-row">
//             <a href="https://ims-inventory-s.herokuapp.com/">
//               <img src={budget} alt="IMS" className="img-thumbnail mx-1" />
//             </a>
//           </div>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }
export default Projects;
