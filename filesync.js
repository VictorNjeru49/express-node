const { readFile, writeFile } = require('fs');
const  util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const  getText = (path) => {
    return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, result) => {
        if(err){
            console.log(err)
            reject(err)
        }
        resolve(result)
    })
        })
    }

getText('./content/subfolder/first.txt')
    .then(text => console.log(text))
    .catch(err => console.log(err))

const start = async () => {
    try{
        const text = await readFilePromise('./content/subfolder/first.txt')
        const text2 = await readFilePromise('./content/subfolder/second.txt')

        await writeFilePromise('./content/subfolder/output.txt', `TIS IS AWESOME: ${text}\n${text2}`)
        console.log(text, text2)

    }catch(err){
        console.log(err)
    }
}
start();