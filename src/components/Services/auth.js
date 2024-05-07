import instance from "./instance";
const authService = {
    signup: async (user) => {
        try {
            console.log('Registering user');
            const res = await instance.authInstance.post('/users/signup', user);
            if(res.data) {
                alert('User Registered Sucessfully');
                return res.data;
            }
            else {
                console.log('Error Registering User');
                return res.data;
            } 
        }
        catch (error) {
            console.log('Error Registering User')
            return error.response.data;
        }
    },
    signin: async (user) => {
        try {
            console.log('Authentication user...');
            const res = await instance.authInstance.post('/users/signin',user);
            console.log(res.data);
            if(res.data) {
                console.log('User authenticated sucessfully');
                sessionStorage.setItem('token', res.data.token);
                sessionStorage.setItem('user', JSON.stringify({
                    username: res.data.username,
                    name: res.data.name
                }))
                return res.data;
            } else {
                console.log('Error authenticating user...');
                return res.data;
            }
        }
        catch(error) {
            console.log('Error authenticating user');
            return error.response.data;
        }
    },

}
export default authService;