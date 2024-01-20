// Priega prie kintamuju is scripto "products": console.log (products);
// JS kodas skirtas atlikti CRUD veiksmams;
// Produktu atvaizdavimas yra per JS - atvaizduojami html tbody;

// Html elements:
const dynamicDataElement = document.getElementById("dynamic-data"),
    titleInputElement = document.getElementById("title"),
    priceInputElement = document.getElementById("price"),
    stockInputElement = document.getElementById("stock"),
    brandInputElement = document.getElementById("brand"),
    categoryInputElement = document.getElementById("category"),
    submitButtonElement = document.getElementById("submit"),
    addResult = document.getElementById ("add-result"),

    modalElement = document.getElementById("productInfo"),
    photoElement = document.getElementById("imageUrl"),
    discountElement = document.getElementById("discount"),
    ratingElement = document.getElementById("rating"),
    descriptionElement = document.getElementById("description"),

    filterNameElement = document.getElementById("filterName"),
    filterBrandElement = document.getElementById("filterBrand"),
    filterPriceFromElement = document.getElementById("filterPriceFrom"),
    filterPriceToElement = document.getElementById("filterPriceTo"),
    filterCategoryElement = document.getElementById("filterCategory"),
    filterDiscountElement = document.getElementById("filterDiscount"),
    filterDescriptionElement  = document.getElementById("filterDescription"),
    resetFiltersButton = document.getElementById("resetFilters");

let currentId = 31;

//Filtering:
filterNameElement.onkeyup = filter; 
filterBrandElement.onkeyup = filter; 
filterPriceFromElement.onkeyup = filter; 
filterPriceToElement .onkeyup = filter; 
filterDescriptionElement.onkeyup = filter;
filterDiscountElement.onkeyup = filter;
filterCategoryElement.addEventListener('change', filter);

function filter (){
let productName = filterNameElement.value.toLowerCase();
let brandName = filterBrandElement.value.toLowerCase();
let minPrice = +filterPriceFromElement.value;
let maxPrice = +filterPriceToElement.value;
let discountNumber = +filterDiscountElement.value
let descriptionText =  filterDescriptionElement.value;
let categoryName = filterCategoryElement.value.toLowerCase();

let filteredArray = products.filter((product) => product.title.toLowerCase().includes (productName));
filteredArray = filteredArray.filter((product) => product.brand.toLowerCase().includes (brandName));
filteredArray = filteredArray.filter ((product) => product.price >= minPrice);
if (maxPrice !== 0){
    filteredArray = filteredArray.filter ((product) => product.price <= maxPrice);
}
filteredArray = filteredArray.filter ((product) => product.discountPercentage >= discountNumber);
filteredArray = filteredArray.filter ((product) => product.description.toLowerCase().includes (descriptionText));
filteredArray = filteredArray.filter ((product) => {
    return categoryName === 'choose...' || product.category.toLowerCase().includes(categoryName);
    });

getTableContents (filteredArray);
console.log(filteredArray);
}

resetFiltersButton.addEventListener('click', refreshPage);
function refreshPage() {
location.reload();
}

// READ - kiekvieno produkto atvaizdavimas lenteleje
function getTableContents (productsArray) {
    let dynamicHTML = ``;
// Einamasis vienas objektas "product" imtas is masyvo "products" ir ciklas kartojasi 30kartu
for (const product of productsArray) {
    //Yra sukuriamas papildomai delete button (tik cia) ir jam priskiriama delete funkcija. Button duoda nuorodo i button id kuri reikia istrinti. Id lieka unikalus visada.
    //Yyra sukuriamas papildomai update button (tik cia) ir jam priskiriama setEdit funkcija. Kai nusetinsime editinima kazkuriam produktui - tada visas reiskmes is produkto perkeliamos i imputus.
        dynamicHTML += `<tr>
            <td onclick="showaModal(${product.id})">${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>${product.brand}</td>
            <td>${product.category}</td>
            <td>
                <button class="btn btn-default" id="delete" onclick="deleteProduct(${product.id})"style="margin-bottom: 3px;">Delete</button>
                <button class="btn btn-default" id="update" onclick="setEdit(${product.id})" style="margin-bottom: 3px;">Update</button>
            </td>
    </tr>`;
}  
// ideti ciklo rezultata i html (console.log ([dynamicDataElement]));
dynamicDataElement.innerHTML = dynamicHTML; //jeigu prideti += tada prisides EXAMPLE eilute
};

