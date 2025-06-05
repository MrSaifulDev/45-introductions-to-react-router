
import { Link, NavLink } from 'react-router-dom';
import  './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                
                
                <NavLink to='/'>home</NavLink>
               <NavLink to='/about'>about</NavLink>
               <NavLink to='/contact'>contact</NavLink>
               <NavLink to='/users'>users </NavLink>
               <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;


