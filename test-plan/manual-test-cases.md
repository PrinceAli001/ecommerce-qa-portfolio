# Manual Test Cases — E-Commerce QA Test Suite

## Registration

### TC001 — Valid Registration
**Precondition:** User does not have an existing account.  
**Test data:** Email: `test@example.com`, Password: `pass1237`

**Steps:**
1. Navigate to the website.
2. Enter valid email: `test@example.com`.
3. Enter valid password: `pass1237`.
4. Click Register.

**Expected result:** User is taken to the home page and the account is created in the database according to the requirements.

### TC002 — Invalid Email Registration
**Precondition:** User does not have an existing account.  
**Test data:** Invalid unique email, valid password.

**Steps:**
1. Navigate to the website.
2. Enter invalid email.
3. Enter valid password.
4. Click Register.

**Expected result:** An appropriate error message is displayed according to the requirements, indicating that the email is invalid or does not meet the required format.

### TC003 — Duplicate Email Registration
**Precondition:** Email already exists.  
**Test data:** Existing email, valid password.

**Steps:**
1. Navigate to the website.
2. Enter existing email.
3. Enter valid password.
4. Click Register.

**Expected result:** User receives an appropriate error message indicating that the email already exists, and the database does not create a new account.

### TC004 — Short Password
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, password containing fewer than 8 characters.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Enter a password with fewer than 8 characters.
4. Click Register.

**Expected result:** User receives an appropriate error message stating that the password does not meet the minimum character requirement.

### TC005 — Minimum Valid Password
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, minimum-length password: `pass1237`.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Enter the minimum-length password.
4. Click Register.

**Expected result:** Registration is successful and the account is created in the database.

### TC006 — Maximum Valid Password
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, maximum-length password: `password12374689@!-2`.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Enter the maximum-length password.
4. Click Register.

**Expected result:** Registration is successful, the user is redirected to the appropriate page, and the account is created in the database.

### TC007 — Password Above Maximum
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, 21-character password: `password12374689@!-21`.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Enter a password above the maximum character limit.
4. Click Register.

**Expected result:** User receives an appropriate error message stating that the password exceeds the maximum character limit, and no account is created.

### TC008 — Empty Email
**Precondition:** User does not have an existing account.  
**Test data:** Empty email, valid 8-character password.

**Steps:**
1. Navigate to the website.
2. Leave the email field empty.
3. Enter a valid 8-character password.
4. Click Register.

**Expected result:** Registration is rejected, the user receives an appropriate error message regarding the empty email field, and no account is created.

### TC009 — Empty Password
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, empty password.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Leave the password field empty.
4. Click Register.

**Expected result:** Registration is rejected, the user receives an appropriate error message regarding the empty password field, and no account is created.

### TC010 — Both Fields Empty
**Precondition:** User does not have an existing account.  
**Test data:** Empty email, empty password.

**Steps:**
1. Navigate to the website.
2. Leave the email field empty.
3. Leave the password field empty.
4. Click Register.

**Expected result:** Registration is rejected, the user receives appropriate error messages regarding the empty fields, and no account is created.

### TC011 — Invalid Email Format
**Precondition:** User does not have an existing account.  
**Test data:** Invalid email: `testexample-com`, valid 8-character password.

**Steps:**
1. Navigate to the website.
2. Enter invalid email.
3. Enter password.
4. Click Register.

**Expected result:** Registration is rejected, the user receives an appropriate error message regarding the email format, and no account is created.

### TC012 — Valid Email + Password at 9 Characters
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, valid 9-character password.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Enter valid 9-character password.
4. Click Register.

**Expected result:** Registration is successful, the user is redirected to the appropriate page, and the account is created.

### TC013 — 20-Character Password with Invalid Email
**Precondition:** User does not have an existing account.  
**Test data:** Invalid email format, valid 20-character password.

**Steps:**
1. Navigate to the website.
2. Enter invalid email format.
3. Enter 20-character password.
4. Click Register.

**Expected result:** Registration is rejected, the user receives an appropriate error message regarding the email format, and no account is created.

### TC014 — Valid Registration with Password Containing Special Characters
**Precondition:** User does not have an existing account.  
**Test data:** Valid email, valid password between 8–20 characters containing special characters.

**Steps:**
1. Navigate to the website.
2. Enter valid email.
3. Enter valid password between 8–20 characters containing special characters.
4. Click Register.

**Expected result:** Registration succeeds or fails depending on whether special characters are specified in the requirements. Account creation should also follow the stated requirement.

---

## Login

### TC015 — Valid Login
**Precondition:** User has an existing registered account.  
**Test data:** Existing registered email, valid password.

