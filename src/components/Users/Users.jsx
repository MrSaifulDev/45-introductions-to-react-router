import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData() 
    return (
        <div>
            <h1>this is users leght: {users.length} </h1>
            <div style={{
                display: 'flex', 
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                
            }}>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;