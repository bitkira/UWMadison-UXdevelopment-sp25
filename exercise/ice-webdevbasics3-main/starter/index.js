// This is where your JS goes!
import { CS571_ID } from '../../../config.js';

fetch('https://cs571.org/rest/s25/ice/chili', {
    headers: {
        "X-CS571-ID": CS571_ID // You may hardcode your Badger ID instead.
    }
})
.then(res => {
    console.log(res.status, res.statusText);
    if(res.status === 200) {
        return res.json();
    } else {
        throw new Error();
    }
})
.then(data => {
    console.log(data)

    console.log("The 5 star")

    let review = data.reviews
    console.log(review.filter(r => r.rating === 5).map(r => r.txt))

    console.log(data.recipe.map(init => init.split(":")))
    
})
.catch(err => {
    alert("Uh oh! Something went wrong. Are you logged in with your Badger ID?")
})