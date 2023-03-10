let id=0;
let firstName="jonny";
let lastName="B Goode";
let firstName2="Bob";
let lastName2="Sagget";
let firstName3="Hayden";
let lastName3="Washburn"

function createID(firstName,lastName){
    console.log(firstName + " " + lastName);
    console.log(++id);
}

createID(firstName, lastName);
createID(firstName2, lastName2);
createID(firstName3, lastName3);
