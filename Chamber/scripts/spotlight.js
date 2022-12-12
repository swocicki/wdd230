// Store the URL of the JSON file
const requestURL = 'json/data.json';

// Get JSON data
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
         //console.table(jsonObject); // checking for valid response and data parsing
        const business = jsonObject['business'];
        // Filter by gold status
        let gold = business.filter(tier => tier.membership == 'Gold' || tier.membership== 'Silver');
        //console.table(gold); // check whether filter is working as it should
        // Call spotlight function for each element with class "spotSection"
        document.querySelectorAll('.spotSection').forEach(business => {
            spotlight(gold);
        });
});

// Select random business to spotlight
function spotlight(gold) {
    let spot = gold[Math.floor(Math.random() * gold.length)];
    //console.log(spot); //check whether random object is being called
    // Call display function
    display(spot);
}

// Create and display spotlights for selected business
function display(spot) {
    // Create elements to add to document
    let name = document.createElement('h4');
    let phone = document.createElement('p');
    let logo = document.createElement('img');

    //change the textContent property of the h4 and p elements to contain the business' names and phone numbers
    name.textContent = spot.name;
    phone.textContent = spot.phone;
    
    // Build the image attributes by using the setAttribute method for the src and alt attribute values
    logo.src = spot.imagesrc;
    logo.alt = spot.name;

    // Add the name, logo, and image elements
    document.querySelector('.spotlightImage').appendChild(logo);
    document.querySelector('.businessName').appendChild(name);
    document.querySelector('.businessPhone').appendChild(phone);
}

