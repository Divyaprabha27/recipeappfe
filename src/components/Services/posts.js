import instance from "./instance";

const getPosts = async () => {
    try {
        console.log('Fetching posts...');
        const response = await instance.protectedInstance.get('/posts/');

        console.log('Response data:', response.data);

        if (response.data && response.data.posts) {
            console.log('Posts:', response.data.posts);
            return response.data.posts;
        } else if (response.data && response.data.error) {
            console.error('Error:', response.data.error);
            throw new Error(response.data.error); // or handle the error in some way
        } else {
            console.error('No posts found in the response.');
            return null;
        }
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const createRecipe = async (recipe) => {
    try {
        console.log('creating recipe')
        const response = await instance.protectedInstance.post('/recipes', recipe)
        console.log('recipe', response.data)
        if(response.data.recipe) {
            return response.data.recipe;
        }
        return null;
    }catch(error) {
        console.log('Error creating post', error)
    }
}

export default {
    getPosts,
};