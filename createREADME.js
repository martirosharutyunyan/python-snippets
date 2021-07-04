const fs = require('fs').promises

const createFiles = data => {
    // let array = []
    // for (const property in data) {
    //     array = [...array, data[property]]
    // }
    let ReadmeMd = `
# python-snippets

Python for Data sciense and ML(DL)


## Usage

keywords



**Enjoy!**
Keywords for easy working
\`\`\`
        `
    let text = '';
    data.forEach(elem => {
        const length = elem.prefix.length
        let spaces = '';
        for (let i = 0; i < length + 5 ; i++) {
            spaces += ' '
        }
        const body = elem.body
        let body2 = ''
        for (let i = 0; i < body.length; i++) {
            if(i === 0){
                body2 += body[0] +'\n'
                continue
            }
            body2 += spaces + body[i] + '\n' 
        }
        const data = `${elem.prefix} =>  ${body2}`
        text += '\n\n' + data
    })
    return `${ReadmeMd}\n${text}\n\`\`\``;
};

const create = async () => {
    const files = await fs.readdir('./snippets')
    const data = await Promise.all(files.map(async filename => {
        const json = await fs.readFile(`./snippets/${filename}`)
        return Object.values(JSON.parse(json.toString()))
    }))
    const json = []
    data.forEach(e => e.forEach(e => json.push(e)))
    const file = createFiles(json)
    fs.writeFile('./README.md', file)
}

create()

