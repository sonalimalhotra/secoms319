// connection to json file
fetch("./data.json")
// arrow function
.then(response => response.json())
.then(data => dataToHTML(data));

function dataToHTML(data)
{
    var imgMenShoe1 = document.getElementById("imgMenShoe1");
    var imgMenShoe2 = document.getElementById("imgMenShoe2");
    var imgMenShoe3 = document.getElementById("imgMenShoe3");
    var imgMenShoe4 = document.getElementById("imgMenShoe4");
    var imgMenShoe5 = document.getElementById("imgMenShoe5");
    var imgMenShoe6 = document.getElementById("imgMenShoe6");

    var txtMenShoe1 = document.getElementById("txtMenShoe1");
    var txtMenShoe2 = document.getElementById("txtMenShoe2");
    var txtMenShoe3 = document.getElementById("txtMenShoe3");
    var txtMenShoe4 = document.getElementById("txtMenShoe4");
    var txtMenShoe5 = document.getElementById("txtMenShoe5");
    var txtMenShoe6 = document.getElementById("txtMenShoe6");

    for (var i = 0; i < data.mens_shoes.length; i++)
    {
        let name = data.mens_shoes[i].name;
        let price = data.mens_shoes[i].price;
        let description = data.mens_shoes[i].description;
        let url = data.mens_shoes[i].url;
        let imgMenShoe = document.createElement("div");
        imgMenShoe.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtMenShoe = document.createElement("p");
        txtMenShoe.innerHTML = `<p class="card-text"> <strong>${name}</strong><br> ${price}</p> ${description}</p>`;
        if (data.mens_shoes[i].name === "Men's Prague")
        {
            imgMenShoe1.appendChild(imgMenShoe);
            txtMenShoe1.appendChild(txtMenShoe);
            } else if (data.mens_shoes[i].name === "Men's Nike Air Max Excee Sneakers") {
            imgMenShoe2.appendChild(imgMenShoe);
            txtMenShoe2.appendChild(txtMenShoe);
            } else if (data.mens_shoes[i].name === "Men's Reebok Club C 85 Vintage Sneaker") {
            imgMenShoe3.appendChild(imgMenShoe);
            txtMenShoe3.appendChild(txtMenShoe);
            } else if (data.mens_shoes[i].name === "Men's Nike Court Vision Next Nature Mid Sustainable Sneakers") {
            imgMenShoe4.appendChild(imgMenShoe);
            txtMenShoe4.appendChild(txtMenShoe);
            } else if (data.mens_shoes[i].name === "Men's Cloudswift") {
            imgMenShoe5.appendChild(imgMenShoe);
            txtMenShoe5.appendChild(txtMenShoe);
            } else if (data.mens_shoes[i].name === "Men's Nike Air Max 270 Shoes") {
            imgMenShoe6.appendChild(imgMenShoe);
            txtMenShoe6.appendChild(txtMenShoe);
            }
        
    }
}