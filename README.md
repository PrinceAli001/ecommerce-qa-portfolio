# E-Commerce QA Test Suite

A comprehensive QA portfolio project demonstrating manual testing, API testing, SQL validation, Playwright automation, defect reporting, Git/GitHub, and CI/CD.

## Project Overview

This project simulates the QA process for an e-commerce application.

The goal is to demonstrate how I would approach software quality from multiple testing levels, from planning and manual testing through to automated testing and continuous integration.

## Testing Scope

The project covers:

- User registration
- User login
- Product search
- Shopping basket
- Checkout
- Order history
- API validation
- Database validation
- Automated UI testing
- Regression testing
- Defect reporting

## Tools & Technologies

- **Manual Testing**
- **Playwright**
- **JavaScript**
- **Postman**
- **SQL**
- **Git**
- **GitHub**
- **GitHub Actions**
- **Jira-style defect reporting**

## Test Strategy

Testing was approached using a combination of:

- Functional testing
- Positive testing
- Negative testing
- Boundary/value validation
- Regression testing
- API testing
- Database validation
- UI automation

The test suite contains **50 manual test cases** covering the main e-commerce workflows.

## Manual Testing

Manual test cases are documented in:

`manual-testing/test-cases.md`

Coverage includes:

- Registration
- Login
- Product search
- Basket
- Checkout
- Orders

### Test Case Format

Each test case includes:

- Test Case ID
- Title
- Preconditions
- Test Steps
- Expected Results

## Defect Reporting

Three example defects have been documented in:

`manual-testing/bug-reports.md`

Each defect includes:

- Bug title
- Environment
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority

## API Testing

API test cases are documented in:

`api-testing/api-test-cases.md`

Testing includes:

- Successful registration
- Invalid registration requests
- User retrieval
- HTTP status code validation
- Response validation

Postman requests are stored in:

`api-testing/postman-collection.json`

## SQL Database Validation

SQL validation queries are stored in:

`sql/validation-queries.sql`

The queries demonstrate:

- `SELECT`
- `WHERE`
- Filtering
- User/order validation
- `INNER JOIN`

Example validation:

```sql
SELECT Orders.Product, Orders.Quantity, Orders.Total
FROM Users
INNER JOIN Orders
ON Users.UserID = Orders.UserID
WHERE Users.UserID = 123;
