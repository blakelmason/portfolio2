import React, { Component } from 'react';
import './App.scss';
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt
} from 'react-icons/fa';
import IconTooltip from './components/IconTooltip';
import NavIcon from './components/NavIcon';
import ProjectCard from './components/ProjectCard';
import resume from './assets/Resume.pdf';
import picMe from './assets/images/me.jpg';
import city from './assets/images/city.gif';
import lotr from './assets/images/lotr.gif';
import burger from './assets/images/burger.gif';
import hangman from './assets/images/hangman.gif';
import dnd from './assets/images/dnd.gif';
import darkSouls from './assets/images/darkSouls.gif';
import library from './assets/images/library.gif';
import pokemon from './assets/images/pokemon.gif';

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
                <h2>Welcome!</h2>
                <hr />
                <div className="row mb-3">
                  <div className="col d-md-none d-flex justify-content-center">
                    <div>
                      <img src={picMe} alt="" className="border rounded w-100" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <img src={picMe} alt="" style={{ width: '363px' }} className="border rounded float-left mr-3 mb-2 d-none d-md-block" />
                    <p>
                      <h5>Hello!</h5>
                      <br />
                      I am a full stack developer who really enjoys writing code.
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
                      <br />
                      <span className="text-center w-100 d-inline-block">
                        <h5 className="mb-3">Thanks for visiting!</h5>
                        <h4 classsName="mb-0">
                          <span role="img" aria-label="emoji">😎👍</span>
                        </h4>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col">
              <div className="border shadow bg-light rounded p-3">
                <h2 className="mb-0">Portfolio</h2>
                <hr />
                <h4 className="mb-0">Bootcamp Projects</h4>
                <div className="row">
                  <ProjectCard image={city} name="Handy Helper" />
                  <ProjectCard image={city} name="Plaid App" />
                  <ProjectCard image={city} name="D&D Toolset" />
                </div>
                <hr />
                <h4 className="mb-0">Bootcamp Homework</h4>
                <div className="row">
                  <ProjectCard image={city} name="NYT React App" />
                  <ProjectCard image={lotr} name="Clicky Game" />
                  <ProjectCard image={burger} name="Eat Da Burger" />
                  <ProjectCard image={hangman} name="Hangman Adventure!" />
                  <ProjectCard image={dnd} name="D&D Tool" />
                  <ProjectCard image={darkSouls} name="Giphy Tool" />
                  <ProjectCard image={library} name="Trivia Game" />
                  <ProjectCard image={pokemon} name="Pokemon Picker" />
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
