import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, phone } = user;

    return (
        <div>
            <h1>this is : {name}</h1>
            <h2>{email}</h2>
            <h3>{phone}</h3>
        </div>
    );
};

export default UserDetails;