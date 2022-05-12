import React from "react";
import runBuddy from "../../Assests/projects/run-buddy.jpg";
import IMS from "../../Assests/projects/ims.jpg";
import budget from "../../Assests/projects/budget-tracker.jpg";

function Projects() {
  return (
    <section>
      <div>
        <h1>Run-Buddy</h1>
        <p>Running App</p>
        <div className="flex-row">
          <a href="https://obrailovska.github.io/run-buddy/">
            <img
              src={runBuddy}
              alt="Run Buddy"
              className="img-thumbnail mx-1"
            />
          </a>
        </div>
      </div>
      <div>
        <h1>IMS</h1>
        <p>
          This Inventory Management System application will allow a company with
          large amount of products to manage their inventory. It will allow
          employees to add, update, delete and view Categories, Supplier,
          Products and Inventory.
        </p>

        <div className="flex-row">
          <a href="https://ims-inventory-s.herokuapp.com/">
            <img src={IMS} alt="IMS" className="img-thumbnail mx-1" />
          </a>
        </div>
      </div>
      <div>
        <h1>Budget-Tracker</h1>
        <p>
          Budget Tracker is an app that allows you to track your expenses and
          income. Budget Tracker is a PWA application which allows user to use
          it offline.
        </p>

        <div className="flex-row">
          <a href="https://ims-inventory-s.herokuapp.com/">
            <img src={budget} alt="IMS" className="img-thumbnail mx-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Projects;
