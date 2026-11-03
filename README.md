# Chit-Cypress-JS

## Cypress Automation Testing Framework

A JavaScript-based automation testing framework built using **Cypress** and the **Page Object Model (POM)** design pattern.

This framework is designed to automate test cases for the [Automation Exercise](https://automationexercise.com/) website. It includes reusable methods, test data management, and automated test scenarios for different application modules.

---

## 📌 Project Overview

The purpose of this project is to automate functional test cases using Cypress with JavaScript.

The framework follows a modular structure to maintain reusable methods, locators, test data, and test scripts separately.

### Key Features

- Cypress automation using JavaScript
- Page Object Model (POM) architecture
- Reusable methods for common actions
- Test data management using JSON fixtures
- Automated user registration and account deletion
- Positive and negative login testing
- Logout functionality testing
- Product page and test cases page validation
- Test case tagging for execution
- Cypress screenshots and reports support

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Programming language |
| Cypress | Automation testing framework |
| Node.js | JavaScript runtime |
| npm | Package management |
| VS Code | Code editor |
| Git | Version control |
| GitHub | Source code repository |

---

## 📂 Project Structure

```text
Chit-Cypress-JS/
│
├── cypress/
│   │
│   ├── e2e/
│   │   ├── automationExercise.cy.js
│   │   ├── correctEmailAndPassword.cy.js
│   │   └── registerUser.cy.js
│   │
│   ├── fixtures/
│   │   └── testData.json
│   │
│   ├── locators/
│   │
│   ├── pages/
│   │   ├── correctEmailAndPassword.js
│   │   ├── methods.js
│   │   └── registerUser.js
│   │
│   ├── reports/
│   │
│   ├── screenshots/
│   │
│   └── support/
│
├── .gitignore
├── README.md
├── cypress.config.js
├── package.json
└── package-lock.json
```

### Folder Description

**cypress/e2e/**

Contains automation test scripts for different application modules.

**cypress/fixtures/**

Contains external test data in JSON format, including user registration details and login credentials.

**cypress/locators/**

Contains element locators used to identify web elements.

**cypress/pages/**

Contains reusable methods and page-specific functionality following the Page Object Model.

**cypress/reports/**

Stores generated automation test reports, depending on the configured reporting tool.

**cypress/screenshots/**

Stores screenshots captured during test execution, depending on the Cypress configuration.

**cypress/support/**

Contains Cypress support files, reusable commands, and test configuration.

---

## ⚙️ Prerequisites

Before running the framework, make sure the following are installed:

- Node.js
- npm
- Visual Studio Code
- Git
- Google Chrome

---

## 🚀 Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vikash145/Chit-Cypress-JS.git
```

### 2. Navigate to the Project Directory

```bash
cd Chit-Cypress-JS
```

### 3. Install Dependencies

```bash
npm install
```

This command installs the dependencies defined in `package.json`.

### 4. Open Cypress

```bash
npx cypress open
```

Select the appropriate testing type and browser to execute the automation test cases.

---

## ▶️ Test Execution

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run All Test Cases in Headless Mode

```bash
npx cypress run
```

### Run Tests in Chrome

```bash
npx cypress run --browser chrome
```

### Run Tests in Headed Mode

```bash
npx cypress run --headed
```

### Run a Specific Test File

```bash
npx cypress run --spec "cypress/e2e/automationExercise.cy.js"
```

### Run a Specific Test File in Chrome

```bash
npx cypress run --browser chrome --spec "cypress/e2e/automationExercise.cy.js"
```

### Run a Specific Test Case Using Tags

The framework uses test tags to identify individual test cases.

Example:

```javascript
it('TC001 - Register User and delete account', { tags: '@TC001' }, () => {
    // Test steps
});
```

If the Cypress grep plugin is configured:

```bash
npx cypress run --env grepTags=@TC001
```

**Note:** Tag-based execution requires the appropriate Cypress grep plugin and configuration. The test tags alone do not enable filtering.

---

## 🧪 Automated Test Cases

The following test scenarios are implemented in the `automationExercise.cy.js` test file.

| Test Case ID | Test Scenario | Test Type |
|---|---|---|
| TC001 | Register User and Delete Account | Positive |
| TC002 | Login User with Correct Email and Password | Positive |
| TC003 | Login User with Invalid Email and Password | Negative |
| TC004 | Logout User | Functional |
| TC005 | Register User with Existing Email | Negative |
| TC007 | Verify Test Cases Page | Functional |
| TC008 | Verify All Products and Product Details Page | Functional |

### TC001 - Register User and Delete Account

- Verify the homepage
- Navigate to Signup/Login
- Verify New User Signup
- Enter user registration details
- Fill account information
- Select newsletter and special offers
- Fill address details
- Create account
- Verify account creation
- Verify logged-in user
- Delete account
- Verify account deletion

### TC002 - Login User with Correct Email and Password

- Verify the homepage
- Navigate to Signup/Login
- Enter valid email and password
- Click Login
- Verify successful login

### TC003 - Login User with Invalid Email and Password

- Verify the homepage
- Navigate to Signup/Login
- Enter invalid email and password
- Click Login
- Verify the login error message

### TC004 - Logout User

- Verify the homepage
- Navigate to Signup/Login
- Enter valid login credentials
- Verify successful login
- Click Logout
- Verify the homepage

### TC005 - Register User with Existing Email

- Verify the homepage
- Navigate to Signup/Login
- Verify New User Signup
- Enter an already registered email address
- Click Signup
- Verify the existing email error message

### TC007 - Verify Test Cases Page

- Verify the homepage
- Navigate to the Test Cases page
- Verify the Test Cases page

### TC008 - Verify All Products and Product Details Page

- Verify the homepage
- Navigate to Products
- Verify the All Products page

---

## 🏗️ Framework Architecture

### Page Object Model (POM)

The framework follows the Page Object Model design pattern.

Reusable methods are maintained separately from test scripts to improve maintainability and reduce code duplication.

Example:

```javascript
import Methods from '../pages/methods';
```

The test scripts call reusable methods from the `Methods` class.

Example:

```javascript
Methods.verifyHomePage();
Methods.clickSignupLogin();
Methods.verifyNewUserSignup();
```

### Test Data Management

Test data is maintained in:

```text
cypress/fixtures/testData.json
```

The fixture is loaded using:

```javascript
cy.fixture('testData').then((data) => {
    testData = data;
});
```

Example usage:

```javascript
Methods.fillLoginDetails(
    testData.loginwithvalidcred.email,
    testData.loginwithvalidcred.password
);
```

This approach separates test data from automation logic.

---

## 🌐 Application Under Test

**Website:** [Automation Exercise](https://automationexercise.com/)

The framework currently focuses on:

- User Registration
- Login
- Logout
- Account Deletion
- Test Cases Page
- Products Page

---

## 📊 Test Reports

The framework contains a `reports` directory for automation test reports.

The generated report depends on the reporting tool configured in the project.

Cypress execution results can also be reviewed in the Cypress Test Runner.

---

## 📸 Screenshots

The framework contains a `screenshots` directory for screenshots captured during test execution.

Screenshots can help investigate failed test cases and identify application issues.

---

## 🔧 Configuration

The Cypress configuration is maintained in:

```text
cypress.config.js
```

The project dependencies and npm scripts are maintained in:

```text
package.json
```

The base URL and other execution settings should be configured according to the project requirements.

---

## 👩‍💻 Author

**Vikash**

GitHub Repository: [Chit-Cypress-JS](https://github.com/vikash145/Chit-Cypress-JS)

---

## 📄 License

This project is intended for learning, practice, and automation testing purposes.

