function findDrink() {

    let spirit = prompt("What spirit do you prefer?");
    let returnArr = [];

    for (let i = 0; i < drinks2020.length; i++ ) {
        if (drinks2020[i].base == spirit) {
            returnArr.push(drinks2020[i].name);
            let showDrinksAsString = returnArr.join(', ');
            document.getElementById('drink_name').innerHTML = showDrinksAsString;
        }
    }

};