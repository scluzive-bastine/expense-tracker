const formatText = (text, maxLength) => {
  //   const maxLength = 80 // maximum number of characters to extract

  //trim the string to the maximum length
  let trimmedString = text.substr(0, maxLength)

  if (text > maxLength) {
    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))
    )
  }
  return trimmedString
}

export default formatText
