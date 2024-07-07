import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './User.css'


const User = ({user}) => {
    const {id,name}=user;
    return (
        <div>
            <div className='user-container'>

                <h3>Name:{name}</h3>
                <button className='user-btn'><Link to={`/user/${id}`}>Show Details</Link></button>

            </div>
            
        </div>
    );
};

User.propTypes = {
    user:PropTypes.object
}
export default User;