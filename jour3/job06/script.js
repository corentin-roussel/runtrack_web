let button = document.querySelector("#button");
let body = document.querySelector("#body");

button.addEventListener("click", () => {

    console.log(body.style.backgroundColor);

    if(body.style.backgroundColor.length === 0 || body.style.backgroundColor === "white")
    {
        body.style.backgroundColor = "green";
    }else {
        body.style.backgroundColor = "white";
    }

})