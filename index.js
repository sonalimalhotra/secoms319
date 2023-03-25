// connection to json file
fetch("data.json")
// arrow function
.then(response => response.json())
.then(data => dataToHTML(data));
    


function dataToHTML(data)
{
    let mainContainer = document.getElementById("catalog");
    
    for (var i = 0; i == 0; i++)
    {
        let name = data.homepage[i].name;
        let description = data.homepage[i].description;
        let ourNames = data.homepage[i].ourNames;
        let url = data.homepage[i].url;
        // Define a HTML element
        let div= document.createElement("div");
        div.innerHTML = `
        <img src=${url} width="700"> <br> <br>
        <h3>${name}</h3>
        <h5>${ourNames}</h5>
        ${description} <br> <br>
        `;
        mainContainer.style.color = 'black';
        mainContainer.style.textAlign = 'center';
        // Append as a child.
        mainContainer.appendChild(div);
    }
    
    for (var i = 1; i < data.homepage.length; i++)
    {
        let name = data.homepage[i].name;
        let description = data.homepage[i].description;
        let ourNames = data.homepage[i].ourNames;
        let url = data.homepage[i].url;
        // Define a HTML element
        let div= document.createElement("div");
        div.innerHTML = `
        <h3>${name}</h3>
        <h5>${ourNames}</h5>
        ${description} <br>
        <img src=${url} width="700"> <br> <br>
        `;
        mainContainer.style.color = 'black';
        mainContainer.style.textAlign = 'center';
        // Append as a child.
        mainContainer.appendChild(div);
    }
}