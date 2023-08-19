import axios from "axios";
import Token from "./Token.js";
import AppStorage from "./AppStorage.js";
import appStorage from "./AppStorage.js";
import router from "../Router/router.js";
class User {

    signUp(formData) {
        return axios.post('/api/auth/signup', formData)  // Assuming you have an API endpoint for user registration
            .then(res => {
                // Handle response after sign up
                this.responseAfterLogin(res);
                return res
            });
    }
    login(formData) {
        return axios.post('/api/auth/login', formData)
            .then(res => {
                this.responseAfterLogin(res);
                return res;
            })
            .catch(error => {
                // Handle login error, e.g., show error message to the user
                console.error("Login error:", error);
                throw error;
            });
    }

    responseAfterLogin(res) {
        const username = res.data.user;
        const access_token = res.data.access_token;
        if (Token.isValid(access_token)) {
            appStorage.store(username, access_token);
            router.push('/forum'); // Use Vue Router to navigate
        }
    }

    hasToken(){
        const storedToken = appStorage.getToken()
        if(storedToken){
            return Token.isValid(storedToken)
        }
        return false
    }

    LoggedIn(){
        console.log("the user is" , this.hasToken())
        return this.hasToken()
    }

    Logout(){
        appStorage.clear()
        window.location = '/login'
    }

    name(){
        if(this.LoggedIn()){
            return AppStorage.getUser()
        }
    }

    id(){
        if(this.LoggedIn()){
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
    }

}


export default new User();

