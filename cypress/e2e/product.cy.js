/// <reference types="cypress" />

describe("fonctionnalité de gestion de produit", ()=>{
    beforeEach("authentification", ()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
    })

    it("ajouter un produit", ()=>{})

    it("supprimer un produit", ()=>{})
})

