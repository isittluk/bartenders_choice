// let spirits = ['whiskey', 'brandy', 'vodka', 'rum', 'gin', 'tequila'];
// let liqueur = [];
// let taste = ['boozy', 'sweet', 'sour', 'bitter', 'umami', 'salty', 'astringent', 'spicy'];
// let citrus = ['lime', 'lemon', 'orange', 'grapefruit'];
// let sweetener = ['simple', 'honey', 'maple', 'agave', ];
// let spirits = ['brandy', 'gin', 'mezcal', 'rum', 'vodka', 'whiskey'];
// let liqeur = ['aperol', 'apricot', 'blanc vermouth', 'campari', 'cocchi americano', 'luxardo bianco', 'maraschino', 'strega'];
// let citrus = ['lemon', 'lime', 'orange'];
// let syrup = ['agave', 'allspice', 'apricot', 'brown sugar', 'cinnamon-vanilla', 'mango', 'pineapple', 'simple'];
// let bitters = ['angostura', 'grapefruit', 'lavender', 'mole', 'peach', 'smoke', 'spiced peychauds',]

let drinks2020 = [
    house_punch = {
        "name": "House Punch",
        "creator": "The Black Cypress",
        "type": "punch",
        "base": "bourbon",
        "ingredients": "1oz Bourbon, 1oz Orange Juice, 0.25oz Lemon Juice, 0.50oz Cinnamon-Vanilla, 0.25oz Allspice.",
        "method": "Shake and strain into glass mug with orange ice cube."
    },
    amari_spritz = {
        "name": "Cypress Amari Spritz",
        "creator": "The Black Cypress",
        "type": "punch",
        "base": "amari",
        "ingredients": "1.50oz Amari blend, 3oz Brut, 1oz Soda",
        "method": "Combine in wine glass with ice. Orange wedge garnish."
    },
    atacama_flamingo = {
        "name": "Atacama Flamingo",
        "creator": "The Black Cypress",
        "type": "Bright and Refreshing",
        "base": "brandy",
        "ingredients": "1.5oz Pisco, 0.75oz Lime Juice, 0.75oz Agave, 0.25oz Aperol, 0.25oz Ancho verde, 2 dash Spiced Pechaud's",
        "method": "Shake, strain into coupe. Floated lime wheel garnish"
    },
    mangalore_curry = {
        "name": "Mangalore Curry",
        "creator": "The Black Cypress",
        "type": "Bright and Refreshing",
        "base": "vodka",
        "ingredients": "1.75oz Vodka, 0.50oz Mango syrup, 0.50oz Curry cordial, 0.25oz Pineapple, 0.75oz Lime, 2 dash Spiced Peychaud's",
        "method": "Shake. Double-strain into a kummel-rinsed coupe. No garnish."
    },
    rio_75 = {
        "name": "Rio 75",
        "creator": "The Black Cypress",
        "type": "Bright and Refreshing",
        "base": "rum",
        "ingredients": "1oz Cachaca, 0.25oz St. Germain, 0.50 Lemon juice",
        "method": "Shake. Strain into coupe with 2oz sparkling wine. Floated lemon wheel."
    },
    flor_de_jerez = {
        "name": "Flor De Jerez",
        "creator": "The Black Cypress",
        "type": "Bright and Refreshing",
        "base": "rum",
        "ingredients": "1.5oz Amontillado, 0.75oz Lemon juice, 0.50oz Simple, 0.50oz Myers Rum, 0.25oz Apricot, 1 dash Angostura",
        "method": "Roll shake with a big rock (to foam). Strain into a coupe. No garnish."
    },
    familiar_spirit = {
        "name": "Familiar Spirit",
        "creator": "The Black Cypress",
        "type": "Stirred and Spirit-Forward",
        "base": "bourbon",
        "ingredients": "2oz Bourbon, 0.50oz Uncle Val's, 0.3oz Brown Sugar, 0.20oz Strega, 1 dash Peach Bitters",
        "method": "Stir. Strain into a bucket with a clear rock. Orange twist."
    },
    southern_sun = {
        "name": "Southern Sun",
        "creator": "The Black Cypress",
        "type": "Stirred and Spirit-Forward",
        "base": "mezcal",
        "ingredients": "1.75oz Mezcal, 0.75oz Campari, 0.30oz Nonino, 0.30 Braulio, 2 dash Mole Bitters",
        "method": "Stir. Strain into a stemless glass. Heavy lime oil and lime twist."
    },
    rebel_yellow = {
        "name": "Rebel Yellow",
        "creator": "The Black Cypress",
        "type": "Stirred and Spirit-Forward",
        "base": "bourbon",
        "ingredients": "2oz Bourbon, 0.50oz Blanc Vermouth, 0.25oz Genepy, 0.25oz Pineapple syrup, 1 dash Grapefruit Bitters",
        "method": "Stir. Strain into a bucket with a cloudy rock. Lemon twist."
    },
    from_poland = {
        "name": "From Poland, with Love",
        "creator": "The Black Cypress",
        "type": "Stirred and Spirit-Forward",
        "base": "vodka",
        "ingredients": "1.5oz Zubrowka, 0.50oz Gin, 0.50oz Cocchi Americano, 0.50oz Luxardo Bianco",
        "method": "Stir. Strain into a coupe. Lemon oil and lemon twist."
    },
    rico_martinez = {
        "name": "Rico Martinez",
        "creator": "The Black Cypress",
        "type": "Stirred and Spirit-Forward",
        "base": "rum",
        "ingredients": "1.75oz White Rum, 1.25oz Cocchi Americano, 0.25oz Maraschino, 2 dash Lavender Bitters",
        "method": "Stir. Strain into a coupe. Delicately pour 0.15oz violette into the bottom. Lemon oil."
    },
    newport = {
        "name": "Newport",
        "creator": "The Black Cypress",
        "type": "Avante-Garde",
        "base": "mezcal",
        "ingredients": "1oz Reposado, 1oz Mezcal, 0.50oz Maple syrup, 0.25oz Branca Mentha, 2 dash Smoke Bitters",
        "method": "Stir. Strain into a bucket with a clear rock. Laphroaig float and mint."
    },
    pbnj = {
        "name": "PBNJ",
        "creator": "The Black Cypress",
        "type": "Avante-Garde",
        "base": "whiskey",
        "ingredients": "1.5oz Peanute-butter Rye, 1oz Strawberry syrup, 0.50oz Framboise, 0.25oz Lemon juice, egg white",
        "method": "Dry shake. Roll shake with a rock. Dry shake. Strain into a collins glass with collumn ice. Picked cherry garnish."
    }
];
