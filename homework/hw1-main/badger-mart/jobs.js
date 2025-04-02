function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
let flag = 0
    for (let i of document.getElementsByName("job")){
        if(i.checked === true){
            alert("Thank you for applying to be a " + i.value)
            flag = 1
        }
    }
if(flag===0)
    alert("Please select a job!")

}