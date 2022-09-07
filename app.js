const { check_file, check_folder, getdata, quest} = require("./functions");

check_folder()
check_file()
const data = async ()=> {
    const name = await quest('what is your name ? ');
    const number = await quest('what is your number ? ');
    const email = await quest('what is your email ? ');
    getdata(name,number, email)
}
data()