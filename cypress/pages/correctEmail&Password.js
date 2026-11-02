class correctEmailAndPassword {

//Locators
logo = 'img[alt="Website for automation practice"]';
SignupLogin = "Signup / Login";
loginEmail = '[data-qa="login-email"]'
loginPassword = '[data-qa="login-password"]'
 loggedInAs = "Logged in as";

//methods
 verifyHomePage() {
    cy.get(this.logo).should("be.visible");
  }
  clickSignupLogin() {
    cy.contains(this.SignupLogin).click();
  }
  fillLoginDetails(email, password) {
    cy.get(this.loginEmail).type(email)
    cy.get(this.loginPassword).type(password)
  }
  clickLoginButton() {
    cy.get('[data-qa="login-button"]').click()
  }
  verifyLoggedInAs() {
    cy.contains(this.loggedInAs).should("be.visible");
  }

} 
export default correctEmailAndPassword;