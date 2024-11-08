class Products {

    verifyAllProducts() {
        cy.url().should('contain', 'products')
        cy.get('.title').should('be.visible').and('contain', 'All Products')
    }

    verifySingleProduct() {
        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
            .first()
            .parent()
            .contains('View Product')
            .click()


        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')
    }

    searchProducts() {
        cy.get('#search_product').type('Shirt')
        cy.get('#submit_search').click()
    }

    verifySearchProducts() {
        cy.get('.title').should('be.visible').and('contain', 'Searched Products')

        cy.get('.single-products')
            .should('be.visible')
            .and('have.length.at.least', 1)
    }

    addToCart() {
        cy.contains("Add to cart").click()
    }

    viewCart() {
        cy.contains("View Cart").click()
    }
}

export default new Products()