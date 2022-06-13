// Info user Name

const userName = prompt("Insert your name");

document.getElementById("user-name").innerHTML = userName;

// Info user Surname

const userSurname = prompt("Insert your Surname");

document.getElementById("user-surname").innerHTML = userSurname;

// Info user favourite color

const favColor = prompt("Insert your favourite color");
document.getElementById("user-fav-color").innerHTML = favColor;

console.log(userName, userSurname, favColor);

// Current Date to Add

const currentYear = "22";


// Password generator result 

const pwGen = userName + userSurname + favColor + currentYear;
document.getElementById("gen-pwd").innerHTML = pwGen;




