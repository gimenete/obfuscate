const internalFunction = () => {
  let message = `hello world ${process.env.NODE_ENV}`
  console.log(message)
  if (process.env.NODE_ENV === 'chrome') {
    console.log('we are in chrome')
  }
  if (process.env.NODE_ENV === 'firefox') {
    console.log('we are in firefox')
  }
}

exports.exported = internalFunction
exports.exported()
