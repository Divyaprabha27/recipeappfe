import React from 'react';
import './category.css';
import { NavLink } from 'react-router-dom';
import img1 from '../../assets/vegetarian.jpg';
import img2 from '../../assets/nonveg.jpg';
import img3 from '../../assets/dessert.jpg';
import img4 from '../../assets/beverages.jpg';
const Categories = () => {

    return (
        <div className='categories'>
            <div className='category-banner'>
                <h2>Categories List</h2>
            </div>
            <div className='container'>
                <div className='category-list'>
                    <div className='row'>
                        <div className='col-3'>
                        <NavLink to="/recipes/vegetarian">
                            <div className='catimg'>
                                <img src={img1} className='img-fluid' alt="Vegetarian" />

                            </div>
                            <h5>Vegetarian</h5>
                        </NavLink>
                        </div>
                        <div className='col-3'>
                        <NavLink to="/recipes/nonvegetarian">
                            <div className='catimg'>
                                <img src={img2} className='img-fluid' alt="Non Vegetarian" />
                            </div>
                            <h5>Non Vegetarian</h5>
                        </NavLink>
                        </div>
                        <div className='col-3'>
                        <NavLink to="/recipes/desserts">
                            <div className='catimg'>
                                <img src={img3} className='img-fluid' alt="Desserts" />
                            </div>
                            <h5>Desserts</h5>
                            </NavLink>
                        </div>
                        <div className='col-3'>
                        <NavLink to="/recipes/beverages">
                            <div className='catimg'>
                                <img src={img4} className='img-fluid' alt="Beverages" />
                            </div>
                            <h5>Beverages</h5>
                        </NavLink>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Categories;