// kad funkcija suveiktu ja reikia iskviesti (yra galimas automatinis funckijos sikvietimas apskliaudus funkcija ir uz jos ribu padejus skliaustelius).
getTableContents (products);

//MODAL: visas produkto objektas kuris bus tvaizduojamas lange
const showaModal = (id) =>{
let elementIndex = products.findIndex((value) => value.id === id); //gausime elemento indeksa (pozicija) masyve,
const product = products[elementIndex];

let dynamicHTML = 
`<div id="modalBody" style="width:100%; height: 100%;"><div style="max-width: 58%; margin: 0 auto">
<img src="${product.thumbnail}" class="my-3 logoSize rounded-5" alt="Product photo"/>
<div class="product-details">
    <div class="row">
        <span class="col-lg-3 fw-bold">Discount</span>
        <span class="col-lg-1">${product.discountPercentage}%</span>
    </div>
    <div class="row">
        <span class="col-lg-3 fw-bold">Rating</span>
        <span class="col-lg-9">${product.rating} out of 5 </span>
    </div>
    <div class="row">
        <span class="col-lg-3 fw-bold">Description </span>
        <span class="col-9">${product.description}</span>
    </div>
</div>

    <div class="d-flex align-items-center justify-content-center">
    <button type="button" class="btn btn-default px-5 my-4" id="submit" onclick="modalElement.close()">Close</button>
    </div>
</div></div>`;

modalElement.innerHTML = dynamicHTML;

// Kad paspaudus i background - isijungtu modal langas
document.querySelector("#modalBody").onclick = (event) => {   // kad butu du ciklai - window/background
    event.stopPropagation();     //kad neperduotu clicko i bacground 
    console.log("clicked on modal window")
}
modalElement.showModal();
} 
//Paspaudus ant modalinio background:
modalElement.onclick = () => {
    modalElement.close ();
    console.log ("cliclked on modal element")
}


