import React, { Component } from 'react';
import './App.scss';
import {
  Navbar,
  NavbarBrand,
  Nav
} from 'reactstrap';
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt
} from 'react-icons/fa';
import IconTooltip from './components/IconTooltip';
import NavIcon from './components/NavIcon';
import resume from './assets/Resume.pdf';
import picMe from './assets/images/me.jpg';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-dark shadow">
          <div className="container mb-3">
            <div className="row">
              <div className="col">
                <Navbar dark className="px-1">
                  <NavbarBrand href="">Blake L. Mason</NavbarBrand>
                  <Nav className="d-flex align-items-center">
                    <NavIcon href="https://github.com/blakelmason" icon="Github" className="p-0 bg-light rounded border border-secondary">
                      <FaGithub color="#333" size="2.4rem" id="Github" style={{ padding: '2px' }} />
                      <IconTooltip icon="Github" />
                    </NavIcon>
                    <NavIcon href="https://www.linkedin.com/in/blakelmason/" icon="LinkedIn" className="mx-2 rounded p-0 bg-light">
                      <FaLinkedin color="#0077B5" size="2.4rem" id="LinkedIn" />
                      <IconTooltip icon="LinkedIn" />
                    </NavIcon>
                    <NavIcon href={resume} icon="Resume" download className="p-0 rounded bg-light">
                      <FaFileAlt color="#343a40" size="2.4rem" id="Resume" className="p-1" />
                      <IconTooltip icon="Resume" />
                    </NavIcon>
                  </Nav>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col">
              <div className="border shadow bg-light rounded p-3">
                <h3>Welcome!</h3>
                <hr />
                <div className="row mb-3">
                  <div className="col d-sm-none d-flex justify-content-center">
                    <div>
                      <img src={picMe} alt="" style={{ maxWidth: '350px' }} className="border rounded w-100" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src={picMe} alt="" style={{ width: '278px' }} className="border rounded float-left mr-3 mb-2 d-none d-sm-block" />
                    <p>
                      Hello! I am a full stack developer who really enjoys writing code.
                      <br />
                      <br />
                      My main skills are with Javascript tools and frameworks, with a focus on the MERN stack. I also like to keep myself up-to-date with the latest technologies and languages while increasing my understanding of general computer and software principles.
                      <br />
                      <br />
                      Learning new technologies and deepening my understanding of programming languages is something I work on every day, and I enjoy finding elegant and simple solutions for complicated problems in the constantly shifting world of technology. To me there is no better feeling than successfully building software that is effective and enjoyable. I also work hard to write code that is modern, clean, and modular, and I welcome learning from others on how I can improve my code.
                      <br />
                      <br />
                      I am familiar with the following technologies, languages, frameworks, etc.: HTML, CSS, Sass, Javascript, JQuery, Bootstrap 4, Git, Node.js, Express.js, Moment.js, Cheerio.js, Handlebars.js, SQL, Sequelize, MongoDB, Mongoose, React, React-Router, Reactstrap, Material-UI, and Heroku. Check out my projects below for some working examples.
                      <br />
                      <br />
                      <span className="text-center w-100 d-inline-block">
                        Thanks for visiting!
                      <br />
                        😎👍
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
