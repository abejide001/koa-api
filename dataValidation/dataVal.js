
exports.fountainRequestValidator = async(ctx, next) => {
    const { fountainRequest } = ctx.request.body

    if (!fountainRequest) {
        ctx.throw(400)
    }

    if (fountainRequest.id) {
        ctx.throw(400)
    }
    next()
}

exports.gardenDataValidator = async(ctx, next) => {
    const { gardenData } = ctx.request.body

    if (!gardenData) {
        ctx.throw(400)
    }
    next()
}