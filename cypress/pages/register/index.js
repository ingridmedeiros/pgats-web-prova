import { faker } from '@faker-js/faker';

class Register {
    fillForm() {

        const timestamp = new Date().getTime()

        const signUpName = 'Tester QA'
        Cypress.env('signUpName', signUpName)

        this.beginRegisterUser(signUpName, `tester-${timestamp}@mail.com`)

        cy.get('input[type=radio]').check('Mrs')
        cy.get('input[type=radio]').eq(1).check()

        cy.get('[type=password]').type('12345', { log: false })

        cy.get('[data-qa="days"]').select(faker.number.int({ min: 1, max: 30}))
        cy.get('[data-qa="months"]').select(faker.number.int({ min: 1, max: 12}))
        cy.get('[data-qa="years"]').select(faker.number.int({ min: 1900, max: 2021}).toString())

        cy.get('input[type=checkbox]#newsletter').check()
        cy.get('input[type=checkbox]#optin').check()

        cy.get('[data-qa="first_name"]').type(faker.person.firstName())
        cy.get('[data-qa="last_name"]').type(faker.person.lastName())
        cy.get('[data-qa="company"]').type(faker.company.name())
        cy.get('[data-qa="address"]').type(faker.location.streetAddress({ useFullAddress: true }))
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type(faker.location.state())
        cy.get('[data-qa="city"]').type(faker.location.city())
        cy.get('[data-qa="zipcode"]').type(faker.location.zipCode())
        cy.get('[data-qa="mobile_number"]').type(faker.phone.number())

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="continue-button"]').click()
    }

    beginRegisterUser(name, email) {
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()
    }

    verifyMessageEmailExist() {
        cy.get('[action="/signup"] p')
            .should('be.visible')
            .and('contain', 'Email Address already exist!')
    }
}

export default new Register()