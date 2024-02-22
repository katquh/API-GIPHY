console.log("Let's get this party started!");


let input = document.querySelector(".search-bar");
let form = document.querySelector("FORM");
let removeBtn = document.createElement("BUTTON");
removeBtn.innerHTML = "Remove";
removeBtn.setAttribute('type','button')
form.append(removeBtn);

const your_api_key = "sXDvFwOw5pkKX8T3hdmlz2ouumxIaSx4";

async function getGif(){
    const res = await axios.get("http://api.giphy.com/v1/gifs/search",{
        params:{
            api_key: your_api_key,
            q: input.value,
        }
    });
    //get random index
    let i = Math.floor(Math.random() * res.data.data.length);
    let newGifUrl = res.data.data[i].images.original.url;
    displayGif(newGifUrl);

}

function displayGif(url){
    let newImg = document.createElement("IMG");
    newImg.src = url;
    document.querySelector(".display-gif").append(newImg);
};

$(".gif-form").submit(function(e){
    e.preventDefault();
    getGif();
});


removeBtn.addEventListener("click",function(){
    $("div").empty();
})