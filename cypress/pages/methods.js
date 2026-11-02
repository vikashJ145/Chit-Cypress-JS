 import locators from '../locators/locators';
class Methods {
    verifyHomePage() {
        cy.get(locators.logo).should('be.visible');
    }
   clickSignupLogin() {
    cy.log(locators.SignupLogin);
    cy.contains(locators.SignupLogin).click();
}
    verifyNewUserSignup() {
        cy.contains('New User Signup!').should('be.visible');
    }
    enterSignupDetails(name, email) {
        cy.get(locators.SignupName).type(name);
        cy.get(locators.SignupEmail).type(email);
    }
    clickSignupButton() {
        cy.get(locators.signupButton).click();
    }
    verifyEnterAccountInformation() {
        cy.contains(locators.accountInformation).should('be.visible');
    }
    fillAccountInformation(name, email, password, day, month, year) {
        cy.get(locators.title).check();
        cy.get(locators.password).type(password);
        cy.get(locators.day).select(day);
        cy.get(locators.month).select(month);
        cy.get(locators.year).select(year);
    }
    selectNewsletter() {
        cy.get(locators.newsletter).check();
    }
    selectSpecialOffers() {
        cy.get(locators.specialOffers).check();
    }
    fillAddressDetails(
        firstName,
        lastName,
        company,
        address,
        address2,
        country,
        state,
        city,
        zipcode,
        mobileNumber
    ) {
        cy.get(locators.firstName).type(firstName);
        cy.get(locators.lastName).type(lastName);
        cy.get(locators.company).type(company);
        cy.get(locators.address).type(address);
        cy.get(locators.address2).type(address2);
        cy.get(locators.country).select(country);
        cy.get(locators.state).type(state);
        cy.get(locators.city).type(city);
        cy.get(locators.zipcode).type(zipcode);
        cy.get(locators.mobileNumber).type(mobileNumber);
    }
    clickCreateAccountButton() {
        cy.get(locators.createAccountButton).click();
    }
    verifyAccountCreated() {
        cy.contains(locators.accountCreated).should('be.visible');
    }
    clickContinueButton() {
        cy.get(locators.continueButton).click();
    }
    verifyLoggedInAs() {
        cy.contains(locators.loggedInAs).should('be.visible');
    }
    clickDeleteAccountButton() {
        cy.contains(locators.deleteAccountButton).click();
    }
    verifyAccountDeleted() {
        cy.contains(locators.AccountDeleted).should('be.visible');
    }
    clickContinueAfterDelete() {
        cy.contains(locators.continueAfterDelete).click();
    }
    fillLoginDetails(email, password) {
    cy.get(locators.loginEmail).type(email);
    cy.get(locators.loginPassword).type(password);
    }
    clickLoginButton() {
    cy.get('[data-qa="login-button"]').click();
    }
    clickLoginButton() {
    cy.get(locators.loginButton).click();
    }
    verifyLoginErrorMessage() {
        cy.contains(locators.loginErrorMessage).should('be.visible');
    }
     verifyAlreadyExistError() {
        cy.contains(locators.alreadyExistError).should('be.visible');
    }
    clickLogoutButton(){
        cy.contains(locators.logoutButton).click()
    }
    ClickContactUs(){
        cy.contains(locators.contactUs).click()
    }
    verifyGetInTouch(){
        cy.contains('Get In Touch').should('be.visible');
    }
    fillContactUsForm(name, email, subject, message) {

    }
    clickOnTestcases(){
        cy.contains(' Test Cases').click()

    }
    verifyTestCasesPage(){
        cy.contains('Test Cases').should('be.visible')
    }
    clickOnProducts(){
        cy.contains(' Products').click()
    }
    verifyAllProductsPage(){
        cy.contains('All Products').should('be.visible')
    }
    
    

}

 export default new Methods();