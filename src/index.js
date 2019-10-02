const otplib = require("otplib");

let previousSecret;
otplib.authenticator.options = {
  step: 30,
  window: 2
}
module.exports = (args) => {
  if(typeof args === 'string' && args) {
    previousSecret = args;
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

  throw new Error(JSON.stringify(otplib.authenticator.options))

  const token = otplib.authenticator.generate(secret)
  otplib.authenticator.check(token, secret)
  return token
}
