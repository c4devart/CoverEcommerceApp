export const getDate = (date, month = 'long') => {
  const options = { month, day: 'numeric', year: 'numeric' }
  const dateObj = new Date(date)
  return new Date(
    dateObj - dateObj.getTimezoneOffset() * -60000
  ).toLocaleDateString('en-CA', options)
}
