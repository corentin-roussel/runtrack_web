const array = [1,2,3,4,5,6];


loop = (array) => {

    for(let i = 0; i < array.length; i++)
    {
        console.log(array[i]);
    }

    array.forEach((e) => console.log(e));
}


loop(array);
