//read and write file using promises and async await

const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8')
    const second = await readFile('./content/second.txt', 'utf-8')
    await writeFile(
      './content/result-new-file.txt',
      `\n THIS IS AWESOME : ${first} ${second}`
    )
    const third = await readFile('./content/result-new-file.txt', 'utf-8')
    console.log(first, second, third)
  } catch (error) {
    console.log(error)
  }
}
start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       }
//       resolve(data)
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))

//another method to read and create file

// const { readFile, writeFile } = require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err)
//       }
//       resolve(data)
//     })
//   })
// }

// const start = async () => {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf-8')
//     const second = await readFilePromise('./content/second.txt', 'utf-8')
//     await writeFilePromise(
//       './content/newThirdText.txt',
//       'Hello this is new text',
//       { flag: 'a' }
//     )
//     console.log(first, second)
//   } catch (err) {
//     console.log(err)
//   }
// }
// start()

// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
