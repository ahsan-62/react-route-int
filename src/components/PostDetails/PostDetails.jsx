
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
    const post=useLoaderData();
    const {id,title,body}=post;
    const navigate=useNavigate();
    const handleBack=()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>Post Details</h1>
            <h3>ID:{id}</h3>
            <h3>Title:{title}</h3>
            <p>Body:{body}</p>

            <div>
            <button onClick={handleBack}>Go Back</button>
            </div>
        </div>
    );
};

export default PostDetails;