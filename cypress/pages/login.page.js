class LoginPage{
    elements = {
        username: () => cy.get("#user-name"),
        password: () => cy.get("#password"),
        loginBtn: () => cy.get("#login-button"),
        error_msg: () => cy.get("h3[data-test=error]")
    }

    /* ACTIONS */
    saisirUsername(un){
        this.elements.username().type(un)
    }

    sasirPassword(pass){
        this.elements.password().type(pass)
    }

    se_connecter()
    {
        this.elements.loginBtn().click()
    }

    getErrorMsg()
    {
        return this.elements.error_msg()
    }

    doLogin(un, pass){
        this.saisirUsername(un)
        this.sasirPassword(pass)
        this.se_connecter()
    }
}

export default new LoginPage();