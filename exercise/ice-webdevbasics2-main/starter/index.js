// This is where your JS goes!

// You can fetch data from https://cs571api.cs.wisc.edu/rest/s25/ice/chili
// When you are complete, you should also be able to fetch data from...
//  https://cs571api.cs.wisc.edu/rest/s25/ice/pasta
//  https://cs571api.cs.wisc.edu/rest/s25/ice/pizza
import { CS571_ID } from '../../../config.js';
fetch("https://cs571.org/rest/s25/ice/chili",
    {
        method: "GET",
        headers: {
            "X-CS571-ID": CS571_ID
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("Image").src = data.img.location
    })
