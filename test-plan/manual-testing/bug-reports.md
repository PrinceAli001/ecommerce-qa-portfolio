[bug-reports.md](https://github.com/user-attachments/files/32874110/bug-reports.md)
# Bug Reports

## B001 — Checkout does not proceed after valid shipping information

**Environment:** Windows 11, Chrome 151, SauceDemo e-commerce app

**Precondition:** User is logged in and has at least one product in the basket.

**Steps to Reproduce:**
1. Proceed to checkout.
2. Enter a valid first name.
3. Enter a valid last name.
4. Enter a valid postcode.
5. Click **Continue**.

**Expected Result:** The checkout should proceed to the next stage according to the requirement.

**Actual Result:** The user remains on the shipping information screen. No error message is displayed and there is no progress.

**Severity:** High

**Priority:** High


## B002 — Basket total displays incorrect calculation

**Environment:** Windows 11, Chrome 151, SauceDemo e-commerce app

**Precondition:** User is logged in and the product is available.

**Steps to Reproduce:**
1. Search for the Samsung Galaxy S25.
2. Add the Samsung Galaxy S25 to the basket.
3. Add the same product to the basket a second time.
4. Open the basket.

**Expected Result:** The basket total should display **£1,798 (£899 × 2)**.

**Actual Result:** The basket total displays **£899** instead of £1,798.

**Severity:** Medium

**Priority:** Medium


## B003 — Registration accepts a password below the minimum requirement

**Environment:** Windows 11, Chrome 151, SauceDemo e-commerce app

**Precondition:** No existing account is registered with the test email address.

**Steps to Reproduce:**
1. Open the registration page.
2. Enter a valid email address.
3. Enter the password `pass125` (7 characters).
4. Submit the registration form.

**Expected Result:** Registration should be rejected because the password does not meet the minimum 8-character requirement. An appropriate validation error should be displayed and no account should be created.

**Actual Result:** The account is created successfully and the user is taken to the home page.

**Severity:** Medium

**Priority:** Low
