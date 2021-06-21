//synchronous method to read and write
//asynchronous method requires callback function

const { readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

//if the file exit it will over write it
//if the file is not there then it will create a new file
writeFileSync(
  './content/result-sync.txt',
  ` Here is the result ${first} ${second} `
)

//to append the file data with old one
writeFileSync('./content/result-sync.txt', '\n Here is new Item ', {
  flag: 'a',
})

const result = readFileSync('./content/result-sync.txt', 'utf-8')

console.log(result)
