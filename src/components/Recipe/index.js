import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from '../../redux/actions/singlerecipeaction';
import './recipe.css';
const SingleRecipe = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRecipe(id))
    }, [dispatch, id])
    const singlerecipeData = useSelector((state) => state.singlerecipe.singlerecipeData)

    return (
        <div className='singlerecipe'>
            <div className='recipe-banner'>
                <h2>{singlerecipeData.title}</h2>
            </div>
            <div className='container'>
                <h3>{singlerecipeData.title}</h3>
                <p>{singlerecipeData.category}</p>
                <div className='single-img'>
                    <img className='img-fluid' src={singlerecipeData.image} alt={singlerecipeData.title} />
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <h5>Preperationtime</h5>
                        <p>{singlerecipeData.preperationtime}</p>
                    </div>
                    <div className='col-4'>
                        <h5>Cooking Time</h5>
                        <p>{singlerecipeData.cookingtime}</p>
                    </div>
                    <div className='col-4'>
                        <h5>Servings</h5>
                        <p>{singlerecipeData.servings}</p>
                    </div>
                </div>
                <h4>description</h4>
                <p>{singlerecipeData.description}</p>
                <h4>Ingredients</h4>
                {singlerecipeData && singlerecipeData.ingredients && (
                    <ul>
                        {singlerecipeData.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                )}
                <h4>Description</h4>
                {singlerecipeData && singlerecipeData.instructions && (
                    <ul>
                        {singlerecipeData.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    singlerecipeData: state.singlerecipeData,
})
const mapDispatchToProps = {
    fetchRecipe,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);