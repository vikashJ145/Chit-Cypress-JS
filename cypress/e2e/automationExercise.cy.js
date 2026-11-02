import Methods from '../pages/methods';

describe('Automation Exercise Test Cases', () => {

    let testData;

    before(() => {
        cy.fixture('testData').then((data) => {
            testData = data;
        });
    });
    it('TC001 - Register User and delete account', { tags: '@TC001' }, () => {

        cy.visit('/');
        Methods.verifyHomePage();
        Methods.clickSignupLogin();
        Methods.verifyNewUserSignup();
        Methods.enterSignupDetails(
            testData.registerUser.name,
            testData.registerUser.email
        );
        Methods.clickSignupButton()
        Methods.verifyEnterAccountInformation()
        Methods.fillAccountInformation(
            testData.registerUser.name,
            testData.registerUser.email,
            testData.registerUser.password,
            testData.registerUser.day,
            testData.registerUser.month,
            testData.registerUser.year
        );
        Methods.selectNewsletter();
        Methods.selectSpecialOffers();
        Methods.fillAddressDetails(
            testData.registerUser.firstName,
            testData.registerUser.lastName,
            testData.registerUser.company,
            testData.registerUser.address,
            testData.registerUser.address2,
            testData.registerUser.country,
            testData.registerUser.state,
            testData.registerUser.city,
            testData.registerUser.zipcode,
            testData.registerUser.mobileNumber
        );
        Methods.clickCreateAccountButton();
        Methods.verifyAccountCreated();
        Methods.clickContinueButton();
        Methods.verifyLoggedInAs();
        Methods.clickDeleteAccountButton();
        Methods.verifyAccountDeleted();
        Methods.clickContinueAfterDelete();

    });
    it(
        'TC002 - Login User with correct email and password',
        { tags: '@TC002' },
        () => {
            cy.visit('/');
            Methods.verifyHomePage();
            Methods.clickSignupLogin();
            Methods.fillLoginDetails(
                testData.loginwithvalidcred.email,
                testData.loginwithvalidcred.password
            );
            Methods.clickLoginButton();
            Methods.verifyLoggedInAs();

        }
    )
   it(
        'TC003 - Login User with invalid email and password',
        { tags: '@TC003' },
        () => {
            cy.visit('/');
            Methods.verifyHomePage();
            Methods.clickSignupLogin();
            Methods.fillLoginDetails(
                testData.invalidLogin.email,
                testData.invalidLogin.password
            );
            Methods.clickLoginButton();
            Methods.verifyLoginErrorMessage();

        }
    )
    it(
        'TC004 - Logout User',
        { tags: '@TC004' },
        () => {
            cy.visit('/')
            Methods.verifyHomePage()
            Methods.clickSignupLogin()
            Methods.fillLoginDetails(
                testData.loginwithvalidcred.email,
                testData.loginwithvalidcred.password
            );
            Methods.clickLoginButton();
            Methods.verifyLoggedInAs();
            Methods.clickLogoutButton();
            Methods.verifyHomePage();
        }
    )
    it(
        'Register User with existing email',
        { tags: '@TC005'},
        () => {
            cy.visit('/')
            Methods.verifyHomePage()
            Methods.clickSignupLogin()
            Methods.verifyNewUserSignup()
            Methods.enterSignupDetails(
            testData.loginwithvalidcred.name,
            testData.loginwithvalidcred.email,
        )
        Methods.clickSignupButton()
        Methods.verifyAlreadyExistError()
        }
    )
    // it(
    //     'TC006 - Contact Us Form',
    //     { tags: '@TC006' },
    //     () => {
    //         cy.visit('/')
    //         Methods.verifyHomePage()
    //         Methods.ClickContactUs()
    //         Methods.verifyGetInTouch()
    //         Methods.fillContactUsForm(

    //         )

    //     }
    // )
    it( 'TC007 - Verify Test Cases Page',
        { tags: '@TC007' },
        () => {
            cy.visit('/')
            Methods.verifyHomePage()
            Methods.clickOnTestcases()
            Methods.verifyTestCasesPage()

        })
    it( 'TC008 - Verify All Products and Product Details Page',
        { tags: '@TC008' },
        () => {
            cy.visit('/')
            Methods.verifyHomePage()
            Methods.clickOnProducts()
            Methods.verifyAllProductsPage()
        }
    )

});