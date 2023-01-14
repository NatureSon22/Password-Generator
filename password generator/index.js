const UPPERCASE = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const LOWERCASE = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const NUMBER = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const CHARACTER = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
let num = {
    clicked: false,
    symbol: NUMBER,
    ctr: 0
}
let lowerCase = {
    clicked: false,
    symbol: LOWERCASE,
    ctr: 0
}
let upperCase = {
    clicked: false,
    symbol: UPPERCASE,
    ctr: 0
}
let character = {
    clicked: false,
    symbol: CHARACTER,
    ctr: 0
}

function isClicked(choice) {
    switch (choice) {
        case 1:
            upperCase.ctr++;
            upperCase.clicked = condition(upperCase.ctr);
            break;
        case 2:
            lowerCase.ctr++;
            lowerCase.clicked = condition(lowerCase.ctr);
            break; 
        case 3:
            num.ctr++;
            num.clicked = condition(num.ctr);
            break;
        case 4:
            character.ctr++;
            character.clicked = condition(character.ctr);
            break;               
    }
}

function condition(ctr) {
    if(ctr % 2 !== 0) {
        return true;
    } else return false;
}

function generatePass() {
    let array = [num, lowerCase, upperCase, character];
    let passWord = "";
    let length = passLength();
    
    for (let i = 0; i < length; ) {
        let temp = array[Math.floor(Math.random() * 4)];
        if(temp.clicked === true) {
            passWord += temp.symbol[Math.floor(Math.random() * temp.symbol.length)]
            i++;
        }
    }
    document.getElementById("showPassword").value = passWord;
}

function passLength() {
    return document.getElementById("range").value;
}

function reset() {
    let array = [num, lowerCase, upperCase, character];
    array.forEach(function (elements) {
        elements.ctr = 0;
        elements.clicked = false;
    })

    let checkbox = document.querySelectorAll("input[type = 'checkbox']");
    console.log(checkbox[0]);

    for(let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
    document.getElementById("showPassword").value = "";
}

function copy() {
    const cb = navigator.clipboard;
    const paragraph = document.getElementById("showPassword");
    cb.writeText(paragraph.value).then(() => alert('Text copied'));
}
