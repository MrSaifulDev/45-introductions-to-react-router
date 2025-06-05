import { useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;


    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/posts/${id}`);
    };

    const postStyle=
        {
            border: '2px solid black',
            margin: '10px',
            padding: '10px', 

        }
    
    return (
        <div style={postStyle}>
            <h1>post id: {id} </h1>
            <h2>title: {title}</h2>
            <button onClick={handleShowDetail}>show detail</button>
        </div>
    );
};

export default Post;