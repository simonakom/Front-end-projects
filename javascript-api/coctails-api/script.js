//TO-DO:
//1. Selectu uzpildymas duomenimis ---------------------------> ✓ (functions fillSelectElements + fillSelect)
//2. Gauname visus gerimus is API ----------------------------> ✓ (function getAllDrinks)
//3. Juos atvaizduojame --------------------------------------> ✓ (function generateDrinksHTML)
//4. Atlikti filtracijas kokteiliams (selects) ---------------> ✓ (function filter)
    //4.1. Filtracija: Paieska pagal pavadinima --------------> ✓ (searchValue)
//5. Modalinio lango sukurimas -------------------------------> ✓ (functions openModal/generateModalContent)
//6. Modalinio lango uzdarymas -------------------------------> ✓ (functions closeModal/EscapeKey) (esc key+2 buttons+background)
//7. Atsitiktinio kokteilio gavimas su mygtuku "Challenge" ---> ✓ (functions randomCoctail)

const selectValues = {}; console.log(selectValues);  // objektas kuriam bus priksirti 3 laukai is "fillSelectElements" funkcijos
const drinksArray = []; console.log(drinksArray);

const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
categorySelectElement = document.querySelector("#category-select"),
glassSelectElement = document.querySelector("#glass-type-select"),
ingredientSelectElement = document.querySelector("#ingredient-select"),

dynamicDrinksElement = document.querySelector(".drinks"),

buttonSearch = document.querySelector ("#search"),
buttonReset = document.querySelector(".butonReset"),
buttonChallenge = document.querySelector("#challenge"),
note = document.querySelector(".note"),
noteOfDrinks = document.querySelector(".noteOfDrinks"),

modalOpen = document.querySelector (".modal-bg"),
modalCloseX = document.querySelector (".modal-close-button-x"),
modalClose = document.querySelector (".modal-close-button"),
modalCloseBackground = document.querySelector (".modal-bg"),

modalImg = document.querySelector (".modal-img"),
modalTitle = document.querySelector (".modal-title"),
modalCategory = document.querySelector ("#modal-category"),
modalAlcohol = document.querySelector ("#modal-alcohol"),
modalGlass = document.querySelector ("#modal-glass"),
modalIngredients = document.querySelector ("#modal-ingredients"),
modalRecipe = document.querySelector ("#modal-recipe"),

alphabetContainer = document.getElementById('alphabet-letters');

async function fillSelectElements (){  //Visi Fetchai apdorojami veinu metu (greitesnis apdorojimo budas)
const allUrls = [ //Gauname visus "promise" i viena masyva
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", 
    "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
    ];
    const allPromises = allUrls.map((url) => fetch(url).then((response) => response.json())); //Kiekvienam url atliekamas fetch + parsing pasunaudojant vienu masyvu "allUrls" ir map metodu (pasiema visus linkus ir pakeicia)
    console.log(allPromises); // Gauname array su 3 "uzbaigtais" promises (bet dar neturime ju reiksmiu)
    const allValues = await Promise.all(allPromises); //Kiekvieno promise reiksmes gausime su "promise.all" metodu. Prisideda await - to wait for promises to come true. Veliau allValues leis prieiti prie reiksmiu is API.
    console.log(allValues); // Gauname Array su 3 elementais: 1 - categories 2 - glass 3 - ingredients.

    // Atspindime 3 elementus 3 skirtinguose Array (using destructuring assignment):
    const [allCategories, allGlasses, allIngredients] = allValues; 
    console.log(allCategories); console.log(allGlasses); console.log(allIngredients);

    //Kad kitamuosisu veliau panaudoti, reikia iskelti is funkcijos (sukurti objekta (selectValues) kuriam bus priksirti 3 laukai)
    selectValues. categories = allCategories.drinks.map(categoryObj=>categoryObj.strCategory) //pridedam drinks ir "categories" tampa objektu masyvas(vietoj object+object+array). Kad nebutu nereikalingo objekto viduje masyvo, naudojam "map"(kad gauti tik kategoriju reiksmes be paties objekt "strCategory")
    selectValues.glasses = allGlasses.drinks.map(glass=>glass.strGlass) //visi glasses vienam masyve
    selectValues.ingredients = allIngredients.drinks.map(ingredients=>ingredients.strIngredient1) //visi ingridientai vienam masyve
    console.log(selectValues); 

    //kad suveiktu selectai (vietoj response.drinks pakeisti i nauja gauta reiksme allCategories.drinks)
    fillSelect(allCategories.drinks, categorySelectElement, "strCategory");
    fillSelect(allGlasses.drinks, glassSelectElement, "strGlass");
    fillSelect(allIngredients.drinks, ingredientSelectElement, "strIngredient1");
}

