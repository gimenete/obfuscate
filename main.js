const internalFunction = () => {
  let message = `hello world ${process.env.NODE_ENV}`
  console.log(message)
  if (process.env.NODE_ENV === 'chrome') {
    require('./chrome')()
  }
  if (process.env.NODE_ENV === 'firefox') {
    require('./firefox')()
  }
}

exports.exported = internalFunction
exports.exported()
