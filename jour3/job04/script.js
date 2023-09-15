let addition = (num1, num2) => {
    return num1 + num2;
}

let num1 = prompt("Entrez un premier nombre");
num1 = parseInt(num1);

let num2 = prompt("Entre un deuxiéme nombre");
num2 = parseInt(num2);

function inputNumber(num1, num2) {

    if(!isNaN(num1) || !isNaN(num2))
    {
        console.log(addition(num1, num2));
    }
}

inputString = () => {

    do {
        str1 = prompt("Entrez la premiére partie de votre phrase");
        str1 = str1.trim();

    } while(typeof str1 === "string" && str1.length === 0 || str1 === null)


    let str = str1.length;
    console.log(str);
}

inputNumber(num1, num2);
inputString();
