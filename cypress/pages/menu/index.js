class Menu {
    goToProducts() {
        cy.contains('Products').click()
    }

    goToRegister() {
        cy.contains('Signup').click()
    }

    gotToContact() {
        cy.contains(`Contact us`).click()
    }

    clickToLogout() {
        cy.contains('Logout').click()
    }


}

export default new Menu()