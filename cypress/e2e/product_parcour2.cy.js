/// <reference types="cypress" />

describe("fonctionnalité d'authentification", ()=> {

    beforeEach("visiter le lien", () =>{
        cy.visit("https://www.saucedemo.com/") // comme on peut dire visiter ce site
        cy.log("tttttttttttttttttttttttttttttttttttttttttttt")
    })
    

    it("Ajout au panier parcour 2", ()=>{
        // ajouter le dernier produit au panier puis le vérifié si c'est bien lui
        // ajouter le premier 4 au panier 
        cy.get(".inventory_item").eq(4).within(() => {
            cy.contains("Add to cart").click();
            cy.contains("Remove").should("be.visible");
        });

        // aller au panier
        cy.get("span[data-test='shopping-cart-badge']").should("be.visible").and("have.text", "1");
        cy.get("a[data-test='shopping-cart-link']").click()
        // vérifier que c'est bien le bon produit
        cy.get(".cart_item").should("have.length", 1)
        let a 
        cy.get('.inventory_item_name').eq(0).then(function($prodNameCard) {
            a =$prodNameCard.text();
        })
        cy.log(a)
        var product_name 
        cy.get(".inventory_item_name").eq(0).invoke('text').then(el => {product_name = el})
        cy.log(product_name)
        cy.get(".inventory_item_name").eq(0).should("have.text", product_name)
        // revenir à la page des produits
        cy.get("button[data-test='continue-shopping']").click()
        // Ajouter un deuxième produit au panier
        cy.get(".inventory_item").eq(5).within(() => {
            cy.contains("Add to cart").click();
            cy.contains("Remove").should("be.visible");
        });
        // aller au panier
        cy.get("span[data-test='shopping-cart-badge']").should("be.visible").and("have.text", "2");
        cy.get("a[data-test='shopping-cart-link']").click()
        // vérifier que c'est bien les bons produits
        cy.get(".cart_item").should("have.length", 2)
        let product_name2
         cy.get(".inventory_item_name").eq(1).then(el => product_name2 = el.text())
         
        cy.get(".inventory_item_name").eq(0).should("have.text", product_name)
        cy.get(".inventory_item_name").eq(1).should("have.text", product_name2)

        // Supprimer les deux produits du panier
    })   
})