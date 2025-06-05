import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div style={{
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                
            }}>
            <h1>Posts: {posts.length}</h1>
          {
            posts.map((post) => <Post key={post.id} post={post}></Post>)
          }
        </div>
    );
};

export default Posts;