function fillSelect(properties, selectElement, strFieldName ){ //Uzpildo visus select su options pagal parametrus
    let dynamicHTML = '';
    for(const property of properties){
        // console.log(selectValues.categories); 
        dynamicHTML += `<option>${property[strFieldName]}</option>`;
    }
    selectElement.innerHTML += dynamicHTML; //"+" prideti kartu tai kas yra html
}

// funkcija kuri iskvies visus gerimus is API, kai gerimai bus gauti viename masyve  - bus daromas atvaizdavimas
async function getAllDrinks(){ // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
    const categoryDrinksUrls =  []; //masyvas uzpildomas ciklo eigoje
    for (const category of selectValues.categories){ //Cikle einame per visas turimas kategorijas "selectValues.categories"
        let dynamicUrl = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`; //Dinaminis url generuojamas kiekvienai kategorijai
        categoryDrinksUrls.push(dynamicUrl); //dinaminis url atsiranda tusciame masyve tam kad galeitume daryri promise.all
    }
    const allPromises = categoryDrinksUrls.map((url) => fetch(url).then(response => response.json())); //Kiekvienam url atliekamas fetch + parsing pasunaudojant vienu masyvu "categoryDrinksUrls" ir map metodu (pasiema visus linkus ir pakeicia)
    const allValues = await Promise.all(allPromises) //Kiekvieno promise reiksmes gausime su "promise.all" metodu. Prisideda await - to wait for promises to come true. Veliau allValues leis prieiti prie reiksmiu is API.

    console.log(categoryDrinksUrls);
    console.log(allPromises);
    console.log(allValues); //pagal kiekvina kategorija gerimus gauname kaip atskirus objektus

//kiekviena is gerimu objektu (kiekviena gerima) reikia issitraukti ir ideti i "drinksArray" masyva. Riekia iteruoti per keiviena objekta kuris yra masyve "allValues" pasunaudojant "forEach"
    allValues.forEach((value) => drinksArray.push(...value.drinks))
    //sukame cikla per kiekviena reiksme + callback funkcija pasakys kas atsitiks kiekvineo ciklo eigoje
    //(value) - kiekvineos reiksmes reiksme (vienas gerimu masyvas objekte). Kiekvienoje iteracijoje gauname viena eilute: po viena objekta kuriame yra masyvas ir tas objektas yra (value)
    // pushinti - isspredinti masyvo reiksme istraukta is objekto      
}

function generateDrinksHTML(drinks){  //dinaminis atvaizdavimas
    let dynamicHTML = "";
    for(let drink of drinks){ //iteruojama per kiekviena gerima
        //pakeiciami laukai yra pemami is "drinksArray"
        dynamicHTML += `   
        <div class="drink" onclick="openModal(${drink.idDrink})">
            <img src="${drink.strDrinkThumb}" alt="Coctail photo">
            <h2 class="drink-title mb-4">${drink.strDrink}</h2>
        </div>
        `;
    }
    dynamicDrinksElement.innerHTML = dynamicHTML; 
}

// Async nes filtracijos metu kreipsimes i API kad gauti gerimus pagal pateiktus filtrus (lokali filtracija kai nurodytas gerimo pavadinimas bet kai nurodyti selectai kreipiamasi i API )
async function filter (event){  //parametru nera nes juos gausim is select inputu. Funkcija suveikia tik kai paspaudziamas mygtukas
    const searchValue = coctailNameFilterElement.value, //is pirmo filtruos pagal name ir poto ziures pagal selectus
            category =  categorySelectElement.value,
            glass = glassSelectElement.value,
            ingredient = ingredientSelectElement.value;
        console.log(searchValue, category, glass, ingredient);

    let filteredArray = [...drinksArray] //daorme drinksArray (visu gerimu) kopija ir jame vyks filtracija  
    console.log(filteredArray);// matomi visi 412 gerimai

    if(searchValue){ //jei searchValue egzistuoja, tada vyksta filtracija
    filteredArray = filteredArray.filter((drinkObj) => drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase())) //filtro viduje yra callback funkcija kuri grazina true (paliekama reiksme) arba false reiksme (objektas pasalinamas is masyvo)
    } 
    console.log(filteredArray); // matomi isfiltruoti gerimai tik pagal pirma laukeli(pavadinima)

    if (category !== "Select Category..."){
    // 1. Is API gauname (fetch) gerimus pagal pasirinkta kategorija 
    // 2. Gauti gerimai turi id. Tikrinti аr "filteredArray" gerimu id egzistuoja bet viename is gautu fetcho "drinksOfCategory" gerimu. 
    // 3. Jei egzistuoja - reiksme paliekama "filteredArray" masyve (nes pasirinktoje kategorijoje jau egzistuoja toks gerimas su tokiu id)
    // 4. Jei NEegzistuoja - reiksme pasalinama is "filteredArray" masyvo
    console.log(category); // matome category name "string"

    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`); //pakeiciamas kategorijos pavadinimas. Awaite leidzia palaukti promise 
    const drinksOfCategory = await promise.json(); // is promise parsinami patys duomenys
    console.log(drinksOfCategory); // rezultatas: yra grazinamas masyvas su gerimu pavadinimais pagal tam tikra kategorija 

    // Sukamas ciklas per visus gerimus "filteredArray" masyve
    // Einama per kiekviena "drinksOfCategory" objekto reiksme (jau isfiltruota masyva) ir tikrinama ar sutampa jo id su id is "filteredArray"
    // Some metodas grazins true(reiksme paliekama masyve)/false (reiksme pasalinama is masyvo) reiksme. Jo viduje tikrinama ar bet vineas "drinksOfCategory" atitinka kriteriju = id yra toks pats kaip einamojo gerimo  "drink" id. 
    // filtro tikslas: istikinti kad gerimas egzistuoja abejuose masyvuose ir ji palikti
    // Masyvo metodas masyvo metode: (drink) - isfiltruoto masyvo gerimas / einamoji reiksme / value
    filteredArray = filteredArray.filter((drink) => drinksOfCategory.drinks.some((drinksOfCategory) => drink.idDrink === drinksOfCategory.idDrink));
        // .filter - išfiltruoja tuos elementus, kurie callback funkcijoje returnina false reikšmę. Gražina išfiltruotą masyvą;
        // .some - tikrina, ar bent vienas laukelis masyve atitinka kriterijų, jei taip - gražina true, kitu atveju false;
    }   
    console.log(filteredArray); // matomi isfiltruoti gerimai tik pagal 1-2 laukelius

    if (glass !== "Select Glass Type..."){
    console.log(glass); // matome glass name "string"

    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glass.replaceAll(" ", "_")}`); //pakeiciamas glass pavadinimas. Awaite leidzia palaukti promise 
    const drinksOfGlass = await promise.json(); // is promise parsinami patys duomenys
    console.log(drinksOfGlass); // rezultatas: yra grazinamas masyvas su gerimu pavadinimais pagal glass

    filteredArray = filteredArray.filter((drink) => drinksOfGlass.drinks.some((drinksOfGlass) => drink.idDrink === drinksOfGlass.idDrink));
    }
    console.log(filteredArray); // matomi isfiltruoti gerimai pagal 1-2-3 laukelius

    if (ingredient !== "Select Ingredient..."){           
    console.log(ingredient); // matome glass name "string"

    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.replaceAll(" ", "_")}`); //pakeiciamas ingredient pavadinimas. Awaite leidzia palaukti promise 
    const drinksOfIngredient = await promise.json(); // is promise parsinami patys duomenys
    console.log(drinksOfIngredient); // rezultatas: yra grazinamas masyvas su gerimu pavadinimais pagal ingredient

    filteredArray = filteredArray.filter((drink) => drinksOfIngredient.drinks.some((drinksOfIngredient) => drink.idDrink === drinksOfIngredient.idDrink));
    }
    console.log(filteredArray); // matomi isfiltruoti gerimai pagal 1-2-3-4 laukelius

    generateDrinksHTML(filteredArray); //kad atvaizduoti filtracijos rezultata reikia iskviesti "generateDrinksHTML" su parametru "filteredArray"
    //noteOfDrinks.style.display = 'none';
    //note.style.display = 'block';
    //buttonReset.style.display = 'none'; 

    // LocalStorage: filtru saugojimas (Pries validation, kitaip neklausys siu nurodymu)
    saveFiltersToLocalStorage();

    // Validations: jei joks filtras nepasirinktas
    // pridedamas event.target.id === 'search' ---> kad veiktu tik kai paspaudziama search button
    if (event.target.id === 'search' && !coctailNameFilterElement.value && categorySelectElement.value === 'Select Category...' && glassSelectElement.value === 'Select Glass Type...' && ingredientSelectElement.value === 'Select Ingredient...') {
        note.style.display = 'block';
        note.innerText = 'Please, use at least one filter field !';
        note.style.backgroundColor = 'rgba(250, 235, 215, 0.24);';
        return;
    } else {
        note.style.display = 'none';
        buttonReset.style.display = 'block'; 
        buttonReset.innerText = 'Reset Filters';
        noteOfDrinks.style.display = 'none';
    }
        // Jei nera jokiu results po filtering
    if (filteredArray.length === 0) {
        note.innerText = 'No results found with the selected filters 🥲';
        note.style.display = 'block';
        note.style.backgroundColor = 'rgba(250, 235, 215, 0.24);';
        return;
    } else {
        note.style.display = 'none';
        buttonReset.style.display = 'block'; 
        buttonReset.innerText = 'Reset Filters';
        noteOfDrinks.style.display = 'none';
    }
}

