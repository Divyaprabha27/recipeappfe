import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userServices from '../Services/users';
import postServices from '../Services/posts';
import './dashboard.css';

function Dashboard() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [postsFormData, setPostsFormData] = useState([]);

    useEffect(() => {
        // get the user from the session storage
        const user = sessionStorage.getItem('user');

        console.log(`user `, user);

        if (user) {
            // dispatch the user object to the redux store
            dispatch({
                type: 'SET_USER',
                payload: JSON.parse(user)
            });
        }

        // if the user is not in the session storage, redirect to the login page
        if (!user) {
            navigate('/signin');
        }
    }, []);

    useEffect(() => {

        // get the token from the session storage and call the backend to get the user using the token
        userServices.getUser()
            .then(user => {
                console.log(user);

                // create a user object to store in the redux store
                const userObject = {
                    username: user.username,
                    name: user.name,
                }

                // dispatch the user object to the redux store
                dispatch({
                    type: 'SET_USER',
                    payload: userObject
                });
            })
            .catch(error => {
                console.log(error);
            });

        // get the posts from the backend and store it in the redux store
        postServices.getPosts()
            .then(posts => {
                console.log(posts);

                // dispatch the posts object to the redux store
                dispatch({
                    type: 'SET_POSTS',
                    payload: posts
                });
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    const user = useSelector(state => state.user);
    const posts = useSelector(state => state.posts);

    console.log(user.user);

    const handleLogout = () => {

        // remove the user from the session storage
        sessionStorage.removeItem('user');

        // remove the user from the redux store
        dispatch({
            type: 'UNSET_USER',
        });

        // remove the token from the session storage
        sessionStorage.removeItem('token');

        // redirect to the login page
        navigate('/signin');
    }
    return (
        <div className='dashboard'>
            {
                user.user &&
                <div className='profile'>
                    <div className='profile-bg'>
                        <h3>{user.user.name} Dashboard</h3>
                    </div>
                    <div className='feed'>
                        <div className='container'>
                            <h3>Your Posts Feed</h3>
                            <ul>
                                {
                                    posts.posts && posts.posts.map(post => {
                                        return (
                                            <li key={post._id}>
                                                <div>
                                                    <img src={post.imgthumb} className='img-fluid' alt={post.title} />
                                                    <h5>{post.title}</h5>
                                                    <p>Category: {post.category}</p>
                                                </div>
                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Dashboard;