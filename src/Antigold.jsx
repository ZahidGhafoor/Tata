import react from "react"
import goldimg from "./Assets/white-logo-sep.png"
import './Antigold.css'
 let Antigold = () =>{

     return(
<>
<div className="gold_section">

<img src={goldimg} className="gold_logo" />

<div className="gold_title"> Anti-age Gold</div>


<div className="gold_para">
Dive into the fountain of youth with the new “Kella” anti-age cream.
 The rejuvenating elixir with golden particles combines the magic of
  herbal extracts
 and the regenerating and protective properties of gold.
</div>



<div className="gold_btn">
<button className="g_btn">SEE MORE</button>
</div>


</div>
</>
     );
 };






 export default Antigold;