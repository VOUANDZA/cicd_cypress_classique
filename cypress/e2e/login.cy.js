/// <reference types="cypress" />

describe("fonctionnalité d'authentification", ()=>{

    beforeEach("visiter le lien", ()=>{
        cy.visit("https://www.saucedemo.com/")
    })

    it("login with valid credentials", {tags: '@regression'},()=>{
        cy.log("**************************")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("span.title").should("be.visible")
        cy.url().should("eq","https://www.saucedemo.com/inventory.html")
    })

    it("login with invalid credentials", {tags: ['@regression','@smoke']}, ()=>{
        cy.get("#user-name").type("wrong_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("svg[data-icon='times-circle']").should("be.visible")
        cy.get("h3[data-test=error]").should("be.visible")
    })

    it("login fixture credentials", {tags: ['@fixtures', '@smoke']},()=>{
        cy.fixture("jdd_json_list").then((obj)=>{
            obj.user.forEach( u =>{
                cy.visit("https://www.saucedemo.com/")
                cy.get("#user-name").type(u.name)
                cy.get("#password").type(u.pass)
                cy.get("#login-button").click()
                if(u.result == "ok")
                {
                    cy.get("span.title").should("be.visible")
                    cy.url().should("eq","https://www.saucedemo.com/inventory.html")
                }
                else
                {
                    cy.get("svg[data-icon='times-circle']").should("be.visible")
                    cy.get("h3[data-test=error]").should("be.visible")
                }
            }) 
        })
    })

    it("login with simple fixture", {tags: '@regression'}, ()=>{
        cy.fixture("jdd_json").then( (compte)=>{
            cy.get("#user-name").type(compte.name)
            cy.get("#password").type(compte.pass)
            cy.get("#login-button").click()
            compte.result=="ok"?cy.get("span.title").should("be.visible"):cy.get("h3[data-test=error]").should("be.visible")
        })
    })

    it("test basique sur l'application", {tags: '@smoke'},()=>{
        cy.get("div.login_logo").should("be.visible")
    })
})