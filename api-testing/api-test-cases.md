[api-test-cases.md](https://github.com/user-attachments/files/32936441/api-test-cases.md)
# API Test Cases

## TC001 — Valid API Request

**Method:** POST

**Endpoint:** `/api/register`

**Request Body:**
```json
{
  "email": "test@example.com",
  "password": "pass1237"
}
```

**Expected Status Code:** `201 Created`

**Expected Result:**
- A new user account is successfully created.
- The response contains the newly created user ID.
- The response contains the registered email address.
- The password is not returned in the response.

---

## TC002 — Registration with Missing Password

**Method:** POST

**Endpoint:** `/api/register`

**Request Body:**
```json
{
  "email": "test@example.com"
}
```

**Expected Status Code:** `400 Bad Request`

**Expected Result:**
- The request is rejected because the password is required.
- The response indicates that the password is missing or required.
- No user account is created.

---

## TC003 — Retrieve Existing User

**Method:** GET

**Endpoint:** `/api/users/123`

**Request Body:** None

**Expected Status Code:** `200 OK`

**Expected Result:**
- The request successfully retrieves User 123.
- The response contains the user's expected information according to the API contract, such as the user ID and registered email.
