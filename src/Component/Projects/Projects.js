import React from "react";     
import './project.css'
const Projects = () => {

    return(
        <div style={{paddingBottom: '5rem'}}>
            <div className="">
            <h1 style = {{ paddingBottom: '3em'}}>Projects</h1>
                <div className="project-flex-wrapper">
                    <div>
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" style = {{ width: '500px', height: 'auto', borderRadius: "1.5em"}} alt = {'project'}></img>
                    </div>
                    <div style = {{ overflowWrap: "break-word", width: '400px'}}>
                         <p> this is my project dawg this is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawgthis is my project dawg</p>
                    </div>
                </div> 
                <div className="project-flex-wrapper">
                    <div>
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" style = {{ width: '500px', height: 'auto', borderRadius: "1.5em"}} alt = {'project'}></img>
                    </div>
                    <div style = {{ overflowWrap: "break-word", width: '400px'}}>
                         <p> this is my project dawg</p>
                    </div>
                </div> 
                <div className="project-flex-wrapper">
                    <div>
                        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" style = {{ width: '500px', height: 'auto', borderRadius: "1.5em"}} alt = {'project'}></img>
                    </div>
                    <div style = {{ overflowWrap: "break-word", width: '400px'}}>
                         <p> this is my project dawg</p>
                    </div>
                </div> 
            </div>

        </div>
    )
}

export default Projects