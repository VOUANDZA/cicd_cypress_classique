/// <reference types="cypress" />
import loginPage from "../pages/login.page"

describe("authentification avec POM", ()=>{

    beforeEach("aller a la page d'accueil", ()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("login with valid credentials", ()=>{
        loginPage.saisirUsername("standard_user")
        loginPage.sasirPassword("secret_sauce")
        loginPage.se_connecter()
        cy.url().should("include", '/inventory')
    })

    it("login with wrong credentials", ()=>{
        loginPage.saisirUsername("wrong_user")
        loginPage.sasirPassword("wrong_password")
        loginPage.se_connecter()
        loginPage.getErrorMsg().should("be.visible")
    })

})