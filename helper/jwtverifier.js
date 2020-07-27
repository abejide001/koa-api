const OktaJwtVerfier = require("@okta/jwt-verifier")
require("dotenv").config()

const { OKTA_CLIENT_ID, OKTA_ISSUER, OKTA_AUDIENCE } = process.env
const oktaJwtVerfier = new OktaJwtVerfier({
    issuer: OKTA_ISSUER,
    clientId: OKTA_CLIENT_ID
})

module.exports = async(ctx, next) => {
    const { authorization } = ctx.headers

    if (!authorization) {
        ctx.throw(401)
    }
    const [authType, token] = authorization.trim.split(" ")

    try {
        const { claims }= await oktaJwtVerfier.verifyAccessToken(token, OKTA_AUDIENCE)
        
        if (!claims) {
            throw(401)
        }
        if (!claims.scp.includes("api")) {
            throw(401)
        }
    } catch (error) {
        ctx.throw(401)
    }
    next()
}