class registerUser {
  //locators
  logo = 'img[alt="Website for automation practice"]';
  SignupLogin = "Signup / Login";
  SignupName = '[data-qa="signup-name"]';
  SignupEmail = '[data-qa="signup-email"]';
  signupButton = '[data-qa="signup-button"]';
  title = "#id_gender2";
  name = '[data-qa="name"]';
  email = '[data-qa="email"]';
  password = '[data-qa="password"]';
  day = '[data-qa="days"]';
  month = '[data-qa="months"]';
  year = '[data-qa="years"]';
  newsletter = "#newsletter";
  specialOffers = "#optin";
  firstName = '[data-qa="first_name"]';
  lastName = '[data-qa="last_name"]';
  company = '[data-qa="company"]';
  address = '[data-qa="address"]';
  address2 = '[data-qa="address2"]';
  country = '[data-qa="country"]';
  state = '[data-qa="state"]';
  city = '[data-qa="city"]';
  zipcode = '[data-qa="zipcode"]';
  mobileNumber = '[data-qa="mobile_number"]';
  createAccountButton = '[data-qa="create-account"]';
  AccountCreated = "Account Created!";
  continueButton = '[data-qa="continue-button"]';
  loggedInAs = "Logged in as";
  deleteAccountButton = "Delete Account";
  AccountDeleted = "Account Deleted!";
  continueAfterDelete = "Continue";
  accountInformation = "Enter Account Information";

  //methods
  verifyHomePage() {
    cy.get(this.logo).should("be.visible");
  }
  clickSignupLogin() {
    cy.contains(this.SignupLogin).click();
  }
  verifyNewUserSignup() {
    cy.contains("New User Signup!").should("be.visible");
  }
  enterSignupDetails(name, email) {
    cy.get(this.SignupName).type(name);
    cy.get(this.SignupEmail).type(email);
  }
  clickSignupButton() {
    cy.get(this.signupButton).click();
  }
  verifyEnterAccountInformation() {
    cy.contains(this.accountInformation).should("be.visible");
  }
  fillAccountInformation(name, email, password, day, month, year) {
    cy.get(this.title).check();
    // cy.get(this.name).type(name);
    // cy.get(this.email).type(email);
    cy.get(this.password).type(password);
    cy.get(this.day).select(day);
    cy.get(this.month).select(month);
    cy.get(this.year).select(year);
  }
  selectNewsletter() {
    cy.get(this.newsletter).check();
  }
  selectSpecialOffers() {
    cy.get(this.specialOffers).check();
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
    mobileNumber,
  ) {
    cy.get(this.firstName).type(firstName);
    cy.get(this.lastName).type(lastName);
    cy.get(this.company).type(company);
    cy.get(this.address).type(address);
    cy.get(this.address2).type(address2);
    cy.get(this.country).select(country);
    cy.get(this.state).type(state);
    cy.get(this.city).type(city);
    cy.get(this.zipcode).type(zipcode);
    cy.get(this.mobileNumber).type(mobileNumber);
  }
  clickCreateAccountButton() {
    cy.get(this.createAccountButton).click();
  }
  verifyAccountCreated() {
    cy.contains(this.AccountCreated).should("be.visible");
  }
  clickContinueButton() {
    cy.get(this.continueButton).click();
  }
  verifyLoggedInAs() {
    cy.contains(this.loggedInAs).should("be.visible");
  }
  clickDeleteAccountButton() {
    cy.contains(this.deleteAccountButton).click();
  }
  verifyAccountDeleted() {
    cy.contains(this.AccountDeleted).should("be.visible");
  }
  clickContinueAfterDelete() {
    cy.contains(this.continueAfterDelete).click();
  }
}
export default registerUser;