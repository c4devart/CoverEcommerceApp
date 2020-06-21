export const handleCaughtErrors = (err) => {
  if (
    err &&
    err.graphQLErrors &&
    err.graphQLErrors[0] &&
    err.graphQLErrors[0].extensions &&
    err.graphQLErrors[0].extensions.validation
  ) {
    const error = err.graphQLErrors[0].extensions.validation
    return error[Object.keys(error)[0]][0]
  }
  return 'An unexpected error occurred. Please try again.'
}

export const handleApiCaughtErrors = (error) => {
  let errMsg
  if (error.response.data.hasOwnProperty('message')) {
    errMsg = error.response.data.message
  }
  if (error.response.data.hasOwnProperty('errors')) {
    const errData = error.response.data.errors
    errMsg = errData[Object.keys(errData)[0]][0]
  }
  return errMsg
}
