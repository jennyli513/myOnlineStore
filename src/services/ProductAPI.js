//This is the product file which store the products information

const products = [
    {
        id: "1",
        name: "Parc Shiraz",
        info: "Grange Shiraz 2006 Magnum 1500mL",
        price: 100,
        image: "./images/shiraz.jpg"
    },
    {
        id: "2",
        name: "Parc Red",
        info: "Grange 2006 750ml",
        price: 80,
        image: "./images/red_wine.jpg"
    },
    {
        id: "3",
        name: "Parc Sparkling",
        info: "Parc Hotel Gold Sparkling 750mL",
        price: 50,
        image: "./images/gold_sparkling.png"
    },
    {
        id: "4",
        name: "Parc White",
        info: "Parc Chardonnay 750mL",
        price: 60,
        image: "./images/white_wine.jpg"
    },
    {
        id: "5",
        name: "Parc Champagne",
        info: "Parc Champagne 750mL",
        price: 50,
        image: "./images/champagne.jpg"
    },
    {
        id: "6",
        name: "Parc Rose",
        price: 70,
        info: "Parc Hotel rose wine 750ml",
        image: "./images/rose_wine.jpg"
    }
];

const getProducts =() =>{
    return products;
}

//export the getProduct function
export { getProducts };