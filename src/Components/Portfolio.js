import React from "react";
import "../../src/style.css";

function Portfolio(props) {
  return (
    <section className="container">
      <div className="card mb-3 wholeCard">
        <div className="row g-0">
          <div className="col-md-4">
            <div className="img-container cardImages">
              <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Name:</strong> {props.name}
                </li>
                <li>
                  <strong>Decription:</strong> {props.decription}
                </li>
                <li>
                  <strong>Languages:</strong> {props.languages}
                </li>

                <button
                  type="button"
                  class="btn btn-primary active"
                  onClick={() => {
                    window.location.href = props.linkapp;
                  }}
                >
                  TRY IT NOW!!!
                </button>
                <button
                  type="button"
                  class="btn btn-primary active"
                  onClick={() => {
                    window.location.href = props.linkgit;
                  }}
                >
                  Look at code!!!
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

  )};

    export default Portfolio;