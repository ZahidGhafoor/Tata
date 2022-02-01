import react from "react"
import forestimg from "./Assets/white-logo.png"
import './Contact.css'
 let Contact = () =>{

     return(
<>
<div className="contact_section">

<img src={forestimg} className="contact_logo" />
<div className="line">

<hr/>

</div>
 <br/>

{/* Adress Section */}

<div className="adress_section">

<div className="adress_title">

Get in touch


</div>
 <br/>

<div className="adress_email">

office@thracianforest.com 

</div>
<br/>

<div className="adress_phone">

Tel.: +359 885 110786 

</div>

<div className="adress_detail">

address: Bulgarska legiya 3 <br/> str., Sofia, Bulgaria

</div>





</div>




{/* Input Section  */}

 
<div className="input_section">


<div className="input_line1">


<input type= "text"   placeholder="YOUR NAME" />
<input type= "text"   placeholder="TELEPHONE " />

</div>

<div className="input_line2">



<input type= "text"   placeholder="E-MAIL" />
<input type= "text"  placeholder="SUBJECT"  />

</div>

<textarea className="comment_area" placeholder="Enter Your Subject Here"
 rows="7" cols="56.5"/>
 


 
<div className="contact_btn">
<button className="conbtn">SUBMIT</button>
</div>


</div>


</div>

{/* <div className="bar_put">

 <div className="bar">

<div className="rights">

All rights reserved by Thracian Forest 2018-2019

</div>

<p className="shahzaib">Created by       <span style={{color:"#676b6d"}}>  Shahzaib Ali  </span>  </p>

</div> 

</div> */}


</>
     );
 };






 export default Contact;