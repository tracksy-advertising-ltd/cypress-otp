const otplib = require("otplib");

let previousSecret;

module.exports = (args) => {
  if(typeof args === 'string' && args) {
    previousSecret = otpSecret;
  } else if(typeof args === 'object') {
    previousSecret = args.secret;
    if(args.options) {
      otplib.authenticator.options = args.options;
    }
  }
  const secret = previousSecret;
  if(!secret) {
    throw new Error("No secret has been provided.");
  }

  return otplib.authenticator.generate(secret);
}