// CREATE - funkcija sukuria nauja objekta i kuri isides input reiksmes 
const createNewRecord = (event) => {
//event.PreventDefault - kad puslapis nepersikrautu (dazniausiai naudojama su formomis kai nera nurodytas button type: button, nes tada automatiskai buna submit ir persikrauna)
event.preventDefault(); //console.log (event);
    const newProduct = {
        id: currentId,  //kiekvinas naujas pridetas elementas tures vis didesni id priklausomai nuo paskutnio elemento id.(iki modal prodejimo buvo id: products[products.length - 1].id + 1,)
        title: titleInputElement.value,
        description: descriptionElement.value,
        price: + priceInputElement.value, //kad nebutu stringas
        discountPercentage: +discountElement.value, //kad nebutu stringas
        rating: +ratingElement.value,
        stock: +stockInputElement.value,
        brand: brandInputElement.value,
        category: categoryInputElement.value,
        thumbnail: photoElement.value
    };

    // Get input values for validation:
    const title = titleInputElement.value;
    const brand = brandInputElement.value;
    const price = priceInputElement.value;
    const stock = stockInputElement.value;
    const category = categoryInputElement.value;
    const discountPrecentage = discountElement.value;
    const rating = ratingElement.value;
    const thumbnail = photoElement.value;
    const description = descriptionElement.value;
    // console.log(title), console.log(price), console.log(stock), console.log(brand), console.log(category)

    // Validations:
    if (!title || !price || !stock || !brand || !category || !discountPrecentage || !rating || !thumbnail || !description) {
        addResult.innerText = (`Please, fill in the complete form! \n Only number should be typed in Price/Stock/Discount/Rating`)
        addResult.style.display = 'block';
        addResult.style.backgroundColor = '#cf7a847f';
        return;
    } else {
        addResult.style.display = 'none';
    }

    if (category == '' || category === 'Choose...') {
        addResult.innerText =  ('Please select a category!');
        addResult.style.display = 'block';
        addResult.style.backgroundColor = '#cf7a847f';
        return;
    } else {
        addResult.style.display = 'none';
    }

    // Validations: Duplicate product check is performed based on product details.
    const duplicateProduct = products.find((existingProduct) =>
        existingProduct.title.toLowerCase() === newProduct.title.toLowerCase() &&
        existingProduct.price === newProduct.price &&
        existingProduct.stock === newProduct.stock &&
        existingProduct.brand.toLowerCase() === newProduct.brand.toLowerCase() &&
        existingProduct.category === newProduct.category &&
        existingProduct.discountPrecentage === newProduct.discountPrecentage &&
        existingProduct.rating === newProduct.rating &&
        existingProduct.thumbnail === newProduct.thumbnail &&
        existingProduct.description === newProduct.description
    );

    if (duplicateProduct) {
    addResult.innerText = `A product with the same details already exists!`;
    addResult.style.display = 'block';
    addResult.style.backgroundColor = '#cf7a847f';
    return;
    }

    // prie "products" masyvo prideti nauja produkta
    products.push(newProduct);
    currentId++;

    // palikti inputus tuscius
    titleInputElement.value = "";
    priceInputElement.value = "";
    stockInputElement.value = "";
    brandInputElement.value = "";
    categoryInputElement.value = "";
    photoElement.value = "";
    ratingElement.value = "";
    discountElement .value = "";
    descriptionElement .value = "";

    //Pakeisti alert teksta
    addResult.style.display = 'block';
    addResult.innerText = 'New element has been successfully added!';
    //kad pakeisti spalva
    addResult.style.backgroundColor = '#76cd7e7f';

    // kad table atsinajunitu su naujU elementu, reikia vel iskviesti atvaizdavimo funkcija
    getTableContents (products);
}; 

// Kai mygtukas yra spaudziamas - issikviecia funkcija
submitButtonElement.onclick = createNewRecord;

// DELETE - Sukurti nuaja delete button ir istrina elementa pagal jo id(parametras)
const deleteProduct = (id) => {
// Unikalus/nesikartojantis ID. kad suzinoti elemento vieta masyve - naudoti findindex. Funkcija("value"- kiekvieno producto reiksme): joje ieskome produkto kurio id atitnka auksciau(deleteProducts) nurodyta id.
let elementIndex = products.findIndex((value)=>value.id === id);
// console.log(elementIndex); 
products.splice(elementIndex,1);

//Pakeisti alert teksta
addResult.style.display = 'block';
addResult.innerText = 'Selected element has been successfully deleted!';
//kad pakeisti spalva
addResult.style.backgroundColor = '#76cd7e7f';

// kad table atsinajunitu su istrintu elementu, reikia vel iskviesti atvaizdavimo funkcija
getTableContents (products);
};

// UPDATE - Sukurti nuaja update button
// Svarbus prie update: kai neesame update rezime (nepaspaustas mygtukas) tada yra false. Kaip paspaudziam, rezimas keiciasi i "true".
let editMode = false; 
let currentProduct;

