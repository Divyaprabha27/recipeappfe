import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './submit.css';
import { createRecipe } from "../Services/posts";
import { uploadImageToCloudinary } from "../Services/cloudinary";
import { useNavigate, NavLink } from "react-router-dom";

export default function Submit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState(['']);
    const [instructions, setInstructions] = useState(['']);
    const [thumbnail, setThumbnail] = useState(null);
    const [image, setImage] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        servings: "",
        preperationtime: "",
        cookingtime: ""
    });
    const [showMessage, setShowMessage] = useState(false); 
    const user = useSelector(state => state.user)

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };
    const handleInstructionChange = (index, event) => {
        const newInstructions = [...instructions];
        newInstructions[index] = event.target.value;
        setInstructions(newInstructions);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const handleAddInstruction = () => {
        setInstructions([...instructions, '']);
    };

    const handleRemoveIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };
    const handleRemoveInstruction = (index) => {
        const newInstructions = [...instructions];
        newInstructions.splice(index, 1);
        setInstructions(newInstructions);
    };
    const handleThumbnailChange = (event) => {
        setThumbnail(event.target.files[0]);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Upload thumbnail to Cloudinary
            const thumbnailData = new FormData();
            thumbnailData.append('file', thumbnail);
            thumbnailData.append('upload_preset', 'ml_default');
            const thumbnailResponse = await fetch(
                'https://api.cloudinary.com/v1_1/dr0qw1dap/image/upload',
                {
                    method: 'POST',
                    body: thumbnailData,
                }
            );
            const thumbnailUrl = await thumbnailResponse.json();

            // Upload image to Cloudinary
            const imageData = new FormData();
            imageData.append('file', image);
            imageData.append('upload_preset', 'ml_default');
            const imageResponse = await fetch(
                'https://api.cloudinary.com/v1_1/dr0qw1dap/image/upload',
                {
                    method: 'POST',
                    body: imageData,
                }
            );
            const imageUrl = await imageResponse.json();

            const recipeData = {
                title: formData.title,
                category: formData.category,
                description: formData.description,
                imgthumb: thumbnailUrl.secure_url,
                image: imageUrl.secure_url,
                servings: formData.servings,
                preperationtime: formData.preperationtime,
                cookingtime: formData.cookingtime,
                ingredients: ingredients.filter(ingredient => ingredient.trim() !== ''),
                instructions: instructions.filter(instruction => instruction.trim() !== '')
            };

            const createdRecipe = await createRecipe(recipeData);
            if (createdRecipe) {
                setShowMessage(true)
                setTimeout(()=> {
                    navigate('/')
                },3000)
            } else {
                console.log('Recipe creation failed');
            }
        } catch (error) {
            console.error('Error creating recipe:', error);
            // Handle error, show error message or log it
        }
    };
    const renderMessageBox = () => {
        return (
            <div className="message-box">
                <p>Your recipe has been added successfully!</p>
            </div>
        )
    }

    // Check if user is logged in
    if (!user.user) {
        return (

            <div className="submitform">
                <div className="breadcrumbs">
                    <h2>Submit Recipe</h2>
                </div>
                <div className="container warn">
                    <h5>Please <NavLink to="/signin">Login</NavLink> or <NavLink to="/signup">register for a new account</NavLink> in order to create recipes.</h5>
                </div>
            </div>
        );
    }

    return (
        <div className="submitform">
            <div className="breadcrumbs">
                <h2>Submit Recipe</h2>
            </div>
            <div className="container recipeform">

                <div>
                    {
                        user.user &&
                        <div>

                            <h5>Create a New Recipes</h5>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Recipe Title</label>
                                    <input type="text" placeholder="title..."
                                        onChange={(event) => {
                                            setFormData({
                                                ...formData,
                                                title: event.target.value
                                            });
                                        }}
                                        value={formData.title}
                                    />
                                </div>
                                <div>
                                    <label>Choose Category</label>
                                    <select name="category" id="category" value={formData.cateogry} onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            category: event.target.value
                                        });
                                    }}>
                                        <option value="">Select</option>
                                        <option value="vegetarian">Vegetarian</option>
                                        <option value="non-vegetarian">Non-vegetarian</option>
                                        <option value="desserts">Desserts</option>
                                        <option value="beverages">Beverages</option>
                                    </select>
                                </div>
                                <div>
                                    <label>Description</label>
                                    <textarea name="description" rows="6" onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            description: event.target.value
                                        });
                                    }}
                                        value={formData.description}></textarea>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <label>Upload Thumbnail photos</label>
                                        <input type="file" placeholder='No Photos Uploaded' id="imgFile" name="filename"
                                            onChange={(event) => {
                                                setFormData({
                                                    ...formData,
                                                    imgthumb: event.target.value
                                                });
                                            }}
                                            value={formData.imgthumb} />
                                    </div>
                                    <div className="col-6">
                                        <label>Upload your photos</label>
                                        <input type="file" placeholder='No Photos Uploaded' id="imgFile"
                                            onChange={(event) => {
                                                setFormData({
                                                    ...formData,
                                                    image: event.target.value
                                                });
                                            }}
                                            value={formData.image} name="filename" />
                                    </div>
                                </div>
                                <div>
                                    <label>Ingredients</label>
                                    {ingredients.map((ingredient, index) => (
                                        <div className="input_container" key={index}>
                                            <input
                                                name="ingredient"
                                                type="text"
                                                value={ingredient}
                                                onChange={(event) => handleIngredientChange(index, event)}
                                            />
                                            {index > 0 && (
                                                <button className="delete" type="button" onClick={() => handleRemoveIngredient(index)}>
                                                    <i className="fa fa-close"></i>
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button className="add" type="button" onClick={handleAddIngredient}>
                                        Add More Ingredients
                                    </button>
                                </div>
                                <div>
                                    <label>Directions</label>
                                    {instructions.map((instruction, index) => (
                                        <div className="input_container" key={index}>
                                            <input
                                                name="instruction"
                                                type="text"
                                                value={instruction}
                                                onChange={(event) => handleInstructionChange(index, event)}
                                            />
                                            {index > 0 && (
                                                <button className="delete" type="button" onClick={() => handleRemoveInstruction(index)}>
                                                    <i className="fa fa-close"></i>
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                    <button className="add" type="button" onClick={handleAddInstruction}>
                                        Add More Directions
                                    </button>
                                </div>
                                <h4>Additional Information</h4>
                                <div>
                                    <label>Servings</label>
                                    <input type="text" name="servings" onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            servings: event.target.value
                                        });
                                    }}
                                        value={formData.servings} />
                                </div>
                                <div>
                                    <label>Preparation Time</label>
                                    <input type="text" name="preperationtime" onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            preperationtime: event.target.value
                                        });
                                    }}
                                        value={formData.preperationtime} />
                                </div>
                                <div>
                                    <label>Cooking Time</label>
                                    <input type="text" name="cookingtime" onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            cookingtime: event.target.value
                                        });
                                    }}
                                        value={formData.cookingtime} />
                                </div>
                                <div>
                                    <button className="submit" type='submit'>Submit Recipe</button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </div>
            {showMessage && renderMessageBox()}
        </div>
    );
}