exports.save = async(ctx, next) => {
    const { gardenData } = ctx.request.body
    next()
}