// Back to Initial state: kai updatinimas bus baigtas, grizti prie default vaizdo
const updateProduct = (event)=>{
event.preventDefault();

// Check for duplicates before updating
const updatedTitle = titleInputElement.value;
const updatedPrice = +priceInputElement.value;
const updatedStock = +stockInputElement.value;
const updatedBrand = brandInputElement.value;
const updatedCategory = categoryInputElement.value;
const updatedThumbnail = photoElement.value;
const updatedRating = +ratingElement.value;
const updatedDiscountPrecentage = +discountElement.value;
const updatedDescription = descriptionElement.value;

const duplicateProduct = products.find(
    (existingProduct) =>
        existingProduct.id !== currentProduct &&
        existingProduct.title.toLowerCase() === updatedTitle.toLowerCase() &&
        existingProduct.price === updatedPrice &&
        existingProduct.stock === updatedStock &&
        existingProduct.brand.toLowerCase() === updatedBrand.toLowerCase() &&
        existingProduct.category === updatedCategory &&
        existingProduct.thumbnail === updatedThumbnail &&
        existingProduct.rating === updatedRating &&
        existingProduct.discountPercentage === updatedDiscountPrecentage &&
        existingProduct.description === updatedDescription
);

if (duplicateProduct) {
    addResult.innerText = `A product with the same details already exists!`;
    addResult.style.display = 'block';
    addResult.style.backgroundColor = '#cf7a847f';
    return;
}

// Continue with the update if no duplicates found
// //reiskme bus tokia kokia inpute
products[currentProduct].title = updatedTitle;
products[currentProduct].price = updatedPrice;
products[currentProduct].stock = updatedStock;
products[currentProduct].brand = updatedBrand;
products[currentProduct].category = updatedCategory;
products[currentProduct].thumbnail = updatedThumbnail;
products[currentProduct].rating = updatedRating;
products[currentProduct].discountPercentage = updatedDiscountPrecentage;
products[currentProduct].description = updatedDescription;

// Validations:
if (!updatedTitle || !updatedPrice || !updatedStock || !updatedBrand || !updatedCategory || !updatedThumbnail || !updatedRating || !updatedDiscountPrecentage || !updatedDescription ) {
addResult.innerText = (`Please, fill in the complete form! \n Only number should be typed in Price/Stock/Discount/Rating`)
addResult.style.display = 'block';
addResult.style.backgroundColor = '#cf7a847f';
return;
} else {
    addResult.style.display = 'none';
}

if (updatedCategory == '' || updatedCategory === 'Choose...') {
    addResult.innerText =  ('Please select a category!');
    addResult.style.display = 'block';
    addResult.style.backgroundColor = '#cf7a847f';
    return;
} else {
    addResult.style.display = 'none';
}

currentProduct = undefined;
editMode = false; 
submitButtonElement.onclick = createNewRecord;
//Pakeisti mygtuko teksta
submitButtonElement.innerText = 'Submit';
//kad pakeisti naujo update button spalva (per klase- submitButtonElement.classList.add/remove('btn-primary');
submitButtonElement.style.backgroundColor = '#6687b3';

// palikti inputus tuscius
titleInputElement.value = "";
priceInputElement.value = "";
stockInputElement.value = "";
brandInputElement.value = "";
categoryInputElement.value = "";
photoElement.value = "";
ratingElement.value = "";
discountElement .value = "";
descriptionElement .value = "";

 //Pakeisti alert teksta
addResult.style.display = 'block';
addResult.innerText = 'Selected element has been successfully updated!';
//kad pakeisti spalva
addResult.style.backgroundColor = '#76cd7e7f';

getTableContents (products);
};

// Edit state: elemento atnaujinimas. Bus editinamas tam tikras produktas ir jo id yra (id):
const setEdit = (id) => {
//suradome to produkto indeksa masyve (pagal id)
let elementIndex = products.findIndex(value=>value.id === id);
//gauti pati produkta(jo reiksme). Pagal indeksa susirandame kuris produktas bus redaguojamas
const product = products[elementIndex]; //console.log(product)
//kad visos reiksmes is pasirinkto produkto atsirastu inpute
titleInputElement.value = product.title;
priceInputElement.value = product.price;
stockInputElement.value = product.stock;
brandInputElement.value = product.brand;
categoryInputElement.value = product.category;
photoElement.value = product.thumbnail;
ratingElement.value = product.rating;
discountElement.value = product.discountPercentage;
descriptionElement .value = product.description;

//Pakeisti mygtuko teksta
submitButtonElement.innerText = 'Update';
//kad pakeisti naujo update button spalva (per klase-  submitButtonElement.classList.add/remove('btn-primary');
submitButtonElement.style.backgroundColor = '#6687b3';
//priskirti mygtukui funkcija
submitButtonElement.onclick = updateProduct;

//elemento pozicija masyva kuria redaguosim
currentProduct = elementIndex; 

editMode = true; 
};