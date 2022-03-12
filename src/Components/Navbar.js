import {Link } from 'react-router-dom'

import logo from '../logo192.png'
const Navbar = () => {

    const navStyle = {
      color:'black', 

      
    }
   
    
    return ( 
        <>
        <nav>
         
        <div className="logo">
        <Link style={navStyle} to='/'>   
        <ul className='link-logo'>
           
           <li>Logo </li>
        </ul>     
         
         </Link>
         </div>
        
        <div className="links-wrapper">
        <div className="menu-links">
            <ul>
                <Link style={navStyle} to='/home'>
                <li>Home</li>
                </Link>
                <Link style={navStyle}  to='/about'>
                <li>About</li>
                </Link>
                <Link style={navStyle}  to='/contact'>
                <li>Contact Me </li>
                </Link>
            </ul>
        </div>    
        </div>
        </nav>
      
        </>
        
     );
}
 
export default Navbar;