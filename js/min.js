let myhttp = new XMLHttpRequest();
let row = document.querySelector(".row");
let foodSelect = document.querySelector("select");

foodSelect.addEventListener('change', function() {
    getData(this.value);
});
getData('corn');
function getData(data) {
    myhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${data}`);
    myhttp.send();
}
function showData(arr) {
    let cartona = '';
    for (let i = 0; i < arr.length; i++) {
        cartona += `<div class="col-md-4">
            <img class="mb-2 w-100" src="${arr[i].image_url}" alt="">
            <p><b>Publisher:</b> ${arr[i].publisher}</p>
            <p><b>Recipe ID:</b> ${arr[i].recipe_id}</p>
            <p><b>Title:</b> ${arr[i].title}</p>
            <p><b>Social Rank:</b> ${arr[i].social_rank}</p>
        </div>`;
    }
    row.innerHTML = cartona;
}
myhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
            let allData = JSON.parse(this.response);
            if (allData.recipes && allData.recipes.length > 0) {
                showData(allData.recipes);
            }
         else {
            alert("The value you entered is invalid: ");
        }
    };
}
var searchF = document.getElementById("searchF");
searchF.addEventListener("change", function() {
    getData(this.value);
});