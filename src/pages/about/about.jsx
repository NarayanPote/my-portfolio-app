import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Know Who i'm</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>
                {" "}
                Apart from coding, some other activities that I love to do!
              </h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}>Professional Skillset</h2>
        <Techstack />
        <br />
        <br />
        <h2 style={{ textAlign: "center" }}>Tools Use</h2>
        <Toolstack />
      </div>
    </div>
  );
};
