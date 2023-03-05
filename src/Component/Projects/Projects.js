import React from "react";     
import './project.css'
import Tilt from 'react-parallax-tilt';
import {Animate} from '../Animate In/AnimateIn.js'

const Projects = () => {

    const projectObject = [
        {
            name: 'FaceGPT',
            description: 'A complex full-stack application that interfaces with the Clarifai API face detection model to detect human faces on any provided image URL. Users can register and login to their account which keeps track of how many entries they have submitted. Passwords are safe using bycrypt for encryption. KnexJS is used to interface with PSQL DB',
            tech: ["React", "postgreSQL", 'Node.JS', 'Express.JS', 'Knex.JS', 'bycrypt', 'gRPC APIs', 'Functional and Class components'],
            seeLiveLink:'https://facegpt.onrender.com/',
            GitHub:'https://github.com/Kneesal/facerecognitionbrain'

        },
        {
            name: 'PokeDex',
            description: `Using the PokeAPI, I created an easy to use pokedex to search your favourite pokemon. A simple beginner project to show the understanding of the basics of React`,
            tech: ["React", 'Rest APIs'],
            seeLiveLink:'https://kneesal.github.io/pokedex/',
            GitHub:'https://github.com/Kneesal/pokedex'
        },
        { 
            name: 'Portfolio Website',
            description: 'A portfolio website to show off my work. On scroll animations with zero dependencies with an animations library that is fully re-usable',
            tech: ["React", "react-router-dom", 'dependency-less animations'],
            seeLiveLink:'',
            GitHub:'https://github.com/Kneesal/nisals-portfolio-website'
        }
    ]


    return(
        <div style={{ paddingBottom: "5rem" }} id="projects">
        <div className="">
          <Animate.FadeUp>
            <h1 style={{ padding: "3em" }}>Projects</h1>
          </Animate.FadeUp>
          {projectObject.map((project) => {
          const { name, description, tech, seeLiveLink, GitHub} = project;
          return (
            <Animate.FadeUp>
              <div className="project-flex-wrapper">
                <div
                  style={{
                    overflowWrap: "break-word",
                    width: "400px",
                    textAlign: "left",
                  }}
                >
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <div>
                    <ul
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        padding: "0px",
                      }}
                    >
                      {tech.map((techused) => {
                        return (
                          <li
                            key={Math.random()}
                            style={{
                              padding: '10px',
                              backgroundColor: "gray",
                              borderRadius: "1em",
                              border: '1px solid darkgray',
                              margin:'1px'
                            }}
                          >
                            {techused}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <a className="animated-btn" href={seeLiveLink} target="_blank" rel="noopener noreferrer">See Live </a>
                    <a className="animated-btn" href={GitHub} target="_blank" rel="noopener noreferrer"> Github </a>
                  </div>
                </div>
                <div style={{ width: "45rem" }}>
                  <Tilt
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    glareEnable={true}
                    glareBorderRadius="2em"
                  >
                    <img
                      src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
                      alt={"project"}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "2rem",
                      }}
                    ></img>
                  </Tilt>
                </div>
              </div>
            </Animate.FadeUp>);
          })}
        </div>
      </div>
    )
}

export default Projects