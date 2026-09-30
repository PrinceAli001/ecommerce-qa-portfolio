E-Commerce QA Test Plan

1. Project Overview

This test plan defines the testing approach for an e-commerce application. The purpose is to verify that the main customer journey works correctly and that the application meets its functional and data requirements.

2. Scope

Testing will cover the main e-commerce customer journey, including account registration, login, product search, basket functionality, checkout and order placement.

Testing will include functional, integration, API and database validation to ensure each feature works individually and correctly with the wider application.

Testing will also consider different environments and relevant positive, negative and boundary scenarios.

3. Test Objectives

The objectives of testing are to:

- Verify that users can successfully register and log in.
- Verify valid and invalid authentication scenarios.
- Verify that users can search for products and receive appropriate results.
- Verify that products can be added, updated and removed from the basket.
- Verify that checkout requires valid shipping information.
- Verify that orders can be successfully placed.
- Verify that order information is correctly stored and displayed.
- Validate API requests and responses.
- Validate application data using SQL.
- Identify, document and track defects.
- Ensure important functionality remains stable after changes.

4. Test Approach

The following testing techniques will be used:

Functional Testing

Verify that application features behave according to their requirements.

Positive Testing

Verify that the application works correctly when valid data and expected actions are provided.

Negative Testing

Verify that the application handles invalid, missing or unexpected data appropriately.

Boundary Value Analysis

Test values at and around defined limits.

For example, if a password must contain between 8 and 20 characters, testing will include values below, at and above those boundaries.

Equivalence Partitioning

Group inputs into valid and invalid classes and select representative values from each class.

Integration Testing

Verify that different application components work correctly together, such as the checkout process, API and database.

API Testing

Use Postman to verify API requests, status codes and response data.

Database Validation

Use SQL queries to verify that application data is correctly stored and associated with the correct users and orders.

Regression Testing

Repeat relevant tests after changes to ensure existing functionality has not been negatively affected.

Exploratory Testing

Perform unscripted testing to identify unexpected behaviour or scenarios that may not be covered by predefined test cases.

Automation Testing

Use Playwright to automate stable and repeatable scenarios and provide regression coverage.

5. Test Environment

Testing will be performed using:

- Windows 11
- Chrome
- Edge
- Safari
- Sauce Labs for cross-browser testing
- Postman
- SQL
- Playwright
- Git
- GitHub
- GitHub Actions
- Jira

Test data and accounts will be created specifically for the testing environment.

Sensitive credentials will not be stored directly in the source code.

6. Test Data

Test data will include:

- Valid user registration details
- Invalid email addresses
- Valid and invalid passwords
- Existing and non-existing users
- Existing and non-existing products
- Valid and invalid shipping information
- Different product quantities
- Previously placed orders

Boundary values will be included where requirements define limits.

7. Entry Criteria

Testing can begin when:

- Requirements are sufficiently clear.
- Test scenarios and test cases have been prepared.
- Required test data is available.
- The application build is available.
- The test environment is accessible and sufficiently stable.
- Required testing tools are available.

8. Exit Criteria

Testing can be considered complete when:

- Planned high-risk test scenarios have been executed.
- Critical and high-severity defects have been resolved or formally accepted.
- Agreed test pass criteria have been achieved.
- Key customer journey requirements have been successfully validated.
- Relevant regression testing has been completed.
- Test results and significant defects have been documented.

9. Defect Management

Defects will be documented using Jira-style bug reports.

Each defect will include:

- Bug ID
- Title
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority

Defects will be prioritised according to their impact on the application and business requirements.

10. Deliverables

The testing deliverables include:

- Test plan
- Manual test cases
- Bug reports
- API test cases
- Postman collection
- SQL validation queries
- Playwright automated tests
- Page Object Model
- GitHub Actions workflow
- Test results and documentation

11. Risks

Potential testing risks include:

- Unclear or changing requirements
- Unstable test environments
- Unavailable test data
- Third-party service failures
- Browser compatibility issues
- Changes to the application affecting existing tests
- Flaky automated tests

Risks will be managed through requirement clarification, regression testing, appropriate test coverage and investigation of unstable tests.
