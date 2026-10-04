export const validUser = {
  username: process.env.SAUCE_USERNAME,
  password: process.env.SAUCE_PASSWORD
};

export const invalidUser = {
  username: process.env.SAUCE_USERNAME,
  password: 'wrong_password'
};
