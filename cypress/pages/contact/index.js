import { faker } from '@faker-js/faker';

class Contact {
    fillForm() {
        cy.get('[data-qa="name"]').type(faker.person.fullName())
        cy.get('[data-qa="email"]').type(faker.internet.email())
        cy.get('[data-qa="subject"]').type(faker.lorem.paragraph({ min: 1, max: 3 }))
        cy.get('[data-qa="message"]').type(faker.lorem.paragraphs({ min: 1, max: 3 }))
    
        cy.fixture('example.json').as('arquivo')
        cy.get('input[name="upload_file"]').selectFile('@arquivo')
    
        cy.get('[data-qa="submit-button"]').click()
    }

    verifyContactSubmitted() {
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
    }
}

export default new Contact();