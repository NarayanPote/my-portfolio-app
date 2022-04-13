import React from "react";
import { SiVisualstudiocode, SiPostman, SiHeroku } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import "./techstack.css";
function Toolstack() {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row" style={{ display: "flex", padding: "5px" }}>
          <div class="card">
            <h1>
              <SiVisualstudiocode />
              <h3>Visual Studio</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <SiPostman />
              <h3>Postman</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <FaGithub />
              <h3>Git Hub</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <SiHeroku />
              <h3>Heroku</h3>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolstack;
