import e from 'express';
import React, { useContext } from 'react'
import { useHistory, NavLink } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const auth = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = () => {
        auth.logout();
        history.push('/');
    }

    return (
        <nav>
            <div class="nav-wrapper">
                <NavLink to="/" class="brand-logo">Сокращение ссылок</NavLink>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink to="/create">Содать</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    <li><a to="#" onClick={logoutHandler}>Выйти</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
