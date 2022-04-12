import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiPytorch,
    SiFirebase,
    SiNextdotjs,
} from "react-icons/si";


import "./techstack.css";

export default function Techstack() {
    return (

        <div id='features' className='text-center'>
        <div className='container'>
       
          <div className='row' style={{display: 'flex', padding: '5px'}}>
           
              <div class="card">
                    <h3><CgCPlusPlus /></h3>
                 </div>

                 <div class="card">
                    <h3><DiNodejs /></h3>
                 </div>

                 <div class="card">
                    <h3><DiReact /></h3>
                 </div>

                 <div class="card">
                    <h3><DiMongodb /></h3>
                 </div>
                
          </div>

          <div className='row' style={{display: 'flex', padding: '5px'}}>
           
           <div class="card">
                 <h3><SiNextdotjs /></h3>
              </div>

              <div class="card">
                 <h3><CgCPlusPlus /></h3>
              </div>

              <div class="card">
                 <h3><CgCPlusPlus /></h3>
              </div>

              <div class="card">
                    <h3><CgCPlusPlus /></h3>
                 </div>
             
       </div>

        </div>
      </div>



        // <div>
        //     <div class="row">
        //         <div class="column">
        //             <div class="card">
        //                 <h3><CgCPlusPlus /></h3>
        //             </div>
        //         </div>

        //         <div class="column">
        //             <div class="card">
        //                 <h3><DiNodejs /></h3>
        //             </div>
        //         </div>


        //         <div class="column">
        //             <div class="card">
        //                 <h3><DiReact /></h3>
        //             </div>
        //         </div>


        //         <div class="column">
        //             <div class="card">
        //                 <h3><DiMongodb /></h3>
        //             </div>
        //         </div>
        //     </div><br />




        //     <div class="row">
        //         <div class="column">
        //             <div class="card">
        //                 <h3><SiNextdotjs /></h3>
        //             </div>
        //         </div>

        //         <div class="column">
        //             <div class="card">
        //                 <h3><DiGit /></h3>
        //             </div>
        //         </div>

        //         <div class="column">
        //             <div class="card">
        //                 <h3><SiFirebase /></h3>
        //             </div>
        //         </div>

        //         <div class="column">
        //             <div class="card">
        //                 <h3><DiPython /></h3>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
