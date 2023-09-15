let name = document.querySelector("#name");
let lastName = document.querySelector("#lastname");
let submit = document.querySelector("#form");
let message = document.querySelector("#message")



const input = (name, lastName, message) => {
    name = encodeURI(name);
    lastName = encodeURI(lastName);

    if(name.trim() !== "" && lastName.trim() !== "")
    {
        localStorage.setItem("name", name);
        localStorage.setItem("lastName", lastName);

        message.innerHTML = localStorage.getItem("name") +" "+ localStorage.getItem("lastName")
    }
}


    submit.addEventListener("submit", (e) => {
        e.preventDefault();
        input(name.value, lastName.value, message);

    })



