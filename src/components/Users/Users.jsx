import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {

    const users=useLoaderData();
    return (
        <div>

            <h1>This is Users Page</h1>
            <h2>Total Users:{users.length}</h2>
            <div className="users-container">
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
            </div>
            
        </div>
    );
};

export default Users;