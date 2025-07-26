function getData (){
  return new Promise((resolve , rejected)=>{
 console.log("getting data...");
    setTimeout(() => {
        resolve("Data Received")
    }, 2000);
  })
}


getData()
.then((data)=>console.log(data))
.then(()=>console.log("done"))