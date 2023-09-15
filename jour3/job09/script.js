const checkDivideByZero = () => {
    try {
        const divide = 8/0
        console.log("Le résultat de la division est: " + divide)
    }catch(error) {
        console.error("Une erreur c'est produite: " + error)
    }
}

checkDivideByZero();