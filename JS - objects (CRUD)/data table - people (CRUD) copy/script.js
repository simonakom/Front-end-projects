const people = []; //An array to store information about people.
let currentNumeration= 1; //A variable to keep track of the current numeration for each person.
const allowedNationalities = ['USA', 'Canada', 'UK', 'Australia', 'France', 'Germany', 'Japan'];

//selecting HTML elements 
const buttonElement = document.querySelector ("#add-button");
const deleteElement = document.querySelector ("#delete-button");
const findElement = document.querySelector ("#find-id");
const updateElement = document.querySelector ("#update-button");

const formElement = document.querySelector("#form"); 
const updateForm = document.querySelector("#update-form"); 

const addResult = document.querySelector (".add-result");
const deleteResult = document.querySelector (".delete-result");
const updateResult = document.querySelector (".update-result");


//When "Add" is pressed: 
buttonElement.addEventListener("click", ()=>{
    
    //When the "Add" button is clicked, a new person object is created from the form inputs.
    const person = {};
    person.firstName = document.getElementById(`firstNameInput`).value;
    person.lastName = document.getElementById(`lastNameInput`).value;
    person.age = document.getElementById(`ageInput`).value;
    person.nationality = document.getElementById(`nationalityInput`).value;
    console.log (person);


    // Validations:
    if (!person.firstName || !person.lastName || !person.age || !person.nationality) {
        addResult.innerText = (`Something is missing....\n Please, fill in the complete form!`)
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (!/^[A-Za-z\s]+$/.test(person.firstName) || !/^\d+$/.test(person.age) || !/^[A-Za-z\s]+$/.test(person.nationality)) {
        addResult.innerText = (`Invalid input.\n Please use only letters for names/nationality, and numbers for age`);
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (person.age < 0 || person.age > 150) {
        addResult.innerText = (`Please, enter valid age`);
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (!allowedNationalities.includes(person.nationality)) {
        addResult.innerText = `Invalid nationality. Please enter a valid nationality: USA, Canada, UK, Australia, France, Germany, Japan`;
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

     // Duplicate person check is performed based on contact details.
     const duplicatePerson = people.find((existingPerson) =>
        existingPerson.firstName.toLowerCase() === person.firstName.toLowerCase() &&
        existingPerson.lastName.toLowerCase() === person.lastName.toLowerCase() &&
        existingPerson.age === person.age &&
        existingPerson.nationality.toLowerCase() === person.nationality.toLowerCase()
    );

    if (duplicatePerson) {
        addResult.innerText = `A person with the same contact details already exists!`;
        addResult.style.display = 'block';
        return;
        
    } 

        // If all checks pass, the person is added, and the table is updated.
        people.push(person);//adds the person object to the people array.

        person.number = currentNumeration; // assigns a number property to the person object.
        currentNumeration++; // After assigning the number to the current person, currentNumeration is incremented by 1. 

        generateTableContent (people); //calls the generateTableContent function, passing the updated people array as an argument. The purpose of this function is to generate HTML content for displaying the list of people in a table. 
        formElement.reset(); //resets the form (formElement) after adding a person. It clears the input fields in the form,
}); 

//A function to generate HTML content for displaying the list of people in a table.
function generateTableContent (people){
    let dynamicHTML = ``; 
    for(let person of people){
        dynamicHTML += 
        `<tr>
        <td>${person.number}</td>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.age}</td>
        <td>${person.nationality}</td>   
        </tr>`;
    }

    const tbody =document.querySelector(`table tbody`)
    tbody.innerHTML = dynamicHTML;
}

//When "delete" is pressed: 
deleteElement.addEventListener("click", ()=>{
    const removeElementImput = document.querySelector ("#numberInput"); //representing the number of the person to be deleted.
    let num = +removeElementImput.value;//It retrieves the numerical value from the input and stores it in the variable num.
    removeElementImput.value = ''; //reiksmiu nusinulinimas
    deleteResult.style.display = "none";

    // findindex grazina indeksa pagal elelemnto reiksme. Jei toks nebuvo rastas, garzina -1.
    let foundIndexDelete = people.findIndex((person) => person.number === +num) //The findIndex method is used to find the index of the person in the people array whose number matches the input value (num).If no matching person is found, foundIndexDelete is set to -1.


    //validation (checks are performed on the input value)
    if (!num || isNaN(num)) {
        deleteResult.innerText = "Please enter a number";
        deleteResult.style.display = "block";
        return;
    } else {
        deleteResult.style.display = 'none';
    }

    if(foundIndexDelete === -1){
        deleteResult.innerText = `Person with provided number do not exist`;
        deleteResult.style.display = 'block';
        return;
    } else {
        deleteResult.style.display = 'none';
    }


    people.splice(foundIndexDelete,1);//If the validation checks pass, it uses splice to remove one element at the found index from the people array.
    generateTableContent(people);//It then calls the generateTableContent function to update the table display with the modified people array.
}); 

//declares a variable outside of any function, making it accessible globally. This variable will be used to store the index of the person with the specified number when the "Find" button is clicked.
let foundIndexUpdate;


//When "find" is pressed: 
findElement.addEventListener("click", ()=>{
    
    //Retrieves the value from the input field (numberInputUpdate) representing the number of the person to be found.
    const updateElementImput = document.querySelector("#numberInputUpdate");
    let updateNumber = +updateElementImput.value;

//Uses the findIndex method to search for the person with the specified number in the people array and assigns the index to foundIndexUpdate.
foundIndexUpdate = people.findIndex((person) => person.number === updateNumber);

    //validation
    if (!updateNumber || isNaN(updateNumber)) {
        updateResult.innerText = "Please enter a number";
        updateResult.style.display = "block";
        return;
    }

    if (foundIndexUpdate === -1) {
        updateResult.innerText = `Person with provided number do not exist or you already updated it`;
        updateResult.style.display = 'block';
        return;
    } 

    //If the validation checks pass, it retrieves the found person from the people array using foundIndexUpdate.
    const foundPerson = people[foundIndexUpdate];

    // Populate the update form with the found person's data
    document.getElementById("updateFirstNameInput").value = foundPerson.firstName;
    document.getElementById("updateLastNameInput").value = foundPerson.lastName;
    document.getElementById("updateAgeInput").value = foundPerson.age;
    document.getElementById("updateNationalityInput").value = foundPerson.nationality;

    updateForm.style.display = 'block';//show form
    findElement.style.display = 'none';//hide update button
    updateElement.style.display = 'block';//show update button
    updateResult.style.display = "none";
}); 


//When "update" is pressed: 
updateElement.addEventListener("click", () => {
    
    const updatedPerson = {};//An empty object updatedPerson is created to represent the updated person.
    //The properties of this object are populated with values from the update form inputs.
    updatedPerson.number = document.querySelector("#numberInputUpdate").value
    updatedPerson.firstName = document.getElementById("updateFirstNameInput").value;
    updatedPerson.lastName = document.getElementById("updateLastNameInput").value;
    updatedPerson.age = document.getElementById("updateAgeInput").value;
    updatedPerson.nationality = document.getElementById("updateNationalityInput").value;
    console.log (updatedPerson);

   //Validation
    if (!updatedPerson.firstName || !updatedPerson.lastName || !updatedPerson.age || !updatedPerson.nationality) {
        updateResult.innerText = "Something is missing. Please fill in the complete form!";
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    if (!/^[A-Za-z\s]+$/.test(updatedPerson.firstName) || !/^\d+$/.test(updatedPerson.age) || !/^[A-Za-z\s]+$/.test(updatedPerson.nationality)) {
        updateResult.innerText = "Invalid input. Please use only letters for names/nationality, and numbers for age";
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    if (updatedPerson.age < 0 || updatedPerson.age > 150) {
        updateResult.innerText = "Please enter a valid age";
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    if (!allowedNationalities.includes(updatedPerson.nationality)) {
        updateResult.innerText = "Invalid nationality. Please enter a valid nationality: USA, Canada, UK, Australia, France, Germany, Japan";
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    // Update the person in the people array at the index foundIndexUpdate.
    people[foundIndexUpdate] = updatedPerson;

    // Update the table with the modified data.
    generateTableContent(people);

    // Reset the form  
    document.querySelector("#numberInputUpdate").value = "";
    document.getElementById("updateFirstNameInput").value = "";
    document.getElementById("updateLastNameInput").value = "";
    document.getElementById("updateAgeInput").value = "";
    document.getElementById("updateNationalityInput").value = "";

    updateForm.style.display = 'none'; //hide the update form
    findElement.style.display = 'block'; //show the update form
    updateElement.style.display = 'none'; //hide update button
});




