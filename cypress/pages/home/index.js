import { faker } from '@faker-js/faker';

class Home {
    fillSubscribe() {
        cy.get('#susbscribe_email')
            .scrollIntoView()
            .type(faker.internet.email())

        cy.get('#subscribe').click()
    }

    verifySubscribe() {
        cy.contains('You have been successfully subscribed!').should('be.visible')
    }
}

export default new Home()