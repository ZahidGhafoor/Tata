import react from 'react'
import reactDom from 'react-dom'
import About from "./About"
import Antigold from './Antigold';
import Contact from './Contact';
import Yogurt from './Yogurt';
import Rose from './Rose';
import Hero from './hero/Hero';
import Mobile from './mobile/Mobile';
reactDom.render(
  <>
 <Hero/>  


 <About/>
 <Antigold/> 
 <Rose/>
 <Yogurt/>
 <Contact/>
  </>
,document.getElementById('root'));