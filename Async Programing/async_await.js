function getData (){
 return new Promise((resolve , rejected)=>{
    console.log("getting data...");
       setTimeout(() => {
           resolve("Data Received")
       }, 2000);
 })
}


async function showData (){
  let data = await getData()
 console.log("Data :" , data)
 console.log("Done")
}

showData()