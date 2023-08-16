class AppStorage{
    storeToken(token){
        localStorage.setItem('token',token)
    }

    storeUser(user){
        localStorage.setItem('user',user)
    }

    store(user,token){
        this.storeUser(user)
        this.storeToken(token)
    }

    clear(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
    }

    getToken(){
        return localStorage.getItem('token')
    }

    getUser(){
        return localStorage.getItem('user')
    }

}

export default new AppStorage()