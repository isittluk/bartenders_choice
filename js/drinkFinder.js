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
    let taste = prompt("What taste do you prefer?");

    let returnArr = [];

    for (let i = 0; i < blackCypress.length; i++ ) {
        if (blackCypress[i].base == spirit && blackCypress[i].taste == taste) {
            returnArr.push(blackCypress[i].name);

            console.log(blackCypress[i]);

            document.getElementById("container__drinks").insertAdjacentHTML("beforeend", `<div id="card__container"><div class="drinks__card__front"><p class="drinks__name">` + blackCypress[i].name + `</p><p class="drinks__creator">` + blackCypress[i].creator + `</p>` + `<img class="drinks__image" src="./images/placeholder.png" alt="image of drink">`+ `<p class="drinks__btn">view more. . .</p>` +`</div>` +
            `<div class="drinks__card__back"><p class="drinks__name">` + blackCypress[i].name + `</p><p class="drinks__creator">` + blackCypress[i].creator + `</p>` + `<div class="container__line"></div>` + `<p class="drinks__type">` + blackCypress[i].type + `</p>` + `<p class="drinks__ingredients">Ingredients: <br>` + blackCypress[i].ingredients + `</p><p class="drinks__btn">Back</p>` +`</div>
            </div>`);
        }
    }
    document
    .getElementById("section__drinks")
    .scrollIntoView({ behavior: "smooth" });
});
