let element = document.querySelector("p");

let url = "https://catfact.ninja/fact";

 fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(`Data 1 : ${data.fact}`);
        element.insertAdjacentText("beforebegin", `Data 1: ${data.fact}`);
        return fetch(url);
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(`Data 2 : ${data.fact}`);
        element.insertAdjacentText("afterbegin", `Data 2: ${data.fact}`);
        return fetch(url);
    }).catch((error)=>{
        console.log(error);
    });

 





    //Extra :- Data 3
    // .then((response)=>{
    //     return response.json();
    // }).then((data)=>{
    //     console.log(`Data 3 : ${data.fact}`);
    //     element.insertAdjacentText("afterend", `Data 3: ${data.fact}`);
    // })















    // async function getFact(){
    //     try{
    //         let res = await fetch(url);
    //         let data = await res.json();
    //         console.log(data.fact);
    //         element.insertAdjacentText("beforebegin", `Data 1: ${data.fact}`);


    //         let res2 = await fetch(url);
    //         let data2 = await res2.json();
    //         console.log(data2.fact);
    //         element.insertAdjacentText("afterbegin", `Data 2: ${data2.fact}`);
    //     }catch(error){
    //         console.log(`Error : ${error}`)
    //     }

    //     console.log("end fact");
    // }

    // getFact();