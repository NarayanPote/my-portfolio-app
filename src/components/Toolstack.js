import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import "./techstack.css";
function Toolstack() {
  return (
    // <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiLinux />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiVisualstudiocode />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiPostman />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiVercel />
    //   </Col>
    //   <Col xs={4} md={2} className="tech-icons">
    //     <SiHeroku />
    //   </Col>
    // </Row>


    <div id='features' className='text-center'>
    <div className='container'>
   
      <div className='row' style={{display: 'flex', padding: '5px'}}>
       
          <div class="card">
                <h3> <SiLinux /></h3>
             </div>

             <div class="card">
                <h3><SiVisualstudiocode /></h3>
             </div>

             <div class="card">
                <h3><SiPostman /></h3>
             </div>

             <div class="card">
                <h3><SiHeroku /></h3>
             </div>
            
      </div>

     

    </div>
  </div>




// <div>
// <div class="row">
//     <div class="column">
//         <div class="card">
//             <h3> <SiLinux /></h3>
//         </div>
//     </div>

//     <div class="column">
//         <div class="card">
//             <h3><SiVisualstudiocode /></h3>
//         </div>
//     </div>


//     <div class="column">
//         <div class="card">
//             <h3><SiPostman /></h3>
//         </div>
//     </div>


//     <div class="column">
//         <div class="card">
//             <h3><SiHeroku /></h3>
//         </div>
//     </div>
// </div>
// </div>


  );
}

export default Toolstack;