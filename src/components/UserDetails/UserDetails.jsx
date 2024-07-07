import { useLoaderData } from "react-router-dom";
import './UserDetails.css'
const UserDetails = () => {
    const user=useLoaderData();
    return (
        <div className="user-details-container">
            <h1>User Details</h1>
            <h2>Name:{user.name}</h2>
            <h2>Email:{user.email}</h2>
            {
                user.address && <h2>Address:{user.address.city}</h2>
            }
        </div>
    );
};

export default UserDetails;