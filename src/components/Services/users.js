import instance from "./instance";

const getUser = async () => {
    try {
        console.log('fetching user...');
        const response = await instance.protectedInstance.get('/users/getUser');

        if(response.data.user) {
            return response.data.user;
        }
        return null;
    } catch (error) {
        console.log('Error fetching user: ', error);
    }
}

export default {
    getUser,
};