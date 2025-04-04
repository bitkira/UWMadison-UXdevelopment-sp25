function buildStudents(studs) {
	// TODO This function is just a suggestion! I would suggest calling it after
	//      fetching the data or performing a search. It should populate the
	//      index.html with student data by using createElement and appendChild.
}
function interestSearch(Text){
	fetch("https://cs571.org/rest/s25/hw2/students", {
		headers: {
			"X-CS571-ID": "bid_fb34c9765178678407919c186f850e03b5be03f9f4383f3cfaac4eb4af6f8e44"
		}
	})
	.then(res => res.json())
	.then(StuentData => {
		document.getElementById("search-interest").value = Text
		website(StuentData)
	})
}
function handleSearch(e) {
	e?.preventDefault(); // You can ignore this; prevents the default form submission!

	// TODO Implement the search

fetch("https://cs571.org/rest/s25/hw2/students", {
	headers: {
		"X-CS571-ID": "bid_fb34c9765178678407919c186f850e03b5be03f9f4383f3cfaac4eb4af6f8e44"
	}
})
.then(res => res.json())
.then(StuentData => {
	website(StuentData)}
)
}

function website(StuentData){
	document.getElementById("students").innerHTML = ""
	// document.getElementById("search-interest").value = interest
	StuentData = StuentData.filter( data => (data.name.first + data.name.last).toLowerCase().includes(document.getElementById("search-name").value.trim().toLowerCase()) && data.major.toLowerCase().includes(document.getElementById("search-major").value.trim().toLowerCase()) && data.interests.some(interest => interest.toLowerCase().includes(document.getElementById("search-interest").value.trim().toLowerCase())))
	document.getElementById("num-results").innerText = StuentData.length
	const studentsContainer = document.createElement("div");
	studentsContainer.className = "row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4";
	for (student of StuentData){
		const div = document.createElement("div")
		div.className = "col mb-4"
		const name = document.createElement("h1")
		const major = document.createElement("p")
		const intro = document.createElement("p")
		const numinterest = document.createElement("p")
		const interests = document.createElement("ul")
		for (let i of student.interests){
			const interest = document.createElement("li")
			interest.innerText = i
			interest.addEventListener("click", function() {
				interestSearch(interest.innerText);
			})
			interests.appendChild(interest)
		}
		name.innerText = student.name.first + " " + student.name.last
		intro.innerText = student.name.first+" is taking "+ student.numCredits+" credits and is"+(student.fromWisconsin?"":" NOT")+" from Wisconsin."
		major.innerText = student.major
		major.style.fontWeight = 'bold'
		numinterest.innerText = "they have " + student.interests.length + " interests including...."
		div.appendChild(name)
		div.appendChild(major)
		div.appendChild(intro)
		div.appendChild(numinterest)
		div.appendChild(interests)
		studentsContainer.appendChild(div);

}
document.getElementById("students").appendChild(studentsContainer)}

document.getElementById("search-btn").addEventListener("click", handleSearch);