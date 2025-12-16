const fs = require ('fs')


const title = fs.readFileSync('./data/title.txt', 'utf-8')
console.log(title)

const content = fs.readFileSync('./data/content.txt', 'utf-8')
console.log(content)


fs.writeFileSync(`./output/${title}.txt`, content);
console.log('Dosya başarıyla oluşturuldu.')