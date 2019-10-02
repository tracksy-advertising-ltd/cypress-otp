const speakeasy = require('speakeasy')


module.exports = (secret) => {
  return speakeasy.totp({
    secret,
    encoding: 'base32',
  })
}
