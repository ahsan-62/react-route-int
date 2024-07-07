
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post=useLoaderData();
    const {id,title,body}=post;
    return (
        <div>
            <h1>Post Details</h1>
            <h3>ID:{id}</h3>
            <h3>Title:{title}</h3>
            <p>Body:{body}</p>
        </div>
    );
};

export default PostDetails;