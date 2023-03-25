// connection to json file
fetch("./data.json")
// arrow function
.then(response => response.json())
.then(data => dataToHTML(data));

function dataToHTML(data)
{
    var imgWomenShoe1 = document.getElementById("imgWomenShoe1");
    var imgWomenShoe2 = document.getElementById("imgWomenShoe2");
    var imgWomenShoe3 = document.getElementById("imgWomenShoe3");
    var imgWomenShoe4 = document.getElementById("imgWomenShoe4");
    var imgWomenShoe5 = document.getElementById("imgWomenShoe5");
    var imgWomenShoe6 = document.getElementById("imgWomenShoe6");

    var txtWomenShoe1 = document.getElementById("txtWomenShoe1");
    var txtWomenShoe2 = document.getElementById("txtWomenShoe2");
    var txtWomenShoe3 = document.getElementById("txtWomenShoe3");
    var txtWomenShoe4 = document.getElementById("txtWomenShoe4");
    var txtWomenShoe5 = document.getElementById("txtWomenShoe5");
    var txtWomenShoe6 = document.getElementById("txtWomenShoe6");

    for (var i = 0; i < data.womens_shoes.length; i++)
    {
        let name = data.womens_shoes[i].name;
        let price = data.womens_shoes[i].price;
        let description = data.womens_shoes[i].description;
        let url = data.womens_shoes[i].url;
        let imgWomenShoe = document.createElement("div");
        imgWomenShoe.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtWomenShoe = document.createElement("p");
        txtWomenShoe.innerHTML = `<p class="card-text"> <strong>${name}</strong><br> ${price}</p> ${description}</p>`;
        if (data.womens_shoes[i].name === "Women's Nike Air Max Excee Sneakers")
        {
            imgWomenShoe1.appendChild(imgWomenShoe);
            txtWomenShoe1.appendChild(txtWomenShoe);
            } else if (data.womens_shoes[i].name === "Women's Hoka Clifton 8") {
            imgWomenShoe2.appendChild(imgWomenShoe);
            txtWomenShoe2.appendChild(txtWomenShoe);
            } else if (data.womens_shoes[i].name === "Women's Nike Court Vision Low Sneakers") {
            imgWomenShoe3.appendChild(imgWomenShoe);
            txtWomenShoe3.appendChild(txtWomenShoe);
            } else if (data.womens_shoes[i].name === "Women's Nordstrom Leia Platform Sneaker") {
            imgWomenShoe4.appendChild(imgWomenShoe);
            txtWomenShoe4.appendChild(txtWomenShoe);
            } else if (data.womens_shoes[i].name === "Women's Monterey Platform") {
            imgWomenShoe5.appendChild(imgWomenShoe);
            txtWomenShoe5.appendChild(txtWomenShoe);
            } else if (data.womens_shoes[i].name === "Women's Lugz Lear Sneaker") {
            imgWomenShoe6.appendChild(imgWomenShoe);
            txtWomenShoe6.appendChild(txtWomenShoe);
            }
        
    }
}