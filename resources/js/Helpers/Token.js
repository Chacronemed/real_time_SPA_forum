class Token{

    isValid(Token) {
        const payload = this.payload(Token);
        if (payload) {
            return payload.iss === "http://127.0.0.1:8000/api/auth/login";
        }
        return false;
    }
    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default new Token()