**Steps:**
1. Navigate to the website.
2. Navigate to Login.
3. Enter an existing registered email.
4. Enter valid password.
5. Click Login.

**Expected result:** User is authenticated successfully, is taken to the appropriate page, and gains access to their account according to the requirements.

### TC016 — Invalid Password
**Precondition:** User has an existing registered account.  
**Test data:** Existing registered email, invalid password.

**Steps:**
1. Navigate to the website.
2. Navigate to Login.
3. Enter registered email.
4. Enter invalid password.
5. Click Login.

**Expected result:** Authentication is rejected and the user receives an appropriate error message regarding the invalid password. The user is not granted access to the account.

### TC017 — Invalid Email
**Precondition:** User has an existing registered account.  
**Test data:** Unregistered/invalid email address, correct password.

**Steps:**
1. Navigate to the website.
2. Navigate to Login.
3. Enter an unregistered/invalid email address.
4. Enter valid password.
5. Click Login.

**Expected result:** Authentication is rejected, the user receives an appropriate error message, and access to an account is not granted.

### TC018 — Empty Email
**Precondition:** User has an existing registered account.  
**Test data:** Empty email, valid password.

**Steps:**
1. Navigate to the website.
2. Navigate to Login.
3. Leave the email address empty.
4. Enter valid password.
5. Click Login.

**Expected result:** Authentication is rejected, the user receives an appropriate error message according to the requirements, and does not gain access to the account.

### TC019 — Empty Password
**Precondition:** User has an existing registered account.  
**Test data:** Registered email, empty password.

**Steps:**
1. Navigate to the website.
2. Navigate to Login.
3. Enter registered email.
4. Leave the password field empty.
5. Click Login.

**Expected result:** Authentication is rejected, the user receives an appropriate error message according to the requirements, and does not gain access to the account.

### TC020 — Both Login Fields Empty
**Precondition:** User has an existing registered account.  
**Test data:** Empty email, empty password.

**Steps:**
1. Navigate to the website.
2. Navigate to Login.
3. Leave the email address empty.
4. Leave the password field empty.
5. Click Login.

**Expected result:** Authentication is rejected, the user receives appropriate error messages according to the requirements, and does not gain access to the account.

---

## Product Search

### TC021 — Search for Existing Product
**Precondition:** User has logged into their own existing registered account.  
**Test data:** A product name that exists in the catalogue, e.g. `Laptop`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the product name, e.g. `Laptop`.
5. Click Search.

**Expected result:** Products matching the search criteria are displayed.

### TC022 — Search for Non-Existent Product
**Precondition:** User has logged into their own existing registered account.  
**Test data:** `NonExistentProduct123`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter `NonExistentProduct123`.
5. Click Search.

**Expected result:** An appropriate response is displayed according to the requirement.

### TC023 — Partial Product Name Search
**Precondition:** User has logged into their own account.  
**Test data:** A partial name of an existing product, e.g. `Samsung` for `Samsung Galaxy S25`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter a partial name of an existing product.
5. Click Search.

**Expected result:** Behaviour is confirmed against the clarified requirement. The requirement states that a customer must be able to search for a product by name and that results must match the search criteria.

**Additional information:** Requirement clarification is required because the original requirement does not specify how partial-name searches should behave.

### TC024 — Empty Search
**Precondition:** User has logged into their own existing registered account.  
**Test data:** Empty search field.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Leave the search field empty.
5. Click Search.

**Expected result:** Behaviour for an empty search field is confirmed according to the clarified requirements.

**Additional information:** Requirement clarification is required regarding the expected outcome of an empty search.

### TC025 — Search Case Sensitivity
**Precondition:** User has logged into their own existing registered account.  
**Test data:** Case variation of an existing product, e.g. `SAMSUNG` instead of `Samsung Galaxy S25`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the case-varied search term.
5. Click Search.

**Expected result:** Behaviour for case-sensitive searching is confirmed according to the clarified requirements.

**Additional information:** Requirement clarification is required regarding case-sensitive search behaviour.

### TC026 — Search with Special Characters
**Precondition:** User has logged into their own existing registered account.  
**Test data:** Catalogue product: `Samsung Galaxy S25`; search term: `Samsung Galaxy S25 @#$%`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the search term.
5. Click Search.

**Expected result:** Behaviour for special characters is confirmed according to the clarified requirements.

**Additional information:** Requirement clarification is required regarding special-character search behaviour.

### TC027 — Search Result Accuracy
**Precondition:** User has logged into their own existing registered account.  
**Test data:** Existing product: `Samsung Galaxy S25`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the existing product name.
5. Click Search.

**Expected result:** Results display products matching the search criteria and no unrelated products appear.

---

