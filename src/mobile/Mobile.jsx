import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';


import "./Mobile.scss"

import MenuIcon from '@mui/icons-material/Menu';

import CloseIcon from '@mui/icons-material/Close';




const Mobile = (props) => {

    const [state, setState] = React.useState({
        left: false,
        
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
         <div className="mobile__container">
             <div className="cross__icon">
<CloseIcon onClick={toggleDrawer(anchor, false)}/>

             </div>
            <div className="links">
            <div className="home">HOME</div>
            <div className="home">ABOUT US</div>
            <div className="home">CONTACT US</div>
            <div className="home">GOLD</div>
            <div className="home">ROSE</div>
            <div className="home">YOGURT</div>
            </div>

         </div>
        </Box>
      );
    return (
        <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
           
<div className="burger" onClick={toggleDrawer(anchor, true)}>
<MenuIcon className='iconss' />
</div>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    )
};

export default Mobile;




