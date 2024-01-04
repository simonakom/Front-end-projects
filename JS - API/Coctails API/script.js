//TO-DO:
//1. Selectu uzpildymas duomenimis ✓
//2. Gauname visus gerimus is API  ✓
//3. Juos atvaizduojame  ✓
//4. Atlikti filtracijas kokteiliams
//5. Paieska pagal pavadinima
//6. Modalinio lango sukurimas
//7. Modalinio lango uzdarymas
//8. Atsitiktinio kokteilio gavimas su mygtuku "Challenge"

    // const categoriesArray = [];
    // console.log(categoriesArray);
    const selectValues = {};

    const drinksArray = [];
    console.log(drinksArray);

    const coctailNameFilterElement = document.querySelector("#coctail-name-filter"),
    categorySelectElement = document.querySelector("#category-select"),
    glassSelectElement = document.querySelector("#glass-type-select"),
    ingredientSelectElement = document.querySelector("#ingredient-select"),
    dynamicDrinksElement = document.querySelector(".drinks"),
    buttonSearch = document.querySelector ("#search")

    async function fillSelectElements (){ 
    //Visi Fetchai apdorojami veinu metu (greitesnis apdorojimo budas)
    const allUrls = [ //gauname visus "promise" i viena masyva
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list", 
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        ];
        const allPromises = allUrls.map((url) => fetch(url).then((response) => response.json())); //kiekvienam url atliekamas fetch, parsing
        console.log(allPromises); // gauname array su 3 "uzbaigtais" promises (bet dar neturime ju reikmes)
        const allValues = await Promise.all(allPromises); //Kiekvieno promise reiksmes gausime su "promise.all" metodu. Prisideda await - to wait for promises to come true. Veliau allValues leis prieiti prie reiksmiu is API.
        console.log(allValues); // Gauname Array su 3 elementais: 1 - categories 2 - glass 3 - ingredients.

        // Atspindime 3 elementus 3 skirtinguose Array (using destructuring assignment):
        const [allCategories, allGlasses, allIngredients] = allValues; 
        console.log(allIngredients);

        //Kad kitamuosisu veliau panaudoti, reikia iskelti is funkcijos (sukurti objekta (selectValues) kuriam bus priksirti 3 laukai)
        selectValues.categories = allCategories.drinks.map(categoryObj=>categoryObj.strCategory) //pridedam drinks ir "categories" tampa objektu masyvas(vietoj object+object+array). Kad nebutu nereikalingo objekto viduje masyvo, naudojam "map"(kad gauti tik kategoriju reiksmes be paties objekt "strCategory")
        selectValues.glasses = allGlasses.drinks.map(glass=>glass.strGlass) //visi glasses vienam masyve
        selectValues.ingredients = allIngredients.drinks.map(ingredients=>ingredients.strIngredient1) //visi ingridientai vienam masyve
        console.log(selectValues); 

        //kad suveiktu selectai (vietoj response.drinks pakeisti i nauja gauta reiksme allCategories.drinks)
        fillSelect(allCategories.drinks, categorySelectElement, "strCategory");
        fillSelect(allGlasses.drinks, glassSelectElement, "strGlass");
        fillSelect(allIngredients.drinks, ingredientSelectElement, "strIngredient1");


    // await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list") //kategoriju sarasas
    // .then((response) => response.json()) //json- tam kad nebutu headeriu   
    // .then((response) => {  
    //     fillSelect(response.drinks, categorySelectElement, "strCategory")
    //     categoriesArray.push(...response.drinks.map((value)=>value.strCategory)); //map: kad kiekviena reksme pasikeistu i stringa
    // })
    // .catch((error)=> console.log(error));
    // // .finally(() => console.log ("uzklausa baigta"));

    // await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")//glass sarasas
    // .then((response) => response.json()) 
    // .then((response) => fillSelect(response.drinks, glassSelectElement, "strGlass"))
    // .catch((error)=> console.log(error))

    // await fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")//ingredient sarasas
    // .then((response) => response.json()) 
    // .then((response) => fillSelect(response.drinks, ingredientSelectElement, "strIngredient1"))
    // .catch((error)=> console.log(error))
    }


    //Uzpildo visus select pagal parametrus
    function fillSelect(properties, selectElement, strFieldName ){
        let dynamicHTML = '';
        for(const property of properties){
            // console.log(category.strCategory); 
            dynamicHTML += `<option>${property[strFieldName]}</option>`;
            // categoriesArray.push(property.strFieldName);
        }
        // console.log(categoriesArray);
        selectElement.innerHTML += dynamicHTML; //prodeti ne tik nauja reiksme bet ir tai kas yra html
    }




    // funkcija kuris iskvies visus gerimus is API, kai gerimai bus gauti viename masyve  - bus daromas atvaizdavimas
    async function getAllDrinks(){ // https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink

        const fetchPromises = selectValues.categories.map(async (category) => { // su map einame per visas kategorijas in "selectValues.categories".Kiekvienai kategorijai sukuriamas pažadas naudojant async ir await su fetch funkcija, kad būtų galima gauti duomenis iš URL adreso.
            let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
            const response = await fetch(dynamicURL); //nereikia naudoti then metoda ir tiesiog galima pasiimti atsakyma
            return response.json();
             });
             console.log(fetchPromises);
             const responses = await Promise.all(fetchPromises); //Promise.all naudojamas laukti, kol bus išspręsti visi pažadai, esantys fetchPromises masyve.Taip užtikrinama, kad visos kategorijų užklausos būtų atliekamos vienu metu.
             console.log(responses);

             responses.forEach((answerFromServer) => {// asnwerFromServer- tai JSON atsakymas, gautas iš kiekvienos kategorijos API uzklauasos. Ciklas forEach iteruoja per kiekviena "asnwerFromServer" objekta is response array
             drinksArray.push(...answerFromServer.drinks);
             console.log(answerFromServer);
            });

        // for (const category of selectValues.categories){ //gauname kategorijas
        //      let dynamicURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category.replaceAll(" ", "_")}`;
        //      const response = await fetch(dynamicURL); //nereikia naudoti then metoda ir tiesiog galima pasiimti atsakyma
        //      const answerFromServer = await response.json();
        //         for(const drink of answerFromServer.drinks){
        //             drinksArray.push(drink)
        //         }
        //      console.log(dynamicURL);
        //      console.log(answerFromServer);
        // }
    }



    //dinamiskas atvaizdavimas
    function generateDrinksHTML(drinks){
        let dynamicHTML = "";
        for(let drink of drinks){
            dynamicHTML += `<div class="drink"><img src="${drink.strDrinkThumb}" alt="Coctail photo">
            <h2 class="drink-title mb-4">${drink.strDrink}</h2></div>`;
        }
        dynamicDrinksElement.innerHTML=dynamicHTML; 
    }

    // async nes filtracijos metu kreipsimes i API kad gauti gerimus pagal pateiktus filtrus (is select)
    async function filter (){  //parametru nera nes juos gausim is select inputu
        const searchValue = coctailNameFilterElement.value, //is pirmo filtruos pagal name ir poto ziures selectus
            category =  categorySelectElement.value,
            glass = glassSelectElement.value,
            ingredient = ingredientSelectElement.value
            // console.log(searchValue, category, glass, ingredient);

           let filteredArray = [...drinksArray] //daorme drinksArray (visu gerimu) kopija
           if(searchValue){
            filteredArray = filteredArray.filter((drinkObj) => drinkObj.strDrink.toLowerCase().includes(searchValue.toLowerCase()))
           }
           if (category !== "Select Category..."){
            
           }



           console.log(filteredArray);
           generateDrinksHTML(filteredArray);
    }


    //Funkcija kuri atvaiduoja visu selectu elementus
    async function initialization (){
        //1 initializazion fase - uzpildomi selectai
        await fillSelectElements();
        await getAllDrinks();
        generateDrinksHTML(drinksArray); 
        buttonSearch.addEventListener('click', filter) //prideti po filtracijos - tada kada butu pareje select values
        //2 initializazion fase - dinaminis gerimu atvaizdavimas. Is pirmo reikia gauti visas kategorijas i viena array.
    }



    initialization();