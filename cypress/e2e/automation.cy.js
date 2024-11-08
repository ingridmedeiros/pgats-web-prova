import register from "../pages/register"
import menu from "../pages/menu"
import login from "../pages/login"
import contact from "../pages/contact"
import products from "../pages/products"
import home from "../pages/home"
import checkout from "../pages/checkout"

describe('Automation Exercise', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it('Test Case 1: Register User', () => {
        menu.goToRegister()
        register.fillForm()
        login.verifyUserLogged()
    })

    it('Test Case 2: Login User with correct email and password', () => {
        menu.goToRegister()
        login.fillLogin('tester-1721346302730@mail.com', '12345')
        login.verifyUserLogged()
    })

    it('Test Case 3: Login User with incorrect email and password', () => {
        menu.goToRegister()
        login.fillLogin('tester-1721346302730@mail.com', '54321')
        login.verifyMessageEmailAndPasswordIncorret()

    })

    it('Test Case 4: Logout User', () => {
        menu.goToRegister()
        login.fillLogin('tester-1721346302730@mail.com', '12345')
        login.verifyUserLogged()
        menu.clickToLogout()
        login.verifyUserLogout()
    })


    it('Test Case 5: Register User with existing email', () => {
        menu.goToRegister()
        register.beginRegisterUser('Tester QA', 'tester-1721346302730@mail.com')
        register.verifyMessageEmailExist()
    })

    it('Test Case 6: Contact Us Form', () => {
        menu.gotToContact()
        contact.fillForm()
        contact.verifyContactSubmitted()
    })

    it('Test Case 8: Verify All Products and product detail page', () => {
        menu.goToProducts()
        products.verifyAllProducts()
        products.verifySingleProduct()
    })


    it('Test Case 9: Search Product', () => {
        menu.goToProducts()
        products.verifyAllProducts()
        products.searchProducts()
        products.verifySearchProducts()

    })

    it('Test Case 10: Verify Subscription in home page', () => {
        home.fillSubscribe()
        home.verifySubscribe()
    })

    it('Test Case 15: Place Order: Register before Checkout', () => {
        menu.goToRegister()
        register.fillForm()
        products.addToCart()
        products.viewCart()
        checkout.fillForm()
    })
})