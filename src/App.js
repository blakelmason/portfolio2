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
import terraria from './assets/images/terraria.gif';
import money from './assets/images/money.gif';
import dnd2 from './assets/images/dnd2.gif';
import shovel from './assets/images/shovel.gif';
import training from './assets/images/training.gif';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="bg-dark shadow">
          <div className="container mb-4">
            <div className="row">
              <div className="col">
                <Navbar dark className="px-1">
                  <NavbarBrand href="">Blake Mason</NavbarBrand>
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
        <div className="container mb-4 ">
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
                    <img src={picMe} alt="" style={{ width: '363px' }} className="border rounded float-left mr-3 mb-1 d-none d-md-block" />
                    <div style={{ fontSize: '1.2rem' }}>Hello!</div>
                    <br />
                    I am a full stack developer who really enjoys writing code.
                      <br />
                    <br />
                    My main skills are with Javascript tools and frameworks, with a focus on the MERN stack. I also like to keep myself up-to-date with the latest technologies and languages while increasing my understanding of general computer and software principles.
                      <br />
                    <br />
                    Learning new technologies and deepening my understanding of programming languages is something I work on every day, and I enjoy finding elegant and simple solutions for complicated problems in the constantly shifting world of technology. To me there is no better feeling than successfully building software that is effective and enjoyable. I also work hard to write code that is modern, clean, and modular, and I always welcome learning from others on how to improve my code.
                      <br />
                    <br />
                    The following are some of the technologies, languages, frameworks, etc. that I am familiar with: HTML, CSS, Sass, Javascript, JQuery, Bootstrap 4, Git, Node.js, Express.js, Moment.js, Cheerio.js, Handlebars.js, SQL, Sequelize, MongoDB, Mongoose, React, React-Router, Reactstrap, Redux, and Heroku. Check out my projects below for some working examples!
                      <br />
                    <br />
                    <br />
                    <div className="text-center w-100 d-inline-block">
                      <div className="mb-3" style={{ fontSize: '1.2rem' }}>Thanks for visiting!</div>
                      <h4>
                        <span role="img" aria-label="emoji">😎👍</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <div className="border shadow bg-light rounded p-3">
                <h2 className="mb-0">Portfolio</h2>
                <hr className="mb-5" />
                <h4 className="mb-0">Current Project</h4>
                <div className="row">
                  <ProjectCard image={training} name="sullTraining" link="https://github.com/blakelmason/sullTraining" info="Record and track workouts for weight lifting." />
                </div>
                <hr className="mb-5" />
                <h4 className="mb-0">Group Projects</h4>
                <div className="row">
                  <ProjectCard image={terraria} name="Handy Helper" link="https://gentle-reaches-45549.herokuapp.com/" info="A community driven app for people to find help with home projects." />
                  <ProjectCard image={money} name="Plaid App" link="https://boiling-citadel-14988.herokuapp.com/" info="Connect to the Plaid API: a financial API to read bank data." />
                  <ProjectCard image={shovel} name="D&D Toolset" link="https://aaronsy1.github.io/firstGroupProject/" info="D&D tools to help make a DM's life easier." />
                </div>
                <hr className="mb-5" />
                <h4 className="mb-0">Bootcamp Apps</h4>
                <div className="row">
                  <ProjectCard image={city} name="NYT React App" link="https://ancient-shore-12375.herokuapp.com/" info="Search and save historical NYT articles." />
                  <ProjectCard image={lotr} name="Clicky Game" link="https://blakelmason.github.io/react-clicky-game/" info="A memory game using React." />
                  <ProjectCard image={dnd2} name="Web Scraper" link="https://intense-mesa-35004.herokuapp.com/" info="A web scraper for articles from D&D Beyond." />
                  <ProjectCard image={burger} name="Eat Da Burger" link="https://morning-scrubland-74719.herokuapp.com/" info="Create, read, update, and delete custom burgers." />
                  <ProjectCard image={hangman} name="Hangman Adventure!" link="https://blakelmason.github.io/projects/hangman-adventure/index.html" info="Fight your way through an epic hangman adventure." />
                  <ProjectCard image={dnd} name="D&D Tool" link="https://aaronsy1.github.io/firstGroupProject/spells.html" info="Spell reference and dice rolling tool." />
                  <ProjectCard image={darkSouls} name="Giphy Tool" link="https://blakelmason.github.io/projects/giphy-tool/index.html" info="Find a GIF using the Giphy API." />
                  <ProjectCard image={library} name="Trivia Game" link="https://blakelmason.github.io/projects/trivia-game/index.html" info="A simple trivia game." />
                  <ProjectCard image={pokemon} name="Pokemon Picker" link="https://immense-temple-68040.herokuapp.com/" info="Receive a starter Pokemon after filling out a survey." />
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
