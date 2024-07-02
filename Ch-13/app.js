let url = "https://catfact.ninja/fact";

//axios
async function getFact(){
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
    }catch(error){
        console.log(`Error : ${error}`);
    }
    console.log("End Fact");
}

getFact();