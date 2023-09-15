let people = document.querySelector("#people")

const fetchData = async() => {

    try {
        const response = await fetch("https://jsonplaceholder.org/users");
        if(response.status === 404) {
            throw new Error("Page not found");
        }else if(response.status === 500) {
            throw new Error("Server error");
        }else if(!response.ok) {
            throw new Error(`HTTP Error! Status:  ${response.status}`);
        }
        const data = await response.text();
        people.innerHTML = data
    }catch(error) {
        console.error(error);
    }




}

fetchData();