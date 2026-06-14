//Represente nos produits de base
var productDatas = [
    {
        id: 1,
        designation: "Casque Facebook VR",
        price: 189.80,
        description: "Un casque de réalité virtuelle pour une expérience immersive.",
        image: "product1.jpg",
        imagePath: "../../images/shop/products/",
        stock: 5,
        isFavorite: false
    },
    {
        id: 2,
        designation: "Apple Watch",
        price: 199.99,
        description: "Une montre connectée avec de nombreuses fonctionnalités.",
        image: "product2.jpg",
        imagePath: "../../images/shop/products/",
        stock: 10,
        isFavorite: false
    },
    {
        id: 3,
        designation: "MacBook Neo",
        price: 900.99,
        description: "Un ordinateur portable puissant pour un travail efficace.",
        image: "product3.jpg",
        imagePath: "../../images/shop/products/",
        stock: 3,
        isFavorite: false
    }
]

var cart = [];

var getProductById = (productId) => {
    var product = productDatas.find((u) => {
        if(u.id == productId){
            return u;
        }
    })

    return product;
} 

const createShopItem = (product) => {
    var products = document.querySelector(".products");

    //creation de la card product_card
    var productCardElement = document.createElement("div");
    productCardElement.classList.add("product_card");
    productCardElement.id = product.id;

    //creation de la section product_image
    var productImageElement = document.createElement("div");
    productImageElement.classList.add("product_image");
    //ajout de l'image du produit
    var productImage = document.createElement("img");
    productImage.src = `${product.imagePath}${product.image}`;
    productImage.alt = product.designation;

    //ajout de l'image à la section product_image
    productImageElement.appendChild(productImage);
    //ajout de la div product_image a Product_card
    productCardElement.appendChild(productImageElement);

    var productInfo = document.createElement('div');
    productInfo.classList.add("product_info");
    var productInfoDesignation = document.createElement('h3');
    productInfoDesignation.innerText = product.designation;
    var productInfoPrice = document.createElement('span');
    productInfoPrice.innerHTML = `$${product.price}`;
    var productCartButton = document.createElement('a');
    productCartButton.classList.add("product_button");
    productCartButton.href = "#";
    productCartButton.innerText = "Ajouter au panier";

    productCartButton.addEventListener('click', () => {
        addProductToCart(product.id);
    })

    productInfo.appendChild(productInfoDesignation);
    productInfo.appendChild(productInfoPrice);
    productInfo.appendChild(productCartButton);


    productCardElement.appendChild(productInfo)
    products.appendChild(productCardElement);
}

const createFullShopItems = (productDatas) => {
    productDatas.map((product) => {
        createShopItem(product);
    });
}

createFullShopItems(productDatas);


var addProductToCart = (productId) => {
    var product = getProductById(productId);
    updateCartCount(product);
    console.log(product);
}

var updateCartCount = (product) => {
    var cartCountElement = document.querySelector('#cart-count');
    cart.push(product);
    console.log(cart);
    cartCountElement.innerHTML = cart.length;
}


updateCartCount(cart);