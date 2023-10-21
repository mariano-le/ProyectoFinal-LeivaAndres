import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
                <h3>PizzasYa</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/pizzas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Pizzas</NavLink>
                <NavLink to={`/category/hamburgesas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Hamburgesas</NavLink>
                <NavLink to={`/category/papas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Papas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;