function reset() {
    coctailNameFilterElement.value = ''; 
    categorySelectElement.value = 'Select Category...'; 
    glassSelectElement.value = 'Select Glass Type...'; 
    ingredientSelectElement.value = 'Select Ingredient...';

    // Generuoti gėrimų HTML su pradiniu gėrimų masyvu drinksArray
    generateDrinksHTML(drinksArray);
    buttonReset.style.display = 'none';
    note.style.display = 'none';
    noteOfDrinks.style.display = 'none';

// LocalStorage: filtru salinimas
localStorage.removeItem('filters');
}

// atidarymas (kai paspaudziama an nuotraukas): ant kiekvieno gerimo su klase "drink" prideti onclick listener per js funkcija "generateDrinksHTML". Kaip parametra nurodyti id (${drink.idDrink})
// async- nes reikes daryti palaukima pries atvaizduojant duomenys
async function openModal (id) { //nurodomas id, nes pagal ji bus gaunami duomenis is API ir atvaizduojami modale
    modalOpen.style.display = "flex";
    const promise = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await promise.json();
    console.log(response);
    const drink = response.drinks[0];
    console.log(drink);
    generateModalContent(drink);
}
// openModal(); // only to check

function generateModalContent(drink) {
    modalImg.src = drink.strDrinkThumb;
    modalTitle.innerText = drink.strDrink;
    modalCategory.innerText = drink.strCategory;
    modalAlcohol.innerText = drink.strAlcoholic;
    modalGlass.innerText = drink.strGlass;
    modalRecipe.innerText = drink.strInstructions, drink.strInstructionsIT;

    let ingredientsHTML = ``;
    let ingredients = []; console.log(ingredients);
    let measure = []; console.log(measure);

    // ingredienttu  perkellimas i tuscius masyvus
    for (let i = 1; i <= 15; i++) {
        let ingredient = drink[`strIngredient${i}`];
        let count = drink[`strMeasure${i}`];

        if (ingredient) {
            count = count !== null ? count : "On your preference";
            ingredients.push(ingredient);
            measure.push(count);
        }
    }
    // Suka cikla per keikviena elementa masyve "Ingredients"
    //let index = 0;: Initialize a variable index to start the loop from the first element of the array.
    // index < ingredients.length;: Set the condition to continue the loop as long as the index is less than the length of the ingredients array (15).
    //index++: Increment the index after each iteration. (to do another circle)
    for (let index = 0; index < ingredients.length; index++) {
        ingredientsHTML += `
        <b class="col-sm-6 my-1">${ingredients[index]}</b>
        <p class="col-sm-6 my-1">${measure[index]}</p>`
    }
    modalIngredients.innerHTML = ingredientsHTML;
}

