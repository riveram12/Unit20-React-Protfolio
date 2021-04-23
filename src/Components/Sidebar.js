import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
        <nav class="nav flex-column">
          {/* <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          > */}
            <i />
         
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/mariah.png)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Mariah Rivera</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> mariahbrivera@gmail.com
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
               <li class="nav-item">
                  <a class="nav-link active" aria-current="page"
                    href="https://www.facebook.com/dhruv.barochia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                    href="https://twitter.com/ddbarochiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                    href="https://www.instagram.com/ddbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                    href="https://www.linkedin.com/in/dbarochiya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                    href="https://github.com/dbarochiya"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page"
                    href="https://medium.com/@dhruv.barochia34788"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-blogger2"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-beer" aria-hidden="true"></i>
                  <br></br>
                  Thanks{" "}
                </small>
              </p>
            </div>
          </aside>
          </nav>
        </div>
        </div>
    );
  }
}
