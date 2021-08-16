import { NavLink } from "react-router-dom";

const Nav = ({ handleClick }) => {

    const closeNav = (e) => {
        e.target.blur();
        handleClick();
    }

    return (
        <nav className='main-nav' onClick={closeNav}>
            <ul>
                <li><NavLink to='/' exact>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/favourites'>Favourites</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
