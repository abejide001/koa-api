
exports.getFountainRequest = (ctx, next) => {
    ctx.status = 200
    next()
}

exports.createFountainRequest = (ctx, next) => {
    ctx.status  = 200
    next()
}
