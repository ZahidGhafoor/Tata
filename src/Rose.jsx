import react from "react"
import roseimg from "./Assets/title-top.png"
import './Rose.css'
 let Rose = () =>{

     return(
<>
<div className="rose_section">

<img src={roseimg} className="rose_logo" />

<div className="rose_title"> Bulgarian Yogurt</div>


<div className="rose_para">
Bulgarian rose oil is one of the most sought after products on
 the cosmetic market around the world. The history of the rose 
 in the region dates centuries back, even influencing the people
  that cultivated it. The rose was a symbol of the Thracians, even
   having its own holiday and ceremony to commerate its blossoming. 
These traditions still continue in many Bulgarian villages today.
</div>






</div>
</>
     );
 };

 export default Rose;