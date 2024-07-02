let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");
let img = document.querySelector("#result");

btn.addEventListener("click",async ()=>{
    let link = await getImg();
    // console.log(link);
    // img.src = link;
    img.setAttribute("src",link);
});

async function getImg(){
    try{
        let res = await axios.get(url);
        return res.data.message;
    }catch(error){
        console.log(`Error : ${error}`);
        return "Image Not Found";
    }
}