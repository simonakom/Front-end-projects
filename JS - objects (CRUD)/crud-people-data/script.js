//local storage
console.log(localStorage.getItem("people")); //patikrinti ar egzistuoja masyvas (people) ir kokia to reiksme(jei neegzituoja-null reiksme)

//patikrinti ar kazkada buvo uzeita i si websaita, jie ne, yra sukuriamas irasas:
if (!localStorage.getItem("people")){
    //jei tokio "key" people nera, laukelis buvo neuzpildytas, tada priskirti pradine reiksme siame local storage
    //Tuscio masyvo issaugoti negalima.Tik teksines strnig reiksmes. Tad reikia prideti kabutes ('[]') arba JSON
    localStorage.setItem("people", JSON.stringify([]));
} 
//Jeigu nusetiname zmogui reiksme, kita karta turetume gauti ta reiksme (is localstorage) i people masyva (kai yra apsilankymas, turime gauti visu zmomiu irasus is localstorage):
//irasus gauname string formatu - JASON.parse keicia string i objekta
const people = JSON.parse (localStorage.getItem("people")) 
 
//Kai yra atnaujinamas pats masyvas- reikia atnaujiti localstorage esancius duomenys ----> ziureti prie create, delete,update

//kad atvaizduoti:
generateTableContent (people)

// const people = []; //An array to store information about people. is hidden as there is local storage
const allowedNationalities = ['US', 'CANADA', 'UK', 'AUSTRALIA', 'FRANCE', 'GERMANY', 'JAPAN'];

                    /* *currentNumeration disabeled as after deleting 2no. contact, new contact should have 2id but it has 3id. Numeration is wrong: 1,3,4,5...
                    let currentNumeration= +localStorage.getItem("currentNumeration"); //A variable to keep track of the current numeration for each person.*/
                    /*to have right numeration in storage with currentNumeration style:
                    if(!localStorage.getItem('currentNumeration'))
                    localStorage.setItem("currentNumeration", "1");*/


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

filterNameElement = document.getElementById ("filterNameInput")
filterLastNameElement = document.getElementById ("filterLastNameInput")
filterAgeElement = document.getElementById ("filterAgeInput")
filterNationalityElement = document.getElementById ("filterNationalityInput")
resetFiltersButton = document.getElementById('resetFilters');

modalElement = document.getElementById('productInfo')

//FILTER: if Arrey is same for each input

filterNameElement.onkeyup = filter; 
filterLastNameElement.onkeyup = filter; 
filterAgeElement.onkeyup = filter; 
filterNationalityElement.onkeyup = filter; 

function filter () {
    let personName = filterNameElement.value.toLowerCase();
    let personLastName = filterLastNameElement.value.toLowerCase();
    let personAge = +filterAgeElement.value;
    let personNationality = filterNationalityElement.value.toLowerCase();
 
    let filteredArrey = people.filter((person) => person.firstName.toLowerCase().includes (personName));
    filteredArrey = filteredArrey.filter((person) => person.lastName.toLowerCase().includes (personLastName));
    filteredArrey = filteredArrey.filter((person) => person.age >= personAge);
    filteredArrey = filteredArrey.filter((person) => person.nationality.toLowerCase().includes (personNationality));

     generateTableContent  (filteredArrey);
}

resetFiltersButton.addEventListener('click', refreshPage);
function refreshPage() {
location.reload();
}

