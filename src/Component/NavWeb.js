import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {BiSolidShoppingBagAlt} from 'react-icons/bi';
import {CiBoxList} from 'react-icons/ci';
import './style.css';

const NavWeb = () => {
    return (
        <div>
            <nav>
                <div className='profile-container'>
                        <NavLink className='navLink' to="/products">
                            <BiSolidShoppingBagAlt className='nav-icons'/> <span>Products</span>
                        </NavLink>
                        <NavLink className='navLink' to="/categories">
                            <CiBoxList className='nav-icons'/> <span>Categories</span>
                        </NavLink>
                </div>

                {/* <div className='nav-container'>
                    <input type='text' className='search-input' placeholder='Enter your search shoes'/>
                </div> */}
            </nav>
            <Outlet />
        </div>
    );
}

export default NavWeb;