## Shopping Basket

### TC028 — Add Product to Basket
**Precondition:** User has logged into their own existing registered account and the product is available.  
**Test data:** Available product, e.g. `Samsung Galaxy S25`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the available product name.
5. Click Add to Basket.

**Expected result:** User is able to add the available product to their basket and the basket displays the correct product and quantity.

### TC029 — Add Multiple Quantities
**Precondition:** User has logged into their own existing registered account and the product is available.  
**Test data:** Available product: `Samsung Galaxy S25`.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the available product.
5. Select the product.
6. Add the product to the basket.
7. Enter the available product into the search bar again.
8. Select the product.
9. Add the product to the basket.

**Expected result:** Behaviour for adding multiple quantities is confirmed according to the clarified requirement.

**Additional information:** Requirement clarification is required regarding how multiple quantities should be handled.

### TC030 — Remove Product from Basket
**Precondition:** User has logged into their own existing registered account and has an available product in their basket.  
**Test data:** `Samsung Galaxy S25` already added to the basket.

**Steps:**
1. Navigate to the basket.
2. Select the `Samsung Galaxy S25`.
3. Click Remove.

**Expected result:** The selected product is removed from the basket and the basket and database update correctly according to the requirements.

### TC031 — Basket Quantity Update
**Precondition:** User has logged into their own existing registered account and has `Samsung Galaxy S25` in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket.

**Steps:**
1. Navigate to the basket.
2. Change the quantity of `Samsung Galaxy S25` from 1 to 2.

**Expected result:** Behaviour when changing the quantity from 1 to 2 is confirmed according to the clarified requirements.

**Additional information:** Requirement clarification is required regarding changing the quantity of available products in the basket.

### TC032 — Basket Persists After Refresh
**Precondition:** User has logged into their own existing registered account and added an available product to their basket.

**Steps:**
1. Navigate to the website.
2. Log in with registered email and password.
3. Navigate to the search bar.
4. Enter the available product.
5. Select the available product.
6. Click Add to Basket.
7. Refresh the page.

**Expected result:** Behaviour after refreshing the page is confirmed according to the clarified requirement.

**Additional information:** Requirement clarification is required regarding whether the basket should persist after a page refresh.

### TC033 — Basket Total Price
**Precondition:** User has logged into their own existing registered account and has one `Samsung Galaxy S25` in their basket.

**Steps:**
1. Navigate to the basket.

**Expected result:** The basket displays the correct total price based on the product and quantity: £899 × 1 = £899.

### TC034 — Basket Total for Multiple Quantities
**Precondition:** User has logged into their own existing registered account and has added 2 units of `Samsung Galaxy S25` to their basket.  
**Test data:** `Samsung Galaxy S25` — £899; Quantity — 2.

**Steps:**
1. Navigate to the basket.

**Expected result:** The basket displays the correct total price: £899 × 2 = £1,798.

### TC035 — Empty Basket
**Precondition:** User has logged into their own existing registered account.  
**Test data:** None.

**Steps:**
1. Navigate to the basket.

**Expected result:** Behaviour for an empty basket is confirmed according to the clarified requirement.

**Additional information:** Requirement clarification is required regarding the behaviour of an empty basket.

---

## Checkout

### TC036 — Proceed to Checkout
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket.

**Steps:**
1. Navigate to the basket.
2. Click Proceed to Checkout.

**Expected result:** Customer proceeds to checkout from the basket containing `Samsung Galaxy S25`.

### TC037 — Checkout Without Shipping Information
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket.

**Steps:**
1. Click Proceed to Checkout.
2. Click Continue without entering shipping information.

**Expected result:** Checkout is denied and the user receives an appropriate error message. The user must provide valid shipping information before placing an order.

### TC038 — Valid Shipping Information
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket and valid shipping information.

**Steps:**
1. Click Proceed to Checkout.
2. Enter valid shipping information.
3. Click Continue.

**Expected result:** The user is allowed to proceed to the next stage of checkout because valid shipping information has been provided.

### TC039 — Invalid Shipping Information
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket and invalid shipping information.

**Steps:**
1. Click Proceed to Checkout.
2. Enter invalid shipping information.
3. Click Continue.

**Expected result:** Checkout is denied, the user receives an appropriate error message, and no order is placed.

### TC040 — Missing Required Shipping Information
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket; first name: `Mahfouz`; last name: `Adewoye`; postcode: empty.

**Steps:**
1. Click Proceed to Checkout.
2. Enter valid first name.
3. Enter valid last name.
4. Leave postcode empty.
5. Click Continue.

**Expected result:** Checkout is denied, the user receives an appropriate error message, is not allowed to proceed to the next stage, and no order is placed.

