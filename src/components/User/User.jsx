import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name , email, phone} = user;
    return (
        <div style={{
            border: '1px solid black',
            margin: '10px',
            padding: '10px',

        }}>
            <h3>this is user no: {user.id} </h3>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}> show details</Link>
        </div>
    );
};

export default User;


   