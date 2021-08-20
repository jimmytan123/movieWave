import { NavLink } from "react-router-dom";
import { searchIcon } from '../globals/icon';

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
                <li><NavLink to='/search' className='search-icon-link'>{searchIcon}</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;
