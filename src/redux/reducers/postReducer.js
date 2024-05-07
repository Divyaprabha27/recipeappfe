const inititalstate = {
    posts: [],
}

const postReducer = (state = inititalstate, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'UNSET_POSTS': 
            return {
                posts: null
            }
        default: 
            return state;
    }
}

export default postReducer;