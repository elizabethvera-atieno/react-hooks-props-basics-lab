import React from "react";
import Links from "./Links"

function About(props) {
  function displaybio(bio){
    console.log(bio)
    if(!bio || bio===""){
      return
    }
    return <p>{bio}</p>
  } 

  return (
    <div id="about">
      <h2>About Me</h2>
       {displaybio(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links  github = {props.links.github} linkedin = {props.links.linkedin}/>
    </div>
  );
}

export default About;