function closeModal () {
    modalOpen.style.display = "none";
}

function EscapeKey(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}

// Random drink from API 
async function randomCoctail() {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`);
    const object = await response.json();
    const drink = object.drinks[0];
    generateModalContent(drink);
    modalOpen.style.display = "flex";
}

// Link to Alkoholic/nonAlkoholic drinks
async function drinkAlcoholicOrNonAlcoholic() {
    const link =  modalAlcohol.innerText; // pasieme reiksme is html: Alkoholic or non alkoholic
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${link.replaceAll(" ","_")}`);
    const object = await response.json();
    const drinks = object.drinks;
    generateDrinksHTML(drinks); //atvaizduoja Alkoholic/non alkoholic gerimus pagal linka 
    modalOpen.style.display = "none";
}

// create alphabetical letters/numbers
function createAlphabeticalLinks() {
let letersHTML = ``;
let numbersHTML = ``;
for (let i = 65; i <= 90; i++) {
    let char = String.fromCharCode(i);
    letersHTML += `<a onclick="displayFirstSymbolDrinks('${char}')" href="#">${char}</a>`;
}
for (let i = 49; i <= 57; i++) {
    let char = String.fromCharCode(i);
    numbersHTML  += `<a onclick="displayFirstSymbolDrinks('${char}')" href="#">${char}</a>`;
}
    document.querySelector(".alphabet-letters").innerHTML = letersHTML;
    document.querySelector(".alphabet-numbers").innerHTML = numbersHTML ;
}

