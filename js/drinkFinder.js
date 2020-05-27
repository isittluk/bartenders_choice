// function findDrink() {

//     let spirit = prompt("What spirit do you prefer?");
//     let returnArr = [];

//     for (let i = 0; i < drinks2020.length; i++ ) {
//         if (drinks2020[i].base == spirit) {
//             returnArr.push(drinks2020[i].name);

//             document.getElementById("container__drinks").insertAdjacentHTML("beforeend", 
//             `<div class="drinks__card"><p class="drinks__name">` +
//             drinks2020[i].name
//             + `</p><p class="drinks__creator">` + 
//             drinks2020[i].creator +
//             `</p>` +
//             `<img class="drinks__image" src="./images/placeholder.png" alt="image of drink">`+
//             `<p class="drinks__btn">view more. . .</p>` +
//             `</div>`
            
//             );
//         }
//     }
// };

$(".button-primary").click(function() {
    let spirit = prompt("What spirit do you prefer?");
    let returnArr = [];
    let section = $("#section__drinks");

    for (let i = 0; i < drinks2020.length; i++ ) {
        if (drinks2020[i].base == spirit) {
            returnArr.push(drinks2020[i].name);

            document.getElementById("container__drinks").insertAdjacentHTML("beforeend", 
            `<div class="drinks__card"><p class="drinks__name">` +
            drinks2020[i].name
            + `</p><p class="drinks__creator">` + 
            drinks2020[i].creator +
            `</p>` +
            `<img class="drinks__image" src="./images/placeholder.png" alt="image of drink">`+
            `<p class="drinks__btn">view more. . .</p>` +
            `</div>`
            
            );
        }
    }
    document
    .getElementById("section__drinks")
    .scrollIntoView({ behavior: "smooth" });
});
