import { Link, NavLink, Outlet, useNavigation } from "react-router-dom";

import './Navbar.css'


const Navbar = () => {
    const navigation=useNavigation();
    
    return (
        <div>
            <nav className="navbar-container">
                <ul className="navbar-ul">
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="/about">About</NavLink>
                   <NavLink to="/users">Users</NavLink>
                   <NavLink to="/posts">Posts</NavLink>
                   <NavLink to="/contact">Contact Us</NavLink>
                   <NavLink to="/help">Help</NavLink>
                </ul>
                {/* <Outlet/>   use to breakdown the skin of the page */}
            </nav>
            <div className="navbar-outlet">
            {navigation.state==='loading'? <div>Loading...</div>:<Outlet/>}
            
            </div>
        </div>
    );
};

export default Navbar;