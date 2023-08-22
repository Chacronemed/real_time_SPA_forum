import axios from "axios";
import Token from "./Token.js";
import AppStorage from "./AppStorage.js";
import appStorage from "./AppStorage.js";
import router from "../Router/router.js";
class User {
    signUp(formData) {
        return axios.post('/api/auth/signup', formData)
            .then(res => {
                this.responseAfterLogin(res);
                return res;
            });
    }

    login(formData, redirect = '/forum') {
        return axios.post('/api/auth/login', formData)
            .then(res => {
                this.responseAfterLogin(res, redirect);
                return res;
            })
            .catch(error => {
                console.error("Login error:", error);
                throw error;
            });
    }

    responseAfterLogin(res, redirect) {
        const username = res.data.user;
        const access_token = res.data.access_token;
        if (Token.isValid(access_token)) {
            appStorage.store(username, access_token);
            router.push(redirect); // Use the provided redirect parameter
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

    own(id){
        return this.id() == id
    }
}


export default new User();

