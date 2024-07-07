import { Link, Outlet } from "react-router-dom";

import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <ul className="navbar-ul">
                   <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
                   <Link to="/users">Users</Link>
                   <Link to="/posts">Posts</Link>
                   <Link to="/contact">Contact Us</Link>
                   <Link to="/help">Help</Link>
                </ul>
                {/* <Outlet/>   use to breakdown the skin of the page */}
            </div>
            <div className="navbar-outlet">
            <Outlet/>
            </div>
        </div>
    );
};

export default Navbar;