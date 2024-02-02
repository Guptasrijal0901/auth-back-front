const TWILIO_SERVICE_ID = "US3cbcfcbcef98233cbaf854b684b4894b"; //from the services->verify page
const TWILIO_ACCOUNT_ID = "ACb03b8fd4a2873a4af9261eff8cd05e45"; // account settings
const TWILIO_AUTH_TOKEN = "bc03b899fc07a8e41f8abc886ddf7989"; // account settings below

const client = require("twilio")(TWILIO_ACCOUNT_ID, TWILIO_AUTH_TOKEN);

const sendLoginOtp = (userPHONENUMBER) => {
  if (!userPHONENUMBER)
    return {
      succes: false,
      error: "Phone Number Missing",
    };

  client.verify
    .services(TWILIO_SERVICE_ID)
    .verifications.create({
      to: userPHONENUMBER,
      channel: "sms",
    })
    .then((verification) => {
      return {
        success: true,
        status: verification.status,
      };
    })
    .catch((err) => {
      console.log(err);
      if (err.code === 60200)
        return {
          success: false,
          error: "Invalid Parameter",
        };
      else if (err.code === 60203)
        return {
          success: false,
          error: "Max Send attempts reached",
        };
      else if (err.code === 60212)
        return {
          success: false,
          error: "Too many concurrent requests for phone number",
        };
      else
        return {
          success: false,
          error: "Server Issue, Try Again Later!",
        };
    });
};

const verifyOtp = async (userPHONENUMBER, code) => {
  try {
    const verification_check = await client.verify
      .services(TWILIO_SERVICE_ID)
      .verificationChecks.create({
        to: userPHONENUMBER,
        code: code,
      });
    console.log(verification_check.status);
    if (verification_check.status === "approved") {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
module.exports = { sendLoginOtp , verifyOtp};