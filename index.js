const user = {
    firstName: "Patrick",
    lastName: "Scott",
    hobbies: ["programming", "piano"],
    listHobbies: function()
    {this.hobbies.forEach(function(hobby) {
        console.log(this.lastName)
        console.log(hobby)
    }, this);
    
    }
    
}
user.listHobbies();

//this in arrow functions will look for the closest
// function to use for this