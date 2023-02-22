import {forwardRef} from "react";
import './aboutme.css'

const AboutMe = forwardRef((props, ref) => {
const {animateIn} = props
console.log(props)
console.log(ref)


  return (
    <div style = {{ paddingBottom: '13rem', backgroundColor: "#242526"}}   >
      <h1 
      className={"aboutheader" + (animateIn ? ` revealIn` : ` hidden-left` )} 
      style = {{ paddingBottom: '3em', paddingTop: '3em'}} 
      ref = {ref}>
        About Me </h1>
        <div className="aboutme flex">
            <div style = {{ width: '30rem'}}>
                <img 
                ref = {ref}
                style = {{borderRadius: "100rem", width: '100%', height: 'auto'}}
                className = {(animateIn ? 'revealIn' : 'hidden-left' )}
                alt = 'profilePhoto'
                src="https://scontent.fakl1-4.fna.fbcdn.net/v/t1.6435-9/67543874_2416105221768880_2313676067488923648_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TGxa4aW8IhIAX_OdQxE&_nc_ht=scontent.fakl1-4.fna&oh=00_AfBRANNaPVLyD_muZ119tfXUj2ejOlAGrP5DJvmXkGYhag&oe=6413D61E">  
                </img>
            </div>
            <div 
            style = {{ overflowWrap: "break-word", width: '400px'}}
            className = {(animateIn ? 'revealIn' : 'hidden-down' )}
            >
                <p > Enter text here about yourself. As you can see I am a skateboarding cat. Not a lot much else going on, wbu?</p>
            </div>
        </div>
    </div>
  );
});

export default AboutMe;
