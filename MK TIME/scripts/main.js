function addCart() {
    console.log("added to cart");
    // add to cart log - implementation possible on cart creation
}


// popover initalization from bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

// get product list array from image swap class
const productList = document.querySelectorAll('.image-swap');

// get buttons
const menBtn = document.querySelector('#men');
const womenBtn = document.querySelector('#women');
const specialBtn = document.querySelector('#special');

// add event listeners to buttons with inline function to change child contents
specialBtn.addEventListener('click', () => {
    for(const product of productList){
        product.children[0].textContent = "Romanson";
        product.children[1].textContent = "Dark Magic";
        product.children[2].src = "images/products/watch1.jpeg";
        product.children[3].textContent = "£359";
        product.children[4].textContent = "£246.99";
    }
});

// add event listeners to buttons with inline function to change child contents
womenBtn.addEventListener('click', () => {
    for(const product of productList){
        product.children[0].textContent = "Alpine";
        product.children[1].textContent = "Sapphire";
        product.children[2].src = "images/products/watch2.jpg";
        product.children[3].textContent = "";
        product.children[4].textContent = "£499.99";
    }
});

// add event listeners to buttons with inline function to change child contents
menBtn.addEventListener('click', () => {
    for(const product of productList){
        product.children[0].textContent = "Maurice de Mauriac";
        product.children[1].textContent = "Ice";
        product.children[2].src = "images/products/watch3.jpeg";
        product.children[3].textContent = "";
        product.children[4].textContent = "£849.99";
    }
});
