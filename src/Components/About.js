import React from "react";

function About() {
  return (
    // <div style={{ backgroundImage: `url(${atl})` }}>
    //   Hello World
    //   <h1 class="mb-3 h2 center">WELCOME</h1>
    //   <p>
    //     Hello This is my creations from coding class. Below you can read about
    //     me and check the apps that I have created in the last few months.
    //   </p>
    // </div>
    // <div class="container py-5">

    <div className="flexslider js-fullheight">
      <ul className="slides">
        <li style={{ backgroundImage: "url(images/landingpg.jpg)" }}>
          <div className="overlay" />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div className="slider-text-inner js-fullheight">
                  <div className="desc">
                    <h1>
                      Hi! <br />
                      I'm Mariah
                    </h1>
                    <p>
                      <a
                        className="btn btn-primary btn-learn"
                        href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View CV
                        <i className="icon-download4" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default About();