### TC041 — Invalid Postcode
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in the basket; first name: `Mahfouz`; last name: `Adewoye`; postcode: `123`.

**Steps:**
1. Click Proceed to Checkout.
2. Enter valid first name.
3. Enter valid last name.
4. Enter invalid postcode.
5. Click Continue.

**Expected result:** Checkout is denied, the user receives an appropriate error message, is not allowed to proceed to the next stage, and no order is placed.

### TC042 — Place Order with Valid Shipping Information
**Precondition:** User is logged in and has proceeded to the final checkout stage with at least one product in their basket.  
**Test data:** `Samsung Galaxy S25` in basket; first name: `Mahfouz`; last name: `Adewoye`; postcode: `WA3 7KJ`.

**Steps:**
1. Click Proceed to Checkout.
2. Enter valid first name.
3. Enter valid last name.
4. Enter valid postcode.
5. Click Continue.
6. Click Place Order.

**Expected result:** Customer successfully places an order after providing valid shipping information. An order confirmation is displayed, order history is updated, and the database is updated.

### TC043 — Order Details Match Basket
**Precondition:** User has provided valid shipping information.  
**Test data:** `Samsung Galaxy S25` in the order history and basket; price: £899; quantity: 2; total: £1,798.

**Steps:**
1. Click Place Order.

**Expected result:** User successfully places the order, receives order confirmation, and order history matches the basket in terms of product, price, quantity and total amount.

### TC044 — Basket After Successful Order
**Precondition:** User is logged in and has at least one product in their basket.  
**Test data:** `Samsung Galaxy S25`; first name: `Mahfouz`; last name: `Adewoye`; postcode: `WA3 7KJ`; price: £899; quantity: 1; total: £899.

**Steps:**
1. Click Proceed to Checkout.
2. Enter valid first name.
3. Enter valid last name.
4. Enter valid postcode.
5. Click Continue.
6. Click Place Order.

**Expected result:** User successfully places an order, receives order confirmation, and order history matches the basket in terms of price, quantity and total. The behaviour of the basket after a successful order is confirmed according to the clarified requirement.

**Additional information:** Requirement clarification is required regarding the behaviour of the basket after a successful order.

---

## Orders

### TC045 — View Order History
**Precondition:** User is logged in and has at least one previously placed order.  
**Test data:** Product: `Samsung Galaxy S25`; quantity: 1; price: £899; total: £899; date: 2025.

**Steps:**
1. Navigate to Order History.

**Expected result:** User can view previously placed orders and their relevant details, such as product, price, total and date. User does not gain unauthorized access to another user's order history.

### TC046 — Unauthorized Access to Another User's Order History
**Precondition:** User A is logged in and has at least one previously placed order. User B has a separate order history.  
**Test data:** User A, User B, `Samsung Galaxy S25`; price: £899; quantity: 2; total: £1,798.

**Steps:**
1. Log in as User A.
2. Navigate to Order History.
3. Attempt to access User B's order history using the relevant application route or request, if applicable.

**Expected result:** User A can access only their own order history and is denied access to User B's order history.

### TC047 — View Multiple Orders in Order History
**Precondition:** User is logged in and has multiple previously placed orders.  
**Test data:** Multiple valid orders belonging to the logged-in user.

**Steps:**
1. Log in with the registered account.
2. Navigate to Order History.
3. Review the listed orders.

**Expected result:** All previously placed orders belonging to the logged-in user are displayed with the correct order details.

### TC048 — Order Details Match Database
**Precondition:** User is logged in and has at least one previously placed order.  
**Test data:** A previously placed order with known product, quantity, price and total.

**Steps:**
1. Log in with the registered account.
2. Navigate to Order History.
3. Select a previously placed order.
4. Compare the displayed order details with the corresponding database record.

**Expected result:** The order details displayed to the user match the corresponding database record, including product, quantity, price and total.

### TC049 — Newly Placed Order Appears in Order History
**Precondition:** User is logged in and has successfully completed an order.  
**Test data:** Newly placed order with known product, quantity and total.

**Steps:**
1. Complete an order using valid shipping information.
2. Navigate to Order History.
3. Locate the newly placed order.

**Expected result:** The newly placed order appears in the user's order history with the correct order details.

### TC050 — Order History Does Not Display Another User's Orders
**Precondition:** User A and User B both have previously placed orders. User A is logged in.  
**Test data:** Separate orders belonging to User A and User B.

**Steps:**
1. Log in as User A.
2. Navigate to Order History.
3. Review all displayed orders.
4. Compare the displayed orders against User A's records.

**Expected result:** Only User A's orders are displayed. User B's orders are not visible or accessible to User A.