//CREATE: When "Add" is pressed: 
buttonElement.addEventListener("click", ()=>{
    //When the "Add" button is clicked, a new person object is created from the form inputs.
    const person = {};
    person.firstName = document.getElementById(`firstNameInput`).value;
    person.lastName = document.getElementById(`lastNameInput`).value;
    person.age = +document.getElementById(`ageInput`).value;
    person.nationality = document.getElementById("nationalityInput").value.toUpperCase() 
    person.image = document.getElementById("imageInput").value;

    // console.log (person);

    // Validations:
    if (!person.firstName || !person.lastName || !person.age || !person.nationality || !person.image) {
        addResult.innerText = (`Something is missing....\n Please, fill in the complete form!`)
        addResult.style.backgroundColor = '#cf7a847f';
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (!/^[A-Za-z\s]+$/.test(person.firstName) || !/^[A-Za-z\s]+$/.test(person.lastName) || !/^\d+$/.test(person.age) || !/^[A-Za-z\s]+$/.test(person.nationality)) {
        addResult.innerText = (`Invalid input.\n Please use only letters for names/nationality, and numbers for age`);
        addResult.style.backgroundColor = '#cf7a847f';
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (person.age < 0 || person.age > 150) {
        addResult.innerText = (`Please, enter valid age`);
        addResult.style.backgroundColor = '#cf7a847f';
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (!allowedNationalities.includes(person.nationality)) {
        addResult.innerText = `Invalid nationality. Please enter a valid nationality: US, Canada, UK, Australia, France, Germany, Japan`;
        addResult.style.backgroundColor = '#cf7a847f';
        addResult.style.display = 'block';
        return;
    } else {
        addResult.style.display = 'none';
    }

// Validations: Duplicate person check is performed based on contact details.
const duplicatePerson = people.find((existingPerson) =>
    existingPerson.firstName.toLowerCase() === person.firstName.toLowerCase() &&
    existingPerson.lastName.toLowerCase() === person.lastName.toLowerCase()
);
if (duplicatePerson) {
    addResult.innerText = `A person with the same contact details already exists!`;
    addResult.style.display = 'block';
    addResult.style.backgroundColor = '#cf7a847f';
    return;
}
                    // *disabeled as after deleting 2no. contact, new contact should be have 2id but it has 3id. Numeration is wrong: 1,3,4,5... Instead using (person.number = people.length + 1).
                    // *person.number = currentNumeration; // assigns a number property to the person object.
                    // *currentNumeration++; // After assigning the number to the current person, currentNumeration is incremented by 1.
                    // localStorage.setItem("currentNumeration", "" + currentNumeration );

// This will assign a unique number to each person based on the length of the people array. The +1 is added because array indices start from 0, but you want to display a human-readable number starting from 1.
person.number = people.length + 1;

// If all checks pass, the person object is added to people array, and the table (generateTableContent) is updated.
people.push(person);

    //Pakeisti alert teksta
    addResult.style.display = 'block';
    addResult.innerText = 'New Person has been successfully added!';
    //kad pakeisti spalva
    addResult.style.backgroundColor = '#1a995750';

generateTableContent (people); //calls the generateTableContent function, passing the updated people array as an argument. The purpose of this function is to generate HTML content for displaying the list of people in a table. 
formElement.reset(); //resets the form (formElement) after adding a person. It clears the input fields in the form.
         
//Kai yra atnaujinamas pats masyvas- reikia atnaujiti localstorage esancius duomenys 
localStorage.setItem("people", JSON.stringify(people));
}); 

//READ: A function to generate HTML content for displaying the list of people in a table.
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
        <td onclick="showModal(${person.number})"><span id="photoLink_${person.number}" onclick="toggleLinkVisibility('${person.number}', '${person.image}')">Photo of ${person.firstName} ${person.lastName} </span></td>
        </tr>`;
    }
    const tbody = document.querySelector(`table tbody`)
    tbody.innerHTML = dynamicHTML;
}

//MODAL
const showModal = (num) => { 
    let foundIndexDelete = people.findIndex((person) => person.number == num);
    const person = people[foundIndexDelete];

    let dynamicHTML =`
    <div id="modalBody" style="width:100%; height: 100%";><div style="max-width: 70%; margin: 0 auto" class="text-center">
    <img src="${person.image}" alt="celebrity  foto" class="celebrityImage my-3">
    <div class="product-details">
        <div class="row">
            <span class="fw-bold bio">${person.firstName} ${person.lastName} - ${person.age} years, ${person.nationality} </span>
        </div>
        <button id="close-button" type="button" class="btn btn-primary btn_hover butn my-3 py-2 px-5" onclick="modalElement.close()">Close</button>
    </div> </div>`
    modalElement.innerHTML = dynamicHTML
    document.querySelector("#modalBody").onclick = (event) => {
        event.stopPropagation();
    }
    modalElement.showModal();
}

modalElement.onclick = () => {
    modalElement.close();
}

//DELETE: When "delete" is pressed: 
deleteElement.addEventListener("click", ()=>{
    const removeElementImput = document.querySelector ("#numberInput"); //representing the number of the person to be deleted.
    let num = +removeElementImput.value;//It retrieves the numerical value from the input and stores it in the variable num. Alos makes it string.
    removeElementImput.value = ''; //reiksmiu nusinulinimas
    deleteResult.style.display = "none";

    // findindex grazina indeksa pagal elelemnto reiksme. Jei toks nebuvo rastas, grazina -1.
    let foundIndexDelete = people.findIndex((person) => person.number == num) //The findIndex method is used to find the index of the person in the people array whose number matches the input value (num).If no matching person is found, foundIndexDelete is set to -1.

    //validation: checks are performed on the input value.
    if (!num || isNaN(num)) {
        deleteResult.innerText = "Please enter a number";
        deleteResult.style.display = "block";
        deleteResult.style.backgroundColor = '#cf7a847f';
        return;
    } else {
        deleteResult.style.display = 'none';
    }

    if(foundIndexDelete === -1){
        deleteResult.innerText = `Person with provided number do not exist`;
        deleteResult.style.display = 'block';
        deleteResult.style.backgroundColor = '#cf7a847f';
        return;
    } else {
        deleteResult.style.display = 'none';
    }

    //Pakeisti alert teksta
    deleteResult.style.display = 'block';
    deleteResult.innerText = 'Selected Person has been successfully deleted!';
    //kad pakeisti spalva
    deleteResult.style.backgroundColor = '#1a995750';

                        // (disabled as currentnumeration)*people.splice(foundIndexDelete,1);//If the validation checks pass, it uses splice to remove one element at the found index from the people array.

    // Remove the person from the array
    people.splice(foundIndexDelete, 1);
    // Reassign numbers to all people in the array
    people.forEach((person, index) => {
        person.number = index + 1;
    });
    generateTableContent(people);//It then calls the generateTableContent function to update the table display with the modified people array.

//Kai yra atnaujinamas pats masyvas- reikia atnaujiti localstorage esancius duomenys 
localStorage.setItem("people", JSON.stringify(people));
}); 

//declares a variable outside of any function, making it accessible globally. This variable will be used to store the index of the person with the specified number when the "Find" button is clicked.
let foundIndexUpdate;

//When "find" is pressed: 
findElement.addEventListener("click", ()=>{
    //Retrieves the value from the input field (numberInputUpdate) representing the number of the person to be found.
    const updateElementImput = document.querySelector("#numberInputUpdate");
    let updateNumber = updateElementImput.value;

//Uses the findIndex method to search for the person with the specified number in the people array and assigns the index to foundIndexUpdate.
foundIndexUpdate = people.findIndex((person) => person.number == updateNumber); // kazkur pasikete type tad reikia tik == kad updatinti kelis kartus.(seip type neturetu keistis....)(Tikrinti: console.log(foundIndexUpdate)/console.log(people)/console.log(updateNumber))

    //validation
    if (!updateNumber || isNaN(updateNumber)) {
        updateResult.innerText = "Please enter a number";
        updateResult.style.display = "block";
        updateResult.style.backgroundColor = '#cf7a847f';
        return;
    }
    if (foundIndexUpdate === -1) {
        updateResult.innerText = `Person with provided number do not exist`;
        updateResult.style.display = 'block';
        updateResult.style.backgroundColor = '#cf7a847f';
        return;
    } 
    //If the validation checks pass, it retrieves the found person from the people array using foundIndexUpdate.
    const foundPerson = people[foundIndexUpdate];

    // Populate the update form with the found person's data
    document.getElementById("updateFirstNameInput").value = foundPerson.firstName;
    document.getElementById("updateLastNameInput").value = foundPerson.lastName;
    document.getElementById("updateAgeInput").value = foundPerson.age;
    document.getElementById("updateNationalityInput").value = foundPerson.nationality;
    document.getElementById("updateImageInput").value = foundPerson.image;


    updateForm.style.display = 'block';//show form
    findElement.style.display = 'none';//hide find button
    updateElement.style.display = 'block';//show update button
    updateResult.style.display = "none";//hide alert notes

    //Pakeisti alert teksta
    updateResult.style.display = 'block';
    updateResult.innerText = 'Person has been found! Now you can update his data :)';
    //kad pakeisti spalva
    updateResult.style.backgroundColor = '#1a995750';
}); 

//When "update" is pressed: 
updateElement.addEventListener("click", () => {
    const updatedPerson = {};//An empty object is created to represent the updated person.
    //The properties of this object are populated with values from the update form inputs.
    updatedPerson.number = document.querySelector("#numberInputUpdate").value
    updatedPerson.firstName = document.getElementById("updateFirstNameInput").value;
    updatedPerson.lastName = document.getElementById("updateLastNameInput").value;
    updatedPerson.age = document.getElementById("updateAgeInput").value;
    updatedPerson.nationality = document.getElementById("updateNationalityInput").value.toUpperCase();
    updatedPerson.image = document.getElementById("updateImageInput").value;

    // console.log (updatedPerson);

   //Validation
    if (!updatedPerson.firstName || !updatedPerson.lastName || !updatedPerson.age || !updatedPerson.nationality) {
        updateResult.innerText = "Something is missing. Please fill in the complete form!";
        updateResult.style.backgroundColor = '#cf7a847f';
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    if (!/^[A-Za-z\s]+$/.test(updatedPerson.firstName) || !/^[A-Za-z\s]+$/.test(updatedPerson.lastName) || !/^\d+$/.test(updatedPerson.age) || !/^[A-Za-z\s]+$/.test(updatedPerson.nationality)) {
        updateResult.innerText = "Invalid input. Please use only letters for names/nationality, and numbers for age";
        updateResult.style.backgroundColor = '#cf7a847f';
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    if (updatedPerson.age < 0 || updatedPerson.age > 150) {
        updateResult.innerText = "Please enter a valid age";
        updateResult.style.backgroundColor = '#cf7a847f';
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    if (!allowedNationalities.includes(updatedPerson.nationality)) {
        updateResult.innerText = "Invalid nationality. Please enter a valid nationality: US, Canada, UK Australia, France, Germany, Japan";
        updateResult.style.backgroundColor = '#cf7a847f';
        updateResult.style.display = 'block';
        return;
    }  else {
        updateResult.style.display = 'none';
    }

    // Validations: Duplicate person check is performed based on contact details.
    const updatedFirstName = document.getElementById("updateFirstNameInput").value;
    const updatedLastName = document.getElementById("updateLastNameInput").value;
    
    const duplicatePerson = people.find((existingPerson) =>
        existingPerson.firstName.toLowerCase() === updatedFirstName.toLowerCase() &&
        existingPerson.lastName.toLowerCase() === updatedLastName.toLowerCase()
    );
    
    if (duplicatePerson) {
        updateResult.innerText = 'Updated details match another existing contact!';
        updateResult.style.backgroundColor = '#cf7a847f';
        updateResult.style.display = 'block';
        return;
    } else {
        updateResult.style.display = 'none';
    }

    // Update the person in the people array at the index foundIndexUpdate.
    people[foundIndexUpdate] = updatedPerson;

    //Pakeisti alert teksta
    updateResult.style.display = 'block';
    updateResult.innerText = 'Person has been successfully updated!';
    //kad pakeisti spalva
    updateResult.style.backgroundColor = '#1a995750';

    // Reset the form  (instead writing manually, use function)
    nullifyInputValues()
    // document.querySelector("#numberInputUpdate").value = "";
    // document.getElementById("updateFirstNameInput").value = "";
    // document.getElementById("updateLastNameInput").value = "";
    // document.getElementById("updateAgeInput").value = "";
    // document.getElementById("updateNationalityInput").value = "";

    updateForm.style.display = 'none'; //hide the update form
    findElement.style.display = 'block'; //show find button
    updateElement.style.display = 'none'; //hide update button
});

function nullifyInputValues (){
    document.querySelector("#numberInputUpdate").value = "";
    document.getElementById("updateFirstNameInput").value = "";
    document.getElementById("updateLastNameInput").value = "";
    document.getElementById("updateAgeInput").value = "";
    document.getElementById("updateNationalityInput").value = "";
    document.getElementById("updateImageInput").value = "";

        // Update the table with the modified data.
        generateTableContent(people);

        //Kai yra atnaujinamas pats masyvas- reikia atnaujiti localstorage esancius duomenys 
        localStorage.setItem("people", JSON.stringify(people));
}