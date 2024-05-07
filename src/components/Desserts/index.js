import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDessertRecipes } from '../../redux/actions/dessertcategoryactions';
import { Link } from "react-router-dom";
const Desserts = () => {
    const dispatch = useDispatch();
    const { desserts, loading, error } = useSelector((state) => state.dessert);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3);
    useEffect(() => {
        dispatch(fetchDessertRecipes())
    }, [dispatch])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }
    const filteredRecipes = desserts.filter(recipe =>
        recipe.title.toLowerCase()
    );
    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentRecipes = filteredRecipes.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="vegetarian list-category">
            <div className='category-banner'>
                <h2>Desserts Recipes</h2>
            </div>
            <div className="recipe-list">
                <div className="container">
                    <h3>List of Desserts Recipes</h3>
                    <ul>
                        {currentRecipes.map((recipe) => ( // Updated to use currentRecipes
                            <li className="recipe-details" key={recipe._id}>
                                <Link to={`/recipes/${recipe._id}`}>
                                    <img className='img-fluid' src={recipe.imgthumb} alt={recipe.title} />
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
}

export default Desserts;