import {  useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetail = () => {
    const post = useLoaderData();
    const {postID} = useParams(); 
    const navigate = useNavigate();

    console.log(postID);

     const handleBack = () => {
        // Navigate back to the previous page
        navigate(-1);
    }

   
    return (
        <div>
            <h1>{post.title}</h1>
            <button onClick={handleBack}>back</button>
        </div>
    );
};

export default PostDetail;