
exports.get = async(ctx, next) => {
   ctx.body = {
       requestId: 15,
       respondedTo: true,
       toggle: false,
       createdDate: 1588953915653
   }
   next()
}

exports.save = async(ctx, next) => {
    next()
}