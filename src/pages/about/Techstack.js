import React from "react";
import { FaNode, FaPhp, FaPython } from "react-icons/fa";

import { DiJavascript1, DiReact, DiMongodb, DiMysql } from "react-icons/di";
import { SiExpress } from "react-icons/si";

import "./techstack.css";

export default function Techstack() {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row" style={{ display: "flex", padding: "5px" }}>
          <div class="card">
            <h1>
              <FaNode />
              <h3>Node js</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <DiReact />
              <h3>React</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <DiMongodb />
              <h3>MongoDB</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <SiExpress />
              <h3>Express Js</h3>
            </h1>
          </div>
        </div>

        <div className="row" style={{ display: "flex", padding: "5px" }}>
          <div class="card">
            <h1>
              <FaPhp />
              <h3>PHP</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <FaPython />
              <h3>Python</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <DiMysql />
              <h3>MySql</h3>
            </h1>
          </div>

          <div class="card">
            <h1>
              <DiJavascript1 />
              <h3>Javascript</h3>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
