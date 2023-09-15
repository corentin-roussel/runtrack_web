let addition = (num1, num2) => {
    return num1 + num2;
}

let soustraction = (num1, num2) => {
    return num1 - num2;
}

let division = (num1, num2) => {
    return num1 / num2;
}

let multiplication = (num1, num2) => {
    return num1 * num2;
}

inputUtilisateur = () => {


    do {
        num1 = prompt("Entrez un premier nombre");
        num1 = parseInt(num1);
    }while (isNaN(num1));

    do {
        num2 = prompt("Entre un deuxiéme nombre");
        num2 = parseInt(num2);
    }while(isNaN(num2));


    console.log(addition(num1, num2));
    console.log(soustraction(num1, num2));
    console.log(multiplication(num1, num2));
    console.log(division(num1, num2));

    do {
        str1 = prompt("Entrez la premiére partie de votre phrase");

    } while(typeof str1 === "string" && str1.length === 0 || str1 === null)

    do {
        str2 = prompt("Entrez la deuxiéme partie de votre phrase");

    } while(typeof str2 === "string" && str2.length === 0 || str2 === null)
    let str = str1 + str2;
    console.log(str);
}



inputUtilisateur();