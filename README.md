E-Commerce QA Test Suite

Project Overview

A comprehensive QA portfolio project demonstrating software testing skills across manual testing, API testing, SQL database validation, Playwright automation, Git/GitHub, and CI/CD.

The project focuses on testing a typical e-commerce customer journey from account registration through checkout and order placement.

Testing Scope

Testing covers:

- Account registration
- Login and authentication
- Product search
- Shopping basket
- Checkout
- Order placement
- Order history
- API validation
- Database validation
- Automated UI testing

Tools & Technologies

- Manual Testing
- Jira
- Postman
- SQL
- Playwright
- JavaScript
- Git
- GitHub
- GitHub Actions
- Sauce Labs

Test Strategy

Testing includes:

- Functional testing
- Positive and negative testing
- Boundary Value Analysis (BVA)
- Equivalence Partitioning (EP)
- Integration testing
- API testing
- Database validation
- Regression testing
- Exploratory testing
- Automated testing

Manual Testing

The manual testing suite contains 50 test cases covering:

- Registration
- Login
- Product Search
- Shopping Basket
- Checkout
- Orders

Test cases include positive, negative and boundary scenarios.

Defect Reporting

Three example defects have been documented using a structured bug-reporting format:

- B001 — Checkout does not proceed after valid shipping information
- B002 — Basket total displays incorrect calculation
- B003 — Registration accepts a password below the minimum requirement

Each defect includes:

- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority

API Testing

API testing is performed using Postman.

Test scenarios include:

- Successful user registration
- Registration with missing required data
- Retrieving an existing user

The API tests validate HTTP status codes, response data and validation behaviour.

SQL Database Validation

SQL is used to validate application data stored in the database.

Examples include:

- Retrieving users by email
- Retrieving orders for a specific user
- Using "INNER JOIN" to validate relationships between users and orders
- Verifying order products, quantities and totals

Playwright Automation

Playwright is used to automate key e-commerce workflows.

Automation covers areas such as:

- Login
- Invalid login attempts
- Product validation
- Shopping basket
- Checkout
- Logout
- Navigation
- Page Object Model (POM)
- Fixtures
- Authentication using "storageState"
- API requests

Automation focuses on stable and repeatable high-value scenarios rather than duplicating the entire manual test suite.

Git & GitHub

Git and GitHub are used for:

- Version control
- Branching
- Commits
- Pull requests
- Code reviews
- Repository management

CI/CD

GitHub Actions is used to automatically execute Playwright tests when changes are pushed to the repository.

The CI pipeline helps identify automation failures early and supports continuous testing.

Project Structure

ecommerce-qa-portfolio/
├── README.md
├── test-plan/
│   └── test-plan.md
├── manual-testing/
│   ├── test-cases.md
│   └── bug-reports.md
├── api-testing/
│   ├── postman-collection.json
│   └── api-test-cases.md
├── sql/
│   └── validation-queries.sql
├── playwright/
│   ├── tests/
│   ├── pages/
│   ├── fixtures/
│   └── playwright.config.js
└── .github/
    └── workflows/
        └── playwright.yml

Key QA Skills Demonstrated

- Test case design
- Test planning
- Functional testing
- Negative testing
- Boundary Value Analysis
- Equivalence Partitioning
- Bug reporting
- Severity and priority assessment
- API testing
- HTTP status code validation
- SQL database validation
- Playwright automation
- Page Object Model
- Test fixtures
- Authentication handling
- Git/GitHub
- CI/CD
- Risk-based testing
- Regression testing 
