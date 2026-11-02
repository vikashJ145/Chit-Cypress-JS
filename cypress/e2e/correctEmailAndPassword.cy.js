import correctEmailAndPassword from "../pages/CorrectEmail&Password"
describe("Login Test", () => {
  it("Login with valid credentials", () => {
    const loginwithvalidcred = new correctEmailAndPassword();
    cy.fixture("testData").then((testData) => {
        cy.visit("/");
        loginwithvalidcred.verifyHomePage();
        loginwithvalidcred.clickSignupLogin();
        loginwithvalidcred.fillLoginDetails(
            testData.loginwithvalidcred.email,
            testData.loginwithvalidcred.password);
        loginwithvalidcred.clickLoginButton();
        loginwithvalidcred.verifyLoggedInAs();

    })
    
})

})