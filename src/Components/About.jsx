import React from "react";

function About(props){
    return(
        <div id="about">
            <div className="about-image">
                <img src={props.image} />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Tempora odit numquam soluta ipsam eveniet rerum, perferendis molestias dolorum quas 
                 minima at veritatis voluptate velit porro quae magnam quibusdam inventore corrupti odio
                  alias fuga quo molestiae consequuntur natus. Culpa architecto a ipsam cum, eum dolores
                 hic nulla quia eligendi impedit dolorum.</p>
                 <button>{props.button}</button>
            </div>
        </div>
    )
}
export default About;