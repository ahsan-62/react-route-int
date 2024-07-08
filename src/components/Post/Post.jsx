import PropTypes from 'prop-types';

import './Post.css'
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id,title}=post;
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate(`/post/${id}`)
    }
    
    return (
            <div className="post-container">
            <h3>ID:{id}</h3>
            <h3>Title:{title}</h3>
            <button><Link to={`/post/${id}`}>Show Details</Link></button>
            <button onClick={handleClick}>Show Details</button>
           

            </div>
      
    );
};

Post.propTypes = {
    post:PropTypes.object
}

export default Post;