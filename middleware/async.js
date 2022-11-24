const asyncWrapper = (fn) => {
    return async (req, res, next) => {
      try {
        await fn(req, res, next)
      } catch (error) {
        next(error)
      }
    }
  }
  //this func can be used as a middleware for any routes. it wraps the function  that is passed to a try catch block.
  //if there is an error, it will be passed to the next middleware which is the error handler.
  module.exports = asyncWrapper