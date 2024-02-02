const jwt = require("jsonwebtoken");

const generatetoken = (userEMAIL) => {
  try {
    const token = jwt.sign({ id: userEMAIL }, "secretKey2", { expiresIn: "1h" });
    return token;
  } catch (error) {
    console.log(error);
  }
};

//payload is the details of user from which the cookie is generated.
//  While verifying we can decode the details of the user who generated cookie

module.exports = generatetoken;
