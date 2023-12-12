import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1>Form Master</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/simple">Simple Form</NavLink>
                <NavLink to="/stateful">Stateful Form</NavLink>
                <NavLink to="/ref">Ref Form</NavLink>
                <NavLink to="/hook">Hook Form</NavLink>
                <NavLink to="/reusable">Reusable Form</NavLink>
                <NavLink to="/propDrilling">Prop Drilling</NavLink>

                {/* <Link to="/simple">Simple Form</Link> */}
                {/* nav link dile active show krbe */}
            </nav>
        </div>
    );
};

export default Header;