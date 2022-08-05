const imagePath = "images/shop/thumbnails/";

const cart = [
    {
        image: imagePath + "ClownUmbrella_Thumb.jpg",
        name: "Clown Umbrella",
        description: "A porcelain Figurine of a clown holding an umbrella and riding a unicycle",
        quantity: 1,
        price: 29.95
    },
    {
        image: imagePath + "ElephantFigurines_Thumb.jpg",
        name: "Elephant Figurines",
        description: "White elephant ceramic figurines decorated with various fine color",
        quantity: 1,
        price: 18.95
    },
    {
        image: imagePath + "SquishyCaterpillar_Thumb.jpg",
        name: "Squishy Caterpillar",
        description: "A squashy, spiky, multi-colored caterpillar",
        quantity: 1,
        price: 9.99
    },
    {
        image: imagePath + "MiniCactus_Thumb.jpg",
        name: "Mini Cactus",
        description: "A miniature cactus in a pink vase",
        quantity: 1,
        price: 12.99
    },
    {
        image: imagePath + "Nanoblocks_Thumb.jpg",
        name: "Nano Nanoblocks",
        description: "The smallest connection blocks on the market",
        quantity: 1,
        price: 32.95
    },
    {
        image: imagePath + "CuteGoat_Thumb.jpg",
        name: "Cute Goat",
        description: "A small white ceramic goat",
        quantity: 1,
        price: 15.95
    },
    {
        image: imagePath + "LawnGnome_Thumb.jpg",
        name: "Lawn Gnome",
        description: "An angry lawn gnome holding a sign that says 'GO AWAY!'",
        quantity: 1,
        price: 7.95
    },
    {
        image: imagePath + "BobRoss_Thumb.jpg",
        name: "Bob Ross",
        description: "A Bob Ross plastic figure holding a small tree and paint palette",
        quantity: 1,
        price: 18.95
    }
];

// USING TEMPLATE LITERAL (WORKS!!! BEST WAY TO DO THIS! SHORTEST CODE!)
// https://codesandbox.io/s/dynamic-javascript-cards-4fmf8?file=/src/index.js:2364-2399
let returnedCard = ``; // This will be used to hold all of the HTML for each individual card

cart.forEach(function(individualCard) { // Loops through the array and returns an object for each item in the cart. We use the parameter "individualCard" to represent each card that is being looped through
    // If you want to see what each item rendered in the console, uncomment the following line:
    // console.log(individualCard);
    // We can now create the HTML code for our card. This is added to the template literal variable we created 2 steps above. We use template literals to populate the card because each card was returned as an object. This makes it so we can use dot notation
    returnedCard += `
    <div class="card">
        <img src="${individualCard.image}" alt="${individualCard.description}">
        <div class="cardText">
            <h4>${individualCard.name}</h4>
            <p>${individualCard.description}</p>
            <p>&dollar; ${individualCard.price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
    `;
    // Uncomment the following to see the output in the console
    // console.log(returnedCard);
});

// Next, we need to send the above HTML code to the shop.html page. The top line grabs the "cardContainer" which is a div in the shop.html page. This is where we want the cards to appear. The bottom line adds the HTML code we created above to the "cardContiner" in shop.html
const cardContainer = document.getElementById("cardContainer");
cardContainer.innerHTML = returnedCard;






// USING APPEND (WORKS!!)
/*let cardContainer = document.getElementById("cardContainer");

for (let i = 0; i < cart.length; i++) {
    let cardDiv = document.createElement("div");
    cardDiv.className += "card"; // Or you can use .classList.add()

    let img = document.createElement("img");
    img.src = cart[i].image;
    img.alt = cart[i].description;
    cardDiv.appendChild(img);

    let cardText = document.createElement("div");
    cardText.className += "cardText";

    let h4 = document.createElement("h4");
    let h4Text = document.createTextNode(cart[i].name);
    h4.appendChild(h4Text);

    let descriptionP = document.createElement("p");
    let description = document.createTextNode(cart[i].description);
    descriptionP.appendChild(description);

    let priceP = document.createElement("p");
    let price = document.createTextNode("\u0024 " + cart[i].price);
    priceP.appendChild(price);

    let button = document.createElement("button");
    let buttonText = document.createTextNode("Add to Cart");
    button.appendChild(buttonText);
 
    cardText.append(h4, descriptionP, priceP, button);

    cardDiv.appendChild(cardText);

    cardContainer.appendChild(cardDiv);
    
}*/






//INNERHTML DOESN'T WORK BECAUSE IT OVERWRITES ALL INFO IN THE DIV
/*for (let i = 0; i < cart.length; i++) {
    cardContainer.innerHTML = "<div class='card'><img src='" + cart[i].image + "' alt='" + cart[i].description + "'><div class='cardText'><h4>" + cart[i].name + "</h4><p>" + cart[i].description + "</p><p>&dollar; " + cart[i].price + "</p><button>Add to Cart</button>";
}*/


// USING FUNCTION - BOO!!
/* function constructCard(cardNumber) {
    let cardFinal = "<div class='card'><img src='" + cart[cardNumber].image + "' alt='" + cart[cardNumber].description + "'><div class='cardText'><h4>" + cart[cardNumber].name + "</h4><p>" + cart[cardNumber].description + "</p><p>&dollar; " + cart[cardNumber].price + "</p><button>Add to Cart</button>";
    
    cardContainer.appendChild(cardFinal);
}
for (let i = 0; i < cart.length; i++) {
    constructCard([i]);
}
*/