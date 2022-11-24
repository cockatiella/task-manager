const { CustomAPIError } = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message })
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' })
}

//we create a middleware func that accepts the error obj as param and checks if the err is an instance of the customapierror class. if it is, return a res with status code and err mess. if not we return status 500 and generic err message:

module.exports = errorHandlerMiddleware