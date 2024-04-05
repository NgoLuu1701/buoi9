//Câu 2: fs-acsyn: sử dụng readFile, writeFile sau đó dùng callback. 
const { readFile, writeFile } = require('fs')

 console.log('start')
 readFile('myfile.txt', 'utf8', (err, result) => {
   if (err) {
     console.log(err)
     return
   }
   const first = result
   readFile('myfile.txt', 'utf8', (err, result) => {
     if (err) {
       console.log(err)
       return
     }
     const second = result
     writeFile(
       'myfile.txt',
       `Here is the result: ${first}, ${second}`,
       (err, result) => {
         if (err) {
           console.log(err)
           return
         }
         console.log('done with this task')
       }
     )
   })
 })
 console.log('starting next task')