//patikrinti ar veikia ir matome objektus
console.log(products);

function generateStars(rating) { // rating parametras - skaicius 0-5
    const  fullStar = `<i class="bi bi-star-fill"></i>`,
	        halfStar = `<i class="bi bi-star-half"></i>`,
	        emptyStar = '<i class="bi bi-star"></i>';

    let dynamicHTML ="";
    const countOfFullStars = Math.floor(rating), //tiek kokia yra sveikoji dalis (Math.floor) skaiciaus (rating)
        halfStarShouldExist = rating - countOfFullStars >= 0.5, //True/False: jei nesveikoji skaiciaus dalis didesne nei 0.50 -  tada rodoma 4 su puse zvaizges
        emptyStarCount =  halfStarShouldExist ? 4-countOfFullStars : 5-countOfFullStars  // Bolean: jei (halfStarShouldExist) yra true, tada 4-c(ountOfFullStars), priesingu atveju jei puses zvaigzdutes nededam tada is 5-c(ountOfFullStars)

    //prideti zvaigzdes i dynamicHTML
    for (let i=0; i<countOfFullStars; i++) dynamicHTML+=fullStar;
    if (halfStarShouldExist) dynamicHTML+= halfStar;
    for (let i =0; i<emptyStarCount; i++) dynamicHTML+= emptyStar;
    return dynamicHTML;
}

function showProducts() {
	let dynamicHTML = "";
	for (const product of products) {
        //Einamasis produktas (product) yra (products) objekte. Kreipiames $ i einamaji produkta
		dynamicHTML += 
        //Math.round-sveikasis skaicius
        //toFixed(2) - du skaiciai po kablelio
        `<hr />
        <div class="product">
            <div class="product-image">
                <span class="discount">-${Math.round(product.discountPercentage)}%</span>
                <img src="${product.thumbnail}" alt="product image" class="product-img"/>
            </div>

            <div class="product-details">
                <h3 class="product-title">${product.title}</h3>
                <span class="stars">${generateStars(product.rating)}</span>
                <p class="product-description">${product.description}</p>
            </div>

            <div class="product-price">
                <div class="price"><strong>$${(product.price * ((100 - product.discountPercentage) / 100)).toFixed(2)}</strong><sup class="older-price">$${product.price.toFixed(2)}</sup></div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>`;
	}
    //Prie elemnto su klase container reikia prideti dynamicHTML:
	document.querySelector(".container").innerHTML = dynamicHTML;
}

showProducts(); //kad atsivazduotu reikia paleisti funkcija