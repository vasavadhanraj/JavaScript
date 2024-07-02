let url = "https://icanhazdadjoke.com";
let btn = document.querySelector("button");
let p = document.querySelector("#result");

btn.addEventListener("click",async ()=>{
    let joke = await getJoke();
    // console.log(joke);
    p.innerText = joke;
});

async function getJoke(){
    try{
        const config = {headers : {Accept : "application/json"}};
        let res = await axios.get(url,config);
        return res.data.joke;
    }catch(error){
        console.log(`Error : ${error}`);
        return "No Joke Found";
    }
}
