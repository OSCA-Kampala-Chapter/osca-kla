import { useState } from 'react';
import { Nav,Navbar,NavbarBrand,NavItem,NavLink,NavbarToggler,Collapse} from 'reactstrap';
import logo from "../assets/images/osca-logo.png"

export const NavbarSection=()=>{

  const [toggle, setIsToggled] = useState(() => false); 
  
  const handleToggleNavbar=()=>{ 
    setIsToggled(currentStateValue => { 
      return !currentStateValue; 
    });
  }

  return (
   <div>
             <div>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light container-fluid "  color="dark" expand="md" fixed="top">


            <NavbarBrand href="/">
              <img width={55} height={55} src={logo} alt="OSCA Logo" />

            </NavbarBrand>

            <NavbarToggler  className="mr-2" onClick={handleToggleNavbar} />

            <Collapse isOpen={toggle} navbar>    
              <Nav
              className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink href="/about" className='text-light' >
                    About
                  </NavLink>
                </NavItem>
              
               
                <NavItem>
                  <NavLink href="/speakers" className='text-light' >
                    Speakers
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/schedule" className='text-light' >
                  Schedule
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/travel" className='text-light' >
                  Travel
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/register" className='text-light' >
                  Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/sustainAfrica" className='text-light' >
                  Sustain Africa
                  </NavLink>
                </NavItem>
              
              </Nav>
              </Collapse>  
            
              
          </Navbar>
          
        </div> 

   </div>
  );
}

