class Login {
    fillLogin(usuario, senha) {
        cy.get('[data-qa="login-email"]').type(usuario)
        cy.get('[data-qa="login-password"]').type(senha)

        cy.get('[data-qa="login-button"]').click()
    }

    verifyMessageEmailAndPasswordIncorret() {
        cy.get('[action="/login"] > p').should('contain', 'Your email or password is incorrect!')
    }

    verifyUserLogged() {
        cy.get('i.fa-user').parent().should('contain', 'Tester QA')
    }

    verifyUserLogout() {
        cy.url().should('contain', 'login')
        cy.contains("Login to your account").should("be.visible")
    }


}

export default new Login();