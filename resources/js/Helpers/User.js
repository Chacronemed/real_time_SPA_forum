import axios from "axios";
import Token from "./Token.js";
import AppStorage from "./AppStorage.js";
import appStorage from "./AppStorage.js";
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
            .then(res=>{
                this.responseAfterLogin(res)
                return res
            }
            // {
            //     Token.payload(res.data.access_token)
            //     return res;
            // }
            )
            ; // Return the Promise, not immediately log
    }

    responseAfterLogin(res){
            const username =res.data.user
            const access_token = res.data.access_token
            if(Token.isValid(access_token)){
                appStorage.store(username,access_token)
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

