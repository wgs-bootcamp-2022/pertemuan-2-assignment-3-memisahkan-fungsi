const fs = require('fs')
const readline = require('readline');
const filepath = './data/contact.json' // inisiasi file path berdasarkan folder data/json
const exixstFolder = fs.existsSync('./data') // inisiasi cek folder data 
const exixstFile = fs.existsSync(filepath) //inisiasi cek file contact.json

rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
})

//membuat function check folder
function check_folder(){
    if(!exixstFolder){ //cek apakah folder data tidak ada
        fs.mkdirSync('./data', (err)=> { //membuat folder baru bernama data
            if (err) throw err
        })
    }
}

//membuat function check file
function check_file(){
    if(!exixstFile){ //cek apakah folder data tidak ada
        fs.writeFileSync(filepath,'[]') //membuat file baru contact.json
    }

}
const getdata = (name, number, email)=> {
    const contact = {name, number, email} //inisiasi contact
    const file = fs.readFileSync(filepath,'utf-8') //membaca filepath
    const contacts = JSON.parse(file) // parsing json 
    contacts.push(contact) // push data contacts kepada contact
    fs.writeFileSync(filepath,JSON.stringify(contacts)) //membuat file contact yang sudah di konversi menjadi string
    console.log('Terimakasih sudah memasukkan data')
    rl.close()
}


const quest = (questions) =>{ //questions = pertanyaan input
    return new Promise((res, _)=> {
        rl.question(questions, (input)=>{ //pertanyaannya, dan input
            res(input)
        })
    })
} 



module.exports={check_folder, check_file, quest, getdata}