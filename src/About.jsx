import react from "react"
import Slide from "react-reveal/Slide"
import aboutimg from "./Assets/title-top.png"
import './About.css'
 let About = () =>{

     return(
<>
<div className="about_section">

<img src={aboutimg} className="about_logo" />

<div className="about_title"> About Us</div>

<Slide left>
<div className="about_para">
Welcome to Thracian Forest! Let us take you on a journey through the ages
 and show you the natural way to beauty used in ancient times. Thanks to our 
 rediscovery of the methods and means used in the past to protect one’s youth and
 the combination of that knowledge with modern day cosmetic science, 
 we can present to you new and exciting products of true exotic origin,
  which contain essential ingredients from the sprawling herbal fields of 
  Bulgaria.
</div>
</Slide>



<div className="about_btn">
<button className="btn">GET IN TOUCH</button>
</div>


</div>
</>
     );
 };






 export default About;