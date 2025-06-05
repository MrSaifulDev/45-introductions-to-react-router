import { Outlet, useNavigation, } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const Navigation = useNavigation(); 

    
 
    return (
        <div>
            <h1>this is from home  </h1>
            <Header></Header>
                {
                    Navigation.state === "loading" ? <p>loading .. </p>
                    : <Outlet></Outlet>


                }

        </div>
    );
};

export default Home;