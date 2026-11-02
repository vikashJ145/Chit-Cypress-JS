import registerUser from "../pages/registerUser";

describe("Resgister User test", () => {
  it("Register user successfully", () => {
    const register = new registerUser();
    cy.fixture("testData").then((testData) => {
      cy.visit("/");
      register.verifyHomePage();
      register.clickSignupLogin();
      register.verifyNewUserSignup();
      register.enterSignupDetails(
        testData.register.name,
        testData.register.email,
      );
      register.clickSignupButton();
      register.verifyEnterAccountInformation();
      register.fillAccountInformation(
        testData.register.name,
        testData.register.email,
        testData.register.password,
        testData.register.day,
        testData.register.month,
        testData.register.year,
      );
      register.selectNewsletter();
      register.selectSpecialOffers();
      register.fillAddressDetails(
        testData.register.firstName,
        testData.register.lastName,
        testData.register.company,
        testData.register.address,
        testData.register.address2,
        testData.register.country,
        testData.register.state,
        testData.register.city,
        testData.register.zipcode,
        testData.register.mobileNumber,
      );
      register.clickCreateAccountButton();
      register.verifyAccountCreated();
      register.clickContinueButton();
      register.verifyLoggedInAs();
      register.clickDeleteAccountButton();

      register.verifyAccountDeleted();
      register.clickContinueAfterDelete();
    });
  });
});
