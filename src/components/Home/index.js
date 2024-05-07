import React, { useState, useEffect } from 'react';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeData } from '../../redux/actions/recipeactions';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const recipeData = useSelector((state) => state.recipes.recipeData);
    const error = useSelector((state) => state.recipes.error);

    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(8); // Change this to your preferred items per page

    useEffect(() => {
        dispatch(fetchRecipeData());
    }, [dispatch]);

    // Handle error state
    if (error) {
        return (
            <div className='homepage'>
                <div className='banner'>
                    <h2>Error Loading Recipes</h2>
                    <p>Please try again later.</p>
                </div>
            </div>
        );
    }

    // Filter recipe data based on search query
    const filteredRecipes = recipeData.filter(recipe =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='homepage'>
            <div className='banner'>
                <h2>It is even better than<br />an expensive cookery book</h2>
                <p>Learn how to make your favorite restaurant’s dishes</p>
                <div className="input-group search-box">
                    <div className="form-outline" data-mdb-input-init>
                        <input
                            type="search"
                            id="form1"
                            placeholder='Search Recipes you looking for'
                            className="form-control"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button type="button" className="btn btn-primary" data-mdb-ripple-init>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
            <div className='alldata'>
                <div className='container'>
                    <h3>All Recipes</h3>
                    {currentRecipes.length === 0 && <p>No recipes found.</p>}
                    <ul>
                        {currentRecipes.map(recipe => (
                            <li className='recipe-details' key={recipe._id}>
                                <Link to={`/recipes/${recipe._id}`}>
                                    <div className='recipe-img'>
                                        <img className='img-fluid' src={recipe.imgthumb} alt={recipe.title} />
                                    </div>
                                    <h5>{recipe.title}</h5>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='pagination-part'>
                        <nav>
                            <ul className='pagination'>
                                {Array.from({ length: Math.ceil(filteredRecipes.length / itemsPerPage) }).map((_, index) => (
                                    <li key={index} className='page-item'>
                                        <button onClick={() => paginate(index + 1)} className='page-link'>
                                            {index + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;