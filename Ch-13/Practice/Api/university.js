let url = "http://universities.hipolabs.com/search?country=";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
    let collArr = await getCollages(country);
    show(collArr);
});

function show(collArr){
    let list = document.querySelector("#list");
    list.innerHTML = '';
    for(coll of collArr){
        let li = document.createElement("li");
        li.innerHTML = coll.name;
        list.appendChild(li);
    }
}

async function getCollages(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(error){
        console.log(`Error : ${error}`);
        return[];
    }
}