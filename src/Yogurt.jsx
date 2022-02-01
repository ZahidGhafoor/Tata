import react from "react"
import yogurtimg from "./Assets/white-logo-sep.png"
import './Yogurt.css'
 let Yogurt = () =>{

     return(
<>
<div className="yogurt_section">

<img src={yogurtimg} className="yogurt_logo" />

<div className="yogurt_title"> Bulgarian Yogurt</div>


<div className="yogurt_para">
For thousands of years people use dairy as an excellent tool
 for maintaining elasticity, health, beauty and youthful skin.
  In the past, the privilege to enjoy this natural wealth had queens,
   princesses and ladies high set in the ancient world.
    We’ve all heard how the famous Egyptian queen Cleopatra
 maintained her beauty by immersion in a bath of milk.
</div>






</div>
</>
     );
 };






 export default Yogurt;