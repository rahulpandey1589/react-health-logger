class LoginModel{

    constructor(displayName,email,expiresIn,idToken,kind,localId,refreshToken,registered){
        this.displayName = displayName;
        this.email = email;
        this.expiresIn = expiresIn;
        this.idToken = idToken;
        this.kind = kind;
        this.localId = localId;
        this.refreshToken = refreshToken;
        this.registered = registered;
    }
}


class LoginErrorModel{
    constructor()
}