let preferencesArr = [];

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(".inputs__input").click(function() {
    let spirit = $(this)[0].innerText;

    console.log(spirit);

    preferencesArr = [];
    preferencesArr.push(spirit);
    console.log(preferencesArr);


    findDrinks(spirit);

});

function findDrinks(spirit) {
    let returnArr = [];
    for (let i = 0; i < blackCypress.length; i++ ) {
        if (blackCypress[i].base == spirit) {
            returnArr.push(blackCypress[i].name);

            console.log(blackCypress[i]);

            document.getElementById("container__drinks").insertAdjacentHTML("beforeend", `<div id="card__card" class="card__card"><div class="drinks__card"><p class="drinks__name">` + blackCypress[i].name + `</p><p class="drinks__creator">` + blackCypress[i].creator + `</p>` + `<img class="drinks__image" src="./images/placeholder.png" alt="image of drink">`+`<div class="drinks__line"></div><p class="drinks__ingredients">Ingredients:<p class="drinks__list">` + blackCypress[i].ingredients + `</p></div></div>`);
        }
    }

    // document
    // .getElementById("section__drinks")
    // .scrollIntoView({ behavior: "smooth" });
}

$(".button-primary").click(function() {
    // let spirit = prompt("What spirit do you prefer?");
    // let taste = prompt("What taste do you prefer?");

    // let returnArr = [];

    // for (let i = 0; i < blackCypress.length; i++ ) {
    //     if (blackCypress[i].base == spirit && blackCypress[i].taste == taste) {
    //         returnArr.push(blackCypress[i].name);

    //         console.log(blackCypress[i]);

    //         document.getElementById("container__drinks").insertAdjacentHTML("beforeend", `<div id="card__card" class="card__card"><div class="drinks__card"><p class="drinks__name">` + blackCypress[i].name + `</p><p class="drinks__creator">` + blackCypress[i].creator + `</p>` + `<img class="drinks__image" src="./images/placeholder.png" alt="image of drink">`+`<div class="drinks__line"></div><p class="drinks__ingredients">Ingredients:<p class="drinks__list">` + blackCypress[i].ingredients + `</p></div></div>`);
    //     }
    // }
    document
    .getElementById("section__inputs")
    .scrollIntoView({ behavior: "smooth" });
});