// display drinks by first letter/number
async function displayFirstSymbolDrinks(letter) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    const object = await response.json();
    console.log(object);
    const drinks = object.drinks;
    console.log(drinks);
    if (drinks !== null) {
        generateDrinksHTML(drinks);
        note.style.display = 'none';
        noteOfDrinks.style.display = 'none';
        buttonReset.style.display = 'block'; 
        buttonReset.innerText = 'See all drinks !';
    } else {
        generateDrinksHTML([]);
        noteOfDrinks.style.display = 'block';
        noteOfDrinks.style.backgroundColor = 'rgba(250, 235, 215, 0.24);';
        buttonReset.style.display = 'block'; 
        buttonReset.innerText = 'See all drinks !';
    }
}
  
async function initialization (){ //Aprasinejama kas atsitinka pasileidus kodui. Funkcija kuri igalins kitas funkcijas paeiliui kad aplikacija galetu veikti su minimaliais duomenimis. 
    await fillSelectElements(); //-uzpildomi selectai
    await getAllDrinks(); //-gaunami visi gerimai i "drinksArray" masyva
    loadFiltersFromLocalStorage();
    // generateDrinksHTML(drinksArray); //-gerimu dinaminis atvaizdavimas. Pasleptas nes pridetas "filter" (jame jau yra sita funkcija) -> tada greitesnis atvaizdavimas buna filtru po refresh page ir pirmomis sekundemis nera default atvaizdavimo o iskarto filtruotas atvaizdavimas
    filter();

    buttonSearch.addEventListener('click', filter); //prideti po filtracijos - tada kada butu pareje select values ("filter"-callback funkcija ir ja paduodame kaip kitamaji)
    buttonReset.addEventListener('click', reset);
    buttonChallenge.addEventListener("click", randomCoctail);

    modalCloseX.onclick = closeModal;
    modalClose.onclick = closeModal;
    document.addEventListener('keydown', EscapeKey); // esc - close
    modalCloseBackground.addEventListener('click', (event) => { // background - close
    if (event.target === modalCloseBackground) {
        closeModal();}
        });

    modalAlcohol.addEventListener('click', drinkAlcoholicOrNonAlcoholic);

    createAlphabeticalLinks()
}
initialization();

// -------------------LOCAL STORAGE-------------------------------
//1. Function "saveFiltersToLocalStorage()" -----> Sukurti funkcija kuri issaugo selected filter value to localStorage
//2. "saveFiltersToLocalStorage()" --------------> panaudoti ten kur filtrai (nes saugom filtrus) ir pries validation !!! (jei po validation tada neklauso tu nurodymu is validation)
//3. Function "loadFiltersFromLocalStorage()" ---> Sukurti funkcija kuri paims issaugotus filtrus if localStorage
//4. "loadFiltersFromLocalStorage()"  -----------> paliesti funkcija kartu su funkcija filter "Initalization" viduje. Tada galima istrinti "generateDrinksHTML(drinksArray)" kad butu gretesnis atvaizdavimas 
//5. kad mygtukas rest veiktu reikia pridet prie "reset" funkcijos ---> localStorage.removeItem('filters');

// Saugoti selected filter value to localStorage
function saveFiltersToLocalStorage() {
    localStorage.setItem('coctailNameFilter', coctailNameFilterElement.value);
    localStorage.setItem('categorySelect', categorySelectElement.value);
    localStorage.setItem('glassSelect', glassSelectElement.value);
    localStorage.setItem('ingredientSelect', ingredientSelectElement.value);
}
// Uzkrauti selected filters from localStorage
function loadFiltersFromLocalStorage() {
    coctailNameFilterElement.value = localStorage.getItem('coctailNameFilter') || '';
    categorySelectElement.value = localStorage.getItem('categorySelect') || 'Select Category...' ;
    glassSelectElement.value = localStorage.getItem('glassSelect') || 'Select Glass Type...';
    ingredientSelectElement.value = localStorage.getItem('ingredientSelect') || 'Select Ingredient...';     
}
