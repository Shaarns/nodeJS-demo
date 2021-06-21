//Asynchronous method to read and write file
const { readFile, writeFile } = require('fs')
readFile('./content/first.txt', 'utf-8', (error, result) => {
  if (error) {
    console.log(error)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf-8', (error, result) => {
    if (error) {
      console.log(error)
      return
    }
    const second = result
    writeFile(
      './content/result-async2.txt',
      `here Is the result : ${first} ${second}`,
      (error, result) => {
        if (error) {
          console.log(error)
          return
        }
        console.log(result)
      }
    )
  })
})
