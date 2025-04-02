function buildStudents(studs) {
	// TODO This function is just a suggestion! I would suggest calling it after
	//      fetching the data or performing a search. It should populate the
	//      index.html with student data by using createElement and appendChild.
}

function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	// TODO Implement the search
let StuentData
fetch("https://cs571.org/rest/s25/hw2/students", {
	headers: {
		"X-CS571-ID": "bid_fb34c9765178678407919c186f850e03b5be03f9f4383f3cfaac4eb4af6f8e44"
	}
})
.then(res => res.json())
.then(StuentData => 
	{	document.getElementById("num-results").innerText = StuentData.length
		for (student of StuentData){
			const div = document.createElement("div")
			const name = document.createElement("h1")
			const major = document.createElement("p")
			const intro = document.createElement("p")
			const numinterest = document.createElement("p")
			const interests = document.createElement("ul")
			for (let i of student.interests){
				const interest = document.createElement("li")
				interest.innerText = i
				interests.appendChild(interest)
			}
			name.innerText = student.name.first + " " + student.name.last
			intro.innerText = student.name.first+" is taking "+ student.numCredits+" and is"+(student.fromWisconsin?"":"NOT")+" from Wisconsin"
			major.innerText = student.major
			numinterest.innerText = "they have " + student.interests.length + " interests including...."
			div.appendChild(name)
			div.appendChild(major)
			div.appendChild(intro)
			div.appendChild(numinterest)
			div.appendChild(interests)
			
			document.getElementsByTagName("body")[0].appendChild(div)
	}



	})

}
document.getElementById("search-btn").addEventListener("click", handleSearch);