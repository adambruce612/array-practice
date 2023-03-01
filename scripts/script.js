const animals = ['pigs', 'goats', 'sheep'];
console.log(animals);
animals.push('dogs');
console.log(animals);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

//Add animal names to an array
//Get button element by ID to set up event listener.
const buttonNewName = document.getElementById("buttonNewName");
const ul = document.getElementById("namesList");
//Prompts the user to enter their pet's name.
const promptText = "Enter the name of your animal please.";
let animalName;
const getName = function() {
    animalName = prompt(promptText);
    while (animalName === "") {
        alert("Please enter a name or cancel.");
        animalName = prompt(promptText);
    } 
        return animalName;
}

const addAnimalName = function() {
    getName();
    const newLi = document.createElement("li");
    ul.append(newLi);
    newLi.textContent(animalName);
}

//Runs addAnimalName function when Add New Pet Name button is clicked. 
buttonNewName.addEventListener('click', addAnimalName);
