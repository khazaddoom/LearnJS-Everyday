class Auth {
    constructor() {
        this.isAuthenticated = false;
    }
    login(cb) {
        this.isAuthenticated = true;
        cb();
    }
    logout(cb) {
        this.isAuthenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.isAuthenticated;
    }
}

module.exports.AuthServerInstance = new Auth();