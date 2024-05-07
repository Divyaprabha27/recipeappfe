import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './header.css';
import logo from '../../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        dispatch({
            type: 'UNSET_USER'
        })
        navigate('/signin')
    }
    return (
        <div className='header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 logo'>
                        <img src={logo} className='img-fluid' alt="logo" />
                    </div>
                    <div className='col-8'>
                        <nav className="navbar navbar-expand-lg " id="navbar">
                            <div className="container">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to='/'> Home </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to='/categories'> Categories </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to='/submit'> Add Recipes </NavLink>
                                        </li>
                                        {user.user ? (
                                            <>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to='./dashboard'> Dashboard </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <button className="nav-link" onClick={handleLogout}> Logout </button>
                                                </li>
                                            </>
                                        ) : (
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to='./signup'> Login / Register </NavLink>
                                            </li>
                                        )}

                                    </ul>
                                </div>
                                <div class="modes">
                                    <div id="toggle">
                                        <i class="indicator"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;